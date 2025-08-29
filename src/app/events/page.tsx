import { Button, Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, events, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: events.title,
    description: events.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(events.title)}`,
    path: events.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="s">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={events.title}
        description={events.description}
        path={events.path}
        image={`/api/og/generate?title=${encodeURIComponent(events.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <h1>{events.title}</h1>
      <br />
      <h4>{events.subtitle}</h4>
      <br />
      <p>{events.description}</p>
      <br />
      <Button
            id="pucangels"
            data-border="rounded"
            variant="secondary"
            href="https://pucangels.org"
            size="m"
          >Saiba mais</Button>
      <Button
            id="luma"
            data-border="rounded"
            href="https://lu.ma/pucangels"
            size="m"
            arrowIcon
          >Assine essa agenda de encontros</Button>      
      <br />
      <iframe
        src="https://lu.ma/embed/calendar/cal-2i5btBJikkBupNV/events"
        width="600"
        height="450"
        style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </Column>
  );
}
