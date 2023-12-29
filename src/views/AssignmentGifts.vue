<template>
    <div class="assignment-gift">
        <div class="assignment-gift__title">Розподіл подарунків</div>
        <div class="assignment-gift__box">
            <div class="box__friends">
                <div class="friends__title">Друг</div>
                <div class="friends__list">
                    <select v-model="assignmentObj.friendId">
                        <option v-for="friend in friendsList" :key="friend.id" :value="friend.id">
                            {{ friend.name }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="box__gifts">
                <div class="gifts__title">Подарунок</div>
                <div class="gifts__list">
                    <select v-model="assignmentObj.giftId">
                        <option v-for="gift in giftsList" :key="gift.id" :value="gift.id">
                            {{ gift.name }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="box__button"><button @click="addAssignment">додати</button></div>
        </div>
        <div class="assignment-gift__list">
            <div v-for="assignment in getAssignmentGiftsList" :key="assignment.id" class="list__item">
                <span>{{ assignment.nameFriend }}</span> - <span>{{ assignment.nameGift }}</span>
                <button @click="deleteAssignment(assignment.id)">видалити</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useFriendStore } from '@/store/friends'
import { useGiftsStore } from '@/store/gifts'
import { useAssignmentGiftsStore } from '@/store/assignmentGifts'
export default {
    name: 'AssignmentGifts',
    data() {
        return {
            assignmentObj: {},
        }
    },
    computed: {
        ...mapState(useFriendStore, ['friendsList']),
        ...mapState(useGiftsStore, ['giftsList']),
        ...mapState(useAssignmentGiftsStore, ['getAssignmentGiftsList']),
    },
    methods: {
        ...mapActions(useAssignmentGiftsStore, ['deleteAssignment', 'addNewAssignment']),
        addAssignment() {
            if (this.assignmentObj.friendId && this.assignmentObj.giftId) {
                // console.log(this.assignmentObj, 'testObj')
                this.addNewAssignment(this.assignmentObj)
                this.assignmentObj = {}
            } else alert('Треба обрати і друга , і подарунок')
        },
    },
}
</script>

<style lang="scss" scoped></style>
