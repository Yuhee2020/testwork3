import React from 'react';
import {Avatar} from "@mui/material";
import {ChangeTaskImage} from "./changeTaskImage/ChangeTaskImage";

type PropsType={
    taskImage:string
    taskId:string
}

export const TaskImage = ({taskImage, taskId}:PropsType) => {
    return (
        <div>
            <Avatar
                alt="Remy Sharp"
                src={taskImage}
                sx={{ width: 56, height: 56 }}
            />
            <ChangeTaskImage taskId={taskId}/>
        </div>
    );
};

