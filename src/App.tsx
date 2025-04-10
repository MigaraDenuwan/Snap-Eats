import { Navbar } from './components/Navbar';
import { Dashbord } from './components/Dashbord';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Description } from './components/Description';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Dashbord />
      <Features />
      <HowItWorks />
      <Description />
      <Footer />
    </div>;
}