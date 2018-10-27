<script>
//ModelPost
import axios from 'axios'

export default {
    urldata : 'https://jsonplaceholder.typicode.com/posts/?_limit=20',
    get_data : function(_this) {
        const sUrlJson = this.urldata
        axios.get(sUrlJson).then((response)=>{
            _this.posts = response.data
        })
    },//get_data()
}//ModelPost

</script>