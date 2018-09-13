import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import McmTopicEditLink from '../common/buttons/McmTopicEditLink'
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import './styles.scss'

const styles = {
  card: {
    minWidth: 100,
    width: "100%",
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

function McmTopicCard(props) {
  const { classes, mcm_topic } = props;
  const bull = <span className={classes.bullet}>•</span>;
  const sentenceScores = mcm_topic.sentence_scores.map(sentence_score => (
    (<Typography component="p" className="break-word">
      {sentence_score.quality ? <ThumbUp /> : <ThumbDown />} {sentence_score.score}: {sentence_score.sentence}
    </Typography>)
  ))

  return (
    <div className="card-margin">
      <Card className={classes.card} className="card-height">
        <CardContent >
          <Typography variant="headline" component="h2">
            {mcm_topic.name}
          </Typography>
          {sentenceScores}
          <Typography className="float-right">
            <McmTopicEditLink mcm_topic={props.mcm_topic} />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

McmTopicCard.propTypes = {
  classes: PropTypes.object.isRequired,
  mcm_topic: PropTypes.object.isRequired
};

export default withStyles(styles)(McmTopicCard);