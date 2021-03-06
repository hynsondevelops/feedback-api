import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//MCM Level Buttons
import StudentFeedbackGeneratorLink from '../common/buttons/StudentFeedbackGeneratorLink'
import StudentLevelIndexLink from '../common/buttons/StudentLevelIndexLink'
import StudentLevelNewLink from '../common/buttons/StudentLevelNewLink'
import StudentLevelEditLink from '../common/buttons/StudentLevelEditLink'


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

function StudentCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
          	Student Feedback
          </Typography>
          <StudentFeedbackGeneratorLink />
          <StudentLevelNewLink />
          <StudentLevelIndexLink />
        </CardContent>
      </Card>
    </div>
  );
}

StudentCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentCard);