import { getGitHubRepos } from "@/utils/github";
import { Column } from "@once-ui-system/core";
import { RepositoryCard } from "./RepositoryCard";

interface RepositoriesProps {
    range?: [number, number?];
    username?: string;
}

export async function Repositories({ range, username = "lucasfogliarini" }: RepositoriesProps) {
    const topRepos = await getGitHubRepos(username);

    const displayedRepos = range
        ? topRepos.slice(range[0] - 1, range[1] ?? topRepos.length)
        : topRepos;

    return (
        <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
            {displayedRepos.map((repo) => (
                <RepositoryCard key={repo.name} repo={repo} />
            ))}
        </Column>
    );
}
