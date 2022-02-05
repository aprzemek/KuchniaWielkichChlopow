import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Toolbar } from '@material-ui/core';
import { useDispatch } from 'react-redux'; 
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import bb2 from './images/bb2.jpg';


const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
      <img className={classes.image} src={bb2} alt="icon" height="150" />  
      <Typography className={classes.heading} variant="h2" align="center">Kuchnia Wielkich Chłopów</Typography>
        </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
