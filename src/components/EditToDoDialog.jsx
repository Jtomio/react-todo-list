import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextFild from '@mui/material/TextField';
import TodoItem from './TodoItems';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditToDoDialog({open, dialogHandler, todo, editTodo}) {
  const [editedText, setEditedText] = React.useState(todo.text);

  const textHandler = () => {
    editTodo(todo.id, editedText)
    dialogHandler();
  }
  return (

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogHandler}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{"Editar tarefa"}</DialogTitle>
        <DialogContent>
          <TextFild
          defaultValue={editedText}
          onChange={(e) =>setEditedText(e.target.value)}
          fullWidth
        >

          </TextFild>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Cancelar</Button>
          <Button onClick={textHandler}>OK</Button>
        </DialogActions>
      </Dialog>

  );
}
