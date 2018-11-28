//ModelPost
import axios from 'axios'

export default {
    urldata : 'http://telecoming.eduardoaf.com/empleados',
    
    get_data : function(fnLoad) {
        console.log("ModelPost.get_data()")
        const sUrlJson = this.urldata
        axios.get(sUrlJson).then(fnLoad)
    },//get_data()

    insert : function(oData,fnResult) {
        let urldata = 'http://telecoming.eduardoaf.com/empleados/insert'
        console.log("ModelPost.insert()")
        const sUrlJson = urldata
        axios.post(sUrlJson,oData).then(fnResult)
    },//insert()

    get_profile : function(oData,fnResult) {
        let urldata = 'http://telecoming.eduardoaf.com/empleados/perfil?id='+1234
        console.log("ModelPost.insert()")
        const sUrlJson = urldata
        axios.post(sUrlJson,oData).then(fnResult)
    },//insert()    

}//ModelPost
