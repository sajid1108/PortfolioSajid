import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function PageNotFound() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h3>Oopss...</h3>
        <p>Halaman yang dituju tidak ditemukan</p>
      </div>
      <Footer />
    </>
  );
}

export default PageNotFound;
