"use client"
import React, { useRef } from "react"
import emailjs from "emailjs-com"

function Contact() {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return

    emailjs.sendForm(
      "service_skjxvw7",   // 👉 ton Service ID
      "template_t1yil7t",  // 👉 ton Template ID
      form.current,
      "KlRsDF2qzsfs4ztTB"  // 👉 ta Public Key
    ).then(
      (result) => {
        console.log("SUCCESS:", result)
        alert("Message envoyé avec succès ✅")
      },
      (error) => {
        console.log("FAILED:", error)
        alert("Erreur ❌ : " + error.text)
      }
    )
  }

  return (
    <section className="flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-4xl text-center">
        <span className="text-[var(--vert)] glasse py-1 px-4">
          Contactez-moi
        </span>
        <h2 className="text-gray-200 text-3xl sm:text-4xl lg:text-6xl font-extrabold mt-6">
          Restons en contact
        </h2>
        <p className="text-gray-300 mt-4 mb-10 text-sm sm:text-base lg:text-lg">
          Vous avez un projet ou une idée ? N’hésitez pas à me laisser un message,
          je serai ravi d’échanger avec vous.
        </p>

        {/* Formulaire connecté à EmailJS */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6 text-left">
          <div>
            <input
              type="text"
              name="name"   // 👉 correspond à {{name}} dans ton template
              placeholder="Votre nom"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                         text-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--vert)]"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"   // 👉 correspond à {{email}} dans ton template
              placeholder="Votre email"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                         text-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--vert)]"
              required
            />
          </div>
          <div>
            <textarea
              name="message"   // 👉 correspond à {{message}} dans ton template
              placeholder="Votre message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                         text-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--vert)]"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-glass w-full py-3 font-bold"
          >
            Envoyer
          </button>
        </form>

        {/* Infos directes */}
        <div className="mt-10 text-gray-300 text-sm sm:text-base">
          <p>Email : <span className="text-[var(--vert)]">konigdev2286@gmail.com</span></p>
          <p>Téléphone : <span className="text-[var(--vert)]">+242 06 106 2936</span></p>
        </div>
      </div>
    </section>
  )
}

export default Contact