import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/')({
  component: () => (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-6xl text-[#838383]">There is no content</h1>
      <span className="mb-4 text-xl text-[#cbcbcb]">You'd better to select these paths.</span>
      <ul className="flex gap-12 text-[#0747A6]">
        <li className="list-disc underline">
          <Link to="/projects/kanban">kanban</Link>
        </li>
        <li className="list-disc underline">
          <Link to="/projects/settings">settings</Link>
        </li>
      </ul>
    </div>
  )
})
