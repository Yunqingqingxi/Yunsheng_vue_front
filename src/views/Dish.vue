<script setup>
import {ref} from 'vue'
import {useCounterStore} from "@/stores/counter.js";


const store = useCounterStore()

/**
 * 添加表单
 * @type {Ref<UnwrapRef<{teacher: string, name: string, ascore: string, bscore: string}>>}
 */
const addStudent = ref({
  name:'',
  teacher: '',
  ascore: '',
  bscore: '',
});

</script>
<template>
  <el-card class="page-container">
    菜单
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
