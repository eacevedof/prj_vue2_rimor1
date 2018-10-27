//ModelAlbum
import axios from 'axios'

export default {
    urldata : 'https://jsonplaceholder.typicode.com/albums/?_limit=20',
    get_data : function(fnLoad) {
        const sUrlJson = this.urldata
        axios.get(sUrlJson).then(fnLoad)
    },//get_data()
}//ModelAlbum

