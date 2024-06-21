import { useEffect } from "react"
import { useAppDispatch } from "../../../7-Shared/lib/store"
import { fetchTodos } from "../../../6-Entities/Todo/model/thunks/getTodo.thunk"
import { Box } from "@chakra-ui/react"
import { CardWidget } from "../../../4-Widgets/cardBlock"

export const TodosPage = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchTodos())
    },)
    return <Box>
        <CardWidget />
    </Box>
}
