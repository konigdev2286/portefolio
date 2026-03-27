"use client"
import { motion } from "framer-motion"
import React, { useRef, useState, useEffect } from "react"

function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [notification, setNotification] = useState<{message: string, type: "success" | "error" | null}>({
    message: "",
    type: null
  })

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return

    const formData = new FormData(form.current)

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      setNotification({
        message: result.message,
        type: result.status === "success" ? "success" : "error"
      })
    } catch (error) {
      setNotification({
        message: "Erreur ❌ : impossible de contacter le serveur",
        type: "error"
      })
    }
  }

  // Auto-disparition de la notification après 4 secondes
  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        setNotification({message: "", type: null})
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [notification])

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex items-center justify-center py-12 px-4"
      id="contact"
    >
      <div className="w-full max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[var(--vert)] glasse py-1 px-4"
        >
          Contactez-moi
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-200 text-3xl sm:text-4xl lg:text-6xl font-extrabold mt-6"
        >
          Restons en contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-300 mt-4 mb-10 text-sm sm:text-base lg:text-lg"
        >
          Vous avez un projet ou une idée ? N’hésitez pas à me laisser un message,
          je serai ravi d’échanger avec vous.
        </motion.p>

        {/* Formulaire connecté au backend Django */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-left"
        >
          <div>
            <input type="text" name="name" placeholder="Votre nom" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--vert)]" required />
          </div>
          <div>
            <input type="email" name="email" placeholder="Votre email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--vert)]" required />
          </div>
          <div>
            <textarea name="message" placeholder="Votre message" rows={5} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--vert)]" required></textarea>
          </div>
          <button type="submit" className="btn-glass w-full py-3 font-bold">Envoyer</button>
        </motion.form>

        {/* Zone de notification avec animation */}
        {notification.message && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`mt-6 px-4 py-2 rounded-lg font-semibold
              ${notification.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}
          >
            {notification.message}
          </motion.div>
        )}

        {/* Infos directes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-10 text-gray-300 text-sm sm:text-base"
        >
          <p>Email : <span className="text-[var(--vert)]">konigdev2286@gmail.com</span></p>
          <p>Téléphone : <span className="text-[var(--vert)]">+242 06 106 2936</span></p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact