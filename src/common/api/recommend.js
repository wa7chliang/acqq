import axios from 'axios';

export default function Recommend(url,data) {
    const option = {
        param: 'cb'
    }
    // return jsonp(url, data, option);
    return axios.get(url, {
        params: data
    }).then((res) =>{
        return Promise.resolve(res);
    })
}