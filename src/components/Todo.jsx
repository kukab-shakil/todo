import React from "react";
import {Check,Delete} from '@material-ui/icons';
import {
    Card,
    CardContent,
    Typography,
    Container,
    useMediaQuery,
    Checkbox,
    Grid,
    IconButton,
  } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    checkcolor:{
      color:'green',
  },
  deleteColor:{
    color:'red',
  },
  floatDeleteButton:{
      float: "right",
  }
}));
function Todo({title, checkTodo ,id ,isCompleted,deleteTodo}) {
    const markCompleted =()=> checkTodo(id)
    const delTodo =()=> deleteTodo(id)
    const todoStyle = isCompleted ? {textDecoration : "line-through"} : {textDecoration:"none"};
    const classes = useStyles();
  return (
    <Container>
        <Card variant="outlined" style={{ margin: "16px" }}>
            <CardContent >
            <Typography variant="h5" component="h2"  style ={todoStyle}>
                <IconButton onClick={markCompleted}>
                    <Check className={classes.checkcolor}/>
                </IconButton>
                {title}
                <IconButton className={classes.floatDeleteButton} onClick={delTodo}>
                    <Delete className={classes.deleteColor}/>
                </IconButton>
            </Typography>
            </CardContent>
            

        </Card>
    </Container>
  );
}

export default Todo
;
