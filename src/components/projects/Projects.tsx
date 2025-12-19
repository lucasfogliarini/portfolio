import { getGitHubRepos } from "@/utils/github";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "./ProjectCard";

interface ProjectsProps {
  range?: [number, number?];
  username?: string;
}

export async function Projects({ range, username = "lucasfogliarini" }: ProjectsProps) {
  const allRepos = await getGitHubRepos(username, 100);
  const projects = allRepos.filter(repo => repo.topics.includes("bora"));
  console.log(allRepos);
  const displayedProjects = range
    ? projects.slice(range[0] - 1, range[1] ?? projects.length)
    : projects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((repo, index) => (
        <ProjectCard
          priority={index < 2}
          key={repo.name}
          href={`/work/${repo.name}`}
          images={[]}
          title={repo.name}
          description={repo.description || ""}
          content=""
          avatars={[{ src: repo.owner.avatar_url }]}
          site={repo.homepage || ""}
          github={repo.html_url}
          language={repo.language}
          topics={repo.topics}
        />
      ))}
    </Column>
  );
}
