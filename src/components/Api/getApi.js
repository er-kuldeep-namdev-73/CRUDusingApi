import { base_url } from "../baseUrl/Config"
const getApi =  async (id="")=>{
    return await (await fetch(base_url+"/"+id)).json()
}

export default getApi;