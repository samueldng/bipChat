import { ReactNode } from "react"

type SidebarButton = {
    icon: ReactNode;
    label: string;
    onClick: () => void
}

export function SidebarButton({ icon, label, onClick }: SidebarButton) {
    return (
        <div onClick={onClick} className="flex items-center rounded-md p-3 text-sm cursor-pointer hover:bg-gray-500/20">
            <div className="mr-3">{icon}</div>
            <div className="flex-1 truncate">{label}</div>
        </div>
    )
}