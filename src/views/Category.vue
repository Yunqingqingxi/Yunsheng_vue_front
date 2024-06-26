<script setup>
import {ref} from 'vue'
import {useCounterStore} from "@/stores/counter.js";
import {page,status,categoryList}from "@/api/category.js"
const store = useCounterStore()

/**
 *  添加分类表单
 * @type {Ref<UnwrapRef<{id: integer, name: string, sort: integer, type: integer}>>}
 */
const classify = ref({
  id: 0,
  name:'',
  sort: 0,
  type: 0
});
page()
</script>
<template>
  <el-card class="page-container">
    分类
  </el-card>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
