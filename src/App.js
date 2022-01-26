import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login page/LoginPage";
import Header from "./components/Header/Header";
import Registrationpage from "./pages/Registration Page/Registrationpage";
import EmailVerification from "./pages/email-verification/EmailVerification";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import Order from "./pages/order/Order";
import Payment from "./pages/payment/Payment";
import Customer from "./pages/customer/Customer";
import Category from "./pages/category/Category";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/category" element={<Category />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Registrationpage />} />
          <Route path="/email-verification" element={<EmailVerification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
