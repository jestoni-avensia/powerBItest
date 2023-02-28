import {useOutletContext} from 'react-router-dom'
export function NewBook() {
    let obj = useOutletContext()
    return (
        <h1>New {obj.message}</h1>
    )
}

export default NewBook;