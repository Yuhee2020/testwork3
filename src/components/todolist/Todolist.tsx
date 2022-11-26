import React, {useEffect} from 'react';
import {addNewTask, changeTodolistTitle, getTodolist} from "../../store/todolist-reducer";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {Task} from "../task/task";
import {EditablSpan} from "../common/editablSpan/EditablSpan";
import {AddItemForm} from "../common/addItemForm/AddItemForm";
import {v1} from "uuid";

export const Todolist = () => {

    const dispatch = useAppDispatch()
    const todolist = useAppSelector(state => state.todolist.todolist)

    const changeTitle = (title: string) => {
        dispatch(changeTodolistTitle({title}))
    }
    const addTask=(taskTitle:string)=>{
        dispatch(addNewTask({taskTitle,}))
    }

    useEffect(() => {
        dispatch(getTodolist())
    }, [])

    if (!todolist.tasks) {
        return <div>loading</div>
    }
    return (
        <div>
            <EditablSpan title={todolist.todolistTitle} changeTitle={changeTitle}/>
            <AddItemForm label={"Enter task title"} addItem={addTask}/>
            {todolist.tasks.map(task =>
                <Task
                    key={task.taskId}
                    task={task}/>
            )}
        </div>
    );
};
