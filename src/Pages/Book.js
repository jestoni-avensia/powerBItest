import {useOutletContext, useParams } from 'react-router-dom'

export function Book() {
    const { id } = useParams()
    const obj = useOutletContext()
    return (
        <h1>{id} {obj.message}</h1>
    )
}

export default Book;