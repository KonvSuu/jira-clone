import Logo from '~/images/icon.svg?react'
import { Search, Plus, CircleHelp } from 'lucide-react'

function SideBar() {
  return (
    <>
      <aside className="group fixed left-0 top-0 z-50 h-screen w-[64px] bg-[#0747A6] transition-all duration-200 hover:w-[200px] hover:shadow-[0_10px_20px_10px_rgba(0,0,0,0.3)]">
        <a href="/" className="relative left-0 mb-3 mt-5 block">
          <span className="ml-2 inline-block cursor-pointer select-none p-2">
            <Logo />
          </span>
        </a>
        <div className="relative h-[42px] w-full cursor-pointer pl-16 text-sm leading-[42px] text-white hover:bg-[#ffffff10]">
          <div className="absolute left-[18px] flex h-full items-center">
            <Search />
          </div>
          <div className="r-0 invisible relative truncate opacity-0 transition-all delay-100 ease-in-out group-hover:visible group-hover:opacity-100">
            Search Issues
          </div>
        </div>
        <div className="relative h-[42px] w-full cursor-pointer pl-16 text-sm leading-[42px] text-white hover:bg-[#ffffff10]">
          <div className="absolute left-[18px] flex h-full items-center">
            <Plus />
          </div>
          <div className="r-0 invisible relative truncate opacity-0 transition-all delay-100 ease-in-out group-hover:visible group-hover:opacity-100">
            Create Issue
          </div>
        </div>

        <div className="absolute bottom-5 h-[42px] w-full cursor-pointer pl-16 text-sm leading-[42px] text-white hover:bg-[#ffffff10]">
          <div className="absolute left-[18px] flex h-full items-center">
            <CircleHelp />
          </div>
          <div className="r-0 invisible relative opacity-0 transition-all delay-100 ease-in-out group-hover:visible group-hover:opacity-100">
            About
          </div>
        </div>
      </aside>
    </>
  )
}

export default SideBar
