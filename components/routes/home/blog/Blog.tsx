import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { blogPages } from "../../../../public/info/blogData";
import Image from "next/image";

const Blog = () => {
  return (
    <Box sx={{ my: 10,maxWidth:1200,mx:'auto' }}>
      <Stack direction="column" alignItems="center" gap={5}>
        <Link
          href="#"
          color="black"
          sx={{ whiteSpace: "nowrap", ":hover": { color: "primary.main" } }}
        >
          <Typography variant="h4">آخرین مطالب وبلاگ</Typography>
        </Link>
        <Grid container justifyContent={'center'} >
          {blogPages.map((page, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{p:2}} >
              <Stack direction="column" alignItems="center">
                <Link href="#" sx={{ overflow: "hidden" }}>
                  <Box
                    sx={{
                      maxWidth: 370,
                      transition: ".6s all",
                      ":hover": { transform: "scale(1.1)" },
                    }}
                  >
                    <Image src={page.image} alt='' />
                  </Box>
                </Link>
                <Typography variant="h6">{page.title}</Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.5 }}>
                  {page.date}
                  <CalendarMonthIcon sx={{ mr: "5px", mb: -.8 }} />
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};
export default Blog;
