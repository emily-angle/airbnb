import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionFooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";

const SectionFooter = memo((props) => {
  const { desc } = props;
  const Icon = <IconMoreArrow />;
  return (
    <SectionFooterWrapper>
      {desc ? (
        <div className="footer-more">
          <span className="footer">查看更多{desc}房源</span>
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
