import { base_url } from "../baseUrl/Config"
const DeleteApi =  async (id)=>{
    return (await fetch(base_url+"/"+id,{
        method:"DELETE"
    }))
}

export default DeleteApi;