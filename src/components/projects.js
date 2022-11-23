import { useEffect, useState } from "react";
import usepro from "./hooks/usepro";
import srcViews1 from './images/srcviews.png';
import srcViews2 from './images/srcviews2.png';
import srcViews3 from './images/srcviews3.png';
import srcViews4 from './images/srcviews4.png';
import srcViews5 from './images/srcviews5.png';
import srcViews6 from './images/srcviews6.png';
import srcViews7 from './images/srcviews7.png';
import srcViews8 from './images/srcviews8.png';

const Projects = () => {

    // Links Of My Sites Worked 
    const refViews1 = 'https://restaurant-delivery-henna.vercel.app/';
    const refViews2 = 'https://rezestore.vercel.app/';
    const refViews3 = 'https://mail-delivery.vercel.app/';
    const refViews4 = 'https://sign-in-inky.vercel.app/';
    const refViews5 = 'https://eng-mohamed-adham.github.io/Site-with-bootstrap/';
    const refViews6 = 'https://eng-mohamed-adham.github.io/Template-With-sass/';
    const refViews7 = 'https://eng-mohamed-adham.github.io/Template-Html-Css/';
    const refViews8 = 'https://eng-mohamed-adham.github.io/Gallery/';


    // The ALT 
    const srcAlt1 = 'Restaurant Application';
    const srcAlt2 = 'Reza Store Application';
    const srcAlt3 = 'Mail Delivry';
    const srAlt4 = 'Sign In';
    const srcAlt5 = 'Elite Clip';
    const srcAlt6 = 'Composition';
    const srcAlt7 = 'Dashboard Admin';
    const srcAlt8 = 'Gallery';

    // The Tags 
    const TagoneOf1 = 'Next Js';
    const TagTowOf1 = 'React Js';
    const TagTowOf4 = 'HTML&CSS';
    const TagTowOf5 = 'BootStrap'
    const TagTowOf6 = 'Scss';

    const TagoneOf2 = 'React Js';
    const TagTowOf2 = 'Readux & ReduxTool-Kit';
    const TagTowOf3 = 'Material UI MUI'

    // Href Of Links 
    const refTagsOneOf1 = 'https://nextjs.org/';
    const refTagsTowOf1 = 'https://reactjs.org/';
    const refTagsTowOf2 = 'https://redux.js.org/';
    const refTagTowOf3 = 'https://mui.com/';
    const refTagTowOf4 = '#';
    const refTagTowOf5 = 'https://getbootstrap.com/';
    const refTagTowOf6 = 'https://sass-lang.com/';

    // The Header 
    const Head1 = 'Use the right technology in the right place ';
    const Head2 = 'Use The Stateless Management component "Redux&  Redux Tool-Kit"';
    const Head3 = 'Mail Delivery application use mui and context-api';
    const Head4 = 'Simple app for verify from  form login Or register.';
    const Head5 = 'bio of Elite Clip Company';
    const Head6 = 'This is a bio of Composition company , and  i used Scss  to creation it.';
    const Head7 = 'Use HTML and CSS to creation Admin Dashboard.'
    const Head8 = 'Use HTML and CSS to creation Gallery Site';

    // Content Paragraphs 
    const contentoneOf1 = 'The Next Js framework has many advantages that we cannot mention in a small article.';
    const contentPoneOf1 = 'You can view it here.';

    const contentOneOf2  ='This store app supports buying and selling of clothes, jewelry and electronic parts. In its creation, it used the React library and the Redux library, which is used to manage the state of the application in a flexible and streamlined manner, as it allows passing data between components, despite their different layers, quickly and easily.';

    const contentOneOf3 = 'In this application React was used without auxiliary libraries, such as the Redux library. Where the "MUI" and "context-api" library were used to manage the state of the application';
    const contentOneOf4 = 'This application is a login panel for the user, where the user name is verified, which must consist of at least four characters and at least one capital letter, and the user’s password is verified, where the password must contain letters, symbols and numbers and must be large greater than eight digits';

    const contentOneOf5 = 'This is the bio of the company “Elite Clip”   used "BootStrap"in its creation, and it is a specialized library that gives you ready-made templates that you can modify as you like to improve your design, and it is easy to use and learn.'
    const contentOneOf6 = '"Scss" is a framework for "Css" that gives you the power of programming languages to write the properties of elements and this makes this process easier for you and makes it fast and flexible';
    const contentOneOf7 = 'This is  admin dashboard  i use html and css to create it. we was mention how to use html and css in the last project.';

    const contentOneOf8 = 'This is Gallery Site , i use html and css to create it. we was mention how to use html and css in the last project.';

    // Href Paragraphs 
    const refPoneOf1 = 'https://nextjs.org/';

    const project1 = usepro(refViews1,srcViews1,srcAlt1,refTagsOneOf1,TagoneOf1,refTagsTowOf1,TagTowOf1,Head1,contentoneOf1,refPoneOf1,contentPoneOf1);
    const project2= usepro(refViews2,srcViews2,srcAlt2,refTagsTowOf1,TagoneOf2,refTagsTowOf2,TagTowOf2,Head2,contentOneOf2,refTagsTowOf2,contentPoneOf1);
    const project3 = usepro(refViews3,srcViews3,srcAlt3,refTagsTowOf1,TagTowOf1,refTagTowOf3,TagTowOf3,Head3,contentOneOf3,refTagTowOf3,contentPoneOf1); 
    const project4 = usepro(refViews4,srcViews4,srAlt4,refTagsTowOf1,TagTowOf1,refTagTowOf4,TagTowOf4,Head4,contentOneOf4,refViews4,contentPoneOf1);
    const project5 = usepro(refViews5,srcViews5,srcAlt5,refTagTowOf4,TagTowOf4,refTagTowOf5,TagTowOf5,Head5,contentOneOf5,refTagTowOf5,contentPoneOf1); 
    const project6 = usepro(refViews6,srcViews6,srcAlt6,refTagTowOf4,TagTowOf4,refTagTowOf6,TagTowOf6,Head6,contentOneOf6,refTagTowOf6,contentPoneOf1);
    const project7 = usepro(refViews7,srcViews7,srcAlt7,refTagTowOf4,TagTowOf4,refTagTowOf6,TagTowOf6,Head7,contentOneOf7,refTagTowOf4,contentPoneOf1,);
    const project8 = usepro(refViews8,srcViews8,srcAlt8,refTagTowOf4,TagTowOf4,refTagTowOf6,TagTowOf6,Head8,contentOneOf8,refTagTowOf4,contentPoneOf1,);



const [nameClass,SetNameClass] = useState('');
const [namepop,SetNamePop] = useState('');
const [offset, setOffset] = useState(0);


useEffect(() => {
    const onScroll = () => 
    setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    if(offset > 1530.920654296875) { SetNameClass('block-side')}else{ SetNameClass('none-side')}
    if(offset > 2250){SetNamePop('block-side')}else{SetNamePop('none-side')}
    return () => window.removeEventListener('scroll', onScroll);
}, );

console.log(offset); 

    return (
        <div className="articelsSidebar " id="projects">
        
           
            <div className="">
            <div className="list-projects">
            {project1}
            {project2}
            {project3}
            {project4}
            {project5}
            {project6}
            {project7}
            {project8}
            </div>
            </div>
            <div className="entrySidebar">
                <div className={`pop-one ${nameClass}`}>
                    <div className="pop-img">
                        
                    </div>
                    <h4>
                    You were one of the team involved in building<a href="http://alqudstoday.tv/"> this site.</a>

                    </h4>
                
                </div>
                <div className={`pop-tow ${namepop}`}>
                  
                    <h4>
                    You can follow me on <a href="https://www.linkedin.com/in/mohammed-adham-733bb8198/">LinkedIn</a> I publish technical articles in the"FrontEnd Development".
                    </h4>
                
                </div>
            </div>
       
        </div>
    );
}
 
export default Projects;
