//ModelPost
import axios from 'axios'

export default {
    urldata : 'https://jsonplaceholder.typicode.com/posts',
    get_data : function(fnLoad) {
        console.log("ModelPost.get_data()")
        const sUrlJson = this.urldata + '/?_limit=20'
        axios.get(sUrlJson).then(fnLoad)
    },//get_data()

    insert : function(oData,fnResult) {
        console.log("ModelPost.insert()")
        const sUrlJson = this.urldata + ''
        axios.post(sUrlJson,oData).then(fnResult)
    },//insert()

}//ModelPost
