import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/kanban')({
  component: () => <h1>kanban</h1>
})
