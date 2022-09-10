import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface Iprops {
  children?: React.ReactNode;
  title: string;
  firstOpen: boolean;
}

const AccordionLayout: FC<Iprops> = ({ children, title, firstOpen }) => {
  const [open, setOpen] = useState(firstOpen);
  return (
    <Box
      sx={{
        "& .MuiAccordion-root ": {
          boxShadow: "none",
        },
        "& .MuiAccordion-root.Mui-expanded": {
          my: "0px !important",
          mb: "10px !important",
        },
        "& .MuiAccordionSummary-root": {
          minHeight: "unset !important",
          px: 0,
        },
        "& .MuiAccordionSummary-content": {
          m: 0,
          py: 2,
        },
        "& .MuiAccordionSummary-content.Mui-expanded": {
          my: "0px !important",
        },
        "& .MuiAccordionDetails-root": {
          p: 0,
          py: 2,
        },
      }}
    >
      <Accordion expanded={open} square={true} dir="rtl">
        <AccordionSummary
          onClick={() => setOpen(!open)}
          expandIcon={open ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            ":hover": {
              color: "primary.main",
            },
          }}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default AccordionLayout;
