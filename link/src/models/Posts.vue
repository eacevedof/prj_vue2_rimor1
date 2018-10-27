<script>
//ModelPost
import oAxios from 'axios'

export default {
    urldata : 'https://jsonplaceholder.typicode.com/posts/?_limit=20',
    get_data() {
        const sUrlJson = this.urldata
        oAxios.get(sUrlJson).then((response)=>{
            //this.result = response.data
            return response.data
        })
    },//get_data()
}//Posts
</script>