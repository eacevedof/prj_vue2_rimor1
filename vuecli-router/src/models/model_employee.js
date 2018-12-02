//ModelEmployee
import axios from 'axios'

export default {
   
   
    get_data(fnLoad,id,searchtag) {
        console.log(id,searchtag,"employee.get_data")
        let urldata = oConfig.endpoint+'employees?page='+id+'&s='+searchtag
        axios.get(urldata).then(fnLoad)
    },//get_data()

    get_profile(oData,fnResult) {
        let urldata = oConfig.endpoint+'employees/profile?id='+oData.id
        axios.post(urldata,oData).then(fnResult)
    },//get_profile()    

    get_profile_pic(sGender){
        sGender = sGender || "female"
        let urldata = `https://randomuser.me/api/?gender=${sGender}`
        axios.get(urldata).then((response)=>{
            let oPicture = response.data.results[0].picture
            console.log(response.data.results[0].picture,"image pic")
            let eImg = document.getElementById("imgUser")
            if(eImg && oPicture){
                eImg.src=oPicture.large
            }
        })
    },

    insert(oData,fnResult) {
        let urldata = oConfig.endpoint+'employees/insert'
        const oForm = new FormData()

        for(let sKey in oData)
            oForm.append(sKey,oData[sKey])
        axios.post(urldata,oForm)
            .then(fnResult)
    },//insert()

}//ModelEmployee
