import { useRouterState } from '@tanstack/react-router'

function Breadcrumb() {
  const router = useRouterState()
  console.log(router.location.pathname)

  return <h1>hi</h1>
}

export default Breadcrumb
