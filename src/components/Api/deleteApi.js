import { base_url } from "../baseUrl/Config"
const DeleteApi =  async (endUrl,id)=>{
    return (await fetch(base_url+endUrl+"/"+id,{
        method:"DELETE"
    }))
}

export default DeleteApi;