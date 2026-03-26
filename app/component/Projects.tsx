"use client"
import React from "react"

function Projets() {
  const projets = [
    {
      titre: "Application de gestion de boisson",
      description:
        "Développée avec WinDev pour gérer les stocks, ventes et statistiques des boissons.",
      image: "/images/projet1.png",
      lien: "#",
    },
    {
      titre: "Portfolio Web",
      description:
        "Site moderne en Next.js et TailwindCSS avec design glassmorphism et sections immersives.",
      image: "/images/projet2.png",
      lien: "#",
    },
    {
      titre: "Application mobile Flutter",
      description:
        "App multiplateforme pour connecter les services digitaux aux besoins locaux.",
      image: "/images/projet3.png",
      lien: "#",
    },
    {
      titre: "E-commerce React",
      description:
        "Boutique en ligne avec gestion des produits, panier et paiement sécurisé.",
      image: "/images/projet4.png",
      lien: "#",
    },
    {
      titre: "Dashboard Next.js",
      description:
        "Interface d’administration avec graphiques interactifs et gestion des utilisateurs.",
      image: "/images/projet5.png",
      lien: "#",
    },
    {
      titre: "Landing Page Marketing",
      description:
        "Page promotionnelle optimisée pour la conversion avec animations et design immersif.",
      image: "/images/projet6.png",
      lien: "#",
    },
  ]

  const avis = [
    {
      nom: "Jean K.",
      commentaire:
        "Esdras a livré un projet impeccable, avec un design moderne et une excellente réactivité.",
    },
    {
      nom: "Mireille T.",
      commentaire:
        "Très professionnel, il a su comprendre nos besoins et proposer des solutions adaptées.",
    },
    {
      nom: "David L.",
      commentaire:
        "Un développeur créatif et fiable, je recommande vivement pour tout projet digital.",
    },
  ]

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <div className="w-full max-w-6xl text-center">
        <span className="text-[var(--vert)] glasse py-1 px-4">Mes projets</span>
        <h2 className="text-gray-200 text-3xl sm:text-4xl lg:text-6xl font-extrabold mt-6">
          Réalisations & Expériences
        </h2>
        <p className="text-gray-300 mt-4 mb-10 text-sm sm:text-base lg:text-lg">
          Voici quelques projets que j’ai réalisés, illustrant mon savoir-faire en
          développement web, mobile et design.
        </p>

        {/* Grille des projets */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projets.map((projet, index) => (
            <div
              key={index}
              className="rounded-xl bg-white/5 border border-white/10 p-6 text-left hover:scale-105 transition-transform duration-300"
            >
              <img
                src={projet.image}
                alt={projet.titre}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-gray-200 text-xl font-bold mb-2">
                {projet.titre}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{projet.description}</p>
              <a
                href={projet.lien}
                className="text-[var(--vert)] font-semibold hover:underline"
              >
                Voir le projet →
              </a>
            </div>
          ))}
        </div>

        {/* Section Avis */}
        <div className="mt-16">
          <span className="text-[var(--vert)] glasse py-1 px-4">Avis</span>
          <h2 className="text-gray-200 text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-6">
            Ce que disent mes clients
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {avis.map((avisItem, index) => (
              <div
                key={index}
                className="rounded-xl bg-white/5 border border-white/10 p-6 text-left"
              >
                <p className="text-gray-300 italic mb-4">
                  “{avisItem.commentaire}”
                </p>
                <h4 className="text-[var(--vert)] font-bold">
                  {avisItem.nom}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projets