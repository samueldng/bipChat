import IconAdd from "./icons/IconAdd";
import IconMenu from "./icons/IconMenu";

type HeaderProps = {
    openSidebarClick: () => void;
    title: string;
    newChatClick: () => void;
}

export function Header({ openSidebarClick, title, newChatClick }: HeaderProps) {
    return (
        <header className="flex justify-between items-center w-full
        border border-b-gray-600 p-2 md:hidden">
            <div onClick={openSidebarClick} className="">
                <IconMenu width={24} height={24} />
            </div>

            <div className="mx-2 truncate">{title}</div>

            <div onClick={newChatClick}>
                <IconAdd />
            </div>

        </header>
    )
}