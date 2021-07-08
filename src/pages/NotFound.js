import React, { Component } from 'react';

//material-ui components
import { Grid, Typography } from '@material-ui/core';

class NotFound extends Component {

    render() {

        return (
            <Grid item xs={12} sm={6}>
                <Typography align="center" type="display3" variant = "h2">Page Not Found!</Typography>
            </Grid>
        );
    }
}

export default NotFound;