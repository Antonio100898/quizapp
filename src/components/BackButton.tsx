import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    onClick?: () => void
}
const BackButton: React.FC<Props> = ({children, onClick}) => {
    return <button onClick={onClick} className="px-4 py-2 border border-2 border-black rounded m-2 min-w-fit bg-rose-600 text-white">{children}</button>
}
export default BackButton