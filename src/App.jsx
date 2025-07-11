import "./App.css";
import Aboutus from "./Components/Aboutus";
import ContactForm from "./Components/Contact";
import Footer from "./Components/Footer";
import OurTeam from "./Components/OurTeam";
import Slider from "./Components/Slider";
function App() {
  return (
    <div>
      <Slider />
      <Aboutus />
      <OurTeam />
      <ContactForm />
      <Footer />
      {/* <Weather /> */}
    </div>
  );
}

export default App;
