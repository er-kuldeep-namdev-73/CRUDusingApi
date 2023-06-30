import { base_url } from "../baseUrl/Config"
const postApi =  async (body)=>{

    return await fetch(base_url+'/add', {
        method:'POST',
        headers:{'Content-Type': 'Application/json'},
        body:JSON.stringify(body)
    })

}

export default postApi;