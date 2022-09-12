import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { blogPages } from "../../../../public/info/blogData";
import Image from "next/image";

const Blog = () => {
  return (
    <Box sx={{ my: 10 }}>
      <Stack direction="column" alignItems="center" gap={5}>
        <Link
          href="#"
          color="black"
          sx={{ whiteSpace: "nowrap", ":hover": { color: "primary.main" } }}
        >
          <Typography variant="h4">آخرین مطالب وبلاگ</Typography>
        </Link>
        <Stack gap={4}>
          {blogPages.map((page, index) => (
            <Stack key={index} direction="column" alignItems="center" gap={1}>
              <Link href="#" sx={{ overflow: "hidden" }}>
                <Box
                  sx={{
                    maxWidth: 370,
                    transition: ".6s all",
                    ":hover": { transform: "scale(1.1)" },
                  }}
                >
                  <Image src={page.image} />
                </Box>
              </Link>
              <Typography variant="h6">{page.title}</Typography>
              <Typography variant="subtitle1" sx={{ opacity: 0.5 }}>
                {page.date}
                <CalendarMonthIcon sx={{ mr: "5px", mb: -.8 }} />
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
export default Blog;
