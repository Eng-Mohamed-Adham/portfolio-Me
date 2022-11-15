
import {BsArrowRightSquareFill} from 'react-icons/bs'
import {BsFillArrowDownSquareFill} from 'react-icons/bs'
import react from './images/communityIcon_4g1uo0kd87c61.png' 
import next from './images/nextjs.png'
import redux from './images/reduxjs.png'
import ts from './images/ts.png'
import mui from './images/mui.png'
import node from './images/nodejs.png'
import bootstrap from './images/bootstrap.png'
import git from './images/git.png'
import github from './images/github.png'
import js from './images/js.png'
import scss from './images/scss.png'
import css from './images/css.png'
import html from './images/html.png'


const Skiles = () => {
    return ( 
        <div className="skiles" id='skiles'>
            <div className="title-skiles">
                <h2>My Skiles</h2>
               <p className='arrow-one'> <BsArrowRightSquareFill size={30} color="#b3330c"/></p>
               <p className='arrow-tow'><BsFillArrowDownSquareFill size={30} color="#b3330c" /></p>
            </div>
          <div className="cards">
                    
                <div className="card">
                    <img src={next} alt='React Js' />
                        <h3>NextJs Framework</h3>
                        <p>I have 5 Years of experince in react and i've many projects in this Library</p>
                    </div>


                    <div className="card">
                    <img src={react} alt='React Js' />
                        <h3>Reat Library</h3>
                        <p>I have 5 Years of experince in react and i've many projects in this Library</p>
                    </div>

                    <div className="card">
                    <img src={redux} alt='React Js' />
                        <h3>Redux Js</h3>
                        <p>I have 5 Years of experince in react and i've many projects in this Library</p>
                    </div>

                    <div className="card">
                    <img src={ts} alt='React Js' />
                        <h3>Type Script</h3>
                        <p>I have 5 Years of experince in react and i've many projects in this Library</p>
                    </div>

                    <div className="card">
                    <img src={node} alt='React Js' />
                        <h3>Node Js</h3>
                        <p>I have 5 Years of experince in react and i've many projects in this Library</p>
                    </div>

                    <div className="card">
                    <img src={mui} alt='React Js' />
                        <h3>Marerial UI</h3>
                        <p>I have 5 Years of experince in react and i've many projects in this Library</p>
                    </div>
                    <div className="card">
                    <img src={bootstrap} alt='bootstrap' />
                        <h3>BootStrap</h3>
                        <p>I have 5 Years of experince in react and i've many projects in this Library</p>
                    </div>

                    <div className="card">
                    <img src={git} alt='git' />
                        <h3>Git</h3>
                        <p>I have 5 Years of experince in react and i've many projects in this Library</p>
                    </div>

                    <div className="card">
                    <img src={github} alt='github' />
                        <h3>GitHub </h3>
                        <p>I have 5 Years of experince in react and i've many projects in this Library</p>
                    </div>

                    <div className="card">
                    <img src={js} alt='js' />
                        <h3>JavaScript </h3>
                        <p>I have 5 Years of experince in react and i've many projects in this Library</p>
                    </div>

                    <div className="card">
                    <img src={scss} alt='scss' />
                        <h3>Scss </h3>
                        <p>I have 5 Years of experince in react and i've many projects in this Library</p>
                    </div>

                    <div className="card">
                    <img src={css} alt='css' />
                        <h3>Css </h3>
                        <p>I have 5 Years of experince in react and i've many projects in this Library</p>
                    </div>
                    <div className="card">
                    <img src={html} alt='html' />
                        <h3>Html </h3>
                        <p>I have 5 Years of experince in react and i've many projects in this Library</p>
                    </div>
          </div>
        </div>
    );
}
 
export default Skiles;