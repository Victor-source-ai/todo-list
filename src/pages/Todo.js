import React, { Component } from 'react';

// material-ui components
import {
    Grid,
    Typography,
    Paper,
    TextField,
    List, 
    ListItem, 
    ListItemSecondaryAction, 
    ListItemText,
    Checkbox,
    IconButton,
 } from '@material-ui/core';

 // material-ui icons
 import DeleteIcon from '@material-ui/icons/Delete';
 import EditIcon from '@material-ui/icons/Edit';

// react redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// action creators
import { actions as todoActions } from '../reducers/todo';

//lodash
import uniqueId from 'lodash/uniqueId';

class Todo extends Component {
    state = {
        form: {
            title: ''
        },
        filter: 'all'
    }
    
    // handle change form data
    handleChange = name => e => {
        this.setState({
            form: {
                ...this.state.form,
                [name]: e.target.value
            }
        })
    }

    //handle submit new todo

    handleSubmit = (e) => {
        e.preventDefault();
        const { form } = this.state;
        if (form.title) {
            const { todoActions } = this.props;
            const item = {
                id: uniqueId(),
                title: form.title,
                completed: false
            };
            setTimeout(() => {
                todoActions.create(item);
            }, 3000);
            this.setState({ form: { title: '' } });
        }
    }

    // handle completed checkbox
    handleToggleCompleted = value => (e, b) => {

        const { todoActions } = this.props;
        const item = {
            ...value,
            completed: !value.completed
        }
        todoActions.update(item);
    }

    // handle edit todo
    handleEdit = value => e => {
        const { history } = this.props;
        history.push(`/edit/${value.id}`);
    }

    // handle delete todo
    handleDelete = value => e => {
        const { todoActions } = this.props;
        todoActions.delete(value);
    }

    // handle delete all todo
    handleDeleteAll = () => e => {
        const { todoActions, history } = this.props;
        todoActions.deleteAll();
        history.push('/');
    }

    //render component
    render() {
        const { todo } = this.props;
        const { form } = this.state;

        return (
            <Grid item xs={12} sm={6}>
                <Typography align="center" type="display3" variant = "h2">Todo:</Typography>
                <Paper style={{ paddingLeft: 16, paddingRight: 16 }}>
                    
                    <IconButton aria-label="DeleteAll" onClick={this.handleDeleteAll()}>
                    <DeleteIcon />
                    Clear All Todos
                    </IconButton>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            id="todo"
                            label="What needs to be done?"
                            onChange={this.handleChange('title')}
                            fullWidth
                            margin="normal"
                            value={form.title}
                            autoComplete="off"
                        />
                    </form>

                    <List>
                        {todo.items.map(value => (
                            <ListItem
                                key={value.id}
                                dense
                                button
                                onClick={this.handleToggleCompleted(value)}
                            >
                                <Checkbox
                                    checked={value.completed}
                                    tabIndex={-1}
                                    disableRipple
                                />
                                <ListItemText primary={value.title} />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Edit" onClick={this.handleEdit(value)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="Delete" onClick={this.handleDelete(value)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Grid >
        );
    }
}

const mapStateToProps = ({ todo }) => ({ todo });
const mapDispatchToProps = (dispatch) => ({ todoActions: bindActionCreators(todoActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(Todo);