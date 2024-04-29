import Navbar from "./components/Navbar/Navbar";
import imageBackground from "./assets/bg5.png";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div
      className=" p-5 h-screen text-xl"
      style={{
        backgroundImage: `url(${imageBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
