"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center min-h-screen lg:pt-18 pt-26"
      id="hero"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-11/12 max-w-6xl items-center">
        
        {/* Texte animé */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center lg:text-left"
        >
          <span className="text-[var(--vert)] glasse py-1 px-4">Disponible pour projets</span>
          <br /><br />
          <span className="text-gray-200 text-3xl lg:text-7xl font-extrabold">
            Esdras MBOULOUKOUE
          </span>
          <br /><br />
          <span className="text-[var(--vert)] font-extrabold">Développeur Web et App</span>
          <p className="text-gray-300 mt-4">
            Je conçois des expériences digitales immersives — des sites web performants aux applications mobiles élégantes.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="btn-glass mt-6 mx-2"><a href="#projet">Voir mes projets</a></button>
            <button className="btn-glasses mt-6"><a href="#contact">Me contacter</a></button>
          </motion.div>
        </motion.div>

        {/* Image animée */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-end"
        >
          <Image
            src="/image1.png"
            alt="Développeur magique"
            width={300}
            height={500}
            className="w-full max-w-sm lg:max-w-md h-auto"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  )
}