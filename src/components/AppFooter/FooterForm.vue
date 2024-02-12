<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: "Footerform",
    components: { FontAwesomeIcon }
}
</script>

<template>
    <div class="form">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <button>Subscribe
            <FontAwesomeIcon icon="arrow-right" />
        </button>
    </div>
</template>

<style scoped lang="scss">
.form {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
</style>