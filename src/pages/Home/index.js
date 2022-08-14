import React from "react";
import { Box, Link, Typography } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: 2,
      }}
    >
      <Typography variant="body">Home page</Typography>
      <Link href="/login">Login Page</Link>
    </Box>
  );
}

export default Home;
