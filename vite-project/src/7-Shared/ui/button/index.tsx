import { Button } from "@chakra-ui/react"
import { FC } from "react"


interface IButtonShared {
    title: string,
    onClick?: () => void
}
export const ButtonShared: FC<IButtonShared> = ({ title, onClick }) => {
    return <Button onClick={onClick}>{title}</Button>
}