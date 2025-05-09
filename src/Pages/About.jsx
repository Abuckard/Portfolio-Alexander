import React from 'react'

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-[linear-gradient(135deg,_#0f172a_40%,_#1e90ff_50%,_#0f172a_60%)] text-white flex flex-col items-center justify-center px-4">

      <h1 className="text-5xl font-bold mb-6 tracking-wide text-white drop-shadow-md">
        Alexander Buckard
      </h1>
      <p className="mb-8 text-lg text-slate-300 max-w-md text-center">
        Webbutvecklare med passion för React, UI-design och framtidens teknik.
      </p>
      <button
        onClick={() => navigate('/about')}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all"
      >
        Läs mer om mig
      </button>
    </div>
  )
}