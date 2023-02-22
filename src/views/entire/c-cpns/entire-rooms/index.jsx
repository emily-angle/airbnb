import RoomItem from "@/components/room-item";

import React, { memo } from "react";
import { useSelector } from "react-redux";
import { EntireRoomsWrapper } from "./style";
const EntireRooms = memo((props) => {
  const { roomlist, totalCount, isLoadding } = useSelector((state) => {
    return {
      roomlist: state.entire.roomlist,
      totalCount: state.entire.totalCount,
      isLoadding: state.entire.isLoadding,
    };
  });

  return (
    <EntireRoomsWrapper>
      <h2 className="title">{totalCount}处住宿</h2>
      <div className="list">
        {roomlist.map((item) => (
          <RoomItem item={item} key={item._id} itemWidth="20%" />
        ))}
      </div>
      {isLoadding && <div className="cover"></div>}
    </EntireRoomsWrapper>
  );
});

export default EntireRooms;
