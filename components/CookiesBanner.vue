<template>
    <div
    class="cookies-banner"
    style="display: none">
        <p>By using this website you agree to our <a href="#">cookie policy</a></p>
        <button class="cookies-button">Accept</button>
    </div>
</template>

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
    }
    
    &--button {
        padding: .5rem 1rem;
        background-color: $color-secondary;
    }
}

</style>