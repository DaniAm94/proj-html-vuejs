<script>
export default {
    name: 'HeaderNav',
    props: {
        link: String
    }
}
</script>

<template>
    <li><a href="#">{{ link }}</a></li>
</template>