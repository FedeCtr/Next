import type { Metadata } from "next";



export const metadata: Metadata = {
  title: 'Nuestros Precios',
  description: 'Consulta nuestros precios y planes disponibles.',
  keywords: ['Precios', 'Federico', 'planes', 'tarifas'],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  )
}
