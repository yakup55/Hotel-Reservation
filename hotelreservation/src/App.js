import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./componenets/footer/Footer";
import Home from "./componenets/home/Home";
import Hotel from "./componenets/hotel/Hotel";
import NavBar from "./componenets/navbar/NavBar";
import Register from "./componenets/register/Register";
import Paths from "./Paths";

function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>

        <main>
          <Paths></Paths>
        </main>
        <br></br>
       
        <br></br>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
