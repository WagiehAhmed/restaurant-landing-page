import { Box, InputAdornment, useMediaQuery } from "@mui/material";
import React from "react";
import { CustomButton, CustomForm, CustomFormControl, CustomTextFeild } from "../../Styles";
import { theme } from "../../Styles/themes";
import { useNavigate } from "react-router-dom";


import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";

const Login = () => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        // border: "2px solid red",
        backgroundColor:"rgba(100,200,150,0.25)",
        boxSizing: "border-box",
        height: "100dvh",
      }}
    >
      <CustomForm className="center-form" sizes={matches}>
        <CustomFormControl sizes={matches}>
            <CustomTextFeild
            placeholder="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon />
                </InputAdornment>
              ),
            }}
            key="email"
            name="email"
            variant="outlined"
            type="email"
            required
            />
            <CustomTextFeild
            placeholder="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* <MailIcon color={email ? "primary2" : "inherit"} /> */}
                  <LockIcon  />
                </InputAdornment>
              ),
            }}
            key="password"
            name="password"
            variant="outlined"
            type="password"
            required/>

            <CustomButton>
            {/* <CustomButton onClick={()=>navigate("/dashboard",{replace:true})}> */}
                login
            </CustomButton>
        </CustomFormControl>
      </CustomForm>
    </Box>
  );
};

export default Login;
