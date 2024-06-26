<template>
  <el-card class="page-container">

  </el-card>
</template>


<script setup>
import {ref} from 'vue'
import {useCounterStore} from "@/stores/counter.js";

const store = useCounterStore()


/**
 * 添加学生数据表单
 * @type {Ref<UnwrapRef<{num: string, day: string, ec: string}>>}
 */
const addStudent = ref({
  ec:'',
  num: '',
  day: '',
});


</script>

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
