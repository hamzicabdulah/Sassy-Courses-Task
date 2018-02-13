import React from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const actions = [
  <FlatButton
    label="Cancel"
    primary={true}
    onClick={this.props.handleClose}
  />,
  <FlatButton
    label="Submit"
    primary={true}
    onClick={this.props.handleClose}
  />,
];

export default class CourseModal extends React.Component{
    render(){
        return(
            <Dialog
              title="Dialog With Actions"
              modal={true}
              actions={actions}
              open={this.props.isOpen}
              onRequestClose={this.props.handleClose}
            >
            </Dialog>
        )
    }
}