'use client'

import { Events } from 'app/events/events'

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Encontros de Tecnologia com Lucas Fogliarini</h1>
      <Events />
    </section>
  )
}
