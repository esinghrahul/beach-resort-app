import React from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaWifi} from 'react-icons/fa'

import Title from './title.component'

export default class Services extends React.Component{
    state={
        services: [
            {
                icon: <FaCocktail />,
                title: "Free cocktails",
                info: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
            },
            {
                icon: <FaHiking />,
                title: "hiking expeditions",
                info: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shuttle",
                info: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
            },
            {
                icon: <FaWifi />,
                title: "Free 24x7 wifi",
                info: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
            }
        ]
    }
    render(){
        return(
            <section className='services'>
                <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return <article key= {index} className= 'service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}