import React from 'react';
import {EditablSpan} from "../../common/editablSpan/EditablSpan";
import {changeTaskDeadLine} from "../../../store/todolist-reducer";
import {useAppDispatch} from "../../../store/store";
import dayjs from "dayjs";
import s from './DeadLline.module.scss'

type PropsType={
    taskId:string
    deadline:string
}
export const Deadline = ({taskId, deadline}:PropsType) => {

    const date=dayjs().format('YYYY-MM-DD')
    const dispatch = useAppDispatch()
    const changeDeadline=(deadline:string)=>{
        dispatch(changeTaskDeadLine({deadline, taskId}))
    }
    return (
        <div className={date>=deadline ? s.deadline : ""}>
            <EditablSpan type={"date"} title={deadline} changeTitle={changeDeadline}/>
        </div>
    );
};

