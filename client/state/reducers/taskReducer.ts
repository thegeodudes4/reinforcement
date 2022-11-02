import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface taskState {
  householdName: string,
  taskArr: feedItemObj[],
  householdUsers: string[],
  feedItemObj: feedItemObj
}

export interface feedItemObj {
  toDoText: string,
  assignee: string,
  completed: boolean
}

const initialState: taskState = {
  householdName: "",
  taskArr: [],
  householdUsers: [],
  feedItemObj: {
    toDoText: "",
    assignee: "",
    completed: false
  }
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<any>) => {
      state.taskArr.push(action.payload)
    },
    deleteTask: (state, action: PayloadAction<any>) => {
      state.taskArr.slice(action.payload)
    },
    completeTask: (state, action: PayloadAction<any>) => {
      if (!action.payload) state.feedItemObj.completed === true;
    },
    editTask: (state, action: PayloadAction<any>) => {
      state.taskArr[action.payload.index] = action.payload.taskObj
    },
    addHousehold: (state, action: PayloadAction<any>) => {
      state.householdName = action.payload.householdName;
      action.payload.householdUsers.forEach(user => state.householdUsers.push(user));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, completeTask, editTask, addHousehold } = taskSlice.actions;

export default taskSlice.reducer;