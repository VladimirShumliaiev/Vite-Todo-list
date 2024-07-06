
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import NavBarRight from './components/NavBar/NavBarRight';

function App() {

  return (
    <div className='App'>
          <Header/>
          <NavBar/>
          <NavBarRight/>
          <Main/>
          <Footer/>
    </div>
  );
}

export default App
