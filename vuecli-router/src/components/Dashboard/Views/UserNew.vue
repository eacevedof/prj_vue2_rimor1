<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8">
                    <new-profile-form>
                    </new-profile-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NewProfileForm from './UserProfile/NewProfileForm.vue'

export default {
    components: {
        NewProfileForm
    }
}
</script>
<style>

</style>
