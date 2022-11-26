import React, {KeyboardEvent, useState} from 'react';
import {TextField, Tooltip} from "@mui/material";

type PropsType = {
    title: string
    changeTitle: (title: string) => void
}

export const EditablSpan = (props: PropsType) => {
    console.log(props)
    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(props.title)
    console.log(newTitle)

    const setEditMode = () => {
        setEdit(!edit)
        props.changeTitle(newTitle)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && setEditMode()
    }

    return edit
        ? <TextField
            style={{width: "198px"}}
            onChange={(e) => setNewTitle(e.currentTarget.value)}
            value={newTitle}
            autoFocus
            onBlur={setEditMode}
            onKeyPress={onKeyPressHandler}
            size='small'
            color='success'/>
        : (<Tooltip title="Double click to edit" placement={"left"} arrow><span
            onDoubleClick={setEditMode}>{props.title}</span></Tooltip>)
};
