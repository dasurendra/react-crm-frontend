import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login page/LoginPage";

import Registrationpage from "./pages/Registration Page/Registrationpage";
import EmailVerification from "./pages/email-verification/EmailVerification";

import Dashboard from "./pages/dashboard/Dashboard";
import Order from "./pages/order/Order";
import Payment from "./pages/payment/Payment";
import Customer from "./pages/customer/Customer";
import Category from "./pages/category/Category.jsx";
import Product from "./pages/product/Product.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/products" element={<Product />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Registrationpage />} />
          <Route path="/email-verification" element={<EmailVerification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
