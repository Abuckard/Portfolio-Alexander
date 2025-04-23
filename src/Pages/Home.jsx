import React from 'react'
import { useNavigate } from 'react-router-dom'
import SpinOrb from '../components/SpinOrb'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="pt-24 min-h-screen bg-[linear-gradient(135deg,_#0f172a_40%,_#1e90ff_50%,_#0f172a_60%)] text-white flex flex-col items-center  px-4">
      <div>
        <SpinOrb />

      </div>

      <h1 className="text-5xl font-bold mb-6 tracking-wide text-white drop-shadow-md">
        Alexander Buckards Portfolio
      </h1>
      <p className="mb-8 text-lg text-slate-300 max-w-md text-center">
        Webbutvecklare med passion för React, UI-design och framtidens teknik.
      </p>

      <div className="">
        <button
          onClick={() => navigate('/about')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all mr-4"
        >
          Läs mer om mig
        </button>
        <button
          onClick={() => navigate('/projects')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all"
        >
          Gå till mina projekt
        </button>
      </div>

    </div>
  )
}
