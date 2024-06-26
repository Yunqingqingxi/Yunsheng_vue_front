<template>
  <el-card class="page-container">
    <h2>套餐</h2>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <div slot="header" class="clearfix">
            <span>套餐A</span>
          </div>
          <div>详细信息A</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div slot="header" class="clearfix">
            <span>套餐B</span>
          </div>
          <div>详细信息B</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div slot="header" class="clearfix">
            <span>套餐C</span>
          </div>
          <div>详细信息C</div>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup>
</script>

<style scoped lang="scss">
.page-container {
  padding: 20px;
}

.el-card {
  margin-bottom: 20px;
}
</style>
