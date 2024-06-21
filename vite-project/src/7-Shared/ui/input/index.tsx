import { Input } from "@chakra-ui/react"
import { useState, FC, useTransition } from "react"

interface IInputShared {
    setValue: (data: string) => void
}

export const InputShared: FC<IInputShared> = ({ setValue }) => {
    const [search, setSearch] = useState<string>('')
    const [isPanding, startTransition] = useTransition()
    const ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
        startTransition(() => {
            setValue(event.target.value)
        })
    }
    return <Input placeholder="Search" value={search} onChange={ChangeHandler}/>
}