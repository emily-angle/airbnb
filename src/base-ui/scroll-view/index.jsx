import React, { memo, useEffect, useRef, useState } from "react";
import IconArrowLeft from "../../assets/svg/icon-arrow-left";
import IconArrowRight from "../../assets/svg/icon-arrow-right";
import { ScrollViewWrapper } from "./style";
const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [currentPosIndex, setCurrentPosIndex] = useState(0);
  const wrapperRef = useRef();
  const totalDistanceRef = useRef(0);

  const leftHandleClick = () => {
    scrollPostion(currentPosIndex - 1);
  };

  const rightHandleClick = () => {
    scrollPostion(currentPosIndex + 1);
  };
  const scrollPostion = (index) => {
    setCurrentPosIndex(index);

    const scrollLeft = wrapperRef.current.children[index].offsetLeft;
    wrapperRef.current.style.transform = `translateX(-${scrollLeft}px)`;

    setShowRight(scrollLeft < totalDistanceRef.current);

    setShowLeft(index > 0);
  };
  useEffect(() => {
    const scrollWidth = wrapperRef.current.scrollWidth;
    const clientWidth = wrapperRef.current.clientWidth;
    totalDistanceRef.current = scrollWidth - clientWidth;
    if (totalDistanceRef.current > 0) {
      setShowRight(true);
    } else {
      setShowRight(false);
    }
  }, [props.children]);
  return (
    <ScrollViewWrapper>
      {showLeft && (
        <button className="control arrow-left" onClick={leftHandleClick}>
          <IconArrowLeft />
        </button>
      )}
      {showRight && (
        <button className="control arrow-right" onClick={rightHandleClick}>
          <IconArrowRight />
        </button>
      )}
      <div className="tab-content">
        <div ref={wrapperRef} className="scroll-content">
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;
