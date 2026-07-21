export type ReadmeTone = 'professional' | 'friendly' | 'minimal'

export type ReadmeSections = {
  badges: boolean
  features: boolean
  installation: boolean
  usage: boolean
  contributing: boolean
  license: boolean
}

export type ReadmeFormData = {
  repoUrl: string
  projectName: string
  description: string
  techStack: string
  license: string
  tone: ReadmeTone
  sections: ReadmeSections
}

export const defaultReadmeForm: ReadmeFormData = {
  repoUrl: '',
  projectName: '',
  description: '',
  techStack: 'React, TypeScript, Vite',
  license: 'MIT',
  tone: 'professional',
  sections: {
    badges: true,
    features: true,
    installation: true,
    usage: true,
    contributing: false,
    license: true,
  },
}
