import React from 'react'
import Hero from '../components/hero.component'
import Banner from '../components/banner.component'
import { Link } from 'react-router-dom'
import Services from '../components/services.component'
import FeaturedRooms from '../components/featured-rooms.component'

const Home = () => {
    return(
        <React.Fragment>
        <Hero>
            <Banner title="Luxurious Rooms" subtitle="Deluxe rooms starting at $299">
                <Link to= '/rooms' className="btn-primary">Our rooms</Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </React.Fragment>
    )
}

Hero.defaultProps= {
    hero: 'defaultHero'
}

export default Home