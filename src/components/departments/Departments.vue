<template>
  <div>
      <div v-for="(department, k) in departments"
            :key="k">
            {{department.nombre}}
      </div>
  </div>
</template>

<script>
export default {

  computed: {
    departments() {
        return this.$store.getters['departments']
    },
  }

}
</script>

<style>

</style>