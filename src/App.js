import{BrowserRouter, Routes,Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import "./App.css";

function App() {
  
 return (
  <BrowserRouter>
    <div className="app-container"> 
      <Header/>

      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>

      <Footer/>
    </div>
  </BrowserRouter>
);
}

export default App;