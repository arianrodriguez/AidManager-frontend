<script>
export default {
  name: "toolbar-content",
  props: {
    toggleNav: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleToggle() {
      this.toggleNav();
    }
  }
}
</script>

<template>
  <pv-toolbar class="header h-7rem px-5 w-full">
    <!--pone los contenedores en este caso uno al final y el otro al principio con #start y #end de la toolbar-->
    <template #start>
      <div class=" flex flex-row align-items-center gap-5">
        <i class="pi pi-bars" @click="handleToggle" style="color: slateblue; font-size: 1.5rem; cursor: pointer"></i>
        <div class="flex flex-row align-items-center gap-3">
          <img class="block h-2rem w-3rem" src="../assets/logoAidManager.png" alt="logoAidManager"/>
          <div class="title-container flex flex-column justify-content-center">
            <p class="title font-semibold ">AidManager</p>
            <span class="text-sm">Director</span>
          </div>
        </div>
      </div>
    </template>
    <template #end>
      <div class="flex flex-row gap-3">
        <pv-avatar aria-label="yesifoto"
                   class="w-3rem h-3rem"
                   image="https://avatars.githubusercontent.com/u/129230632?v=4"
                   shape="circle"/>
        <div class="flex flex-column justify-content-center gap-1">
          <p class="font-medium">Sebastian Hotman</p>
          <div class="flex flex-row align-items-center gap-4">
            <p class="text-sm text-green-600 font-normal">Hope Heaven</p>
            <div class="members-quantity">
              <i class="pi pi-user mr-2" style="font-size: .8rem; color: #008A66"></i><span class="text-sm">23</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>

.header {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
}

.title-container {
  margin-top: 2px;
}

.title {
  letter-spacing: 1px;
  font-size: 1rem;
}

.pi-bars {
  display: none;
}

.members-quantity span {
  color: #008A66;
}

@media (max-width: 1024px) {

  .pi-bars {
    display: block;
  }
}

</style>