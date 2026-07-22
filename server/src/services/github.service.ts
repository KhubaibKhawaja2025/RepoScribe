export async function importRepository(repoUrl: string) {
    // Remove the GitHub URL prefix
    const path = repoUrl.replace("https://github.com/", "");

    // Split into owner and repo name
    const [owner, repo] = path.split("/");

    if (!owner || !repo) {
        throw new Error("Invalid GitHub repository URL.");
    }

    const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}`
    );

    if (!response.ok) {
        throw new Error("Repository not found.");
    }

    const data = (await response.json()) as {
        name?: string;
        description?: string | null;
        language?: string | null;
        license?: { spdx_id?: string | null } | null;
        html_url?: string | null;
    };

    return {
        projectName: data.name ?? "Untitled",
        description: data.description ?? "",
        techStack: data.language ?? "",
        license: data.license?.spdx_id ?? "No License",
        repoUrl: data.html_url ?? repoUrl,
    };
}
