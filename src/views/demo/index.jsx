import Indicator from "@/base-ui/indicator";
import classNames from "classnames";
import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";

const Demo = memo(() => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (isPrev) => {
    let index = activeIndex;
    if (isPrev) {
      index > 0 && index--;
      // 计算移动的位置，当前块的offsetLeft
    } else {
      index < list.length - 1 ? index++ : (index = 0);
    }
    setActiveIndex(index);
  };
  return (
    <DemoWrapper>
      <button onClick={(e) => handleClick(true)}>上一个</button>
      <button onClick={(e) => handleClick(false)}>下一个</button>
      <Indicator selectIndex={activeIndex}>
        {list.map((item, index) => (
          <div
            key={item}
            className={classNames([
              "indictor-item",
              { "indicate-active": activeIndex === index },
            ])}
          >
            {item}
          </div>
        ))}
      </Indicator>
    </DemoWrapper>
  );
});

export default Demo;
