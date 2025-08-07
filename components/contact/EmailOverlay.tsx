'use client'

import React from "react"
import Image from "next/image"
import rocketGif from "@/public/contact_form/Rocket.gif" // Ruta correcta según tu estructura

interface Props {
  visible: boolean
  message: string
}

const EmailOverlay: React.FC<Props> = ({ visible, message }) => {
  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-50">
      <Image src={rocketGif} alt="Sending..." width={160} height={160} />
      <p className="text-white text-lg mt-4">{message}</p>
    </div>
  )
}

export default EmailOverlay
