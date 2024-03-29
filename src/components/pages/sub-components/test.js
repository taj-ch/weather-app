import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function WeatherCard() {
    // const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
    //const {key} = this.props.key
        return (
            <div>
                
                 <Card>
                    <CardContent>
                    
                    test
                    </CardContent>
                    <CardActions>
                        <Button size="small">{this.props.wxrDay[1]}</Button>
                    </CardActions>
                </Card>
            </div>
        )
}

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

