import React from 'react'
import Hero from '../components/hero.component'

const Home = () => {
    return(
        <Hero></Hero>
    )
}

Hero.defaultProps= {
    hero: 'defaultHero'
}

export default Home