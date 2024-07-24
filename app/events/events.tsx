import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Event } from './event';


// Hook personalizado para buscar eventos
function useEvents(query: string) : { events: Event[] | null, loading: boolean, error: Error | null } {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = 'lucasfogliarini';
  const eventsUri = `https://api.bora.work/events?user=${user}&query=${query}`;

  useEffect(() => {
    fetch(eventsUri)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [eventsUri]);

  return { events, loading, error };
}

// Função para buscar eventos tecnológicos
export function useTechEvents() {
  return useEvents('tech');
}

// Componente que renderiza os eventos
export function Events() {
  const { events, loading, error } = useTechEvents();

  if (loading) return <div>Carregando ...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {events && events.slice(0,10).map((event) => (
        <Link
          key={event.googleEventUrl}
          className="flex flex-col space-y-1 mb-4"
          href={`/events/${event.id}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {new Date(event.start!).toLocaleDateString()}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {event.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
