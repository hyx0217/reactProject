
import Axios from 'axios';

export const getListData=(data)=>{
    return {
        type:'GETLISTDATA',
        payload:data
    }
}
export const getList=(page)=>{
    return dispatch=>{
        Axios({
            url:`http://localhost:3000/product?_page=${page}&_limit=8`,
            method:'get'
        }).then(res=>{
            const obj={
                rows:res.data,
                total:res.headers['x-total-count']
            }
            dispatch(getListData(obj))
        })
    }
}
