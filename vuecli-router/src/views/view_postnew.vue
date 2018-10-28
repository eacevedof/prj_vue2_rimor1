<!--
{
  "userId": 1,
  "id": 9,
  "title": "nesciunt iure omnis dolorem tempora et accusantium",
  "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
}
-->
<template>
    <!--Postnew.vue-->
    <div>
        <h1>{{title}}</h1>
        <p> 
        - Postnew.vue -
        </p>   
        <!-- <pre v-if="result">{{result}}</pre> -->
        <form v-on:submit.prevent="insert">
            <div class="form-group required">
                <label class="control-label" for="txtTitle">Title</label>
                <input type="text" id="txtTitle" class="form-control" aria-describedby="Title" 
                    placeholder="This is a post title" v-model="posttitle" required
                >
                <small id="txtTitleHelp" class="form-text text-muted">Your post title.</small>
            </div>
            <div class="form-group required">
                <label for="txtBody" class="control-label">Content</label>
                <textarea id="txtBody" class="form-control" aria-describedby="Body" 
                    placeholder="Loren ipsum ..." v-model="postbody" required
                ></textarea>
                <small id="txtBodyHelp" class="form-text text-muted">Your post content.</small>
            </div>
            <input type="hidden" id="hidUserId" v-model="postuserid">
            <input type="submit" class="btn btn-dark" value=" Save ">
        </form>
    </div>
    <!--/Postnew.vue-->
</template>

<script>
import ModelPost from '@/models/model_post'


export default {
    name: 'Postnew',
    pagetitle: 'New post',

    components : {
        
    },

    data(){
        console.log("Postnew.data()")
        return {
            title: "New post",
            httpstatus: 200,
            result: "",

            posttitle: "",
            postbody: "",
            postuserid: "aabb",

            rows: [],
        }
    },//data()
    
    created: function () {
        console.log("Postnew.create()")

    },//created()

    methods:{
        select(){},
        insert(){
            let oData = {
                title: this.posttitle,
                body: this.postbody,
                userId: this.postuserid
            }

            ModelPost.insert(oData,(response)=>{
                //console.log(response)
                this.result = response
                this.httpstatus = response.status
                if(this.httpstatus===201){
                    this.$toasted
                        .success(`Post created!! id:${this.result.data.id}`,{duration:5000,fullWidth:true})
                    this.fieldreset()
                }
                else
                    this.$toasted
                        .error(`Some error ocurred!! ${this.httpstatus}`,{duration:5000,fullWidth:true})
            })
        }, //insert
        update(){},
        delete(){},

        fieldreset(){
            this.posttitle = ''
            this.postbody = ''
        }
    },//methods

    computed: {

    }//computed
}//Postnew
</script>

<style>
.form-group.required .control-label:after {
  content:" *";
  color:red;
}
</style>