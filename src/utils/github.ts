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
    has_projects: boolean;
    owner: {
        login: string;
        avatar_url: string;
    };
};

export async function getGitHubRepos(username: string = "lucasfogliarini", per_page: number = 100, sort: string = 'updated'): Promise<GitHubRepo[]> {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=${per_page}&sort=${sort}`);

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
                has_projects: repo.has_projects,
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

export async function getRepoReadme(username: string, repo: string): Promise<string | null> {
    try {
        const response = await fetch(
            `https://api.github.com/repos/${username}/${repo}/readme`,
            {
                headers: {
                    Accept: "application/vnd.github.v3.raw", // Request Raw Markdown format
                }
            }
        );

        if (!response.ok) {
            if (response.status === 404) return null;
            throw new Error(`GitHub API error: ${response.status}`);
        }

        return await response.text();
    } catch (error) {
        console.error("Error fetching repo README:", error);
        return null;
    }
}
