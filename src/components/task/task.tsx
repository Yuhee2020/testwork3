import React from "react";
import {
    addNewTask, changeTaskDeadLine,
    changeTaskStatus,
    changeTaskTitle,
    changeTodolistTitle,
    deleteTask,
    TaskType
} from "../../store/todolist-reducer";
import {useAppDispatch} from "../../store/store";
import {v1} from "uuid";
import {EditablSpan} from "../common/editablSpan/EditablSpan";
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type PropsType = {
    task: TaskType
}

export const Task = ({task:{checked,taskId,taskImage,taskTitle,deadline}}: PropsType) => {
    const dispatch = useAppDispatch()

    const handleCheckboxChange = () => {
        dispatch(changeTaskStatus({checked:!checked, taskId}))
    }
    const handleDeleteClick=()=>{
        dispatch(deleteTask({taskId}))
    }
    const changeTitle=(taskTitle:string)=>{
        dispatch(changeTaskTitle({taskTitle, taskId}))
    }
    const changeDeadline=(deadline:string)=>{
        dispatch(changeTaskDeadLine({deadline, taskId}))
    }

    return (
        <div key={taskId}>
            <input type="checkbox"
                   onChange={handleCheckboxChange}
                   checked={checked}/>
            <EditablSpan title={taskTitle} changeTitle={changeTitle}/>
            <EditablSpan title={deadline} changeTitle={changeDeadline}/>
            {taskImage}
            <IconButton onClick={handleDeleteClick}><DeleteIcon/></IconButton>
        </div>)
}

