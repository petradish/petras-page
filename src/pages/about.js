import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import githubLogo from '../static/GitHub-Mark-64px.png'
import liLogo from '../static/LI-In-Bug.png'
import portrait from '../static/portrait.jpg'
export default () => (
    <Container>
<Link to="/">Home</Link><span> | </span><a href="http://www.github.com/petradish" target="_blank" rel="noopener noreferrer" ><img src={githubLogo} style={{height: 4 + 'vh', marginRight: .5 + 'vw'}} alt='github'/>Github</a>
          <span> | </span><a href="http://www.linkedin.com/in/petra-laohakul"target="_blank" rel="noopener noreferrer"><img src={liLogo} style={{height: 4 + 'vh', marginRight: .5 + 'vw'}} alt='linkedin'/>LinkedIn</a>
          <span> | </span><a href="https://res.cloudinary.com/dxllpi9sq/image/upload/v1574214708/Personal/Petra_Laohakul_Resume_yugy4q.pdf" target="_blank" rel="noopener noreferrer" ><img src={portrait} alt='petra' style={{height: 4 + 'vh', marginRight: .5 + 'vw'}}/>Resume</a>
    <h1>About Petra</h1>
    <h2>She's a nerd. Ask her anything.</h2>
    <p>Born and raised in Jackson Heights, Queens, to a family of Thai immigrants (hence the fun last name), I was taught to work hard and keep out of trouble. I listened to the wisdom of my parents, but I also learned to live a little more dangerously and a lot more passionately.</p>
    <br></br>
    <p>The dangerous:</p>
    <p>I ride a 200cc Aprilia Scarabeo across the boroughs.</p>
    <br></br>
    <p>The passionate:</p>
    <p>I gambled with my future and studied Latin and Greek in college, just cuz.</p>
    <p>I dance numerous dance styles. I dance with my whole soul and share that with others within the dance and also through organizing dance events.</p>
    <p>I've had multiple careers, ranging from teacher to non-profit development. Now, I'm pursuing software development. But my favorite job so far has been selling plants at the Brooklyn Botanic Garden shop.</p>
    <br></br>
    <p>I love meeting and learning from people. Dance has transformed me into a much more open and accepting human. Because of it, I've met a lot of generous folks who have introduced and given me opportunities of all kinds, like editing a natural wine newsletter, NYC backyard grilling, food co-op-ing, Latin tutoring, coding; and I feel very fortunate and grateful.</p>
    <p></p>

  </Container>
)