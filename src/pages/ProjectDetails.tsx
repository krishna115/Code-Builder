import { useParams } from 'react-router-dom'
import { projects } from '../data/ProjectData'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return <div className="p-6 text-red-600">Project not found.</div>
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{project.level}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-2">Step-by-Step Guide:</h2>
      <ol className="list-decimal list-inside space-y-2">
        {project.steps.map((step, index) => (
          <li key={index} className="text-gray-700">{step}</li>
        ))}
      </ol>
    </div>
  )
}
