import React from 'react';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';
import Button from '@material-ui/core/Button';

//MCM Topic Buttons
import McmFeedbackGeneratorLink from '../common/buttons/McmFeedbackGeneratorLink'
import McmTopicIndexLink from '../common/buttons/McmTopicIndexLink'
import McmTopicNewLink from '../common/buttons/McmTopicNewLink'
import McmTopicEditLink from '../common/buttons/McmTopicEditLink'

//Student Level Buttons
import StudentFeedbackGeneratorLink from '../common/buttons/StudentFeedbackGeneratorLink'
import StudentLevelIndexLink from '../common/buttons/StudentLevelIndexLink'
import StudentLevelNewLink from '../common/buttons/StudentLevelNewLink'
import StudentLevelEditLink from '../common/buttons/StudentLevelEditLink'
import Grid from '@material-ui/core/Grid';



//Icons
import GeneratorIcon from '@material-ui/icons/Build';
import ListIcon from '@material-ui/icons/List';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import StudentIcon from '@material-ui/icons/ChildCare';


import {Link} from 'react-router-dom'

function SessionComponent({
  token,
  email
}) 
{
	return (
	<div>
      <Grid container spacing={12}>
      	<Grid item xs={6}>		
      		<LoginContainer/>
      	</Grid>
      	<Grid item xs={6}>		
      		<RegisterContainer/>
      	</Grid>
      </Grid>
    </div>
    )
}

export default SessionComponent;