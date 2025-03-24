import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contactanos',
  description: 'Página de contacto de Federico. ¡Contáctame para más información!',
  keywords: ['Contacto', 'Federico', 'información', 'email', 'teléfono'],
};


export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  )
}
