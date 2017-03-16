/**
 * Created by Administrator on 2017/3/16 0016.
 */

export default class HttpUtils {
    static get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
                .then(response=>response.json())
                .then(result=>{
                    resolve(result);
                })
                .catch(err=>{
                    reject(err);
                })
        })
    }
}
