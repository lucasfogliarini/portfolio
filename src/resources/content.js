import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Lucas",
  lastName: "Fogliarini",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Arquiteto e Engenheiro de Software",
  headline : "Conectando negócios e tecnologia com qualidade",
  subline: "Especialista em arquitetura e engenharia de software, conduzindo times e projetos do conceito à produção, com foco em soluções escaláveis, arquitetura robusta, qualidade, inovação e valor para o negócio.",
  avatar: "/images/avatar.jpg",
  email: "lucasfogliarini@gmail.com",
  locationTimeZone: "America/Sao_Paulo",// Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  location: "Porto Alegre - RS",
  header: "Lucas Fogliarini",
  languages: ["Português", "Inglês"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Assine a Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/lucasfogliarini",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lucasfogliarini",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfólio apresentando meu trabalho como ${person.role}`,
  headline: <>{person.headline}</>,
  featured: {
    display: true,
    title: <>Projeto atual: <strong className="ml-4">Plataforma Bem Promotora</strong></>,
    href: "/work/bem-promotora",
  },
  subline: (
    <>
      {person.subline}
    </>
  ),
};

const about = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Encontre ${person.name}, ${person.role} de ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/5551992364249?text=Bora?!",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        Olá! Sou Lucas Fogliarini, atualmente trabalho como Arquiteto e Engenheiro de Software, com mais de 15 anos de experiência em tecnologia.
        <br /><br />
        Ao longo da minha trajetória, atuei em projetos desafiadores e de alto impacto, assumindo funções como Engenheiro, Líder Técnico e Arquiteto de Software. Essa vivência me proporcionou uma visão sólida e prática sobre desenvolvimento de sistemas escaláveis, arquitetura moderna e entrega de soluções com qualidade e valor real para o negócio.
        <br /><br />
        Já contribui com iniciativas estratégicas, táticas e operacionais em empresas como Bem Promotora (empréstimo consignado), Dell Digital Finance, Cogna PTC, PrismaGD, Argo Protector, Warren, entre outras. Cada projeto ampliou minha bagagem técnica e minha capacidade de atuar em contextos complexos e colaborativos.
        <br /><br />
        Sou movido por desafios, apaixonado por tecnologia e entusiasta do compartilhamento de conhecimento. Você pode acompanhar meus projetos, detalhes das minhas competências e iniciativas no meu GitHub
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiência profissional",
    experiences: [
      {
        company: "Bem Promotora",
        timeframe: "2024 - Presente",
        role: "Engenheiro de Software",
        achievements: [
          <>
            Responsável por promover o desenvolvimento eficiente de software na Bem Promotora por meio de uma plataforma robusta, confiável e escalável, fornecendo suporte técnico, ferramentas e boas práticas que capacitam as equipes a atingirem seus objetivos de negócio com qualidade e agilidade.
Foco em impulsionar inovação, excelência técnica e eficiência operacional, garantindo segurança, estabilidade e alta performance da plataforma de desenvolvimento.
          </>,
          <>
            Enabling Team, SCRUM, C4, EDA, DDD, Azure DevOps,  ASP.NET Core 8,  Kubernetes (AKS), Docker, OpenTelemetry
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          /*{
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16, 
            height: 9,
          },*/
        ],
      },
      {
        company: "Dell, Cogna, Warren, Trinca, ...",
        timeframe: "2008 - 2024",
        role: "Arquiteto e Engenheiro de Software",
        achievements: [
          <>
            <a target="_blank" href="https://www.linkedin.com/in/lucasfogliarini/#experience">Experiência profissional no LinkedIn</a>
          </>
        ],
        images: []
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Estudos",
    institutions: [
      {
        name: "Unisinos",
        description: <>Gestão de Tecnologia da Informação</>,
      }
    ],
  },
  technical: {
    display: true,
    title: "Competências",
    skills: [
      {
        title: "Arquitetura de Software",
        description: <>Planejamento e implementação de arquiteturas escaláveis, incluindo microsserviços, mensageria e integração com sistemas distribuídos.</>,
        images: [],
      },
      {
        title: "Domain-Driven Design (DDD)",
        description: <>Modelagem de domínios complexos utilizando DDD, Event Sourcing e Event Storming para alinhar negócio e tecnologia.</>,
        images: [],
      },
      {
        title: "ASP.NET Core",
        description: <>Desenvolvimento de APIs e aplicações robustas com ASP.NET Core 8, aplicando boas práticas de arquitetura e engenharia de software.</>,
        images: [],
      },
      {
        title: "Docker & Azure",
        description: <>Containerização com Docker e deploy de aplicações em Azure Container Apps, Functions e Kubernetes.</>,
        images: [],
      },
      {
        title: "Mensageria",
        description: <>Integração e processamento assíncrono de eventos com Apache Kafka, Service Bus e RabbitMQ.</>,
        images: [],
      },
      {
        title: "OpenTelemetry",
        description: <>Monitoramento e rastreamento distribuído de aplicações utilizando OpenTelemetry e Dynatrace.</>,
        images: [],
      },
      {
        title: "React",
        description: <>Criação de interfaces dinâmicas e performáticas utilizando React e seu ecossistema.</>,
        images: [],
      },
      {
        title: "Next.js",
        description: <>Desenvolvimento de aplicações modernas com Next.js, explorando SSR, SSG e integração com APIs.</>,
        images: [],
      },
      {
        title: "Angular",
        description: <>Desenvolvimento de interfaces modernas e responsivas com Angular.</>,
        images: [],
      },
      {
        title: "Todas Competências",
        description: <><a target="_blank" href="https://github.com/lucasfogliarini/lucasfogliarini/blob/main/Tecnologista.md">Todas competências no github</a></>,
        images: [],
      },
    ],
  }
};

const blog = {
  path: "/blog",
  label: "Agenda",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projetos",
  title: `Projetos – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
