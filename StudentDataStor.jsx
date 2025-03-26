import { configureStore } from "@reduxjs/toolkit";

import studentData from './src/Feature/StudentDataSlice'

export default configureStore({
    reducer :{
        studentData :studentData
    }
})