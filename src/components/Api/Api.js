import { base_url } from "../baseUrl/Config"
const getApi =  async (endUrl)=>{
    return await (await fetch(base_url+endUrl)).json()
}

export default getApi