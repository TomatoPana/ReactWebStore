import React from "react";
import { Container, Grid, Typography, Card, CardActions, CardActionArea, Button, CardContent } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width:'100%',
      heigth:'100%'
    },
    card: {
      maxWidth: "100%",
    },
    paper: {
      marginTop: '50%',
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
  })
)

const NotFoundComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <div className={classes.paper}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Ups! Esto es un error
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    La página que has solicitado no existe en esta aplicación
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Go back
                </Button>
                <Button size="small" color="primary">
                  Go to home page
                </Button>
              </CardActions>
            </Card>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
  
}

export default NotFoundComponent;