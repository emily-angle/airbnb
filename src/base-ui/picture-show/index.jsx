import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconClose from "@/assets/svg/icon-close";
import IconTriangleBottom from "@/assets/svg/icon-triangle-bottom";
import IconTriangleTop from "@/assets/svg/icon-triangle-top";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import classNames from "classnames";
import React, { memo, useState } from "react";
import Indicator from "../indicator";
import { PictureShowWrapper } from "./style";

const PictureShow = memo((props) => {
  const { pictures, handleClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showList, setShowList] = useState(true);
  const [isNext, setIsNext] = useState(true);
  const handleNext = (isNext = true) => {
    if (isNext && currentIndex == pictures.length - 1) {
      setCurrentIndex(0);
      return;
    }
    if (currentIndex == 0 && !isNext) {
      setCurrentIndex(pictures.length - 1);
      return;
    }

    setCurrentIndex(isNext ? currentIndex + 1 : currentIndex - 1);
    setIsNext(isNext);
  };
  return (
    <PictureShowWrapper isNext={isNext}>
      <div className="top">
        <div className="close-btn" onClick={handleClick}>
          {" "}
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="controls">
          <div className="btn left" onClick={(e) => handleNext(false)}>
            <IconArrowLeft width={77} height={77} />
          </div>
          <div className="btn right" onClick={(e) => handleNext(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictures[currentIndex]}
              timeout={150}
              classNames="fade"
            >
              <img src={pictures[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="desc">
          <div className="count">
            <span>
              {currentIndex + 1}/{pictures.length}：
            </span>
            <span>room Apartment图片{currentIndex + 1}</span>
          </div>
          <div className="toggle" onClick={(e) => setShowList(!showList)}>
            {showList ? "隐藏" : "显示"}图片
            {showList ? <IconTriangleBottom /> : <IconTriangleTop />}
          </div>
        </div>
        {showList && (
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictures.map((item, index) => (
                <img
                  src={item}
                  alt=""
                  key={item}
                  onClick={(e) => {
                    if (index === currentIndex) return;
                    handleNext(index > currentIndex);
                  }}
                  className={classNames({ active: currentIndex === index })}
                />
              ))}
            </Indicator>
          </div>
        )}
      </div>
    </PictureShowWrapper>
  );
});

export default PictureShow;
