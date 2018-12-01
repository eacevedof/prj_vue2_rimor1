//ModelPicklist
import axios from 'axios'

export default {

    get_titles : function(fnLoad) {
        let urldata = oConfig.endpoint+'picklists/titles'
        axios.get(urldata).then(fnLoad)
    },//get_titles()

    get_departments : function(fnLoad) {
        let urldata = oConfig.endpoint+'picklists/departments'
        axios.get(urldata).then(fnLoad)
    },//get_departments()    

}//ModelPicklist
