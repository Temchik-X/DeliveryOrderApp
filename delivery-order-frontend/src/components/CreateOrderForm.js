import React, { useState } from "react";
import { createOrder } from "../api/orders";

function CreateOrderForm() {
    const [order, setOrder] = useState({
        senderCity: "",
        senderAddress: "",
        recipientCity: "",
        recipientAddress: "",
        cargoWeight: "",
        pickupDate: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newOrder = await createOrder(order);
            setMessage(`Order created successfully: ${newOrder.orderNumber}`);
            setOrder({
                senderCity: "",
                senderAddress: "",
                recipientCity: "",
                recipientAddress: "",
                cargoWeight: "",
                pickupDate: "",
            });
        } catch (error) {
            console.error("Failed to create order:", error);
            setMessage("Failed to create order. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create New Order</h2>
            {message && <p>{message}</p>}
            <div>
                <label>Sender City:</label>
                <input
                    type="text"
                    name="senderCity"
                    value={order.senderCity}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Sender Address:</label>
                <input
                    type="text"
                    name="senderAddress"
                    value={order.senderAddress}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Recipient City:</label>
                <input
                    type="text"
                    name="recipientCity"
                    value={order.recipientCity}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Recipient Address:</label>
                <input
                    type="text"
                    name="recipientAddress"
                    value={order.recipientAddress}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Cargo Weight:</label>
                <input
                    type="number"
                    name="cargoWeight"
                    value={order.cargoWeight}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Pickup Date:</label>
                <input
                    type="date"
                    name="pickupDate"
                    value={order.pickupDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]} // Устанавливаем минимальную дату как текущую
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default CreateOrderForm;
