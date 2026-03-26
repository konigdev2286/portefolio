import React from 'react'

function Competence() {
  const skills = [
    { name: 'React / Next.js', level: 90 },
    { name: 'Flutter', level: 85 },
    { name: 'TailwindCSS / UI Design', level: 95 },
    { name: 'Responsive Design', level: 90 },
    { name: 'Résolution de bugs', level: 80 },
    { name: 'Création de portfolios immersifs', level: 88 },
  ]

  return (
    <section className="flex items-center justify-center py-12">
      <div className="w-full max-w-6xl text-center">
        <span className="text-[var(--vert)] glasse py-1 px-4">
          Mes compétences
        </span>
        <h2 className="text-gray-200 text-3xl sm:text-4xl lg:text-6xl font-extrabold ">
          Ce que je maîtrise
        </h2>
        <p className="text-gray-300 mt-4 mb-10 text-sm sm:text-base lg:text-lg">
          Voici les domaines dans lesquels je peux t’accompagner pour créer des solutions digitales performantes et élégantes.
        </p>

        {/* Grille responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-left">
              <p className="text-gray-200 font-semibold mb-2">{skill.name}</p>
              <div className="w-full bg-white/10 rounded-full h-4 backdrop-blur-md border border-white/10">
                <div
                  className="bg-[var(--vert)] h-4 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm mt-1">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Competence