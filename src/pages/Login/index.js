import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, loginData } from "../../features/auth/authSlice";
import { authLogin } from "../../features/auth/authAPI";

function Login() {
  const userData = useSelector(loginData);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      const res = await authLogin(data);

      if (res.data) {
        dispatch(login(res));
        navigate("/user");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (userData.token) {
      navigate("/user");
    }
  });

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#EAEAEA",
      }}
    >
      <Box
        component="form"
        sx={{
          gap: "20px",
          padding: "30px",
          borderRadius: "5px",
          background: "#FFFFFF",
          boxShadow: "0 0 20px 0 #b4b4b4",
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5" align="center">
          Login
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type={"email"}
          onChange={(e) => {
            setData({
              ...data,
              email: e.target.value,
            });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type={"password"}
          onChange={(e) => {
            setData({
              ...data,
              password: e.target.value,
            });
          }}
        />
        <br />
        <br />
        <Button variant="contained" onClick={onLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
