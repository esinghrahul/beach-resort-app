import React from 'react'
import {RoomContext} from '../context'
import Loading from './loading.component'
import Room from './room.component'
import Title from './title.component'

export default class FeaturedRooms extends React.Component{
    static contextType = RoomContext
    render(){
        let {loading, featuredRooms: rooms} = this.context
        rooms = rooms.map(room => {
            return <Room key= {room.id} room= {room} />
        })
        return(
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}