import React from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
export default class CourseModal extends React.Component{
    state = {
        actions: [
            <FlatButton
                label="Close"
                primary={true}
                onClick={this.props.handleClose}
            />
        ]
    }
    
    render(){
        return(
            <Dialog
              title={this.props.course.title}
              titleStyle={{fontWeight:700,color:"#4285f4",paddingBottom:"0px"}}
              modal={false}
              autoScrollBodyContent={true}
              actions={this.state.actions}
              open={this.props.isOpen}
              onRequestClose={this.props.handleClose}
              contentStyle={{maxWidth: 500,width:"95%"}}
              bodyStyle={{borderTop:"none"}}
            >
                <p className="font-weight-bold">{this.props.course.lesson2}</p>
                <img className="dialog__image" src={this.props.course.image_url} />
                <p>{this.props.course.description}</p>
            </Dialog>
        )
    }
}