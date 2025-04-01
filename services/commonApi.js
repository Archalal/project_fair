import axios from "axios";
import baseURL from "./baseURL";

const commonApi=async(httpMethod,endpoints,requestBody,requestHeader)=>{
    const requestedConfig={
        method:httpMethod,
        url:baseURL+endpoints,
        data:requestBody,
        headers:requestHeader?requestHeader:{"Content-Type":"application/json"}
    }
    return await axios(requestedConfig)
    .then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}
export default commonApi