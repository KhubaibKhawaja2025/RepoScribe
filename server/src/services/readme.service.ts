import { type ReadmeRequest } from "../types/readme.js";

export function generateReadme(data: ReadmeRequest) {
  const lines: string[] = [];

  // Title
  lines.push(`# ${data.projectName}`, "");

  // Description
  lines.push("## Description", "", data.description, "");

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