//ModelPost
import config from '../../static/config.json'
import axios from 'axios'

export default {
   
    get_data : function(fnLoad) {
        //console.log(oData.id,"iPage")
        let urldata = config.domain+'employees?page='//+oData.id
        axios.get(urldata).then(fnLoad)
    },//get_data()

    insert : function(oData,fnResult) {
        let urldata = config.domain+'employees/insert'
        const oForm = new FormData()

        for(let sKey in oData)
            oForm.append(sKey,oData[sKey])
        axios.post(urldata,oForm)
            .then(fnResult)
    },//insert()

    get_profile : function(oData,fnResult) {
        let urldata = config.domain+'employees/profile?id='+oData.id
        console.log("ModelPost.insert()",urldata)
        axios.post(urldata,oData).then(fnResult)
    },//get_profile()    

}//ModelPost
