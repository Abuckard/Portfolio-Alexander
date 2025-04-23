import React from 'react'
import { motion } from 'framer-motion'

const projects = [
    {
        title: 'Portfolio Website',
        description: 'Min egen portfolio byggd med React, Vite och Tailwind CSS.',
        link: 'https://dittprojekt.se',
    },
    {
        title: 'Todo App',
        description: 'En enkel att-göra-app med localStorage och React Hooks.',
        link: 'https://github.com/dittanvandarnamn/todo-app',
    },
    {
        title: 'Weather Dashboard',
        description: 'Visar väder i realtid med hjälp av OpenWeather API.',
        link: 'https://weather-app-demo.netlify.app',
    },
]

export default function Projects() {
    return (
        <div className="pt-24 min-h-screen bg-[linear-gradient(135deg,_#0f172a_40%,_#1e90ff_50%,_#0f172a_60%)] text-white flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Mina Projekt</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6, type: 'spring' }}
                        className="bg-gray-800 hover:bg-gray-700 transition p-6 rounded-xl shadow-lg flex flex-col justify-between"
                    >
                        <h2 className="text-2xl font-semibold mb-2 text-blue-400">{project.title}</h2>
                        <p className="text-gray-300 flex-grow">{project.description}</p>
                        <span className="mt-4 inline-block text-sm text-blue-300 hover:underline">Se projektet →</span>
                    </motion.a>
                ))}
            </div>
        </div>
    )
}
