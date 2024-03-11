import { table } from "console";

interface TabProps {
  tab: string
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs: React.FC<TabProps> = ({ tab, setSelectedTab }) => {
  return (
    <div className="w-full">
        <ul className="relative flex flex-wrap p-1 list-none rounded-lg bg-blue-gray-50/60" data-tabs="tabs" role="list">
          <li className="z-30 flex-auto text-center">
            <a className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
              data-tab-target="" role="tab" aria-selected="false" onClick={() => setSelectedTab('all')}>
              <span className={`m1-1 ${tab === 'all' ? 'underline' : ''}`}>All Posts</span>
            </a>
          </li>
          <li className="z-30 flex-auto text-center">
            <a className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
              data-tab-target="" role="tab" aria-selected="false" onClick={() => setSelectedTab('friends')}>
              <span className={`m1-1 ${tab === 'friends' ? 'underline' : ''}`}>Friends Posts</span>
            </a>
          </li>
        </ul>
    </div> 
  )
}


export default Tabs;