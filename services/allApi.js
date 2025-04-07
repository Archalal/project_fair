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

export const updateProjects=async(id,requestBody,headers)=>{
    return await commonApi("put",`/project/${id}/update`,requestBody,headers)

}
export const delProject=async(id,headers)=>{
    return await commonApi("delete",`/project/${id}/delete`,{},headers)

}