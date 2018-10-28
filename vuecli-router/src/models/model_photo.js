//ModelPhoto
import axios from 'axios'

export default {
    urldata: 'https://jsonplaceholder.typicode.com/photos/?_limit=5',
    get_data: function(fnLoad) {
        const sUrlJson = this.urldata
        axios.get(sUrlJson).then(fnLoad)
    },//get_data()
}//ModelPhoto