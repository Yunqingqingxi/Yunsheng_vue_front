<script setup>
import SideBar from '@/components/SideBar.vue'
import TopBar from '@/components/TopBar.vue'
</script>

<template>
<el-container class="layout-container">
  <SideBar/>
  <el-container>
    <el-header>
      <TopBar/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer>
    </el-footer>
  </el-container>
</el-container>
</template>

<style scoped lang="scss">
.layout-container {
  height: 100vh;
}

</style>