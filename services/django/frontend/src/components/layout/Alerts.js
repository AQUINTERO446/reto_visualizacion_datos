import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };


    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            for (var key in error.msg) {
                alert.error(error.msg[key])
              }
        }
    
        if (message !== prevProps.message) {
          if (message.delete) alert.success(message.delete);
          if (message.add) alert.success(message.add);
          if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
        }
    }
        
    render() {
        return <Fragment/>;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});
  
export default connect(mapStateToProps)(withAlert()(Alerts));
