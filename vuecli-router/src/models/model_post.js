//ModelPost
import axios from 'axios'

export default {
   
    get_data : function(fnLoad) {
        let urldata = 'http://telecoming.eduardoaf.com/employees'
        console.log("ModelPost.get_data()")
        const sUrlJson = urldata
        axios.get(sUrlJson).then(fnLoad)
    },//get_data()

    insert : function(oData,fnResult) {
        let urldata = 'http://telecoming.eduardoaf.com/employees/insert'
        const oForm = new FormData()

        for(let sKey in oData)
            oForm.append(sKey,oData[sKey])

        console.log("ModelPost.insert()",oData)
        axios.post(urldata,oForm)
            .then(fnResult)
    },//insert()

    get_profile : function(oData,fnResult) {
        let urldata = 'http://telecoming.eduardoaf.com/employees/profile?id='+oData.id
        //urldata = 'http://localhost:3000/employees/profile?id='+oData.id
        console.log("ModelPost.insert()",urldata)
        axios.post(urldata,oData).then(fnResult)
    },//get_profile()    

}//ModelPost
