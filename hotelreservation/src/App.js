import './App.css';
import Footer from './componenets/footer/Footer';
import Hotel from './componenets/hotel/Hotel';
import NavBar from './componenets/navbar/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <br></br>
     <Hotel></Hotel>
     <br></br>
     <Footer></Footer>
    </div>
  );
}

export default App;
