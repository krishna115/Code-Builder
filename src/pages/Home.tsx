import ProjectCard from "../components/ProjectCard";

export default function Home() {
    return (
        <div className='p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      <ProjectCard
        title='Build a Portfolio Website'
        level= 'Beginner'
        tech = {['HTML', 'CSS', 'Javascript']}
        link = "/Project/1"
      />

      <ProjectCard
        title='Build a Netflix Clone'
        level= 'Intermediate'
        tech = {['HTML', 'CSS', 'Javascript']}
        link = "/Project/2"
      />

      <ProjectCard
        title='Build a Netflix Clone'
        level= 'Intermediate'
        tech = {['HTML', 'CSS', 'Javascript']}
        link = "/Project/2"
      />

      <ProjectCard
        title='Build a Netflix Clone'
        level= 'Intermediate'
        tech = {['HTML', 'CSS', 'Javascript']}
        link = "/Project/2"
      />
    </div>
    )
}