<script setup>
import { ref } from 'vue'
import { useCounterStore } from "@/stores/counter.js";
import { ElForm, ElFormItem, ElInput, ElButton, ElCard } from 'element-plus'

const store = useCounterStore()

/**
 *  添加分类表单
 * @type {Ref<UnwrapRef<{id: integer, name: string, sort: integer, type: integer}>>}
 */
const classify = ref({
  id: 0,
  name: '',
  sort: 0,
  type: 0
});

const onSubmit = () => {
  console.log('分类信息:', classify.value)
}
</script>

<template>
  <el-card class="page-container">
    <div class="header">
      <h2>添加分类</h2>
    </div>
    <el-form :model="classify">
      <el-form-item label="分类名称">
        <el-input v-model="classify.name" placeholder="请输入分类名称"></el-input>
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="classify.sort" type="number" placeholder="请输入排序"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-input v-model="classify.type" type="number" placeholder="请输入类型"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;
  padding: 20px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
}
</style>
