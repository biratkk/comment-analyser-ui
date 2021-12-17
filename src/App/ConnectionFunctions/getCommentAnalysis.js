import axios from 'axios'

export default async(url) => {
    let params = decodeURL(url);
    console.log("Url used to decode video ID:", url);
    let response = await axios.get("http://localhost:5000/getCommentAnalysis", 
        {
            headers:{
                "Access-Control-Allow-Origin":"*",
                "Content-Type":"text/json"
            },
            params:{
                videoId:params['v']
            }
        }
    )
    console.log(response);
    return response
}

//youtube.com/watch?v=o_OZdbCzHUA&list=PL2-dafEMk2A6QKz1mrk1uIGfHkC1zZ6UU&index=2
const decodeURL = url => {
    let params = {}
    const [header, paramString] = url.split("?")
    let paramList = paramString.split("&")
    paramList.forEach(param => {
        let temp = param.split("=")
        params[temp[0]] = temp[1]
    })
    console.log(params);
    return params
}