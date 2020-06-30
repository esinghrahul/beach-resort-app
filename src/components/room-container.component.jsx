//Implementing Cosumer using Higher Order Component approach

import React from "react";
import RoomList from "./room-list.component";
import { withRoomConsumer } from "../context";
import Loading from "./loading.component";

function RoomContainer({context}){
    const {loading, sortedRooms, rooms}= context
          if(loading){
              return <Loading />
          }
        return (
          <>
            Hello
            <RoomList rooms= {sortedRooms} />
          </>
        );
}

export default withRoomConsumer(RoomContainer)

//Usual Consumer implementation of context in a functional component
/*
import React from "react";
import RoomList from "./room-list.component";
import { RoomConsumer } from "../context";
import Loading from "./loading.component";

const RoomContainer = () => {
  return (
    <RoomConsumer>
      {(value) => {
          const {loading, sortedRooms, rooms}= value
          if(loading){
              return <Loading />
          }
        return (
          <div>
            Hello
            <RoomList rooms= {sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomContainer;

*/
