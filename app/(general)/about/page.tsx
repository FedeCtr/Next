import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Conoce más sobre Federico y su experiencia.',
  keywords: ['Sobre mí', 'Federico', 'información', 'experiencia', 'biografía'],
};


export default function AboutPage() {
  return (
      <span className="text-7xl">About Page</span>
  )
}
