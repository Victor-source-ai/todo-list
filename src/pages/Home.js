import React, { Component } from 'react';

// material-ui components
import {
    Grid,
    Typography,
    Paper,
    IconButton,
 } from '@material-ui/core';

 // material-ui icons
 import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// react redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// action creators
import { actions as todoActions } from '../reducers/todo';

class Home extends Component {
    
    // handle redirect
    handleRedirect = () => e => {
        const { history } = this.props;
        history.push('/todo/');
    }

    //render component
    render() {

        return (
            <Grid item xs={12} sm={6}>
                <Typography align="center" type="display3" variant = "h2">Home page:</Typography>
                <Paper style={{ paddingLeft: 16, paddingRight: 16 }}>
                    
                    <IconButton aria-label="GoToList" onClick={this.handleRedirect()}>
                    <ArrowForwardIcon />
                    Go to list
                    </IconButton>

                </Paper>
            </Grid >
        );
    }
}

const mapStateToProps = ({ todo }) => ({ todo });
const mapDispatchToProps = (dispatch) => ({ todoActions: bindActionCreators(todoActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(Home);