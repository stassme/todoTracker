import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { ProfilePage } from "../../3-Pages/profile";
import { MainLayout } from "../../2-Layout/main";
import { TodosPage } from "../../3-Pages/todos";
import { TodoPage } from "../../3-Pages/todo";

export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route element={<MainLayout />}>
            <Route index element={<TodosPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="todo/:id" element={<TodoPage />} />

        </Route>
    </>
))