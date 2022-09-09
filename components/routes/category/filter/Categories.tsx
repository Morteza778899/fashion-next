import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const Categories = () => {
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = useState([true, true, true]);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!checked[0] && !checked[1] && !checked[2]) {
      setChecked([true, true, true]);
    } else {
      setChecked([false, false, false]);
    }
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1], checked[2]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked, checked[2]]);
  };
  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], checked[1], event.target.checked]);
  };
  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", mr: 3 }}>
      <FormControlLabel
        label="مرد"
        control={
          <Checkbox
            size="small"
            checked={checked[0]}
            onChange={handleChange2}
          />
        }
      />
      <FormControlLabel
        label="زن"
        control={
          <Checkbox
            size="small"
            checked={checked[1]}
            onChange={handleChange3}
          />
        }
      />
      <FormControlLabel
        label="متفرقه (ناوابسته به جنیست)"
        control={
          <Checkbox
            size="small"
            checked={checked[2]}
            onChange={handleChange4}
          />
        }
      />
    </Box>
  );

  return (
    <Box
      sx={{
        mr: 3,
        "& .MuiAccordionSummary-root": {
          pl: 3,
        },
        "& .MuiPaper-root": {
          mb: 0,
        },
        "& .MuiAccordionSummary-content": {
          p: 0,
          m:0
        },
      }}
    >
      <Accordion expanded={open} square={true} sx={{ width: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon onClick={() => setOpen(!open)} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <FormControlLabel
            label="زن و مرد"
            control={
              <Checkbox
                indeterminate={
                  checked[0] && checked[1] && checked[2]
                    ? false
                    : checked[0] || checked[1] || checked[2]
                }
                checked={checked[0] && checked[1] && checked[2]}
                onChange={handleChange1}
                size="small"
              />
            }
          />
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
      <Stack direction="column">
        <FormControlLabel label="تی‌شرت" control={<Checkbox size="small" />} />
        <FormControlLabel label="پزشکی" control={<Checkbox size="small" />} />
        <FormControlLabel
          label="فروشگاهی"
          control={<Checkbox size="small" />}
        />
        <FormControlLabel label="کارگری" control={<Checkbox size="small" />} />
        <FormControlLabel
          label="ماهیگیری"
          control={<Checkbox size="small" />}
        />
        <FormControlLabel label="گیمینگ" control={<Checkbox size="small" />} />
        <FormControlLabel label="ورزشی" control={<Checkbox size="small" />} />
        <FormControlLabel label="مجلسی" control={<Checkbox size="small" />} />
      </Stack>
    </Box>
  );
};
export default Categories;
