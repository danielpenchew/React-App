import React, { Component } from 'react';
import api from '../api';
import styled from 'styled-components';

const Title = styled.h1.attrs({
    className: 'h1'
})``

const Wrapper = styled.div.attrs({
    className: 'form-group'
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ProductrsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            brand: '',
            model: '',
            size: '',
            prize: 0,
            rating: 0
        }
    }

    handleChangeInputBrand = async event => {
        const brand = event.target.value;
        this.setState({ brand });
    }

    handleChangeInputModel = async event => {
        const model = event.target.value
        this.setState({ model })
    }

    handleChangeInputSize = async event => {
        const size = event.target.value
        this.setState({ size })
    }

    handleChangeInputPrize = async event => {
        const prize = event.target.value
        this.setState({ prize })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.value
        this.setState({ rating })
    }

    handleIncludeProduct = async () => {
        const { brand, model, size, prize, rating } = this.state;
        const payload = { brand, model, size, prize, rating };

        await api.insertProduct(payload)
            .then(res => {
                window.alert(`Product successfully inserted.`)
                this.setState({
                    brand: '',
                    model: '',
                    size: '',
                    prize: 0,
                    rating: 0
                })
            })
            .catch(error => console.log(`${error.message}`));

            this.goToHomePage();
    }

    goToHomePage = () => {
        window.location.href="/#";
    }

    render() {
        const { brand, model, size, prize, rating } = this.state;
        return (
            <Wrapper>
                <Title>Create Product</Title>

                <Label>Brand: </Label>
                <InputText
                    type="text"
                    value={brand}
                    onChange={this.handleChangeInputBrand}
                />

                <Label>Model: </Label>
                <InputText
                    type="text"
                    value={model}
                    onChange={this.handleChangeInputModel}
                />

                <Label>Size: </Label>
                <InputText
                    type="text"
                    value={size}
                    onChange={this.handleChangeInputSize}
                />

                <Label>Prize: </Label>
                <InputText
                    type="text"
                    value={prize}
                    onChange={this.handleChangeInputPrize}
                />

                <Label>Rating: </Label>
                <InputText
                    type="text"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                <Button onClick={this.handleIncludeProduct}>Add Product</Button>
                <CancelButton href={'/'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ProductrsInsert;