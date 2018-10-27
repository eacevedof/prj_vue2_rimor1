<script>
import oAxios from 'axios'
export default {
    urldata : 'https://jsonplaceholder.typicode.com/posts/?_limit=20',
    data(){
        return {
            result: [],
        }
    },//data()

    methods:{
        get_data : function() {
            const sUrlJson = this.urldata
            oAxios.get(sUrlJson).then((response)=>{
                //this.result = response.data
                return response.data
            })
        },//get_data()

    },//methods
}
</script>