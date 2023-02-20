import './PDetails.css';

function PDetails() {
  return (
    <div className='p-details-container'>
    
        <div class="item">
           <h6>Gender</h6>
            <p>Female</p>
        </div>
        <div class="item">
            <h6>Birthday</h6>
            <p>Feb 24th, 1997</p>
        </div>
        <div class="item">
            <h6>Phone Number</h6>
            <p>(+91)9999232323</p>
        </div>  
        <div class="item">
            <h6>Registered Date</h6>
            <p>Feb 24th, 1997</p>

        </div>
        <div class="item">
            <h6>Street Address</h6>
            <p>JL. Diponegoro No. 21</p>

        </div>
        <div class="item">
            <h6>City</h6>
            <p>Cilacap</p>
        </div> 
        <div class="item">
            <h6>Zip Code</h6>
            <p>654646</p>
        </div> 
        <div class="item">
            <h6>Member Status</h6>
            <p>Active Member</p>
        </div> 
    </div>
  )
}

export default PDetails