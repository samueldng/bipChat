import { ReactNode } from "react";
import IconClose from "./icons/IconClose";
import IconAdd from "./icons/IconAdd";
import { SidebarButton } from "./SidebarButton";
import IconTrash from "./icons/IconTrash";

type SidebarProps = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  onClear: () => void;
  onNewChat: () => void;
};

export function Sidebar({ children, open, onClose, onClear, onNewChat }: SidebarProps) {
  return (
    <section 
      className={`fixed top-0 bottom-0 left-0 text-white ${open ? 'w-screen bg-gray-600' : 'w-0'} md:w-64 md:static`}
    >
        <div className={`transition-all duration-300 flex h-screen ${open ? 'ml-0' : '-ml-96'} md:ml-0`}>

          <div className="flex flex-col w-64 p-2 bg-gray-900">

            <div onClick={onNewChat} className="flex items-center p-3 rounded-md 
            text-sm cursor-pointer border border-white/20 hover:bg-gray-500/20">
              <IconAdd width={16} height={16} className="mr-3" />
              Nova conversa
            </div>

            <nav className="flex-1 pt-2 overflow-y-auto">
              {children}
            </nav>

            <div className="border-t border-gray-700 pt-2">
              <SidebarButton 
                icon={<IconTrash width={16} height={16} />}
                label="Limpar todas as conversas"
                onClick={onClear}
              />
            </div>
          </div> 

          <div onClick={onClose} className="flex items-center justify-center w-10 h-10 cursor-pointer md:hidden">
            <IconClose width={24} height={24} />
          </div>

        </div>
    </section>
  )
}