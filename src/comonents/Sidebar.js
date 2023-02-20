import './Sidebar.css';
import { AiOutlinePlus,AiOutlineUser ,AiOutlineFolderOpen,AiOutlineFileText} from 'react-icons/ai';
import { HiOutlineSortAscending } from 'react-icons/hi';
import {CiSettings} from 'react-icons/ci';
import {FiLogOut} from 'react-icons/fi';
import {SlGraph} from 'react-icons/sl';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
        <nav>
            <div className='logo'>
                 <SlGraph className='icon'/>
            </div>
            <ul className='ul-item'>
                <li>
                 <AiOutlinePlus className='icon'/>
                 <Link to='/'>New</Link>
                </li>
                <li>
                 <AiOutlineUser className='icon'/>
                 <Link to='/'>Patient</Link>
                </li>
                <li>
                 <AiOutlineFolderOpen className='icon'/>
                 <Link to='/'>Folder</Link>
                </li>
                <li>
                 <HiOutlineSortAscending className='icon'/>
                 <Link to='/'>Upload</Link>
                </li>
                <li>
                 <AiOutlineFileText className='icon'/>
                 <Link to='/'>Report</Link>
                </li>
                <li>
                 <CiSettings className='icon'/>
                 <Link to='/'>Setting</Link>
                </li>
               
                <li>
                 <FiLogOut className='icon'/>
                 <Link to='/'>LogOut</Link>
                </li>

            </ul>
        </nav>

     </div>
  )
}

export default Sidebar