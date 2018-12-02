<template>
    <div class="content">
        <!--userprofile.vue-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8">
                    <edit-profile-form/>
                </div>
                <!-- imagen del usuario -->
                <div class="col-md-4">
                    <user-card/>
                </div>
            </div>
        </div>
        <!--userprofile.vue-->
    </div>
</template>
<script>
import EditProfileForm from './UserProfile/EditProfileForm.vue'
import UserCard from './UserProfile/UserCard.vue'

export default {
    components: {
        EditProfileForm,
        UserCard
    }
}
</script>
<style>

</style>
