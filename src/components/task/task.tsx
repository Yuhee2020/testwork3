import React from "react";
import {
    changeTaskDeadLine,
    changeTaskStatus,
    changeTaskTitle,
    deleteTask,
    TaskType
} from "../../store/todolist-reducer";
import {useAppDispatch} from "../../store/store";
import {EditablSpan} from "../common/editablSpan/EditablSpan";
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {TaskImage} from "./taskImage/taskImage";
import {Deadline} from "./deadline/Deadline";

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

    return (
        <div key={taskId}>
            <input type="checkbox"
                   onChange={handleCheckboxChange}
                   checked={checked}/>
            <EditablSpan title={taskTitle} changeTitle={changeTitle} />
            <Deadline deadline={deadline} taskId={taskId}/>
            <TaskImage taskImage={taskImage} taskId={taskId}/>
            <IconButton onClick={handleDeleteClick}><DeleteIcon/></IconButton>
        </div>)
}

