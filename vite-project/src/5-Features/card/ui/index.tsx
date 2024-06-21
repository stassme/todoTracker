import { Card, CardHeader, Text, CardFooter } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { useAppDispatch } from '../../../7-Shared/lib/store'
import { setIsDone } from '../../../6-Entities/Todo/model'
import { ButtonShared } from '../../../7-Shared/ui'
import { Link } from 'react-router-dom'

interface ICardFeature {
    id: number,
    title: string
}

export const CardFeature: FC<ICardFeature> = ({ id, title }) => {
    const dispatch = useAppDispatch()
    const [done, setDone] = useState<boolean>(false)

    const doneHandler = () => {
        setDone(!done)
        dispatch(setIsDone({ id, done: !done }))
    }
    return <Card m={2} color={done ? 'blue' : 'red'}>
        <CardHeader>
            <Text>{title}</Text>
        </CardHeader>
        <CardFooter>
            <ButtonShared title='Done' onClick={doneHandler} />
            <Link to={`todo/${id}`}>
                <ButtonShared title='Proceed' />
            </Link>
        </CardFooter>
    </Card>
}