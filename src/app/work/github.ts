type GitHubRepo = {
    name: string;
    description: string | null;
    created_at: string;
    html_url: string;
    homepage: string | null;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    fork: boolean;
    private: boolean;
    owner: {
        login: string;
        avatar_url: string;
    };
};

type Post = {
    metadata: {
        title: string;
        publishedAt: string;
        summary: string;
        image?: string;
        images: string[];
        tag?: string;
        team: Array<{
            name: string;
            role: string;
            avatar: string;
            linkedIn: string;
        }>;
        site?: string;
        github?: string;
    };
    slug: string;
    content: string;
};

export async function getGitHubRepos(username: string = "lucasfogliarini"): Promise<Post[]> {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
            {
                next: { revalidate: 3600 } // Cache por 1 hora
            }
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos: GitHubRepo[] = await response.json();

        return repos
            .filter((repo) => !repo.fork && !repo.private)
            .map((repo) => ({
                metadata: {
                    title: repo.name,
                    publishedAt: repo.created_at,
                    summary: repo.description || "Sem descrição disponível",
                    image: "",
                    images: [],
                    tag: repo.language || "Other",
                    team: [
                        {
                            name: repo.owner.login,
                            role: "Developer",
                            avatar: repo.owner.avatar_url,
                            linkedIn: "",
                        },
                    ],
                    site: repo.homepage || "",
                    github: repo.html_url,
                },
                slug: repo.name,
                content: `# ${repo.name}\n\n${repo.description || "Sem descrição"}\n\n**⭐ Stars:** ${repo.stargazers_count} | **🍴 Forks:** ${repo.forks_count} | **💻 Language:** ${repo.language || "N/A"}`,
            }));
    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        return [];
    }
}
