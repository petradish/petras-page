import React from "react"
import Header from '../components/header'
import { Link } from "gatsby"
import Container from "../components/container"
export default () => (
    <Container>
<Link to="/">Home</Link>
    <Header headerText="About Petra" />
    <Header headerText="She's a nerd. Ask her anything." />

  </Container>
)