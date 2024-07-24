'use client'
import { BlogPosts } from 'app/components/posts'
import { Events } from './events/events'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Lucas Fogliarini Portfólio
      </h1>
      <p className="mb-4">
        {`Olá! Sou o Lucas, especialista em .NET e Azure Cloud, com mais de 14 anos de trajetória profissional. Minha jornada me levou a mergulhar profundamente na arquitetura e engenharia de software, trabalhando com tecnologias como:
Infra:
 - Azure Cloud (Azure Container Apps, WebApp, Azure Functions, Service Bus, SQL 
 Server, Azure AD, …)
 - Docker

Back-end: 
 - ASP.NET Core, C#, Dynamics/Power Apps.
 - Node.js
 - Ruby on Rails

Front-end:
 - Diversas bibliotecas em JS e TS disponibilizadas na npmjs.com
 - React.js
 - Angular.js
 - JavaScript e TypeScript
 - Diversas bibliotecas em css
 - jQuery

Message Brokers: 
 - Azure Service Bus
 - RabbitMQ
 - Apache Kafka`}
      </p>
      <div className="my-8">
        <Events />
      </div>
    </section>
  )
}
