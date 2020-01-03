import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 700,
  },
  button: {
    background: 'linear-gradient(45deg, #00796b 30%, #43a047 90%)',
    borderRadius: 4,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  alignItemsAndJustifyContent: {
    width: 'auto',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Post = ({ changeView }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.alignItemsAndJustifyContent}>
        <Button className={classes.button} style={{ fontWeight: "bolder" }} onClick={() => { changeView("posts") }}> Back To Posts </Button>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3" style={{ fontWeight: "bolder", textAlign: "center" }}>Post Title</Typography>
            <Typography variant="h6" color="primary" style={{ fontWeight: "bolder", textAlign: "right" }}>Username</Typography>
            <Typography variant="subtitle2" color="textSecondary" style={{textAlign: "right" }}>Time of post</Typography>
            <Typography variant="h6">Post body placeholder text</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" color="primary" style={{ fontWeight: "bolder" }}>Username</Typography>
            <Typography variant="body2">Comment 1 placeholder text</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" color="primary" style={{ fontWeight: "bolder" }}>Username</Typography>
            <Typography variant="body2">Comment 2 placeholder text</Typography>
          </Paper>
        </Grid>
      </Grid>

    </div>
  );
}

export default Post;