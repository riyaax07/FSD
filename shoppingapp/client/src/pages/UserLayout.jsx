import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Header from "../components/Header";
const UserLayout = () => {
  return (
    <div className="user-layout">
      <Navbar />
      <Footer />
      <Home/>
      <Header/>
      <h1>User Layout</h1>
      <p>This is the user layout page.</p>
    </div>
  );
}

export default UserLayout;