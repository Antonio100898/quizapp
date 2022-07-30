import { ReactNode } from "react"

type Props = {
    children?: ReactNode
    onClick?: () => void
    disabled?: boolean
}
const ChoiceButton: React.FC<Props> = ({children, onClick, disabled}) => {
    return <button disabled={disabled} onClick={onClick} className="px-4 py-2 border border-4 border-white rounded m-2 min-w-fit bg-emerald-300">{children}</button>
}
export default ChoiceButton