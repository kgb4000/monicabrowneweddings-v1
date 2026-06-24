'use client'

import { useState, useRef, useEffect } from 'react'

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [speed, setSpeed] = useState(1)

  const speeds = [1, 1.2, 1.5, 2]

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onTimeUpdate = () => setCurrentTime(audio.currentTime)
    const onDuration = () => {
      if (isFinite(audio.duration)) setDuration(audio.duration)
    }
    const onEnded = () => setPlaying(false)

    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('loadedmetadata', onDuration)
    audio.addEventListener('durationchange', onDuration)
    audio.addEventListener('ended', onEnded)

    // Metadata may already be loaded (cached file)
    if (audio.readyState >= 1 && isFinite(audio.duration)) {
      setDuration(audio.duration)
    }

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('loadedmetadata', onDuration)
      audio.removeEventListener('durationchange', onDuration)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.play()
    }
    setPlaying(!playing)
  }

  const skip = (seconds) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = Math.min(Math.max(0, audio.currentTime + seconds), duration)
  }

  const seek = (e) => {
    const audio = audioRef.current
    if (!audio || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    audio.currentTime = ratio * duration
  }

  const cycleSpeed = () => {
    const audio = audioRef.current
    if (!audio) return
    const next = speeds[(speeds.indexOf(speed) + 1) % speeds.length]
    audio.playbackRate = next
    setSpeed(next)
  }

  const fmt = (s) => {
    if (!isFinite(s)) return '0:00'
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <div className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-3 my-8 select-none">
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Skip back */}
      <button
        type="button"
        onClick={() => skip(-15)}
        aria-label="Skip back 15 seconds"
        className="flex-shrink-0 text-gray-600 hover:text-gray-900 bg-transparent border-0 cursor-pointer p-0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
          <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
          <text x="6" y="14" fontSize="5" fontWeight="bold" fill="white" textAnchor="middle">15</text>
        </svg>
      </button>

      {/* Play / Pause */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? 'Pause' : 'Play'}
        className="flex-shrink-0 text-gray-800 hover:text-gray-900 bg-transparent border-0 cursor-pointer p-0"
      >
        {playing ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Skip forward */}
      <button
        type="button"
        onClick={() => skip(15)}
        aria-label="Skip forward 15 seconds"
        className="flex-shrink-0 text-gray-600 hover:text-gray-900 bg-transparent border-0 cursor-pointer p-0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
          <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
          <text x="18" y="14" fontSize="5" fontWeight="bold" fill="white" textAnchor="middle">15</text>
        </svg>
      </button>

      {/* Time */}
      <span className="flex-shrink-0 text-sm text-gray-600 tabular-nums">
        -{fmt(duration - currentTime)}
      </span>

      {/* Progress bar */}
      <div
        className="flex-1 h-1.5 bg-gray-300 rounded-full cursor-pointer relative"
        onClick={seek}
        role="slider"
        aria-label="Audio progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
      >
        <div
          className="h-full bg-gray-800 rounded-full"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 size-3 bg-gray-800 rounded-full shadow"
          style={{ left: `${progress}%`, transform: 'translate(-50%, -50%)' }}
        />
      </div>

      {/* Speed */}
      <button
        type="button"
        onClick={cycleSpeed}
        aria-label={`Playback speed ${speed}x`}
        className="flex-shrink-0 text-sm font-semibold text-gray-600 hover:text-gray-900 bg-transparent border-0 cursor-pointer p-0 w-9 text-right"
      >
        {speed}x
      </button>
    </div>
  )
}
