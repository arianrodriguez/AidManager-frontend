<script>
import NewpostList from "@/pages/home/components/newpost-list.component.vue";

export default {
  name: "home-content",
  components: {NewpostList}
}
</script>

<template>
  <section class="flex h-full flex-column p-3 lg:p-5 lg:pb-0">
    <div class="flex home-hero-container border-round-xl">
      <img class="home-hero-image border-round-xl" src="../../../assets/home-hero.png"/>
    </div>
    <h2 class="text-xl font-normal my-4">New posts:</h2>
    <newpost-list class="pb-4"></newpost-list>
  </section>
</template>

<style scoped>

section {
  background-color: #F7F7F7;
}

.home-hero-container {
  position: relative;
}

.home-hero-container::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
  border-radius: 15px;
}

.home-hero-image {
  width: 100%;
  height: 18rem;
  object-fit: cover;
}

</style>