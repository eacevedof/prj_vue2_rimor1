//ModelPicklist
import axios from 'axios'

export default {
    get_titles : function(fnLoad) {
        let urldata = 'http://telecoming.eduardoaf.com/picklists/titles'
        console.log("ModelPicklist.get_titles()")
        const sUrlJson = urldata
        axios.get(sUrlJson).then(fnLoad)
    },//get_titles()

    get_departments : function(fnLoad) {
        let urldata = 'http://telecoming.eduardoaf.com/picklists/departments'
        console.log("ModelPicklist.get_departments()")
        const sUrlJson = urldata
        axios.get(sUrlJson).then(fnLoad)
    },//get_departments()    

}//ModelPicklist
