function formatTopic(topic: string): string | null {
    const map: Record<string, string> = {
        react: "React",
        next: "Next.js",
        nextjs: "Next.js",
        typescript: "TypeScript",
        javascript: "JavaScript",
        node: "Node.js",
        nodejs: "Node.js",
        express: "Express",
        mongodb: "MongoDB",
        mongoose: "Mongoose",
        prisma: "Prisma",
        zod: "Zod",
        axios: "Axios",
        vite: "Vite",
        redux: "Redux",
        "react-router-dom": "React Router",
        "framer-motion": "Framer Motion",
        firebase: "Firebase",
        supabase: "Supabase",
        postgresql: "PostgreSQL",
        mysql: "MySQL",
        docker: "Docker",
        tailwind: "Tailwind CSS",
        tailwindcss: "Tailwind CSS",
    };

    return map[topic.toLowerCase()] ?? null;
}

async function fetchPackageJson(owner: string, repo: string) {

    const branches = ["main", "master", "canary"];

    for (const branch of branches) {
        const response = await fetch(
            `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/package.json`
        );

        if (response.ok) {
            return response.json();
        }
    }

    return null;
}
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
        topics?: string[];
        license?: { spdx_id?: string | null } | null;
        html_url?: string | null;
    };
    const packageJson = (await fetchPackageJson(owner, repo)) as {
        dependencies?: Record<string, string>;
        devDependencies?: Record<string, string>;
    } | null;

    const technologies = new Set<string>();

    // Primary language
    if (data.language) {
        technologies.add(data.language);
    }

    // GitHub topics
    if (Array.isArray(data.topics)) {
        data.topics.forEach((topic: string) => {
            const tech = formatTopic(topic);

            if (tech) {
                technologies.add(tech);
            }
        });
    }
    if (packageJson) {
        const deps = {
            ...(packageJson.dependencies ?? {}),
            ...(packageJson.devDependencies ?? {}),
        };

        const knownTechnologies = new Set([
            "react",
            "next",
            "typescript",
            "express",
            "mongodb",
            "tailwindcss",
            "vite",
            "prisma",
            "zod",
            "axios",
            "firebase",
            "supabase",
            "docker",
            "redux",
            "react-router-dom",
            "framer-motion",
        ]);
        Object.keys(deps).forEach((dependency) => {
            if (knownTechnologies.has(dependency.toLowerCase())) {
                const tech = formatTopic(dependency);

                if (tech) {
                    technologies.add(tech);
                }
            }
        });
    }
    if (technologies.has("Next.js")) {
        technologies.delete("Express");
        technologies.delete("Firebase");
    }

    if (technologies.has("React")) {
        technologies.delete("React Router");
    }
    return {
        projectName: data.name ?? "Untitled",
        description: data.description ?? "",
        techStack: [...technologies].sort().join(", "),
        license: data.license?.spdx_id ?? "No License",
        repoUrl: data.html_url ?? repoUrl,
    };

}
