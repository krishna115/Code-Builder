

type ProjectCardProps = {
    title: string,
    level: 'Beginner' | 'Intermediate' | 'Advanced',
    tech: string[],
    link: string
}


export default function ProjectCard({title, level, tech, link} : ProjectCardProps){
    return (
        <div className="border rounded-2xl p-4 shadow-md bg-white hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-sm text-gray-500 mb-2">{level}</p>

            <div className="flex flex-wrap gap-2 mb-4">
                {
                    tech.map((item, index) => (
                        <span 
                        key={index}
                        className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                            {item}
                        </span>
                    ))
                }
            </div>

            <a href={link}
            className="inline-block px-4 py-2 bg-blue-600 rounded text-sm hover:bg-blue-700">
                <div className="text-white hover:text-white-300">
                    Start Project
                </div>
                
            </a>
        </div>
    )
}