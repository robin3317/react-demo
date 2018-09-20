import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import RadioButton from "@material-ui/core/Radio";
import CreateIcon from "@material-ui/icons/Create";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import style from "./Screen1-style";
import Nav from "../../components/Nav/Nav";

import { PARTICIPANTS_DB } from "../../DB/Database";

class Screen1 extends Component {
  state = {
    title: "STANDING 30 METERS",
    subTitle: "Participants",
    hasButton: true,
    clickedNumber: 1,
    participantsList: [],
    radiobuttonSelectedValue: 0
  };
  handleRadioButton = event => {
    this.setState({ radiobuttonSelectedValue: event.target.value });
  };

  handleClick = () => {
    const db = PARTICIPANTS_DB;
    const items = db.slice(0, this.state.clickedNumber);
    this.setState(
      {
        participantsList: [],
        clickedNumber: this.state.clickedNumber + 1
      },
      () => {
        this.setState(prevState => ({
          participantsList: [...prevState.participantsList, ...items]
        }));
      }
    );
  };

  renderItems = classes => {
    if (this.state.participantsList.length > 0) {
      return (
        <List className={classes.list}>
          {this.state.participantsList.map((value, index) => (
            <ListItem key={index} dense className={classes.listItem}>
              <Avatar alt="ish Sharp" src={require("../../asset/user.png")} />
              <ListItemText
                primary={
                  <Typography variant="headline" style={{}}>
                    {value.name}
                  </Typography>
                }
                secondary={`${value.distance.low} - ${value.distance.high}`}
              />
              <CreateIcon className={classes.iconStyle} />
              <ListItemSecondaryAction>
                Select
                <RadioButton
                  className={classes.radioButton}
                  checked={this.state.radiobuttonSelectedValue === `${index}`}
                  onChange={this.handleRadioButton}
                  value={`${index}`}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      );
    }
    return (
      <Typography
        variant="headline"
        component="h3"
        className={classes.notFound}
      >
        No Participants Found !!
      </Typography>
    );
  };
  render() {
    const { classes } = this.props;
    const allData = {
      title: this.state.title,
      subTitle: this.state.subTitle,
      hasButton: this.state.hasButton,
      numberOfParticipants: this.state.participantsList.length
    };
    return (
      <div>
        <Nav data={allData} onClick={this.handleClick} />
        <div className={classes.base}>
          {this.renderItems(classes)}
          <Button color="inherit" className={classes.buttonStyle}>
            Start Test
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(Screen1);
