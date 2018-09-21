import React, { Component } from "react";
import _ from "lodash";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Add from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

import style from "./Screen2-style";

import Nav from "../../components/Nav/Nav";
import Table from "../../components/Table/Table";

import { PEOPLE_DB, BUTTON_DB, COLUMN_DB } from "../../DB/Database";

import { getRandomColor } from "../../Util/Util";

class Screen2 extends Component {
  state = {
    title: "ODAIN ROSE",
    subTitle: "30m sprint",
    hasButton: false,
    hasDateTime: true,
    buttonList: [],
    clickedNumber: 1,
    colorArray: []
  };

  handleClick = () => {
    const db = BUTTON_DB;
    const items = db.slice(0, this.state.clickedNumber);
    let randomColor = getRandomColor();
    if (_.includes(this.state.colorArray, randomColor)) {
      randomColor = getRandomColor();
    }
    this.setState(prevState => ({
      buttonList: [...items],
      clickedNumber: this.state.clickedNumber + 1,
      colorArray: this.state.colorArray.concat(randomColor)
    }));
  };
  renderColoredButton = (button, key, classes) => {
    return (
      <Button
        color="inherit"
        key={key}
        style={{ borderColor: this.state.colorArray[key] }}
        className={classes.coloredButtonStyle}
      >
        {button.name}
      </Button>
    );
  };
  renderTable = () => {
    return <Table column={COLUMN_DB} people={PEOPLE_DB} />;
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Nav data={this.state} navStyle={classes.navStyle} />
        <div className={classes.base}>
          <Paper className={classes.buttonContainer}>
            {this.state.buttonList.map((button, index) => {
              return this.renderColoredButton(button, index, classes);
            })}

            <Add className={classes.addButton} onClick={this.handleClick} />
          </Paper>
          <Paper className={classes.tableContainer}>{this.renderTable()}</Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(Screen2);
