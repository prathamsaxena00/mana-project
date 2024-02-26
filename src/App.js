
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Subbanner  from './components/subbanner';
import  Navigation from './components/nav' ;
import Banner from './components/banner';

function App() {

  return (
    <div>
      <Navigation/>
    <Banner/>
    <Subbanner/>
    </div>
  
  );
}

export default App;
