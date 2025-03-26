import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    studentData:[]
}



const StudentDataSlice = createSlice({
    name:'studentData',
    initialState : initialState,
    reducers :{
        addStudent : (state ,action)=>{

        },
        editStudent : (state ,action)=>{

        },
        deleteStudent : (state ,action)=>{

        }
    }
})
export const{addStudent,editStudent,deleteStudent} =StudentDataSlice.actions

export default StudentDataSlice.reducer

