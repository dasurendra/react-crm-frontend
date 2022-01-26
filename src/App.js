import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login page/LoginPage";
import Header from "./components/Header/Header";
import Registrationpage from "./pages/Registration Page/Registrationpage";
import EmailVerification from "./pages/email-verification/EmailVerification";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Registrationpage />} />
          <Route path="/email-verification" element={<EmailVerification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
