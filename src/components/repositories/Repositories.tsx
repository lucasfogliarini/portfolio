import { getGitHubRepos } from "./github";
import { Column } from "@once-ui-system/core";
import { RepositoryCard } from "./RepositoryCard";

interface RepositoriesProps {
    range?: [number, number?];
    username?: string;
}

export async function Repositories({ range, username = "lucasfogliarini" }: RepositoriesProps) {
    const topRepos = await getGitHubRepos(username);
    return (
        <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
            {topRepos.map((repo) => (
                <RepositoryCard key={repo.name} repo={repo} />
            ))}
        </Column>
    );
}
