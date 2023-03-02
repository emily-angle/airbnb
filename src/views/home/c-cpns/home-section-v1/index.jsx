import React, { memo } from "react";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

import { HomeSectionWrapper } from "./style";
import SectionFooter from "@/components/section-footer";

const index = memo((props) => {
  const { title, list, subtitle } = props?.infoData;

  return (
    <HomeSectionWrapper>
      {/* 标题 */}
      <SectionHeader title={title} subtitle={subtitle} />
      {/* 列表 */}
      <SectionRooms roomList={list?.slice(0, 8)} width={"25%"} />
      <SectionFooter />
    </HomeSectionWrapper>
  );
});

export default index;
