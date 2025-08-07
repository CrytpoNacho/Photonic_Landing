# 🌐 Photonic Software Landing Page

Bienvenido a la landing page oficial de **Photonic Software**.  
Este proyecto está construido con **Next.js**, **React**, **Tailwind CSS** y soporta múltiples idiomas. Está pensado para ser moderno, rápido, accesible y fácil de mantener.

---

## 🚀 Características principales

- 🌍 **Internacionalización (i18n)**  
  Soporte completo para **Español**, **Inglés** y **Portugués**. Todo el contenido y formularios se traducen dinámicamente según el idioma seleccionado.

- ✉️ **Formulario de contacto integrado**  
  Utiliza una ruta API interna (`/api/contact`) y **Nodemailer** para enviar correos electrónicos.  
  El campo `replyTo` permite responder directamente al correo del usuario que completó el formulario.

- 🎬 **Animación de envío personalizada**  
  Al enviar un mensaje, se muestra un overlay con una animación y mensajes de estado (`enviando`, `éxito`, `error`).

- 🧠 **Diseño modular y moderno**  
  Componentes reutilizables, animaciones suaves y estructura semántica. Incluye botón “Scroll to Top” dinámico.

- 🧩 **Secciones del sitio**  
  - Hero
  - Servicios
  - Tecnologías
  - Proyectos
  - Testimonios
  - Proceso
  - Contacto
  - Footer

---

## 🌐 Estructura de traducciones

Las traducciones están organizadas por idioma y sección en la carpeta `/lib/translations`.

Ejemplo de uso en un componente:

```tsx
const t = translations[language]

<input placeholder={t.contact.form.name} />
```

Podés agregar fácilmente más idiomas o ajustar las traducciones existentes en sus archivos respectivos.

---

## 📬 Formulario de contacto

- Se encuentra en la sección `Contacto`.
- Envía los datos al endpoint: `POST /api/contact`.
- El backend con **Nodemailer** maneja el envío del correo electrónico.
- Mensajes de estado se muestran en una animación tipo overlay (`Rocket.gif`).

---

## 🛠️ Cómo ejecutar el proyecto

### 1. Clona el repositorio

```bash
git clone https://github.com/TU_USUARIO/photonic_landing.git
cd photonic_landing
```

### 2. Instala dependencias

```bash
npm install
# o
yarn
```

### 3. Crea un archivo `.env.local`

```dotenv
EMAIL_HOST=smtp.tucorreo.com
EMAIL_PORT=465
EMAIL_USER=correo@tudominio.com
EMAIL_PASS=tu_clave
EMAIL_TO=destino@tudominio.com
```

### 4. Ejecutá el servidor de desarrollo

```bash
npm run dev
# o
yarn dev
```

---

## 🎨 Personalización

- Idiomas: Añadí más archivos en `/lib/translations`.
- Estilos: Modificá `tailwind.config.ts` y los componentes en `/components`.
- Marca: Cambiá los colores, fuentes y logos según tu identidad visual.

---

## 🧑‍💻 Desarrollado por

**Photonic Software**  
Soluciones digitales modernas, simples y potentes.  
✨ [https://photonicsoftware.com](https://photonicsoftware.com) (opcional si tenés dominio)

---

## 📄 Licencia

Este proyecto es de uso privado. Si deseás utilizarlo, contactá al equipo de **Photonic Software**.