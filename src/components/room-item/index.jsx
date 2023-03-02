import PropTypes from "prop-types";
import React, { memo, useRef,useState } from "react";
import { RoomItemWrapper } from "./style";
import Rating from "@mui/material/Rating";
import { Carousel } from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";
const RoomItem = memo((props) => {
  const { item, itemWidth, itemHandleClick } = props;
  const sliderRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const prevClick = () => {
    let index = activeIndex;
    index > 0 && index--;
    sliderRef.current.prev();
    setActiveIndex(index);
  };
  const nextClick = () => {
    let index = activeIndex;
    index < item.picture_urls.length - 1 ? index++ : (index = 0);
    sliderRef.current.next();
    setActiveIndex(index);
  };
  const itemClick = () => {
    itemHandleClick && itemHandleClick();
  };

  return (
    <RoomItemWrapper
      textColor={item?.verify_info?.text_color ?? "#767676"}
      itemWidth={itemWidth}
    >
      {item.picture_urls && item.picture_urls?.length ? (
        <div className="slider-wrapper">
          <div className="arrow-left" onClick={prevClick}>
            <IconArrowLeft width={30} height={30} />
          </div>
          <div className="arrow-right" onClick={nextClick}>
            <IconArrowRight width={30} height={30} />
          </div>
          <div className="indicator">
            <Indicator  selectIndex={activeIndex}>
              {item?.picture_urls.map((dot,index)=><div className="indictor-item"  key={dot}>
              <span className={classNames([
              "dot-item",
              { "indicate-active": activeIndex === index },
            ])} ></span>
            </div>)}
            </Indicator>
          </div>
          <Carousel ref={sliderRef} dots={false} >
            {item.picture_urls.map((_iten) => (
              <div className="cover" key={_iten} onClick={(e) => itemClick()}>
                <img src={_iten} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        <div className="cover">
          <img src={item.picture_url} alt="" />
        </div>
      )}
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
  itemHandleClick: PropTypes.func,
};

export default RoomItem;
