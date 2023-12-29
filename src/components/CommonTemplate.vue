<template>
    <div class="common-template">
        <div class="common-template__box">
            <div v-for="item in listItem" :key="item.id" class="box__item">
                <p class="item__name">{{ item.name }}</p>
                <div class="item__button"><button @click="onDelete(item.id)">видалити</button></div>
            </div>
        </div>
        <div class="common-template__add-box">
            <label for="inputField" class="add-box__label">{{ fieldName }}</label>
            <input id="inputField" v-model="newFriend" type="text" class="add-box__input" />
            <div class="add-box__button"><button @click="addNewElement">додати</button></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonTemplate',
    props: {
        listItem: {
            type: Object,
            default: () => ({}),
        },
        fieldName: {
            type: String,
            default: 'поле для вводу',
        },
    },
    emits: ['delete', 'addElement'],
    data() {
        return {
            newFriend: null,
        }
    },
    methods: {
        onDelete(itemId) {
            this.$emit('delete', itemId)
        },
        addNewElement() {
            this.$emit('addElement', this.newFriend)
            this.newFriend = null
        },
    },
}
</script>

<style lang="scss" scoped></style>
