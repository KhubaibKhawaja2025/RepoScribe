export type ReadmeRequest = {
  projectName: string
  description: string
  installation: string
  usage: string
  techStack: string
  license: string

  sections: {
    badges: boolean
    features: boolean
    installation: boolean
    usage: boolean
    contributing: boolean
    license: boolean
  }
}