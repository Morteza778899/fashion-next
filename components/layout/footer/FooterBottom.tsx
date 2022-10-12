import { Box, useMediaQuery } from "@mui/material";
import FooterBottomMD from "./FooterBottomMD";
import FooterBottomXS from "./FooterBottomXS";

const FooterBottom = () => {
  const mdWidth = useMediaQuery('(min-width:900px)');
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: { xs: 2, lg: "auto" },
        my: { xs: 2, sm: 4, md: 6 },
        mt: 10,
        "& li p": {
          cursor: "pointer",
          transition: ".3s all",
          ":hover": { color: "primary.dark", letterSpacing: 1 },
        },
        "& li": {
          justifyContent: "right",
          px: 0,
          py: 0.8,
        },
      }}
      className="bottom-footer"
    >
      {mdWidth ? (
        <FooterBottomMD />
      ) : (
        <FooterBottomXS />
      )}
    </Box>
  );
};
export default FooterBottom;
