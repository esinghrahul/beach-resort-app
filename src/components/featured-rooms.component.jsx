import React from 'react'
import {RoomContext} from '../context'
import Loading from './loading.component'
import Room from './room.component'

export default class FeaturedRooms extends React.Component{
    static contextType = RoomContext
    render(){
        const {featuredRooms: rooms} = this.context
        console.log(rooms)
        return(
            <div>Hello from featured rooms
                <Room />
                <Loading />
            </div>
        )
    }
}