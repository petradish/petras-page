import ScrollAnim from 'rc-scroll-anim';
import React from 'react';
import {Link} from 'gatsby';
import SEO from './SEO'
import githubLogo from '../static/GitHub-Mark-64px.png'
import liLogo from '../static/LI-In-Bug.png'
import portrait from '../static/portrait.jpg'
const ScrollParallax = ScrollAnim.Parallax;
const ScrollElement = ScrollAnim.Element;

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      css: { backgroundColor: '#F38EAD', height: '100vh', width: '100vw', margin: -1 },
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
      <SEO 
      title='Petra Laohakul'
      description='Petra Laohakul, developer, Latin tutor, nerd: her personal site for dev projects and other geekery.'
      image={portrait}
      />
      
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
           backgroundColor: '#3FD8B8',
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
          overflow: 'hidden', width: '100vw', height: '150vh'
        }}
      >
        <div className="page2-title">Projects</div>
        <div className="page2-description">
        <p>I mostly code in the NERDS stack: Node, Express, React/Redux & Databases with Sequel</p>
        <br></br>
      
        </div>
        <ScrollParallax
          animation={{ x: -300, translateY: -40, opacity: 1, ease: 'linear', playScale: [0, 1.2] }}
          style={{ transform: 'translateY(40px)', color: '#fff' }}
        >
          <a href='http://octopuss-garden.herokuapp.com' target="_blank" rel="noopener noreferrer" ><img
            src="https://res.cloudinary.com/dxllpi9sq/image/upload/v1574211219/Personal/UNADJUSTEDNONRAW_thumb_4_fudcjc.jpg"
            style={{ width: '35vw' }}
            alt="Octopuss-Garden"
          /></a>
        </ScrollParallax>
        <ScrollParallax
          animation={{ x: 300, translateY: -150, opacity: 1, ease: 'linear', playScale: [0, 2] }}
          style={{ transform: 'translateY(60px)', color: '#fff'}}
        >
          <a href='http://cindr.herokuapp.com' target="_blank" rel="noopener noreferrer"><img
            src="https://res.cloudinary.com/dxllpi9sq/image/upload/v1574211229/Personal/UNADJUSTEDNONRAW_thumb_5_dzwrro.jpg"
            style={{ width: '35vw' }}
            alt="Cindr"
          /></a>
        </ScrollParallax>
        <ScrollParallax
          animation={{ x: 200, translateY: -300, opacity: 1, ease: 'linear', playScale: [0, 1.5] }}
          style={{ transform: 'translateY(100px)', color: '#fff' }}
        >
        <a href='http://github.com/The-Outlaws/Cindr2' target="_blank" rel="noopener noreferrer" >
          <img
            src="https://res.cloudinary.com/dxllpi9sq/image/upload/v1574212280/Personal/CindrStack_wo4g4r.png"
            style={{ width: '35vw' }}
            alt="Cindr Repo"
          /></a>
        </ScrollParallax>
       
      </div>


      <ScrollElement style={{ height: '200vh', width: '100vw' }} id="Scroll-Pack">
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
            animation={{ translateX: '0vw', playScale: [1, 2] }}
            style={{
              transform: 'translateX(-100vw)',
              backgroundColor: '#3FD8B8',
              width: '100vw',
              height: '100vh',
              position: 'fixed',
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
            <div className='contact-text'>Get in touch at <a href="http://www.linkedin.com/in/petra-laohakul"target="_blank" rel="noopener noreferrer"><img src={liLogo} style={{height: 4 + 'vh', marginRight: .5 + 'vw'}} alt='linkedin'/>LinkedIn!</a></div>
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
        </ScrollParallax>

        </ScrollParallax>
   
      </ScrollElement>
    </div>);
  }
}

