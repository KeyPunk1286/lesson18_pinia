import { defineStore } from 'pinia'
//========================================================//
import { useAssignmentGiftsStore } from './assignmentGifts'
export const useFriendStore = defineStore('friends', {
    state: () => ({
        friendsList: [
            {
                id: 1,
                name: 'Дмитро',
            },
            {
                id: 2,
                name: 'Роман',
            },
            {
                id: 3,
                name: 'Світлана',
            },
            {
                id: 4,
                name: 'Володимир',
            },
            {
                id: 5,
                name: 'Єлізовета',
            },
        ],
    }),
    getters: {
        getFriendNameById: (state) => (nameId) => state.friendsList.find((friend) => friend.id == nameId),
    },
    actions: {
        deleteFriend(friendId) {
            console.log(friendId, 'модуль друзів')
            this.friendsList = this.friendsList.filter((friend) => friend.id !== friendId)
            const assignmentFrend = useAssignmentGiftsStore()
            assignmentFrend.deleteAssignmentByFriendId(friendId)
        },
        addNewFriend(newFriend) {
            this.friendsList.push({
                id: new Date().getTime(),
                name: newFriend,
            })
        },
    },
})
