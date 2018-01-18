
let commonUtils = {
    fetchData : function(url){

        let fn = data => data;

        fetch(url)
        .then(resp => resp.json())
        .then(fn)
        
        return fn()
        
    }
};

module.exports = commonUtils;
