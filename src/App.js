import logo from './logo.svg';
import './App.css';
import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Components/Footer';

function App() {
  let token=localStorage.getItem("token")
  let main=token?<PrivateRoutes/>:<PublicRoutes/>
  return (
    <div className="App">
{/* {main} */}

<Navbar/>
{token&&<Footer/>}
    </div>
  );
}

export default App;
