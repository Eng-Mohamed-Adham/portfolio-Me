
import '../style/main.css'


import {FaHome } from 'react-icons/fa'
import {BiMessageDots}from 'react-icons/bi'
import{GoPerson} from 'react-icons/go'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {MdWork} from 'react-icons/md'




const NavBar = () => {
    return (
        <div className="navigation">
            <ul>
                <li><a href="#"><FaHome size={30} color="#b3330c"  /></a></li>
                <li><a href="#about"><GoPerson size={30} color="#b3330c"/></a></li>
                <li><a href="#skiles"><MdOutlineMiscellaneousServices  size={30} color="#b3330c" /></a></li>
                <li><a href="#projects"><MdWork size={30} color="#b3330c" /></a></li>
                <li><a href="#contact"><BiMessageDots size={30} color="#b3330c" /></a></li>
            </ul>

        </div>
    );
}
 
export default NavBar;