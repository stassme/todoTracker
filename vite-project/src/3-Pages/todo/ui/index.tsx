import { useParams } from "react-router"
import { useAppDispatch } from "../../../7-Shared/lib/store"
import { useEffect } from "react"
import { fetchTodo } from "../../../6-Entities/Todo/model/thunks/getTodo.thunk"
import { Box } from "@chakra-ui/react"
import { TextWidget } from "../../../5-Features/text"

export const TodoPage = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchTodo(Number(id)))
    }, [])
    return <Box>
        <TextWidget/>
    </Box>
}