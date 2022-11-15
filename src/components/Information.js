import '../style/main.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGoogle} from 'react-icons/bs'
const AboutMe = () => {
    return (
        <>

            <div className="info-text" id='about' >
                <h3>
                    ABOUT ME
                </h3>
                <p>
                I have worked on many distinguished and pioneering projects in their field with more than one company and more than one client, the last of which was an electronic system for a fast food restaurant. You will find a link in the list of projects, and you will also find many introductory sites for companies and businessmen I have worked with                </p>
                <p><span>Experience: </span> I'v a +3 years of experience in this field.</p>
                <p><span>Mobile: </span>+970 59-908-6824</p>
                <p><span>The companies I worked for: </span> HCA-Sowftices , Sowft.RC Technology.</p>
                <p><span>Social Media: </span>
            
                 </p>
                 <ul>
                        <li>
                        <a href='https://www.linkedin.com/in/mohammed-adham-733bb8198/'> <BsLinkedin size={30} color="#262626" /></a>
                        </li>
                        <li>
                        <a href='https://www.facebook.com/virusnkad'><BsFacebook size={30} color="#262626" /></a>
                        </li>
                        <li>
                            <a href='http://www.google.com'><BsGoogle size={30} color="#262626" /></a>
                        </li>
                    </ul>
                </div>
            </>
        
    );
}
 
export default AboutMe;