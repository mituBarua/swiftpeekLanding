// ** React Imports
import { useState, useEffect } from "react";

// ** MUI Imports
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import TabContext from "@mui/lab/TabContext";
import useMediaQuery from "@mui/material/useMediaQuery";

import TabAccount from "./TabAccount";
import TabBilling from "./TabBilling";

// ** Icon Imports
import Icon from "../../../@core/components/icon";


const AccountSettings = ({ tab }) => {
  // ** State
  const [activeTab, setActiveTab] = useState(1);
  const hideText = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  // useEffect(() => {
  //   if (tab && tab !== activeTab) {
  //     setActiveTab(tab);
  //   }
  // }, [tab]);
  const tabStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "40px",
  };


  return (
    <Grid spacing={6} >
      <Grid item xs={12}>
        <TabContext>
          <Grid container spacing={6}>
            <Grid item xs={12} style={tabStyle}>
              <Tab
              style={{  backgroundColor: activeTab == 1 ? 'black' : 'transparent',}}
                onClick={() => handleChange(1)}
                value="account"
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      ...(!hideText && { "& svg": { mr: 2 } }),
                    }}
                  >
                    <Icon icon="mdi:account-outline" />
                    {!hideText && "Account"}
                  </Box>
                }
              />

              <Tab
              style={{  backgroundColor: activeTab == 2 ? 'black' : 'transparent',}}
                onClick={() => handleChange(2)}
                value="billing"
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      ...(!hideText && { "& svg": { mr: 2 } }),
                    }}
                  >
                    <Icon icon="mdi:bookmark-outline" />
                    {!hideText && "Billing"}
                  </Box>
                }
              />
            </Grid>
            {activeTab === 1 && <TabAccount />}
            {activeTab === 2 && <TabBilling />}
          </Grid>
        </TabContext>
      </Grid>
    </Grid>
  );
};

export default AccountSettings;
