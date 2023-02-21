import React, { memo } from "react";
import SectionHeader from "@/components/section-header";
import SectionFooter from "@/components/section-footer";
import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";

import { HomeSectionV3Wrapper } from "./style";

const HomeSectionV3 = memo((props) => {
  const { infoData } = props;
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <ScrollView>
        {infoData?.list?.map((item) => (
          <RoomItem item={item} key={item.id} itemWidth={"20%"} />
        ))}
      </ScrollView>
      <SectionFooter desc="plus" />
    </HomeSectionV3Wrapper>
  );
});

export default HomeSectionV3;
