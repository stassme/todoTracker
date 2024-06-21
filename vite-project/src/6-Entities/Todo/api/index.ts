import { api } from "../../../7-Shared/api";


export async function getTodos() {
    return (await api.get('todos')).data
}

export async function getTodo(id: number) {
    return (await api.get(`todos/${id}`)).data
}