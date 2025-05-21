import axios from "axios"
const axiosApiBack = axios.create({ baseURL: "http://localhost:3002" });

interface IformInput {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}

export const postRegister = async (data: IformInput) => {
    try {
        const res = await axiosApiBack.post('/users/register', data)
        // if (!res.data) {
        //     return
        // }

        return res.data
    } catch (e) {
        console.warn("error al registrar el user", e);
    }
}

interface formData {
    email: string;
    password: string;
}

export const postLogin = async (data: formData) => {
    try {
        const res = await axiosApiBack.post('/users/login', data)
        return res.data
    } catch (e) {
        console.warn("error al Loguear el user", e);
    }
}

export const postOrdersWithArray = async (productIds: number[]) => {
    try {
        const token = localStorage.getItem("token");
        const config = token ? { headers: { Authorization:  token } } : {};
        const res = await axiosApiBack.post('/orders', { products: productIds }, config);
        return res.data;
    } catch (e) {
        console.warn("error ACAAA", e);
    }
};
export const getOrdersService = async () => {
    try {
        const token = localStorage.getItem("token");
        const config = token ? { headers: { Authorization: `${token}` } } : {};
        const res = await axiosApiBack.get('/users/orders', config);
        return res.data;
    } catch (e) {
        console.warn("error ACAAA", e);
    }
}