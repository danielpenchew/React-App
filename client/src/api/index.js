import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const insertProduct = payload => api.post(`/product`, payload);
export const getAllProducts = () => api.get(`/products`);
export const getProductById = id => api.get(`/products/${id}`);
export const updateProductById = (id, payload) => api.put(`/product/${id}`, payload);
export const deleteProductById = id => api.delete(`/product/${id}`);

const apis = {
    insertProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
}

export default apis;
