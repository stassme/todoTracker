import { Card, Text } from "@chakra-ui/react"
import { Todo } from "../../../6-Entities/Todo/const"
import { useAppSelector } from "../../../7-Shared/lib/store"
import { Link } from "react-router-dom"

export const TextWidget = () => {
    const todo = useAppSelector(state => state.todos.selectedTodo) as Todo
    return <Card> 
        <Text m={2}>{todo.title}</Text>
        <Link to={'/'}>Back</Link>
    </Card>
}