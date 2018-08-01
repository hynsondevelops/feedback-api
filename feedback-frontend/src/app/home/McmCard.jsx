import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//MCM Topic Buttons
import McmFeedbackGeneratorLink from '../common/buttons/McmFeedbackGeneratorLink'
import McmTopicIndexLink from '../common/buttons/McmTopicIndexLink'
import McmTopicNewLink from '../common/buttons/McmTopicNewLink'
import McmTopicEditLink from '../common/buttons/McmTopicEditLink'


const styles = {
  card: {
    minWidth: 275,
    width: "50%",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function McmCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
          	Mock Class Mentor
          </Typography>
          <p style={{whiteSpace: "pre-line"}}> Edit paragraph dit paragraph dit paragraphdit paragraphdit paragraphdit paragraph dit paragraph dit paragraph dit paragraphdit paragraph dit paragraph dit paragraph dit paragraph dit paragraph dit paragraph dit paragraph ppppp </p>
          <Grid container spacing={12}>
            <Grid item xs={4} >
              <McmFeedbackGeneratorLink />
            </Grid>
            <Grid item xs={4} >
              <McmTopicNewLink />
            </Grid>
            <Grid item xs={4} >
              <McmTopicIndexLink />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

McmCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(McmCard);