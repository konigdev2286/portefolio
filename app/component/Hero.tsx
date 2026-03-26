import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <section className="flex items-center justify-center lg:pt-18 md:pt-16 min-h-screen pt-28"> 
      {/* pt-24 = padding-top pour laisser de l’espace sous la nav fixée */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-11/12 max-w-6xl items-center">
        
        {/* Texte */}
        <div className="text-center lg:text-left">
          <span className="text-[var(--vert)] glasse py-1 px-4">
            Disponible pour projets
          </span>
          <br /><br />
          <span className="text-gray-200 text-3xl lg:text-7xl font-extrabold">
            Esdras  MBOULOUKOUE
          </span>
          <br /><br />
          <span className="text-[var(--vert)] font-extrabold">
            Développeur Web et App
          </span>
          <p className="text-gray-300 mt-4">
            Je conçois des expériences digitales immersives — des sites web performants aux applications mobiles élégantes.
          </p>
          <button className="btn-glass mt-6 mx-2">Voir mes projets</button>
          <button className="btn-glasses mt-6">Me contacter</button>
        </div>

        {/* Image */}
        <div className="flex justify-end">
          <Image
            src="/image1.png"   // placé dans public/
            alt="Développeur magique"
            width={300}
            height={500}
            className="w-full max-w-sm lg:max-w-md h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Hero