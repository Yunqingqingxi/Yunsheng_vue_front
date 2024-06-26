<template>
    <el-card class="page-container">
      <h2>数据统计</h2>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card>
            <div slot="header" class="clearfix">
              <span>统计项1</span>
            </div>
            <div>统计数据1</div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card>
            <div slot="header" class="clearfix">
              <span>统计项2</span>
            </div>
            <div>统计数据2</div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card>
            <div slot="header" class="clearfix">
              <span>统计项3</span>
            </div>
            <div>统计数据3</div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const statistics = ref({
    item1: '统计数据1',
    item2: '统计数据2',
    item3: '统计数据3'
  });
  </script>
  
  <style scoped lang="scss">
  .page-container {
    padding: 20px;
  }
  
  .el-card {
    margin-bottom: 20px;
  }
  </style>
  