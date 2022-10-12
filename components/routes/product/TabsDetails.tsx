import { useMediaQuery } from "@mui/material";
import Top from "./tabs/Top";
import TabPanel from "./tabs/TabPanel";
import TabPanelXS from "./tabs/TabPanelXS";
const TabsDetails = () => {
  const mdWidth = useMediaQuery('(min-width:900px)')
  return (
    <>
      {mdWidth && <Top />}
      {mdWidth ? <TabPanel /> : <TabPanelXS />}
    </>
  );
};
export default TabsDetails;
