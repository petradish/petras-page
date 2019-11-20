import ScrollAnim from 'rc-scroll-anim';
import React from 'react';
import {Link} from 'gatsby';
import githubLogo from '../static/GitHub-Mark-64px.png'
import liLogo from '../static/LI-In-Bug.png'
import portrait from '../static/portrait.jpg'
const ScrollParallax = ScrollAnim.Parallax;
const ScrollElement = ScrollAnim.Element;

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      css: { backgroundColor: '#F38EAD', height: 900 },
      cssNoPosition: true,
    };
  }

  setCss = (e) => {
    const css = this.state.css;
    if (this.state.cssNoPosition) {
      css.position = 'fixed';
      css.top = 0;
    } else {
      css.position = '';
      css.top = '';
    }
    this.setState({
      css,
      cssNoPosition: !this.state.cssNoPosition,
    });
  };

  render() {
    return (
    <div>
      <div className="pack-page page0 ">
        <div className="home-title">
          <div className="page-title">
           Hi, I'm Petra!
          </div>
          <ScrollParallax
          animation={{ opacity: 1, scaleX: 1, scaleY: 1,  }}
          style={{ opacity: 0, paddingTop: 2, fontSize: 18, transform: 'scale(0)', }}
          className="text-description"
        >
           Developer | Teacher | Volunteer | Dancer
        </ScrollParallax>
        </div>
      </div>

      <div className="pack-page"
        style={{
          backgroundColor: '#fbe110',
          position: 'relative',
          overflow: 'hidden',
          height: 900,
        }}
      >
        <ScrollParallax
          animation={{ rotate: 360 }}
          style={{ transform: 'rotate(0)' }}
          className="demo-content parallax-shape"
        >
          Developer
        </ScrollParallax>
        <ScrollParallax
         animation={{ x: 0, opacity: 2 }}
          style={{
            transform: 'translateX(-200px)',
            opacity: 0,
            color: '#621ac1'
          }}
          className="text-appear"
        >
          I build programs & websites with code.
        </ScrollParallax>
        <ScrollParallax
         animation={{ x: 0, opacity: 2 }}
         style={{
           transform: 'translateX(300px)',
           opacity: 0,
           backgroundColor: '#F38EAD',
           color: '#fff',
         }}
         className="demo-content parallax-shape"
       >
          Teacher
        </ScrollParallax>
        <ScrollParallax
         animation={{ x: 0, opacity: 1 }}
          style={{
            transform: 'translateX(200px)',
            opacity: 0,
            color: '#621ac1'
          }}
          className="text-appear"
        >
          Geek out with me on Latin & Greek.
        </ScrollParallax>
        <ScrollParallax
          animation={{ x: 0, opacity: 1 }}
          style={{
            transform: 'translateX(-200px)',
            opacity: 0,
            backgroundColor: '#F38EAD',
            color: '#fff',
          }}
          className="demo-content parallax-shape"
        >
          Volunteer
        </ScrollParallax>
        <ScrollParallax
         animation={{ x: 0, opacity: 1 }}
          style={{
            transform: 'translateX(-200px)',
            opacity: 0,
            color: '#621ac1'
          }}
          className="text-appear"
        >
          I volunteer at & help run non-profit orgs.
        </ScrollParallax>
        <ScrollParallax
          animation={{ rotateY: 360 }}
          style={{ transform: 'perspective(200px) rotateY(0)', backgroundColor: '#0098CE' }}
          className="demo-content parallax-shape"
        >
          Dancer
        </ScrollParallax>
        <ScrollParallax
         animation={{ x: 0, opacity: 1 }}
          style={{
            transform: 'translateX(200px)',
            opacity: 0,
            color: '#621ac1'
          }}
          className="text-appear"
        >
          Dance <span id="animate-text"></span> with me!
        </ScrollParallax>
</div>
      <div className="pack-page"
        style={{
          backgroundColor: '#0097D0',
          position: 'relative',
          textAlign: 'center',
          fontSize: 36,
        }}
      >
        <div className="page2-title">Projects</div>
        <div className="page2-description">
        <p>I mostly code in the NERDS stack: Node, Express, React/Redux & Databases with Sequel</p>
        <br></br>
        {/* <p><a href="http://www.github.com/petradish" target="_blank" rel="noopener noreferrer" ><img src={githubLogo} style={{height: 5 + 'vh'}} alt='github'/>Github</a></p>
        <p><a href="http://www.linkedin.com/in/petra-laohakul"target="_blank" rel="noopener noreferrer"><img src={liLogo} style={{height: 5 + 'vh'}} alt='linkedin'/>LinkedIn</a></p>
        <p><a href="https://res.cloudinary.com/dxllpi9sq/image/upload/v1574214708/Personal/Petra_Laohakul_Resume_yugy4q.pdf" target="_blank" rel="noopener noreferrer" ><img src={portrait} alt='petra' style={{height: 5 + 'vh', marginRight: .5 + 'vw'}}/>Resume</a></p> */}
        </div>
        <ScrollParallax
          animation={{ x: -300, translateY: -40, opacity: 1, ease: 'linear', playScale: [0, 1.2] }}
          style={{ transform: 'translateY(40px)', color: '#fff' }}
        >
          <a href='http://octopuss-garden.herokuapp.com' target="_blank" rel="noopener noreferrer" ><img
            src="https://res.cloudinary.com/dxllpi9sq/image/upload/v1574211219/Personal/UNADJUSTEDNONRAW_thumb_4_fudcjc.jpg"
            style={{ width: 300 }}
            alt="Octopuss-Garden"
          /></a>
        </ScrollParallax>
        <ScrollParallax
          animation={{ x: 300, translateY: -150, opacity: 1, ease: 'linear', playScale: [0, 2] }}
          style={{ transform: 'translateY(60px) scale(.8)', color: '#fff' }}
        >
          <a href='http://cindr.herokuapp.com' target="_blank" rel="noopener noreferrer"><img
            src="https://res.cloudinary.com/dxllpi9sq/image/upload/v1574211229/Personal/UNADJUSTEDNONRAW_thumb_5_dzwrro.jpg"
            style={{ width: 400 }}
            alt="Cindr"
          /></a>
        </ScrollParallax>
        <ScrollParallax
          animation={{ x: 200, translateY: -300, opacity: 1, ease: 'linear', playScale: [0, 1.5] }}
          style={{ transform: 'translateY(100px) scale(.9)', color: '#fff' }}
        >
        <a href='http://github.com/The-Outlaws/Cindr2' target="_blank" rel="noopener noreferrer" >
          <img
            src="https://res.cloudinary.com/dxllpi9sq/image/upload/v1574212280/Personal/CindrStack_wo4g4r.png"
            style={{ width: 300 }}
            alt="Cindr Repo"
          /></a>
        </ScrollParallax>
       
      </div>


      <ScrollElement style={{ height: 2000 }} id="Scroll-Pack">
        <ScrollParallax
          className="pack-page"
          location="Scroll-Pack"
          animation={{
            backgroundColor: '#F38EAD',
            playScale: [1, 2],
            onStart: () => { this.setCss('start'); },
            onCompleteBack: () => { this.setCss('back complete'); },
           
          }}
          style={this.state.css}
        >
          <ScrollParallax
            animation={{ translateX: '0%', playScale: [1, 2] }}
            style={{
              transform: 'translateX(-100%)',
              backgroundColor: '#3FD8B8',
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}
            location="Scroll-Pack"
          />
          <ScrollParallax
            animation={[{ translateY: 50 }, { translateY: '450px' }]}
            location="Scroll-Pack"
            style={{
              transform: 'translateY(300px)',
              color: '#fbe110',
              textAlign: 'center',
              width: "100%"
            }}
          >
          
            <div className='contact-text'>Get in touch at <a href = "mailto: petradish@gmail.com">petradish@gmail.com</a></div>
          </ScrollParallax>
  
          
          <ScrollParallax
         animation={{ y: 25, x: 0, opacity: 1 }}
          style={{
            transform: 'translateX(0)',
            opacity: 0,
            color: '#621ac1',
            textAlign: "center",
            width: "100%"
          }}
          className="text-appear"
        >
          <Link to="/about">About Me</Link><span> | </span><a href="http://www.github.com/petradish" target="_blank" rel="noopener noreferrer" ><img src={githubLogo} style={{height: 4 + 'vh', marginRight: .5 + 'vw'}} alt='github'/>Github</a>
          <span> | </span><a href="http://www.linkedin.com/in/petra-laohakul"target="_blank" rel="noopener noreferrer"><img src={liLogo} style={{height: 4 + 'vh', marginRight: .5 + 'vw'}} alt='linkedin'/>LinkedIn</a>
          <span> | </span><a href="https://res.cloudinary.com/dxllpi9sq/image/upload/v1574214708/Personal/Petra_Laohakul_Resume_yugy4q.pdf" target="_blank" rel="noopener noreferrer" ><img src={portrait} alt='petra' style={{height: 4 + 'vh', marginRight: .5 + 'vw'}}/>Resume</a>
        </ScrollParallax>

        </ScrollParallax>
   
      </ScrollElement>
    </div>);
  }
}

