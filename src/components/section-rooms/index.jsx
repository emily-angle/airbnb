import PropTypes from "prop-types";
import React, { memo } from "react";

import RoomItem from "@/components/room-item";
import { SectionRoomsWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList, width } = props;
  return (
    <SectionRoomsWrapper >
      {roomList?.map((item) => (
        <RoomItem key={item.id} item={item} itemWidth={width}/>
      ))}
    </SectionRoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;
