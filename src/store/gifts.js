import { defineStore } from 'pinia'
//========================================================//
import { useAssignmentGiftsStore } from './assignmentGifts'
export const useGiftsStore = defineStore('Gifts', {
    state: () => ({
        giftsList: [
            {
                id: 1,
                name: 'Ровер',
            },
            {
                id: 2,
                name: 'Дім',
            },
            {
                id: 3,
                name: 'Авто',
            },
            {
                id: 4,
                name: 'Квартира',
            },
            {
                id: 5,
                name: 'Ноутбук',
            },
        ],
    }),
    getters: {
        getGiftById: (state) => (giftId) => state.giftsList.find((gift) => gift.id == giftId),
    },
    actions: {
        deleteGift(giftId) {
            this.giftsList = this.giftsList.filter((gift) => gift.id !== giftId)
            const assignmentGift = useAssignmentGiftsStore()
            assignmentGift.deleteAssignmentByGiftId(giftId)
        },
        addNewGift(newGift) {
            this.giftsList.push({
                id: new Date().getTime(),
                name: newGift,
            })
        },
    },
})
