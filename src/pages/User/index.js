import { Button, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginData, logout } from "../../features/auth/authSlice";

function User() {
  const navigate = useNavigate();
  const userData = useSelector(loginData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData.token) {
      navigate("/login");
    }

    if (userData.data.role_id !== 1) {
      navigate("/transaction");
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
      <Typography variant="body">User page</Typography>
      <Link href="/transaction">Transaction Page</Link>
      <Link href="/">Home Page</Link>
      <Button variant="text" onClick={() => dispatch(logout())}>
        Keluar
      </Button>
    </Box>
  );
}

export default User;
