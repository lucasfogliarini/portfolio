export type GitHubRepo = {
    name: string;
    description: string | null;
    created_at: string;
    updated_at: string;
    html_url: string;
    homepage: string | null;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    topics: string[];
    pushed_at: string;
    owner: {
        login: string;
        avatar_url: string;
    };
};

export async function getGitHubRepos(username: string = "lucasfogliarini"): Promise<GitHubRepo[]> {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=10&sort=pushed`,
            {
                next: { revalidate: 3600 } // Cache por 1 hora
            }
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos = await response.json();

        return repos
            .filter((repo: any) => !repo.fork && !repo.private)
            .map((repo: any): GitHubRepo => ({
                name: repo.name,
                description: repo.description,
                created_at: repo.created_at,
                updated_at: repo.updated_at,
                html_url: repo.html_url,
                homepage: repo.homepage,
                stargazers_count: repo.stargazers_count,
                forks_count: repo.forks_count,
                language: repo.language,
                topics: repo.topics || [],
                pushed_at: repo.pushed_at,
                owner: {
                    login: repo.owner.login,
                    avatar_url: repo.owner.avatar_url,
                },
            }));
    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        return [];
    }
}
