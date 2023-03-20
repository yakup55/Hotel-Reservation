import "./App.css";
import NavBar from "./componenets/navbar/NavBar";
import ScrollToTop from "./componenets/scrolToTop/ScrollToTop";
import SimpleSnacbar from "./componenets/snacbar/SimpleSnacbar";
import Paths from "./Paths";
function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>
        <ScrollToTop></ScrollToTop>
        <main>
          <Paths></Paths>
        </main>
      </div>

      <SimpleSnacbar></SimpleSnacbar>
    </>
  );
}

export default App;
