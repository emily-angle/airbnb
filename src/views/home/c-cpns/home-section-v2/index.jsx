import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import SectionHeader from "@/components/section-header";
import { HomeSectionV2Wrapper } from "./style";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;
  const [name, setName] = useState(Object.keys(infoData.dest_list)[0]);
  const handleTabClick = useCallback((currentName) => {
    // console.log(currentName)
    setName(currentName);
  }, []);

  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />

      <SectionTabs
        activeName={name}
        tabs={infoData.dest_address}
        handleTabClick={handleTabClick}
      />
      <SectionRooms
        roomList={infoData.dest_list?.[name]?.slice(0, 6)}
        width={"33.3333%"}
      />
      <SectionFooter desc={name}/>
    </HomeSectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {};

export default HomeSectionV2;
