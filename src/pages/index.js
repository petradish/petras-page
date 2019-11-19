import ScrollAnim from 'rc-scroll-anim';
import React from 'react';


const ScrollParallax = ScrollAnim.Parallax;
const ScrollElement = ScrollAnim.Element;
const Link = ScrollAnim.Link;

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      css: { backgroundColor: '#3FD8B8', height: 920 },
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
          style={{ opacity: 0, paddingTop: 2, fontSize: 20, transform: 'scale(0)', }}
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
          height: 850,
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
            color: '#000000'
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
            color: '#000000'
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
            color: '#000000'
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
            color: '#000000'
          }}
          className="text-appear"
        >
          Dance <span className="animate-text"></span> with me!
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
        {/* <ScrollParallax
          animation={{ translateY: 120, opacity: 1, ease: 'linear', playScale: [0, 2] }}
          style={{ transform: 'translateY(420px) scale(.8)', color: '#fff' }}
        >
          <img
            src="https://os.alipayobjects.com/rmsportal/CrVCkwvtTQQvQHL.png"
            style={{ width: 100 }}
            alt="img"
          />
        </ScrollParallax>
        <ScrollParallax
          animation={{ translateY: 20, opacity: 1, ease: 'linear', playScale: [0, 1.5] }}
          style={{ transform: 'translateY(380px) scale(.9)', color: '#fff' }}
        >
          <img
            src="https://os.alipayobjects.com/rmsportal/sfmdyWNlweIvfUh.png"
            style={{ width: 150 }}
            alt="img"
          />
        </ScrollParallax>
        <ScrollParallax
          animation={{ translateY: -100, opacity: 1, ease: 'linear', playScale: [0, 1.2] }}
          style={{ transform: 'translateY(320px)', color: '#fff' }}
        >
          <img
            src="https://os.alipayobjects.com/rmsportal/sfmdyWNlweIvfUh.png"
            style={{ width: 200 }}
            alt="img"
          />
        </ScrollParallax> */}
      </div>


      <ScrollElement style={{ height: 2000 }} id="Scroll-Pack">
        <ScrollParallax
          className="pack-page"
          location="Scroll-Pack"
          animation={{
            backgroundColor: '#3FD8B8',
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
              backgroundColor: '#F38EAD',
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}
            location="Scroll-Pack"
          />
          <ScrollParallax
            animation={[{ translateY: 0 }, { translateY: '450px' }]}
            location="Scroll-Pack"
            style={{
              transform: 'translateY(300px)',
              color: '#fff',
              fontSize: 36,
              textAlign: 'center',
            }}
          >
            Thanks for visiting! Contact me at: <a href = "mailto: petradish@gmail.com">petradish@gmail.com</a>
          </ScrollParallax>
        </ScrollParallax>
      </ScrollElement>
    </div>);
  }
}

