'use client'

import { useState, useRef, useEffect } from 'react'

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [muted, setMuted] = useState(false)

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
    if (playing) { audio.pause() } else { audio.play() }
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
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1)
    audio.currentTime = ratio * duration
  }

  const cycleSpeed = () => {
    const audio = audioRef.current
    if (!audio) return
    const next = speeds[(speeds.indexOf(speed) + 1) % speeds.length]
    audio.playbackRate = next
    setSpeed(next)
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = !muted
    setMuted(!muted)
  }

  const fmt = (s) => {
    if (!isFinite(s) || s < 0) return '0:00'
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <div className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-3 my-8 select-none">
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Skip back 15s */}
      <button
        type="button"
        onClick={() => skip(-15)}
        aria-label="Skip back 15 seconds"
        className="flex-shrink-0 bg-transparent border-0 cursor-pointer p-0 text-gray-700 hover:text-gray-900"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="currentColor" className="size-6">
          <path d="M18 4C10.268 4 4 10.268 4 18s6.268 14 14 14 14-6.268 14-14S25.732 4 18 4Zm0 2a12 12 0 1 1 0 24A12 12 0 0 1 18 6Z" opacity=".3"/>
          <path d="M18 4C10.268 4 4 10.268 4 18h2a10 10 0 0 1 10-10V4Z"/>
          <path d="M18 4v4l-4-4 4-4v4Z"/>
          <text x="18" y="22" fontSize="9" fontWeight="700" textAnchor="middle" fill="currentColor">15</text>
        </svg>
      </button>

      {/* Play / Pause */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? 'Pause' : 'Play'}
        className="flex-shrink-0 bg-transparent border-0 cursor-pointer p-0 text-gray-800 hover:text-gray-900"
      >
        {playing ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Skip forward 15s */}
      <button
        type="button"
        onClick={() => skip(15)}
        aria-label="Skip forward 15 seconds"
        className="flex-shrink-0 bg-transparent border-0 cursor-pointer p-0 text-gray-700 hover:text-gray-900"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="currentColor" className="size-6">
          <path d="M18 4C10.268 4 4 10.268 4 18s6.268 14 14 14 14-6.268 14-14S25.732 4 18 4Zm0 2a12 12 0 1 1 0 24A12 12 0 0 1 18 6Z" opacity=".3"/>
          <path d="M18 4C25.732 4 32 10.268 32 18h-2A10 10 0 0 0 18 8V4Z"/>
          <path d="M18 4v4l4-4-4-4v4Z"/>
          <text x="18" y="22" fontSize="9" fontWeight="700" textAnchor="middle" fill="currentColor">15</text>
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
        <div className="h-full bg-gray-800 rounded-full" style={{ width: `${progress}%` }} />
        <div
          className="absolute top-1/2 size-3 bg-gray-800 rounded-full shadow"
          style={{ left: `${progress}%`, transform: 'translate(-50%, -50%)' }}
        />
      </div>

      {/* Volume */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? 'Unmute' : 'Mute'}
        className="flex-shrink-0 bg-transparent border-0 cursor-pointer p-0 text-gray-600 hover:text-gray-900"
      >
        {muted ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L19.5 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L19.5 10.94l-1.72-1.72Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06ZM15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
          </svg>
        )}
      </button>

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
