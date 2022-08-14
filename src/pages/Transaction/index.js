import { Box, Button, Link, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginData, logout } from "../../features/auth/authSlice";

function Transaction() {
  const navigate = useNavigate();
  const userData = useSelector(loginData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData.token) {
      navigate("/login");
    }
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: 2,
      }}
    >
      <Typography variant="body">Transaction page</Typography>
      <Link href="/user">User Page</Link>
      <Link href="/">Home Page</Link>
      <Button variant="text" onClick={() => dispatch(logout())}>
        Keluar
      </Button>
    </Box>
  );
}

export default Transaction;
