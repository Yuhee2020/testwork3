import React from 'react';
import {Todolist} from "./components/todolist/Todolist";
import s from "./App.module.scss"



function App() {

    return (
        <div className={s.app}>
            <Todolist/>
        </div>
    );
}

export default App;
