import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// const Collapse = styled.div.attrs({
//     className: 'collapse navbar-collapse'
// })``

// const List = styled.div.attrs({
//     className: 'navbar-nav mr-auto'
// })``

// const Item = styled.div.attrs({
//     className: 'collapse navbar-collapse'
// })``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <Link to="/#" className="navbar-brand">
                    Home
                </Link> */}
                <Link to="/products/list" className="nav-link">
                    Products
                </Link>
                <Link to="/products/create" className="nav-link">
                    Create Product
                </Link>
                {/* <Collapse>
                    <List>
                        <Item>
                        </Item>
                        <Item>
                        </Item>
                    </List>
                </Collapse> */}
            </React.Fragment>
        )
    }
}

export default Links;
