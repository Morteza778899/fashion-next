import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
  );
};
export default AccordionLayout;
