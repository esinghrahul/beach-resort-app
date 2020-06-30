import React from 'react'
import Room from './room.component'

const RoomList= ({rooms}) => {
    if(rooms.length === 0){
        return(
            <div className="empty-search">
                <h3>Sorry, we couldn't find any rooms matching your search criteria</h3>
            </div>
        )
    }
    return <section className="roomslist">
        <div className="roomslist-center">
            {
                rooms.map(item => {
                    return <Room key = {item.id} room={item} />
                })
            }
        </div>
    </section>
}

export default RoomList