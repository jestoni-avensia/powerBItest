import {Link, Outlet} from 'react-router-dom';

export function Layout() {
    return (
        <>
            <ul>
                <li><Link to="/Books/1">Book 1</Link></li>
                <li><Link to="/Books/2">Book 2</Link></li>
                <li><Link to="/Books/new">New</Link></li>
            </ul>
            <Outlet context={{message: "Hello World"}} />
        </>
    )
}

export default Layout