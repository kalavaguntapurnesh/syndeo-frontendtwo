import NavBar from "./Navbar";
import Hero from "./Hero";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* NavBar */}
      <NavBar />
      {/* Hero */}
      <Hero />
    </div>
  );
};

export default MainLayout;
