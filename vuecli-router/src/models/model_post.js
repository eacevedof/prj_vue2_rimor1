//ModelPost
import axios from 'axios'

export default {
   
    get_data(fnLoad,id) {
        console.log("page-id:"+id)
        let urldata = oConfig.endpoint+'employees?page='+id
        axios.get(urldata).then(fnLoad)
    },//get_data()

    get_profile(oData,fnResult) {
        let urldata = oConfig.endpoint+'employees/profile?id='+oData.id
        axios.post(urldata,oData).then(fnResult)
    },//get_profile()    

    insert(oData,fnResult) {
        let urldata = oConfig.endpoint+'employees/insert'
        const oForm = new FormData()

        for(let sKey in oData)
            oForm.append(sKey,oData[sKey])
        axios.post(urldata,oForm)
            .then(fnResult)
    },//insert()

}//ModelPost
