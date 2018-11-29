//ModelPicklist
import config from '../../static/config.json'
import axios from 'axios'

export default {

    get_titles : function(fnLoad) {
        let urldata = config.domain+'picklists/titles'
        axios.get(urldata).then(fnLoad)
    },//get_titles()

    get_departments : function(fnLoad) {
        let urldata = config.domain+'picklists/departments'
        axios.get(urldata).then(fnLoad)
    },//get_departments()    

}//ModelPicklist
