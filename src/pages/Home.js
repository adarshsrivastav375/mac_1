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
        {/* <Route path="/new"element={<New/>}/>
        <Route path="/patient"element={<Patient/>}/>
        <Route path="/folder"element={<Folder/>}/>
        <Route path="/upload"element={<Upload/>}/>
        <Route path="/report"element={<Report/>}/>
        <Route path="/setting"element={<Setting/>}/>
        <Route path="/logout"element={<Logout/>}/> */}
      </Routes>
      </Sidebar>
      </Router>
      <Card/>
      <Details/>
        

    </div>
  )
}

export default Home