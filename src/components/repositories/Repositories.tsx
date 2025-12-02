import { getGitHubRepos } from "./github";
import { Column } from "@once-ui-system/core";
import { RepositoryCard } from "./RepositoryCard";

interface RepositoriesProps {
    range?: [number, number?];
    username?: string;
}

export async function Repositories({ range, username = "lucasfogliarini" }: RepositoriesProps) {
    const allRepos = await getGitHubRepos(username);

    const sortedRepos = allRepos.sort((a, b) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

    const displayedRepos = range
        ? sortedRepos.slice(range[0] - 1, range[1] ?? sortedRepos.length)
        : sortedRepos;

    return (
        <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
            {displayedRepos.map((repo) => (
                <RepositoryCard key={repo.name} repo={repo} />
            ))}
        </Column>
    );
}
