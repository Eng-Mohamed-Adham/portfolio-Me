
import ReactTypingEffect from 'react-typing-effect';

import '../style/main.css'

const About = () => {
    return (
        <section className="banner" id="banner">
            <div className="imgbox">
            </div>
            <div className='content'>
            <h3>Mohamed Adham</h3>
            {/* <p>I'm a Creative </p> */}
            <ReactTypingEffect
        text={["Front End", "Developer.."]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <p>
                I'm a Creative  
               { text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    // style={i%2 === 0 ? { color: 'magenta'} : {}}
                  > {char}</span>
                );
              })}
            </p>
          );
        }}        
      />
      <button className='btn'>Inbox Me</button>
            </div>
    </section>
    );
}
 
export default About;