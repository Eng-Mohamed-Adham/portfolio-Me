
import {BsFacebook} from 'react-icons/bs'
import {BsGoogle} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsTelegram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Connect = () => {
    return (
        <div className="connect-main" id='connect'>
            <div className="title-connect">
                <h3> You can Inbox Me in a social media </h3>
            </div>
            <div className="icon-main">
                        <p></p>
        
                        <a href='https://www.linkedin.com/in/mohammed-adham-733bb8198/'> <FaLinkedinIn size={30} color="#b3330c"  /></a>
                       
                        <a href='https://www.facebook.com/virusnkad'><BsFacebook size={30} color="#b3330c" /></a>
                     
                            <a href='http://www.google.com'><BsGoogle size={30} color="#b3330c" /></a>
                            <a href='https://www.instagram.com/mohamed_adham4200/'><AiFillInstagram size={30} color="#b3330c" /></a>
                            <a href='+972 59 908-6824'><IoLogoWhatsapp size={30} color="#b3330c" /></a>
                            <a href='+972 59 908-6824'><BsTelegram size={30} color="#b3330c" /></a>

                   
            </div>
        </div>
    );
}
 
export default Connect;

