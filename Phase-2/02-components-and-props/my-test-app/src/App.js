import './App.css';
import Header from './Components/Header'
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="App">
    <NavBar isLoggedIn/>
    <Header header="Dunder Mifflin" subheader="Paper Company" location="Scranton, PA"/>
    </div>
  );
}

export default App;
