'use client'

import { useState } from "react"
import EmailOverlay from "./EmailOverlay"
import { translations } from "@/lib/translations"
import { type Language } from "@/lib/translations"

interface Props {
  language: Language
}

export default function ContactSection({ language }: Props) {
  const [showOverlay, setShowOverlay] = useState(false)
  const [overlayMessage, setOverlayMessage] = useState("")

  const t = translations[language]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    }

    setShowOverlay(true)
    setOverlayMessage(t.contact.sending || "Enviando mensaje...")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (res.ok) {
        setOverlayMessage(t.contact.success || "✅ Mensaje enviado con éxito")

        const form = e.target as HTMLFormElement
        form.reset()
        } else {
        setOverlayMessage(t.contact.error || "❌ Hubo un error al enviar el mensaje.")
      }
    } catch (err) {
      setOverlayMessage(t.contact.error || "❌ Error inesperado.")
    }

    setTimeout(() => {
      setShowOverlay(false)
      setOverlayMessage("")
    }, 3000)
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      <EmailOverlay visible={showOverlay} message={overlayMessage} />
      <div className="max-w-xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f002c] mb-6">{t.contact.title}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            type="text"
            required
            placeholder={t.contact.form.name}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            name="email"
            type="email"
            required
            placeholder={t.contact.form.email}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            name="company"
            type="text"
            placeholder={t.contact.form.company}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            name="message"
            required
            placeholder={t.contact.form.message}
            rows={5}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300"
          >
            {t.contact.form.submit}
          </button>
        </form>
      </div>
    </section>
  )
}
