import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/settings')({
  component: () => <h1>setting</h1>
})
