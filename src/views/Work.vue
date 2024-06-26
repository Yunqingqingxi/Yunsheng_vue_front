<template>
  <el-card class="page-container">
    <h2>工作台</h2>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <div slot="header" class="clearfix">
            <span>任务管理</span>
          </div>
          <div>这里放置任务管理内容</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div slot="header" class="clearfix">
            <span>通知中心</span>
          </div>
          <div>这里放置通知中心内容</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div slot="header" class="clearfix">
            <span>日程安排</span>
          </div>
          <div>这里放置日程安排内容</div>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from "@/stores/counter.js";

const store = useCounterStore();
</script>

<style scoped lang="scss">
.page-container {
  min-height: 100%;
  box-sizing: border-box;
  padding: 20px;
}

.el-card {
  margin-bottom: 20px;
}
</style>
