import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import Links from './Links';
import logo from '../logo.svg';

// const Container = styled.div.attrs({
//     className: 'container'
// })``

// const Nav = styled.nav.attrs({
//     className: 'navbar navbar-expand-lg navbar-dark bg-dark'
// })`
// margin-bottom: 20px;
// `

// class NavBar extends Component {
//     render() {

//         const [collapsed, setCollapsed] = useState(true);

//         const toggleNavbar = () => setCollapsed(!collapsed);
//         return (
//             // <div width="100%">
//             //     <Container width="100%">
//             //         <Nav>
//             //             <Logo />
//             //             <Links />
//             //         </Nav>
//             //     </Container>
//             // </div>
//             <div>
//                 <Navbar color="faded" light>
//                     <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
//                     <NavbarToggler onClick={toggleNavbar} className="mr-2" />
//                     <Collapse isOpen={!collapsed} navbar>
//                         <Nav navbar>
//                             <NavItem>
//                                 <NavLink href="/components/">Components</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//                             </NavItem>
//                         </Nav>
//                     </Collapse>
//                 </Navbar>
//             </div>
//         )
//     }
// }

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="faded" light>
                <NavbarBrand href="/">
                    <img src={logo} width="50" height="50" alt="google.com" />
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <Links />
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
