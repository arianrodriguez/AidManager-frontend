<script>
import NewpostCard from "@/pages/home/components/newpost-card.component.vue";

export default {
  name: "newpost-list",
  components: {NewpostCard}
}
</script>

<template>
  <div class="card-container flex flex-column gap-5">
    <newpost-card></newpost-card>
  </div>
</template>

<style scoped>

@media (min-width: 1024px) {

  .card-container {
    overflow-y: auto;
    flex: 1 1 auto;
    height: 0px;
    position: relative;
  }

}

</style>