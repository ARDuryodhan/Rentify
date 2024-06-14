import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "../src/Pages/AboutUs";
import ContactUs from "./Components/ContactUs";
import Header from "./Components/Header";
import Login from "./Components/Login";
import UserProfile from "./Pages/UserProfile";
import Register from "./Components/SignUp";
import Footer from "./Components/Footer";
import ErrorPage from "./Pages/ErrorPage";
import Logout from "./Components/Logout";
import PropertyForm from "./Components/PropertyForm";
// import { AdminPanel } from "./Components/Layout/AdminPanel";
import { AdminProperties } from "./Pages/AdminProperties";
import { AdminContacts } from "./Pages/AdminContacts";
import { AdminUsers } from "./Pages/AdminUsers";
import { AdminLayout } from "./Components/Layout/Admin-Layout";
import AdminUpdate from "./Pages/Admin-Update";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/property-form" element={<PropertyForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/logout" element={<Logout />} />
            {/* Admin Panel Routing */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="users" element={<AdminUsers />} />
              <Route path="users/:id/update" element={<AdminUpdate />} />
              <Route path="contacts" element={<AdminContacts />} />
              <Route path="properties" element={<AdminProperties />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
