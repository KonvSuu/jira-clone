import { Outlet, createFileRoute } from '@tanstack/react-router'
import Menu from '~/components/menu'
import SideBar from '~/components/sidebar'

export const Route = createFileRoute('/projects')({
  component: () => (
    <div className="pl-[334px]">
      <SideBar />
      <Menu />
      <Outlet />
    </div>
  )
})
