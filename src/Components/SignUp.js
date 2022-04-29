import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [postId, setPostId] = useState("");
  const handleLogIn = async (e) => {
    console.log("first");

    let payload = {
      firstName: fName,
      lastName: lName,
      email: email,
      password: password,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    fetch("http://192.168.0.120:3000/api/user", requestOptions).then(
      (response) => response.json().then((data) => setPostId(data))
    );
  };
  useEffect(() => {
    if (postId.message == "Users Inserted successfully") {
      navigate("/login");
    }
  }, [postId]);
  return (
    <Container width="100vh">
      <Grid
        item
        container
        xs={12}
        component="main"
        sx={{
          width: "60vh",
          height: "60vh",
          padding: "5vh",
          marginTop: "4%",
          marginLeft: "auto",
          marginRight: "auto",
          border: "1px solid black",
        }}
      >
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5">AM SOCIAL</Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            required
            onChange={(e) => setFName(e.target.value)}
            size="small"
            id="fname"
            type="text"
            error={false}
            placeholder="First Name"
            name="fname"
            autoComplete="fname"
            autoFocus
            sx={{ minWidth: "80%", textAlign: "center" }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            required
            size="small"
            id="lname"
            type="text"
            error={false}
            placeholder="Last Name"
            name="lname"
            onChange={(e) => setLName(e.target.value)}
            autoComplete="lname"
            sx={{ minWidth: "80%", textAlign: "center" }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            required
            onChange={(e) => setEmail(e.target.value)}
            size="small"
            id="email"
            type="email"
            error={false}
            placeholder="Email Address"
            name="email"
            autoComplete="email"
            sx={{ minWidth: "80%", textAlign: "center" }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            size="small"
            required
            name="password"
            placeholder="password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={false}
            sx={{ minWidth: "80%" }}
          />
        </Grid>
        <Grid
          xs={12}
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            type="submit"
            color="inherit"
            variant="contained"
            sx={{ minWidth: "50%" }}
            onClick={(e) => handleLogIn(e)}
          >
            Sign Up
          </Button>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {postId != "" && (
            <Box
              color="red"
              sx={{
                textAlign: "center",
                m: 1,
                textTransform: "lowercase",
                fontWeight: "regular",
                fontStyle: "italic",
              }}
            >
              {postId ? postId.message : ""}
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default SignUp;
