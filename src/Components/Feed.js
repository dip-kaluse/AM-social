import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import axios from "axios";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Header from "./Header";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
function Feed() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || ""
  );
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://192.168.0.120:3000/api/feed/", {
        headers: {
          "auth-token": token.token,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert("Access Denied");
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [token]);
  console.log(data);
  return (
    <Container>
      <Grid xs={12}>
        <Grid
          item
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Header></Header>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ marginTop: "1%" }}
        >
          {data != "" &&
            data.feeds.map((obj, index) => {
              return (
                <Card sx={{ maxWidth: 345, marginRight: "1%" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://ca.slack-edge.com/T0B4MLUM9-U02SUGS5MJM-46680907b77c-512"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <IconButton aria-label="add to favorites">
                        <CommentIcon />
                      </IconButton>
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Comment:</Typography>
                      <TextField
                        required
                        size="small"
                        id="fname"
                        type="text"
                        error={false}
                        placeholder="Comment"
                        name="fname"
                        autoComplete="fname"
                        autoFocus
                        sx={{ minWidth: "80%", textAlign: "center" }}
                      />
                      <IconButton aria-label="add to favorites">
                        <ArrowCircleRightIcon />
                      </IconButton>
                    </CardContent>
                  </Collapse>
                </Card>
              );
            })}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Feed;
