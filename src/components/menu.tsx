import { Link } from '@tanstack/react-router'
import { Bug, Component, FileText, Flag, Kanban, Settings, Truck } from 'lucide-react'
import ProjectIcon from '~/images/project.svg?react'

function Menu() {
  return (
    <div className="fixed left-[64px] top-0 h-screen w-[230px] border-r border-solid border-[#DFE1E6] bg-[#F4F5F7] px-[16px] py-[24px]">
      <div className="mb-[24px] flex items-center">
        <span>
          <ProjectIcon />
        </span>
        <div className="ml-3">
          <p className="text-[15px] font-bold leading-5 text-[#42526E]">singularity 1.0</p>
          <p className="text-[13px] text-[#5E6C84]">Software project</p>
        </div>
      </div>
      <Link
        to="/projects/kanban"
        activeProps={{
          className: 'bg-[#EBECF0] text-[#0052CC]'
        }}
        className="flex cursor-pointer select-none items-center rounded-sm px-[12px] py-[8px] text-[14px] transition hover:bg-[#EBECF0]"
      >
        <span className="mr-4">
          <Kanban size={20} />
        </span>
        <span>Kanban Board</span>
      </Link>
      <Link
        to="/projects/settings"
        activeProps={{
          className: 'bg-[#EBECF0] text-[#0052CC]'
        }}
        className="flex cursor-pointer select-none items-center rounded-sm px-[12px] py-[8px] text-[14px] transition hover:bg-[#EBECF0]"
      >
        <span className="mr-4">
          <Settings size={20} />
        </span>
        <span>Project Settings</span>
      </Link>

      <div className="mt-[17px] border-t border-solid border-[#C1C7D0] pt-[18px]"></div>

      {[
        {
          name: 'Releases',
          icon: () => <Truck size={20} />
        },
        {
          name: 'Issuesandfilters',
          icon: () => <Bug size={20} />
        },
        {
          name: 'Pages',
          icon: () => <FileText size={20} />
        },
        {
          name: 'Reports',
          icon: () => <Flag size={20} />
        },
        {
          name: 'Components',
          icon: () => <Component size={20} />
        }
      ].map((item, index) => {
        return (
          <a
            key={index}
            href="#"
            className="group flex cursor-not-allowed select-none items-center rounded-sm px-[12px] py-[8px] text-[14px]"
          >
            <span className="mr-4">{item.icon()}</span>
            <div className="relative h-[24px] leading-[24px]">
              <span className="l-0 r-0 t-0 b-0 visible absolute opacity-100 transition group-hover:invisible group-hover:hidden group-hover:opacity-0">
                {item.name}
              </span>
              <span className="invisible rounded bg-[#DCE0E5] p-1 text-[12px] opacity-0 transition group-hover:visible group-hover:opacity-100">
                NOT IMPLEMENTED
              </span>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default Menu
