import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CheckIcon from '@mui/icons-material/Check';
import '../styles/Input.css';

function ToDoList() {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function handleClick() {
        if (inputValue.trim() !== "") {
            setList((prevList) => [...prevList, { text: inputValue, done: false }]);
            setInputValue("");
        }
    }

    function handleDelete(index) {
        setList((prevList) => prevList.filter((_, i) => i !== index));
    }

    function handleEdit(index) {
        setEditingIndex(index);
        setEditValue(list[index].text);
    }

    function handleSave(index) {
        const updatedList = [...list];
        updatedList[index].text = editValue;
        setList(updatedList);
        setEditingIndex(null);
        setEditValue("");
    }

    function handleToggleDone(index) {
        const updatedList = [...list];
        updatedList[index].done = !updatedList[index].done;
        setList(updatedList);
    }

    return (
        <div>
            {/* Input Section */}
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    label="What are you going to do?"
                    variant="outlined"
                    value={inputValue}
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    size="small"
                    className='button'
                    onClick={handleClick}
                >
                    Add
                </Button>
            </Box>

            {/* To-Do List */}
            <ul>
                {list.map((item, index) => (
                    <li key={index} style={{ display: "flex", alignItems: "center" }}>
                        {editingIndex === index ? (
                            <>
                                <TextField
                                    size="small"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                    sx={{ mr: 1 }}
                                />
                                <IconButton
                                    aria-label="save"
                                    onClick={() => handleSave(index)}
                                >
                                    <SaveIcon />
                                </IconButton>
                            </>
                        ) : (
                            <>
                                <span
                                    style={{
                                        flexGrow: 1,
                                        textDecoration: item.done ? "line-through" : "none",
                                        color: item.done ? "gray" : "black"
                                    }}
                                >
                                    {item.text}
                                </span>
                                <IconButton
                                    aria-label="done"
                                    onClick={() => handleToggleDone(index)}
                                >
                                    <CheckIcon color={item.done ? "success" : "action"} />
                                </IconButton>
                                <IconButton
                                    aria-label="edit"
                                    onClick={() => handleEdit(index)}
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="delete"
                                    onClick={() => handleDelete(index)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
