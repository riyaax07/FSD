import navbar from "../components/navbar";
import footer from "../components/footer";
import home from "../components/Home";
import header from "../components/header";

const userlayout = () => {
  return (
    <div className="user-layout">
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default userlayout;