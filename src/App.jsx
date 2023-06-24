import CardImages from "./components/CardImages";
import CardInfo from "./components/CardInfo";
import CardProfile from "./components/CardProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="py-5 px-3 lg:px-72">
      <CardProfile />
      <CardInfo />
      <CardImages />
      <Footer />
    </div>
  )
}

export default App
