import { type ReadmeRequest } from "../types/readme.js";

const techIcons: Record<string, string> = {
    react: "⚛️",
    typescript: "🔷",
    javascript: "🟨",
    node: "🟢",
    "node.js": "🟢",
    express: "🚀",
    mongodb: "🍃",
    mysql: "🐬",
    postgresql: "🐘",
    prisma: "🔺",
    vite: "⚡",
    tailwind: "🌬️",
    "tailwind css": "🌬️",
    html: "🌐",
    css: "🎨",
    next: "▲",
    "next.js": "▲",
    vue: "💚",
    angular: "🅰️",
    python: "🐍",
    java: "☕",
    c: "🔵",
    "c++": "➕",
    "c#": "🎯",
    docker: "🐳",
    git: "📦",
    github: "🐙",
    astro: "🚀",
    bun: "🥟",
    firebase: "🔥",
    supabase: "⚡",
    redis: "🟥",
    nestjs: "🐱",
    electron: "⚡",
};

export function generateReadme(data: ReadmeRequest) {
    const lines: string[] = [];

    // Title
    lines.push(`# ${data.projectName}`, "");

    // Description
    lines.push("## Description", "", data.description, "");

    // Tech Stack
    if (data.techStack.trim()) {
        lines.push("## Tech Stack", "");

        const technologies = data.techStack
            .split(",")
            .map((tech) => tech.trim())
            .filter(Boolean);

        technologies.forEach((tech) => {
            const key = tech.toLowerCase();
            const icon = techIcons[key] ?? "📌";

            lines.push(`- ${icon} ${tech}`);
        });

        lines.push("");
    }
    // Features
    if (data.sections.features) {
        lines.push(
            "## Features",
            "",
            "- Modern README generation",
            "- Fast and easy to use",
            "- Clean Markdown output",
            ""
        );
    }

    // Installation
    if (data.sections.installation) {
        lines.push(
            "## Installation",
            "",
            data.installation,
            ""
        );
    }

    // Usage
    if (data.sections.usage) {
        lines.push(
            "## Usage",
            "",
            data.usage,
            ""
        );
    }

    // Contributing
    if (data.sections.contributing) {
        lines.push(
            "## Contributing",
            "",
            "Contributions are welcome! Feel free to open an issue or submit a pull request.",
            ""
        );
    }

    // License
    if (data.sections.license) {
        lines.push(
            "## License",
            "",
            data.license,
            ""
        );
    }

    return lines.join("\n");
}