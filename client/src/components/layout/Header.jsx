import React from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, Button } from 'reactstrap';
import Link from 'next/link'
import { Context } from '../../store/Context';
import { setAuthToken } from '../../util/axios';
import { useRouter } from 'next/router';

const Header = () => {
    const [user, setUser] = React.useContext(Context)

    const router = useRouter()

    function logoutHandler() {
        setAuthToken()
        setUser({})
        router.push('/login')
    }


    return (
        <div>
            <Navbar
                color="dark"
                dark
                expand="md"
            >
                <Link href='/'>
                    <a className='navbar-brand'>Form</a>
                </Link>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse
                    navbar
                    className="justify-content-end"
                >
                    <Nav
                        navbar
                    >
                        {Object.keys(user).length !== 0 ? <>
                            <NavItem>
                                <Link href='/form'>
                                    <a className="nav-link">Form</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Button onClick={() => logoutHandler()} className="nav-link">Logout</Button>
                            </NavItem>
                        </> :
                            <>
                                <NavItem>
                                    <Link href='/login'>
                                        <a className="nav-link">Login</a>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href='/register'>
                                        <a className="nav-link">Register</a>
                                    </Link>
                                </NavItem>
                            </>}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
export default Header;