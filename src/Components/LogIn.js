import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const handleLogIn = async (e) => {
    console.log("first");
    let payload = {
      email: email,
      password: password,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    fetch("http://192.168.0.120:3000/api/user/login", requestOptions).then(
      (response) => response.json().then((data) => setToken(data))
    );
  };
  useEffect(() => {
    if (token.token) {
      localStorage.setItem("token", JSON.stringify(token));
      navigate("/");
    }
  }, [token]);
  return (
    <Container>
      <Grid
        item
        container
        xs={12}
        component="main"
        sx={{
          width: "50vh",
          height: "60vh",
          padding: "5vh",
          marginTop: "4%",
          marginLeft: "auto",
          marginRight: "auto",
          border: "2px solid",
          borderColor: "secondary.main",
        }}
      >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              color="secondary.main"
              sx={{ fontWeight: "light" }}
              // variant="h3"
            >
              AM SOCIAL
            </Typography>
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
              onChange={(e) => setEmail(e.target.value)}
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
              size="small"
              required
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={false}
              sx={{ minWidth: "80%", marginBottom: "10%" }}
            />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1}>
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
              onClick={(e) => handleLogIn(e)}
              variant="contained"
              sx={{ minWidth: "50%" }}
            >
              LogIn
            </Button>
          </Grid>

          <Grid
            rowSpacing={2}
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                textAlign: "center",
                m: 1,
                fontWeight: "regular",
                fontStyle: "italic",
                marginTop: "20%",
              }}
            >
              Dont have account{" "}
              <Box component={Link} to="/signup">
                signup
              </Box>{" "}
              here!
            </Box>
          </Grid>
        </Grid>
        <Grid
          // rowSpacing={2}
          xs={12}
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            type="submit"
            variant="contained"
            color="inherit"
            sx={{ minWidth: "50%", float: "left", marginTop: "2%" }}
          >
            LogIn With Google
          </Button>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {token != "" && (
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
              {token ? token.message : ""}
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default LogIn;
