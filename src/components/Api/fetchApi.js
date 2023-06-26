import { base_url } from "../baseUrl/Config"

const editApi =  async (id)=>{
    return await fetch(base_url+"/"+id)
}

export default editApi;