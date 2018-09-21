import React from "react";
import { withStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#eee"
    },
    textAlign: "center"
  },
  TableData: {
    border: "1px solid #ccc7c7",
    "&:hover": {
      backgroundColor: "#c1ae22"
    }
  },

  columnStyle: {
    border: "1px solid #ccc7c7",
    fontWeight: "500",
    fontSize: "16px",
    textTransform: "capitalize"
  }
});

const TableComponent = props => {
  const { classes } = props;
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          {props.column.map((el, index) => {
            return (
              <CustomTableCell key={index} className={classes.columnStyle}>
                {el}
              </CustomTableCell>
            );
          })}
        </TableRow>
      </TableHead>

      <TableBody>
        {props.people.map((eachPeople, index) => {
          return (
            <TableRow key={index} className={classes.row}>
              <CustomTableCell scope="row" className={classes.TableData}>
                {eachPeople.name}
              </CustomTableCell>
              <CustomTableCell className={classes.TableData}>
                {eachPeople.age}
              </CustomTableCell>
              <CustomTableCell className={classes.TableData}>
                {eachPeople.country}
              </CustomTableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default withStyles(styles)(TableComponent);
