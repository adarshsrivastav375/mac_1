import './home.css';
import Sidebar from '../comonents/Sidebar';
import Card from '../comonents/Card';
import Details from '../comonents/Details';
import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
    
     <Router>
      <Sidebar>
       <Routes>
        <Route path="/"element={<Home/>}/>
      </Routes>
      </Sidebar>
      </Router>
      <Card/>
      <Details/>
        

    </div>
  )
}

export default Home