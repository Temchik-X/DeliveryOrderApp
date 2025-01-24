import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/orders"; // Укажи URL backend API

// Создание заказа
export const createOrder = async (order) => {
    const response = await axios.post(API_BASE_URL, order);
    return response.data;
};

// Получение списка заказов
export const fetchOrders = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
};