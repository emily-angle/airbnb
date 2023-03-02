import RoomItem from "@/components/room-item";
import { changeDetailAction } from "@/store/modules/detail";

import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EntireRoomsWrapper } from "./style";
const EntireRooms = memo((props) => {
  const { roomlist, totalCount, isLoadding } = useSelector((state) => {
    return {
      roomlist: state.entire.roomlist,
      totalCount: state.entire.totalCount,
      isLoadding: state.entire.isLoadding,
    };
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemHandleClick = useCallback(
    (item) => {
      // 获取数据并将数据存储在redux中，并跳转详情页
      // console.log(item);
      dispatch(changeDetailAction(item))
      navigate("/detail");
    },
    [navigate,dispatch]
  );

  return (
    <EntireRoomsWrapper>
      <h2 className="title">{totalCount}处住宿</h2>
      <div className="list">
        {roomlist.map((item) => (
          <RoomItem
            item={item}
            key={item._id}
            itemHandleClick={(e) => itemHandleClick(item)}
            itemWidth="20%"
          />
        ))}
      </div>
      {isLoadding && <div className="cover"></div>}
    </EntireRoomsWrapper>
  );
});

export default EntireRooms;
