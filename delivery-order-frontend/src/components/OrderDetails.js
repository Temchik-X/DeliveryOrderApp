import React from "react";
import Modal from "react-modal";

// Устанавливаем элемент root для модального окна
Modal.setAppElement("#root");

function OrderDetails({ order, isOpen, onClose }) {
    if (!order) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="modal-content"
            style={{
                content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    width: "50%",
                    padding: "20px",
                },
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                },
            }}
        >
            <h3 className="modal-title">Order Details</h3>
            <div className="modal-body">
                <p><strong>Order Number:</strong> {order.orderNumber}</p>
                <p><strong>Sender City:</strong> {order.senderCity}</p>
                <p><strong>Sender Address:</strong> {order.senderAddress}</p>
                <p><strong>Recipient City:</strong> {order.recipientCity}</p>
                <p><strong>Recipient Address:</strong> {order.recipientAddress}</p>
                <p><strong>Cargo Weight:</strong> {order.cargoWeight} kg</p>
                <p><strong>Pickup Date:</strong> {new Date(order.pickupDate).toLocaleDateString()}</p>
            </div>
            <button className="modal-close-button" onClick={onClose}>Close</button>
        </Modal>
    );
}

export default OrderDetails;
