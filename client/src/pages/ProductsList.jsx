import React, { Component } from 'react';

import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

import api from '../api';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            columns: []
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true });

        await api.getAllProducts().then(products => {
            this.setState({
                products: products.data.data,
                isLoading: false
            })
        })
    }

    render() {
        const { products } = this.state;
        console.log('TCL: ProductsList -> render -> products', products);

        return (
            <CardDeck>
            <Card>
            <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
            <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button>
            </CardBody>
            </Card>
            <Card>
            <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
            <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
            </CardBody>
            </Card>
            <Card>
            <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
            <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                <Button>Button</Button>
            </CardBody>
            </Card>
        </CardDeck>
        )
    }
}

export default ProductsList;