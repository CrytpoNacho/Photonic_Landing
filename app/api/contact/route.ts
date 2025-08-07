// app/api/contact/route.ts

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json()

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `Nuevo mensaje de contacto de ${name} (${company})`,
      replyTo: email,
      text: message,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    })

    // 🔧 Aquí retornamos status 200 explícito
    return new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error al enviar el correo:", error)
    return new NextResponse(
      JSON.stringify({ success: false, error: "Error enviando el mensaje" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
}
