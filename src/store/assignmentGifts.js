import { defineStore } from 'pinia'
//========================================================//
import { useFriendStore } from './friends'
import { useGiftsStore } from './gifts'

export const useAssignmentGiftsStore = defineStore('AssignmentGifts', {
    state: () => ({
        assignmentGiftsList: [],
    }),
    getters: {
        getAssignmentGiftsList: (state) => {
            const friend = useFriendStore()
            const gift = useGiftsStore()
            if (state.assignmentGiftsList.length) {
                return state.assignmentGiftsList.map(({ id, friendId, giftId }) => {
                    const friendName = friend.getFriendNameById(friendId).name
                    const giftName = gift.getGiftById(giftId).name
                    return {
                        id,
                        nameFriend: friendName,
                        nameGift: giftName,
                    }
                })
            }
        },
    },
    actions: {
        deleteAssignment(assignmentId) {
            this.assignmentGiftsList = this.assignmentGiftsList.filter((assignment) => assignment.id !== assignmentId)
        },
        addNewAssignment(newAssignment) {
            // console.log(this.assignmentGiftsList, 'storeObj')
            this.assignmentGiftsList.push({
                id: new Date().getTime(),
                ...newAssignment,
            })
        },

        deleteAssignmentByFriendId(friendId) {
            // console.log(friendId, 'модуль призначення друзі')
            this.assignmentGiftsList = this.assignmentGiftsList.filter((assignment) => assignment.friendId !== friendId)
        },
        deleteAssignmentByGiftId(giftId) {
            // console.log(giftId, 'модуль призначення подарунок')
            this.assignmentGiftsList = this.assignmentGiftsList.filter((assignment) => assignment.giftId !== giftId)
        },
    },
})
