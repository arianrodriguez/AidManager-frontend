<script>

export default {
  name: "newpost-card",
}
</script>

<template>
  <pv-card style="background-color: #F7F7F7;" class="w-full shadow-none">
    <template #header>
      <div class="flex flex-row gap-3">
        <pv-avatar aria-label="yesiJoto"
                   class="w-3rem h-3rem"
                   image="https://avatars.githubusercontent.com/u/129230632?v=4"
                   shape="circle"/>
        <div class="flex flex-column justify-content-between">
          <p class="font-medium">Sebastian Hotman</p>
          <div class="flex flex-row align-items-center gap-4">
            <p class="text-sm text-green-600 font-normal">jhon.doe@hopeheaven.org</p>
          </div>
        </div>
      </div>
    </template>
    <template #title>
      <p class="my-3 text-lg font-medium">Celebrating Team Success: Hope Heaven International's Impact in Action</p>
    </template>
    <template #subtitle>
      <p class="mb-1">Dear Hope Haven Team,</p>
    </template>
    <template #content>
      <p class="post-comment line-height-3" style="text-wrap: pretty">
        We are thrilled to share some exciting news and celebrate the collective efforts of our incredible team
        members! Together, we have achieved significant milestones and made a meaningful impact on the lives of those
        we serve.
      </p>
      <div class="card-image-container mt-3">
        <img src="../../../assets/post-comment-image-1.png"/>
        <img src="../../../assets/post-comment-image-1.png"/>
        <img src="../../../assets/post-comment-image-1.png"/>
      </div>
    </template>
  </pv-card>
  <pv-card style="background-color: #F7F7F7;" class="w-full shadow-none">
    <template #header>
      <div class="flex flex-row gap-3">
        <pv-avatar aria-label="yesiJoto"
                   class="w-3rem h-3rem"
                   image="https://upc-math-e.github.io/landing-page/img/testimonial_person2.png"
                   shape="circle"/>
        <div class="flex flex-column justify-content-between">
          <p class="font-medium">Yesi Gameplays</p>
          <div class="flex flex-row align-items-center gap-4">
            <p class="text-sm text-green-600 font-normal">izi.helio@hopeheaven.pi</p>
          </div>
        </div>
      </div>
    </template>
    <template #title>
      <p class="my-3 text-lg font-medium">Celebrating Team Success: Hope Heaven International's Impact in Action</p>
    </template>
    <template #subtitle>
      <p class="mb-1">Dear Hope Haven Team,</p>
    </template>
    <template #content>
      <p class="post-comment line-height-3" style="text-wrap: pretty">
        We are thrilled to share some exciting news and celebrate the collective efforts of our incredible team
        members! Together, we have achieved significant milestones and made a meaningful impact on the lives of those
        we serve.
      </p>
      <div class="card-image-container mt-3">
        <img src="../../../assets/post-comment-image-1.png"/>
        <img src="../../../assets/post-comment-image-1.png"/>
        <img src="../../../assets/post-comment-image-1.png"/>
      </div>
    </template>
  </pv-card>
  <pv-card style="background-color: #F7F7F7;" class="w-full shadow-none">
    <template #header>
      <div class="flex flex-row gap-3">
        <pv-avatar aria-label="yesiJoto"
                   class="w-3rem h-3rem"
                   image="https://upc-math-e.github.io/landing-page/img/testimonial_person2.png"
                   shape="circle"/>
        <div class="flex flex-column justify-content-between">
          <p class="font-medium">Yesi Gameplays</p>
          <div class="flex flex-row align-items-center gap-4">
            <p class="text-sm text-green-600 font-normal">izi.helio@hopeheaven.pi</p>
          </div>
        </div>
      </div>
    </template>
    <template #title>
      <p class="my-3 text-lg font-medium">Celebrating Team Success: Hope Heaven International's Impact in Action</p>
    </template>
    <template #subtitle>
      <p class="mb-1">Dear Hope Haven Team,</p>
    </template>
    <template #content>
      <p class="post-comment line-height-3" style="text-wrap: pretty">
        We are thrilled to share some exciting news and celebrate the collective efforts of our incredible team
        members! Together, we have achieved significant milestones and made a meaningful impact on the lives of those
        we serve.
      </p>
      <div class="card-image-container mt-3">
        <img src="../../../assets/post-comment-image-1.png"/>
        <img src="../../../assets/post-comment-image-1.png"/>
        <img src="../../../assets/post-comment-image-1.png"/>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

.post-comment {
  letter-spacing: -.2px
}

.card-image-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .card-image-container {
    flex-direction: column;
  }
}



</style>