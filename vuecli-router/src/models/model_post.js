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
        console.log("ModelPost.insert()")
        const sUrlJson = this.urldata + ''
        axios.post(sUrlJson,oData).then(fnResult)
    },//insert()

}//ModelPost
