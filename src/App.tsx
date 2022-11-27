import React from 'react';
import s from "./App.module.scss"
import {Todolist} from "./components/todolist/Todolist";



function App() {

    return (
        <div className={s.app}>
            <Todolist/>
        </div>
    );
}

export default App;
