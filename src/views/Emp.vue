<template>
  <el-card class="page-container">
    员工管理
  </el-card>
</template>

<script setup>
import {ref} from 'vue'
import {useCounterStore} from "@/stores/counter.js";

const store = useCounterStore()

/**
 * 定义发送的数据
 * @type {Ref<UnwrapRef<{studentName: string, studentScore: string, studnetId: string}>>}
 */
const addStudent = ref({
  studentId: '',
  studentName: '',
  studentScore: ''
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

table {
  width: 100%;
}

th, td {
  padding: 8px;
  text-align: left;
}

.delete-button {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}


</style>
