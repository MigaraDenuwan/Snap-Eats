import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Dashbord } from './components/Dashbord';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Description } from './components/Description';
import { Footer } from './components/Footer';
import CustomerRegister from './pages/customerRegistration';
import DriverRegister from './pages/driverRegistration';
import RestaurantRegister from './pages/restaurantRegistration';
import Login from './pages/login';

export function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Dashbord />
            <Features />
            <HowItWorks />
            <Description />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/customer-register" element={<CustomerRegister />} />
        <Route path="/driver-register" element={<DriverRegister />} />
        <Route path="/restaurant-register" element={<RestaurantRegister />} />
      </Routes>
    </div>
  );
}
