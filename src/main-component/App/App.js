import React, {useEffect} from 'react';
import AllRoute from '../router';
import AOS from 'aos';
import 'aos/dist/aos.css'
import './App.css';


const App = () => { 

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration:1000
    });
  });

  return (
    <div className="App body_wrap">
          <AllRoute/>
    </div>
  );
}

export default App;
