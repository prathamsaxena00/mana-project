
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Subbanner  from './components/subbanner';
import  Navigation from './components/nav' ;
import Banner from './components/banner';
import Mombanner from './components/mombanner';
import Customer  from './components/customer';
import Footer from './components/footer';
function App() {

  return (
    <div>
      <Navigation/>
    <Banner/>
    <Subbanner/>
    <Mombanner/>
    <Customer/>
    <Footer/>
    </div>
  
  );
}

export default App;
