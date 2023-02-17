import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomItemWrapper } from "./style";
import Rating from "@mui/material/Rating";
const RoomItem = memo((props) => {
  const { item,itemWidth } = props;
  return (
    <RoomItemWrapper textColor={item?.verify_info?.text_color ?? "#767676"} itemWidth={itemWidth}>
      <div className="cover">
        <img src={item.picture_url} alt="" />
      </div>
      <div className="desc">{item["verify_info"]?.messages?.join("·")}</div>
      <div className="name">{item.name}</div>
      <div className="price">¥{item.price}/晚</div>
      <div className="rating">
        <Rating
          sx={{ color: item.star_rating_color, fontSize: "9px" }}
          value={item.star_rating ?? 5}
          precision={0.1}
          readOnly
        />
        <span>{item.reviews_count}</span>
        {item.bottom_info && <span>·{item.bottom_info.content}</span>}
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  item: PropTypes.object,
};

export default RoomItem;
