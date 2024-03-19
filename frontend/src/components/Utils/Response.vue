<template>
    <div class="response-requests">
        <fwb-toast divide type="success">
            Item moved successfully.
        </fwb-toast>
    </div>
</template>

<script>
import { FwbToast } from 'flowbite-vue'

export default {
    name: 'generalResponse',
    components: {
        FwbToast
    }
}

</script>

<style lang="scss" scoped>

</style>
