<script setup>

import El from '@/components/vue/EleMent.vue'
import Top from '@/components/vue/TopBar.vue'
</script>

<template>
<el-container class="layout-container">
    <!-- 可以假设 El 是一个组件或元素 -->
    <El/>
  <el-container>

    <el-header>
      <Top/>
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