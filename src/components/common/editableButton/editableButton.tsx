import React, {KeyboardEvent, useState} from 'react';
import {TextField} from "@mui/material";

type PropsType = {
    changeTitle: (title: string) => void
}

export const EditableButton = ({changeTitle}: PropsType) => {

    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState("")

    const setEditMode = () => {
        setEdit(!edit)
        changeTitle(newTitle)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && setEditMode()
    }

    return edit
        ? <TextField
            type={"date"}
            style={{width: "198px"}}
            onChange={(e) => setNewTitle(e.currentTarget.value)}
            value={newTitle}
            autoFocus
            onBlur={setEditMode}
            onKeyPress={onKeyPressHandler}
            size='small'
            color='success'/>
        : <button onClick={setEditMode}>Set deadline</button>
};

