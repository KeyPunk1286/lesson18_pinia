<template>
    <div class="frieds">
        <h2 class="frieds__title">Список друзів</h2>
        <div class="frieds__list">
            <common-template
                :list-item="friendsList"
                field-name="новий друг"
                @delete="onDelete"
                @add-element="addNewName"
            />
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useFriendStore } from '@/store/friends'
import CommonTemplate from '@/components/CommonTemplate.vue'
export default {
    name: 'FriendsView',
    components: {
        CommonTemplate,
    },
    computed: {
        ...mapState(useFriendStore, ['friendsList']),
    },
    methods: {
        ...mapActions(useFriendStore, ['deleteFriend', 'addNewFriend']),
        onDelete(itemId) {
            this.deleteFriend(itemId)
        },
        addNewName(newName) {
            this.addNewFriend(newName)
        },
    },
}
</script>
