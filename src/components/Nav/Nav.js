import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

import style from "./nav-style";

const Nav = props => {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2,
        width: 100,
        borderStyle: "none"
      }}
    />
  );
  console.log(props);
  const { classes } = props;
  const { title, subTitle, hasButton, numberOfParticipants } = props.data;
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.navStyle}>
          <IconButton color="#000000">
            <KeyboardArrowLeft />
          </IconButton>
          <div className={hasButton ? classes.titleContainer : props.navStyle}>
            <Typography
              variant="display1"
              color="inherit"
              className={classes.title}
            >
              {title}
            </Typography>
            <ColoredLine color="black" />
            <Typography
              variant="subheading"
              color="#000000"
              className={classes.subTitle}
            >
              {subTitle}
              {hasButton && (
                <span className={classes.perticipantsNumber}>
                  {numberOfParticipants}
                </span>
              )}
            </Typography>
          </div>
          {hasButton && (
            <Button
              color="inherit"
              className={classes.buttonStyle}
              onClick={props.onClick}
            >
              + Add
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(style)(Nav);
