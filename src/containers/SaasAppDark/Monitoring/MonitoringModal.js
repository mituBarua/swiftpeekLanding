import { Modal } from "@redq/reuse-modal";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import List from "common/components/List";
import Text from "common/components/Text";
import React from "react";
import {
  monitoringFeatures,
  monitoringModalFeature,
} from "common/data/SaasAppDark";
import FeatureBlock from "common/components/FeatureBlock";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const style2 = {
  marginLeft: "10px",
};
function MonitoringModal({ show, close }) {
  console.log(show, close);
  return (
    <Box sx={style}>
      <Heading content="Bullet Points" />
      {monitoringModalFeature?.map((monitoringFeature) => (
        <FeatureBlock
          icon={<i className={monitoringFeature.icon} />}
          iconPosition="left"
          title={
            <Text
              style={{ marginLeft: "10px" }}
              content={monitoringFeature.title}
            />
          }
        />
      ))}
    </Box>
  );
}

export default MonitoringModal;
