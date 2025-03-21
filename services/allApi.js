import commonApi from "./commonApi";

export const registerUser=async(requestBody)=>{
    return  await commonApi("post","/register",requestBody)
}