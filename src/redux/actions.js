import { createAction, nanoid } from "@reduxjs/toolkit";


export const addTask = createAction ( "task/addTask", text => {
    return{
        payload: {
            text,
            id: nanoid(),
            completed: false,
        },
    };
});

export const deleteTask = createAction("tasks/deleteTask");

export const toggleCompleted = createAction("tasks/toggleCompleted");


export const setStatusFilter = createAction("filter/setStatusFilter");