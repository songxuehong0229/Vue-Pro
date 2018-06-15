// 存储信息，取出信息，删除信息
const Mutils = {
    // 存储
    setStorage : function(user,data){
        let dataType = typeof data;
        // json对象
        if(dataType === 'object'){
            window.localStorage.setItem(user,JSON.stringify(data))
        }
        else if (['number','string','boolean'].indexOf(dataType)){
            window.localStorage.setItem(user,data);
        }
        // 其他不支持的类型
        else{
            alert("该类型不支持")
        }
    },
    // 取出存储
    getStorage:function(user){
        let data = window.localStorage.getItem(user);
        if (data){
            return JSON.parse(data);
        }
        else{
            return '';
        }
    },
    // 删除本地存储
    removeStorage:function(user){
        window.localStorage.removeItem(user);
    }

}
export default Mutils;