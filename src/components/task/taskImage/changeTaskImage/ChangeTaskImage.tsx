import React, {ChangeEvent} from 'react';
import {IconButton} from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {convertFileToBase64} from "../../../../utils/base64Converter";
import {useAppDispatch} from "../../../../store/store";
import {changeTaskImage} from "../../../../store/todolist-reducer";

type PropsType={
    taskId:string
}

export const ChangeTaskImage = ({taskId}:PropsType) => {
    const dispatch = useAppDispatch();
    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]

            if (file.size < 200000) {
                convertFileToBase64(file, (file64: string) => {
                    dispatch(changeTaskImage({taskImage:file64, taskId}))
                    console.log('file64: ', file64)
                })
            } else {
                alert("Incorrect file size, file must be less than 200 kb")

            }
        }
    }
    return (
        <div>
            <IconButton sx={{padding:"0"}} component="label">
                <input
                    hidden
                    accept="image/*"
                    type="file"
                    value={""}
                    onChange={uploadHandler}/>
                <CameraAltIcon  fontSize={'large'}/>
            </IconButton>
        </div>
    );
};


