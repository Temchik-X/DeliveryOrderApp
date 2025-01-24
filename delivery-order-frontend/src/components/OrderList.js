import React, { useEffect, useState } from "react";
import { fetchOrders } from "../api/orders";
import OrderDetails from "./OrderDetails";

function OrderList() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const data = await fetchOrders();
                setOrders(data);
            } catch (error) {
                console.error("Failed to fetch orders:", error);
            } finally {
                setLoading(false);
            }
        };

        getOrders();
    }, []);

    const openModal = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedOrder(null);
        setIsModalOpen(false);
    };

    if (loading) {
        return <p>Loading orders...</p>;
    }

    return (
        <div>
            <h2>Order List</h2>
            {orders.length === 0 ? (
                <p>No orders available.</p>
            ) : (
                <ul>
                    {orders.map((order) => (
                        <li
                            key={order.id}
                            style={{ cursor: "pointer", margin: "8px 0" }}
                            onClick={() => openModal(order)}
                        >
                            <strong>Order #{order.orderNumber}</strong> — {order.senderCity} to {order.recipientCity}
                        </li>
                    ))}
                </ul>
            )}
            {selectedOrder && (
                <OrderDetails
                    order={selectedOrder}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}

export default OrderList;
