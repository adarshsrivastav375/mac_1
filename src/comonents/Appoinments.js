import './Appoinment.css';
import { AiOutlineFileText} from 'react-icons/ai';

function Appoinments() {
  return (
    <div className='amt-container'>
      <ul className='amt-ul-item'>
        <li className='amt-li-item1'>
          <a href="">Upcomming Appoinment</a> 
        </li>
        <li className='amt-li-item'>
          <a href="">Past Appoinment</a> 
        </li>
        <li className='amt-li-item'>
          <a href="">Medical Records</a> 
        </li>
      </ul> 
      <div className='schedule-container'>
           <div className='schedul-head'>
             <ul className='schedule-ul'>
               <li className='schedule-li1' >Root Canal Treatment
                 </li>
               <li className='schedule-li2' > Show Previos Treatment
                 </li>
              </ul>
           </div>
           <div className='schedule-item-container'>
               <div className='date'>
                <h1>26 Nov '19</h1>
                <p>09.00 - 10.00</p>
               </div>
               <div className='d-type'>
               <h1 >Treatment</h1>
                <p>Open Access</p>

               </div>
               <div className='dr-details'>
                <ul className='dr-details-ul'>
                  <li className='dr-details-li'>
                    <h1>Dentist</h1>
                    <p>Drg. Adam H.</p>
                  </li>
                  <li className='dr-details-li'>
                    <h1>Nurse</h1>
                    <p>Jessicamila</p>
                  </li>
                  <li className='dr-details-li2' >
                  <AiOutlineFileText className="r-icon" />
                  Note
                  </li>
                </ul>
               </div>
           </div>
           <div className='schedule-item-container'>
               <div className='date'>
                <h1>26 Nov '19</h1>
                <p>09.00 - 10.00</p>
               </div>
               <div className='d-type'>
               <h1 >Treatment</h1>
                <p>Open Access</p>

               </div>
               <div className='dr-details'>
                <ul className='dr-details-ul'>
                  <li className='dr-details-li'>
                    <h1>Dentist</h1>
                    <p>Drg. Adam H.</p>
                  </li>
                  <li className='dr-details-li'>
                    <h1>Nurse</h1>
                    <p>Jessicamila</p>
                  </li>
                  <li className='dr-details-li2' >
                  <AiOutlineFileText className="r-icon" />
                  Note
                  </li>
                </ul>
               </div>
           </div>
      </div>

    </div>
  )
}

export default Appoinments;
