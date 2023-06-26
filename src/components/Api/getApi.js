import { base_url } from "../baseUrl/Config"
const getApi =  async ()=>{
    return await (await fetch(base_url)).json()
}

export default getApi;