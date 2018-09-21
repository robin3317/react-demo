import React, { Fragment } from "react";
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
  const { classes } = props;
  const {
    title,
    subTitle,
    hasButton,
    hasDateTime,
    numberOfParticipants
  } = props.data;
  return (
    <Fragment>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.navStyle}>
          <IconButton className={classes.iconButton}>
            <KeyboardArrowLeft />
          </IconButton>
          <div className={hasButton ? classes.titleContainer : props.navStyle}>
            {/*   Title   */}
            <Typography
              variant="display1"
              color="inherit"
              className={classes.title}
            >
              {title}
            </Typography>

            {/*   hr   */}
            <ColoredLine color="black" />

            {/*   Subtitle   */}
            <Typography
              variant="subheading"
              color="textPrimary"
              className={classes.subTitle}
            >
              {subTitle}

              {/*   Participants Option   */}
              {hasButton && (
                <span className={classes.perticipantsNumber}>
                  {numberOfParticipants}
                </span>
              )}

              {/*   Show Date And Time For Screen2   */}
              {hasDateTime && (
                <Fragment>
                  <span>
                    {" "}
                    <svg
                      className={classes.timer}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 -2 24 24"
                    >
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                    </svg>
                    11-12-2017
                  </span>
                  <span>
                    <svg
                      className={classes.timer}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 -2 24 24"
                    >
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                    09:30
                  </span>
                </Fragment>
              )}
            </Typography>
          </div>

          {/*   Add Button For Screen1   */}
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
    </Fragment>
  );
};

export default withStyles(style)(Nav);
