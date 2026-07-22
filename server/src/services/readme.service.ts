import { type ReadmeRequest } from '../types/readme.js';

export function generateReadme(data: ReadmeRequest) {
    return `# ${data.projectName}

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## License

MIT
`;
}