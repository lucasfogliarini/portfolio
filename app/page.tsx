'use client'
import { Events } from './events/events'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Lucas Fogliarini Portfólio
      </h1>
      <p className="mb-4">
        {`Olá! Sou o Lucas, desenvolvedor Full-Stack especialista em .NET e Azure Cloud, com mais de 14 anos de trajetória profissional. Minha jornada me levou a mergulhar profundamente na arquitetura e engenharia de software. Adoro participar de encontros de tecnologias como:`}
      </p>
      <div className="my-8">
        <Events />
      </div>
    </section>
  )
}
