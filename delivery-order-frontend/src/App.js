import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CreateOrderForm from "./components/CreateOrderForm";
import OrderList from "./components/OrderList";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">BlueWave Delivery</h1>
          <nav className="app-nav">
            <a href="/create-order" className="nav-link">Create Order</a>
            <a href="/orders" className="nav-link">Order List</a>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/create-order" element={<CreateOrderForm />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="*" element={<Navigate to="/create-order" replace />} />
          </Routes>
        </main>
        <footer className="app-footer">
          &copy; 2025 BlueWave Delivery. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
