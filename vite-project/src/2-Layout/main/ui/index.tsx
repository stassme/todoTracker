import { Container } from '@chakra-ui/react'
import { Outlet } from 'react-router'

export const MainLayout = () => {
    return <Container>
        <Outlet />
    </Container>
}