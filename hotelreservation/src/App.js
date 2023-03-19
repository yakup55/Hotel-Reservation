import "./App.css";
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

      <SimpleSnacbar></SimpleSnacbar>
    </>
  );
}

export default App;
