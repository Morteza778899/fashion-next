import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FC, SyntheticEvent, useState } from 'react';
import { styled } from '@mui/system';
import Size from './Size';
import Description from './Description';
import Tags from './Tags';
import Reviews from './Reviews';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className='animate__animated animate__fadeIn'
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    sx={{
      "& .MuiTabs-flexContainer": {
        flexDirection: 'row-reverse'
      }
    }}
    {...props}
    TabIndicatorProps={{ children: <> <span className="MuiTabs-indicatorSpan" /></> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '50%',
    backgroundColor: '#12816f',
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 900,
  fontSize: '1.1rem !important',
  '&.Mui-selected': {
    color: '#12816f',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#12816f',
  },
}));

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      maxWidth: 1200, mx: 'auto', mb: 10, "& .MuiTab-root": {
        ":after": {
          position: "absolute",
          bottom: "0",
          display: "block",
          width: 0,
          height: "2px",
          content: "''",
          transition: '.2s',
          bgcolor: '#12816f5c'
        },
        ":hover": {
          ":after": {
            width: 'calc(50% - 0px)'
          }
        }
      }
    }}>
      <Box >
        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <StyledTab label="توضیحات" {...a11yProps(0)} />
          <StyledTab label="راهنمای اندازه‌گیری" {...a11yProps(1)} />
          <StyledTab label="تگ‌های مربوطه" {...a11yProps(2)} />
          <StyledTab label="دیدگاه‌ها" {...a11yProps(3)} />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Description />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Size />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Tags />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Reviews />
      </TabPanel>
    </Box>
  );
}
