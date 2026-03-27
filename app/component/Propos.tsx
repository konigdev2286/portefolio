"use client"
import { motion } from "framer-motion"
import Image from "next/image"

function Apropos() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex items-center justify-center lg:pt-18 pt-10"
      id="propos"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl items-center">
        
        {/* Texte animé */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <span className="text-[var(--vert)] glasse py-1 px-4">
            À propos de moi
          </span>
          <h2 className="text-gray-200 text-3xl sm:text-4xl lg:text-6xl font-extrabold mt-6">
            Qui suis-je ?
          </h2>
          <p className="text-gray-300 mt-6 text-sm sm:text-base lg:text-lg leading-relaxed">
            Je suis un développeur passionné par la création d’expériences digitales immersives.
            Mon objectif est de transformer des idées en solutions concrètes, qu’il s’agisse de sites web performants
            ou d’applications mobiles élégantes. J’aime allier créativité et technologie pour donner vie à des projets uniques.
          </p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="btn-glass mt-6"
          >
            En savoir plus
          </motion.button>
        </motion.div>

        {/* Image animée */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/image2 .png"   // ⚠️ enlève l’espace dans ton chemin
            alt="Portrait développeur"
            width={300}
            height={500}
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-xl shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Apropos