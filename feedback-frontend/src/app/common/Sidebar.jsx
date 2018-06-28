import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';

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

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeContainer from '../home/HomeContainer.js'
import McmFeedbackGeneratorContainer from '../mcm_feedback_generator/McmFeedbackGeneratorContainer.js'
import StudentLevelFeedbackGeneratorContainer from '../student_feedback_generator/StudentLevelGeneratorContainer.js'
import McmTopicsContainer from '../mcm_topics/McmTopicsContainer.js'
import McmTopicEditContainer from '../mcm_topic_edit/McmTopicEditContainer.js'
import McmTopicNewContainer from '../mcm_topic_new/McmTopicNewContainer.js'
import StudentLevelEditContainer from '../student_level_edit/StudentLevelEditContainer.js'
import StudentLevelNewContainer from '../student_level_new/StudentLevelNewContainer.js'
import StudentLevels from '../student_levels/StudentLevelsContainer.js'


import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ListIcon from '@material-ui/icons/List';
import StudentIcon from '@material-ui/icons/ChildCare';
import McmIcon from '@material-ui/icons/SupervisorAccount';
import GeneratorIcon from '@material-ui/icons/Build';
import AccountCircle from '@material-ui/icons/AccountCircle';


import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Collapse from '@material-ui/core/Collapse';

import StarBorder from '@material-ui/icons/StarBorder';

import Button from '@material-ui/core/Button'


const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "auto",
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
   zIndex: theme.zIndex.drawer + 1
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    studentTabOpen: false,
    mcmTabOpen: false
  };


    handleStudentTabClick = () => {
      this.setState(state => ({ studentTabOpen: !state.studentTabOpen }));
    };

    handleMcmTabClick = () => {
      this.setState(state => ({ mcmTabOpen: !state.mcmTabOpen }));
    };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme, componentToRender } = this.props;

    const loggedInLinks = (<div><List>
          <ListItem button onClick={this.handleStudentTabClick}>
            <ListItemIcon>
              <StudentIcon />
            </ListItemIcon>
            <ListItemText inset>Students </ListItemText>
            {this.state.studentTabOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.studentTabOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/student_level_feedback_generator">
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <GeneratorIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Feedback Generator"} />
                </ListItem>
               </Link>
              <Link to="/student_levels">
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <ListIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Student Levels"} />
                </ListItem>
               </Link>
              <Link to="/student_levels/new">
                <ListItem button className={classes.nested}>
                 <ListItemIcon>
                   <AddBoxIcon />
                 </ListItemIcon>
                 <ListItemText primary={"New Student Level"} />
               </ListItem>
              </Link>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={this.handleMcmTabClick}>
            <ListItemIcon>
              <McmIcon />
            </ListItemIcon>
            <ListItemText inset>Mock Class Mentor </ListItemText>
            {this.state.mcmTabOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.mcmTabOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/mcm_feedback_generator">
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <GeneratorIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Feedback Generator"} />
                </ListItem>
              </Link>
              <Link to="/mcm_topics">
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <ListIcon />
                  </ListItemIcon>
                  <ListItemText primary={"MCM Topics"} />
                </ListItem>
               </Link>
               <Link to="/mcm_topics/new">
                 <ListItem button className={classes.nested}>
                   <ListItemIcon>
                     <AddBoxIcon />
                   </ListItemIcon>
                   <ListItemText primary={"New Mcm Topic"} />
                 </ListItem>
                </Link>
            </List>
          </Collapse>
        </List></div>)
    const loggedOutLinks = (<div>
      <Link to="/">
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary={"Log in to view"} />
        </ListItem>
       </Link>
      <Divider />
        </div>)

    const loggedInNavbar = (
        <Link to="/" style={{ textDecoration: 'none', color: "white" }}>
          <Button color="inherit">Logout</Button>
        </Link>
    )

    const loggedOutNavbar = (
        <Link to="/" style={{ textDecoration: 'none', color: "white" }}>
          <Button color="inherit">Login</Button>
        </Link>
    )

    let accessibleRoutes = ""
    let sidebarLinks = ""
    let navbarLinks = ""
    if (this.props.token != undefined) {
      accessibleRoutes =  (<div><Route exact path="/" component={HomeContainer} />
      <Route path="/mcm_feedback_generator" component={McmFeedbackGeneratorContainer} />
      <Route path="/student_level_feedback_generator" component={StudentLevelFeedbackGeneratorContainer} />
      <Route path="/mcm_topics/new" component={McmTopicNewContainer} />
      <Route path="/mcm_topics/:id/edit" component={McmTopicEditContainer} />
      <Route exact path="/mcm_topics" component={McmTopicsContainer} />
      <Route path="/student_levels/new" component={StudentLevelNewContainer} />
      <Route path="/student_levels/:id/edit" component={StudentLevelEditContainer} />
      <Route exact path="/student_levels" component={StudentLevels} /></div>)
      sidebarLinks = loggedInLinks
      navbarLinks = loggedInNavbar
    }
    else
    {
      accessibleRoutes = (<div><Route path="/" component={HomeContainer} /></div>)
      sidebarLinks = loggedOutLinks
      navbarLinks = loggedOutNavbar
    }

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        {sidebarLinks}
      </div>
    );
    console.log(classes)
    console.log(this.props)
      return (
        <div>
          <Router>
            <div className={classes.root}>
              <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                  <Typography variant="title" color="inherit" style={{ flex: 1 }} noWrap>
                    Feedback Friend
                  </Typography>
                  {navbarLinks}

                </Toolbar>
              </AppBar>
              <Hidden mdUp>
                <Drawer
                  variant="temporary"
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={this.state.mobileOpen}
                  onClose={this.handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
              <Hidden smDown implementation="css">
                <Drawer
                  variant="permanent"
                  open
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
              <main className={classes.content}>
                <div className={classes.toolbar} />
                	{componentToRender}
                <Typography noWrap>
                    <div>
                      {accessibleRoutes} 
                    </div>
                </Typography>
              </main>
            </div>
          </Router>
          </div>
        );
      

  }
}



ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  componentToRender: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);

