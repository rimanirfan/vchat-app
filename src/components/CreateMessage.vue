<template>
    <div class="container" style="margin-bottom: 30px">
        <form @submit.prevent="createMessage">
            <div class="form-group">
                <input class="form-control" type="text" name="message" placeholder="Enter message..." v-model="newMessage">
                <p class="text-danger" v-if="errorText">{{ errorText }}</p>
            </div>
            <button class="btn btn-primary" type="submit" name="action" >Send</button>
        </form>
    </div>
</template>

<script>
    import fb from '../firebase/init';

    export default {
        name: 'createMessage',
        props: ['name'],
        data() {
            return {
                errorText: null,
                newMessage: null,
            }
        },
        methods: {
            createMessage() {
                if(this.newMessage) {
                    fb.collection('messages').add({
                        message: this.newMessage,
                        name: this.name,
                        timestamp: Date.now()
                    }).catch(err => {
                        console.log(err)
                    })
                    this.newMessage = null
                    this.errorText = null
                } else {
                    this.errorText = 'Plese insert your message'
                }
            }
        }
    }
</script>

<style>

</style>


