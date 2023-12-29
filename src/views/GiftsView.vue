<template>
    <div class="Gifts">
        <h2 class="Gifts__title">Список подарунків</h2>
        <div class="Gifts__list">
            <common-template
                :list-item="giftsList"
                field-name="новий подарунок"
                @delete="onDelete"
                @add-element="addGift"
            />
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useGiftsStore } from '@/store/gifts'
import CommonTemplate from '@/components/CommonTemplate.vue'
export default {
    name: 'GiftsView',
    components: {
        CommonTemplate,
    },
    computed: {
        ...mapState(useGiftsStore, ['giftsList']),
    },
    methods: {
        ...mapActions(useGiftsStore, ['deleteGift', 'addNewGift']),
        onDelete(itemId) {
            this.deleteGift(itemId)
        },
        addGift(newName) {
            this.addNewGift(newName)
        },
    },
}
</script>

<style lang="scss" scoped></style>
