import commonApi from "./commonApi";

export const registerUser=async(requestBody)=>{
    return  await commonApi("post","/register",requestBody)
}

export const loginUser=async(requestBody)=>{
    return await commonApi('post',"/login",requestBody)
}

export const addProject=async(requestBody,requestHeader)=>{
    return await commonApi('post','/addproduct',requestBody,requestHeader)
}

export const getHomeProjects=async()=>{
    return await commonApi('get','/getHomeProjects',"")
}

export const getAllProjects=async(headers,searchKey)=>{
    return await commonApi("get",`/getallproducts?search=${searchKey}`,"",headers)
}

export const getUserSpecified=async(headers)=>{
    return await commonApi("get","/userspecifiedproject","",headers)
}