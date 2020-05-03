import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StudentLevelEditLink from '../common/buttons/StudentLevelEditLink'
import Grid from '@material-ui/core/Grid';
import './styles.scss'


const styles = {
  card: {
    height: 500,
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
  }
};

function StudentLevelCard(props) {
  const { classes, student_level } = props;
  const bull = <span className={classes.bullet}>•</span>;
  const sentenceScores = student_level.random_sentences.map(random_sentence => (
    (<Typography component="p">
      {random_sentence.sentence}
    </Typography>)
  ))

  return (
    <div>
      <Card className={classes.card} className="card-height">
        <CardContent>
          <Typography variant="headline" component="h2">
            {student_level.name}
          </Typography>
          <Grid container spacing={12} >
          	<Grid item xs={6}>		
      				<Typography variant="headline" component="h4">
      				  Preformated
      				</Typography>
              <div className='inner-content'>
                <Typography variant="body2" component="p" className="break-word">
                  {student_level.generic_text}
                </Typography>
              </div>
          	</Grid>
            <Grid item xs={1}>
            </Grid>
          	<Grid item xs={5}>
          		<Typography variant="headline" component="h4">
          		  Sentence Bank
          		</Typography>
              <div className='inner-content'>
            		<Typography variant="body2" component="p" className="break-word">
            			{sentenceScores}
            		</Typography>
              </div>			
          	</Grid>
          </Grid>
          <Typography className="float-right">
            <StudentLevelEditLink student_level={props.student_level} />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

StudentLevelCard.propTypes = {
  classes: PropTypes.object.isRequired,
  student_level: PropTypes.object.isRequired
};

export default withStyles(styles)(StudentLevelCard);