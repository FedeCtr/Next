import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Sobre Nosotros',
    description: 'Conoce más acerca de nuestra historia, misión, visión y los valores que nos impulsan.',
    keywords: ["sobre nosotros", "empresa", "misión", "visión", "valores", "quiénes somos", "acerca de", "..."]
  };

export default function AboutPage() {
    return (
     <span className="text-7xl">About Page</span>
     );
  }
