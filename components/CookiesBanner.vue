<template>
    <div
    class="cookies--banner"
    id="cookies--banner">
        <p>By using this website you agree to our <a href="#">cookie policy</a></p>
        <button
        @click="document.getElementById('cookies--banner').style.display = none"
        class="cookies--button">Accept</button>
    </div>
</template>

<script>
export default {
    mounted: function() {
        let banner = document.getElementById('cookies--banner')

        if (localStorage.getItem('cookieSeen') != 'shown') {
            banner.style.display = block
            localStorage.setItem('cookieSeen') = 'shown'
        }

    }
}
</script>

<style lang="scss" scoped>
.cookies {
    &--banner {
        position: fixed;
        bottom: 40px;
        left: 10%;
        right: 10%;
        width: 80%;
        padding: 5px 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: $light-blue;
        border-radius: 5px;
        display: none;
    }
    
    &--button {
        padding: .5rem 1rem;
        background-color: $color-secondary;
        border-radius: 5px;
    }
}

</style>