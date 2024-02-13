<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: "Footerform",
    components: { FontAwesomeIcon }
}
</script>

<template>
    <div class="form">
        <h3>Join Our Newsletter</h3>
        <span>Subscribe to recive useful information.</span>
        <div>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email Address">
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

    h3 {
        font-weight: bold;
    }

    button {
        padding: 20px;
        border: 0px;
        border-radius: 2px 2px 0px 0px;
    }

    span {
        margin-top: 10px;
    }

    input {
        margin-bottom: 5px;
        margin-top: 30px;
        border-radius: 2px 2px 0px 0px;
        padding: 20px;

    }
}
</style>