import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react' // du kan också använda egna ikoner

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="w-full bg-gray-900 text-white shadow-md px-6 py-4 fixed top-0 z-50">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <Link to="/" className="text-xl font-bold tracking-wide hover:text-blue-400 transition">
                    Alexander Buckard
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-blue-400 transition">Hem</Link>
                    <Link to="/about" className="hover:text-blue-400 transition">Om mig</Link>
                    <Link to="/projects" className="hover:text-blue-400 transition">Projekt</Link>
                    <Link to="/contact" className="hover:text-blue-400 transition">Kontakt</Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col space-y-4 mt-4 px-4">
                    <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Hem</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Om mig</Link>
                    <Link to="/projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Projekt</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Kontakt</Link>
                </div>
            )}
        </nav>
    )
}
