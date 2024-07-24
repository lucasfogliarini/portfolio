import Link from 'next/link'
import { formatDate } from 'app/blog/utils'
import React, { useEffect, useState } from 'react';
import { Event } from './event';



export function getTechEvents(){
  return getEvents('tech');
}

export function getEvents(query: string){
  const [events, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let user = 'lucasfogliarini';
  var eventsUri = `events?user=${user}&query=${query}`;

  useEffect(() => {
    fetch(eventsUri)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Carregando ...</div>;
  //if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

/*export function getEvents2(query){
  this.events = [];
  let user = 'lucasfogliarini';
  var eventsUri = `events?user=${user}&query=${query}`;
  this.boraApiService.get<Event[]>(eventsUri, (eventsLoaded: Event[]) => {
    if(!eventsLoaded.length){
      this.events = undefined;
      return;
    }

    this.events = eventsLoaded;
    const eId = this.activeRoute.snapshot.queryParams['eId'];
    let currentEvent = this.events.find(e=>e.id!.includes(eId));
    if(currentEvent){
      this.selectEvent(currentEvent);
      var eIndex = this.events.indexOf(currentEvent);
      this.arrayMove(this.events!, eIndex, 0);
    }
  }, (errorResponse: HttpErrorResponse)=>{
      this.events = undefined;
  });
}*/

export function Events() {
  getTechEvents();

  return (
    <div>
      {this.events
        .map((event: Event) => (
          <Link
            key={event.googleEventUrl}
            className="flex flex-col space-y-1 mb-4"
            href={`/events/${event.id}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {event.start?.toLocaleDateString()}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {event.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
