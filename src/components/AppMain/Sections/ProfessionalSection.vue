<script>
export default {
    name: 'ProfessionalSection',
}
</script>
<template>
    <section id="professional">
        <figure>
            <div></div>
        </figure>
        <div class="recipe-prof-cyclist">
            <article>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere unde repudiandae ducimus corrupti explicabo aspernatur, est ullam reiciendis, molestias libero itaque natus mollitia labore iusto soluta quia eius fugiat.
            Quas doloribus consequatur iure neque incidunt beatae ipsam debitis temporibus at? Natus, delectus sit nisi sunt porro consequuntur laudantium non quidem cum quibusdam possimus explicabo, ipsa sapiente voluptatibus odit doloribus!
            Tenetur maiores adipisci eos soluta vitae ab illum maxime modi, blanditiis suscipit ratione sed, nisi earum voluptas harum dignissimos veritatis velit fuga et aperiam. Omnis tempora voluptatibus quisquam iure ratione?</article>
            <BaseButton text="Get to know us" :hasArrow="true"/>
        </div>
    </section>
</template>

<style scoped lang="scss">

#professional {
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    figure {
        height: 600px;
        width: 500px;
        background-color: aqua;
        display: flex;
        align-items: center;
        justify-content: center;

        div {
            background-color: black;
            height: 700px;
            width: 300px;
        }
    }

    article {
        height: 400px;
        width: 400px;
        background-color: black;
        margin-bottom: 5px;
    }

}








</style>