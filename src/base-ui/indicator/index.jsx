import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const swipperRef = useRef();

  useEffect(() => {
    const children = swipperRef.current.children;
    const currentItem = children[selectIndex];
    const offsetLeft = currentItem.offsetLeft;
    const itemWidth = currentItem.clientWidth;

    const clientWidth = swipperRef.current.clientWidth;

    let translateX = 0.5 * clientWidth - offsetLeft - 0.5 * itemWidth;
    if (translateX > 0) {
      translateX = 0;
    }
    if (translateX < clientWidth - swipperRef.current.scrollWidth) {
      translateX = clientWidth - swipperRef.current.scrollWidth;
    }

    swipperRef.current.style.transform = `translateX(${Math.ceil(
      translateX
    )}px)`;
  }, [selectIndex]);
  return (
    <IndicatorWrapper>
      <div className="indicator-content" ref={swipperRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
