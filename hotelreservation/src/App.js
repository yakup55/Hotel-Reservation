import "./App.css";
import Footer from "./componenets/footer/Footer";
import NavBar from "./componenets/navbar/NavBar";
import SimpleSnacbar from "./componenets/snacbar/SimpleSnacbar";
import Paths from "./Paths";

function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>

        <main>
          <Paths></Paths>
        </main>
      </div>
      <Footer></Footer>
      <SimpleSnacbar></SimpleSnacbar>
    </>
  );
}

export default App;
