import "./Card.css";
import img1 from "../assets/img1.jpeg";
import { AiOutlineFileText} from 'react-icons/ai';

function card() {
  return (
    <div className="card-container">
       <div className="card">
            <div className="img-container">
               <img src={img1} alt="Katherine Langford" className="img1" />
            </div>

            <h1>Katherine </h1>
            <p>katherine@example.com</p>
            <div className="dues-container">
                <div className="dues-p">
                   <h2>15</h2>
                   <p>Past</p>
                </div>
                <div className="dues-u">
                  <h2>02</h2>
                  <p>Upcoming</p>
                </div>
            </div>
            <div className="button-container">
             <button >Send Message</button>
            </div>
        </div>
        <div className="report-container">
            <h1>Files/Documents</h1>
            <ul className="report">
                <li>
                   <AiOutlineFileText className="icon2"/>
                   <p>Check Up Results.pdf</p>
                </li>
                <li>
                   <AiOutlineFileText className="icon2"/>
                   <p>Check Up Results.pdf</p>
                   
                </li>
                <li>
                   <AiOutlineFileText className="icon2"/>
                   <p>Medical Prescription.pdf</p>
                </li>
                <li>
                   <AiOutlineFileText className="icon2"/>
                   Dental X-Ray Result.pdf
                </li>
            </ul>
            
        </div>
    </div>
  );
}

export default card;
