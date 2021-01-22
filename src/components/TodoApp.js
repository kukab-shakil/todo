import React, { useState } from "react";
import { FormControl,Container,TextField,Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  font:{
      fontSize: "2em",
      fontWeight: "900"
  }
}));

function TodoApp({addTodo}) {
  const classes = useStyles();
  const [text,setText] = useState("")
   
  const handleSubmit=(e)=>{
    e.preventDefault()
    addTodo(text)
    setText("")
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField label="Add a todo" required={true} 
          value ={text} onChange={e =>setText(e.target.value)}/>
          <Button  className={classes.font} type="submit"> ADD</Button>
        </FormControl>
      </form>
    </Container>
  );
}

export default TodoApp;
