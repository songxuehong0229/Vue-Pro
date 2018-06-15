const FetchConfig={
    host:"",
    headers:{
        "BrandFlag":"TS",
        // "token":"test",
        "Content-Type":"application/json",
        "User-Agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36"
    }
}
const setting={
    host:FetchConfig.host,
    headers:FetchConfig.headers
}

const ERPfetch = {
    get:function(url, params, headers){
        if (params) {
            let paramsArray = [];
            //encodeURIComponent
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        return new Promise(function (resolve, reject) {
            fetch(setting.host+url, {
                method: 'GET',
                headers: setting.headers,
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject({status:response.status})
                    }
                })
                .then((response) => {
                    resolve(response);
                })
                .catch((err)=> {
                    reject({status:-1});
                })
        })
    },

    post : function(url, formData, headers) {
        return new Promise(function (resolve, reject) {
            fetch(setting.host+url, {
                method: 'POST',
                headers: setting.headers,
                body:JSON.stringify(formData),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject({status:response.status})
                    }
                })
                .then((response) => {
                    resolve(response);
                })
                .catch((err)=> {
                    reject({status:-1});
                })
        })
    }
}

export default ERPfetch;