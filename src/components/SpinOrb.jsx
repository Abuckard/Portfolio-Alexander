// import React from 'react'

// export default function SpinOrb() {
//     return (
//         <div className="relative w-44 h-24 mt-8">
//             <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-spin opacity-30" />
//             <div className="absolute inset-2 rounded-full border-4 border-blue-700 animate-spin-reverse" />
//             <div className="absolute inset-4 bg-blue-600 rounded-full shadow-lg shadow-blue-800/40" ></div>
//         </div>
//     )
// }


import React from 'react'

export default function SpinOrb() {
    return (
        <div className="relative w-44 h-24 mt-8">
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-spin animate-spin-slow opacity-30" />
            <div className="absolute inset-2 rounded-full border-4 border-blue-700 animate-spin-reverse" />
            <div className="absolute inset-4 bg-blue-600 rounded-full shadow-lg shadow-blue-800/40" />

            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-lg font-semibold drop-shadow-[0_0_6px_#60a5fa]">Välkommen</span>
            </div>
        </div>
    )
}
