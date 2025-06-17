export type Project = {
  id: string
  title: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  tech: string[]
  steps: string[]
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Build a Portfolio Website',
    level: 'Beginner',
    tech: ['HTML', 'CSS', 'JavaScript'],
    steps: [
      'Set up your HTML boilerplate',
      'Create sections: About, Projects, Contact',
      'Style it with CSS',
      'Make it responsive',
      'Deploy to GitHub Pages',
    ],
  },
  {
    id: '2',
    title: 'Create a REST API with Node.js',
    level: 'Intermediate',
    tech: ['Node.js', 'Express', 'MongoDB'],
    steps: [
      'Initialize a Node.js project',
      'Install Express and setup routes',
      'Connect to MongoDB using Mongoose',
      'Create CRUD APIs',
      'Test with Postman',
    ],
  },
]
