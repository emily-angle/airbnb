
import React, { memo } from "react";
import { SectionFooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo((props) => {
  const { desc } = props;
  const Icon = <IconMoreArrow />;
  const navigate=useNavigate()

  const moreHandleClick = () => {
    navigate("/entire")
  };
  return (
    <SectionFooterWrapper>
      {desc ? (
        <div className="footer-more">
          <span className="footer" onClick={moreHandleClick}>
            查看更多{desc}房源
          </span>
          {Icon}
        </div>
      ) : (
        <div>
          <span className="footer">显示全部</span>
          {Icon}
        </div>
      )}
    </SectionFooterWrapper>
  );
});

SectionFooter.propTypes = {};

export default SectionFooter;
