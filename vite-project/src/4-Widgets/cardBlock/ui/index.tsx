import { Box } from "@chakra-ui/react"
import { useAppSelector } from "../../../7-Shared/lib/store"
import { CardFeature } from "../../../5-Features/card"
import { useState, useEffect } from "react"
import { InputShared } from "../../../7-Shared/ui"
import { Todo } from "../../../6-Entities/Todo/const"

export const CardWidget = () =>{
    const todos = useAppSelector(state => state.todos)
    const [search, setSearch] = useState<string>('')
    useEffect(() => {
        console.log(todos);
    })
    return <Box>
        <InputShared setValue={setSearch} />
        {todos.todos
        .filter((item: Todo) => item.title.includes(search))
        .map((item: Todo)=> <CardFeature key={item.id} {...item}/>)}
    </Box>
}





