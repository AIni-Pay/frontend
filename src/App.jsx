import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import { 
  Hero, 
  Services
} from "./components/sections";
import { Header, Footer } from "./components/layout";
import { ChatTest } from "./components/chat";
import { IntegrationsDEV } from "./components/common";
import { StarsCanvas } from "./components/3D/StarBackground";
// Componente para la página principal
const HomePage = () => {
  return (
    <div className="pt-[5.75rem] lg:pt-[5.25rem] overflow-hidden">
      <StarsCanvas />
      <Header />
      <Hero />
      <Services />
      <IntegrationsDEV />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iaChat" element={
          <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <StarsCanvas />
            <Header />
            <ChatTest />
            <Footer />
          </div>
        } />
      </Routes>
      <ButtonGradient />
    </>
  );
};

export default App;
