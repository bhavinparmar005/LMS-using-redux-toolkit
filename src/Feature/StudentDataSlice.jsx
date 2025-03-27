import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    studentData:JSON.parse(localStorage.getItem('std')) ||[]
    
}





const StudentDataSlice = createSlice({
    name:'studentData',
    initialState : initialState,
    reducers :{
        addStudent : (state ,action)=>{
           
            state.studentData.push(action.payload);
            localStorage.setItem('std',JSON.stringify(state.studentData))
            // console.log(action.payload);
            // console.log(state);
            
            
            
            
        },
        editStudent : (state ,action)=>{

            const studentEditData = state.studentData.find((val)=>{
                return(
                    val.id === action.payload.id
                )
            })

          
                if(studentEditData){
                    studentEditData.id = action.payload.id
                    studentEditData.name = action.payload.name
                    studentEditData.email = action.payload.email
                    studentEditData.phone = action.payload.phone
                    studentEditData.gender = action.payload.gender
                    studentEditData.dataofbirth = action.payload.dataofbirth
                    studentEditData.course = action.payload.course
                    studentEditData.feestatus = action.payload.feestatus

                   
                }
              

                localStorage.setItem('std',JSON.stringify(state.studentData))

        
            
            
        },
        deleteStudent : (state ,action)=>{
            state.studentData = state.studentData.filter((val)=>{
                return(
                    val.id != action.payload
                )
            })
            localStorage.setItem('std',JSON.stringify(state.studentData))
           
            

        }
    }
})





export const{addStudent,editStudent,deleteStudent} =StudentDataSlice.actions

export default StudentDataSlice.reducer

