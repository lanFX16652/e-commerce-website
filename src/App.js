import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";
import Layout from "./components/layout/Layout";
import { useSelector } from "react-redux";
import { selectUser } from "./store/userSlice";

function App() {
  const user = useSelector(selectUser);

  return (
    <Layout>
      {/*user ? <Logout /> : <LoginPage />*/}
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/shoppage" exact element={<ShopPage />} />
        <Route path="/shoppage/:productId" element={<DetailPage />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
