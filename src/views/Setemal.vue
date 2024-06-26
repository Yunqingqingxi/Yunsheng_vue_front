<script setup>
import {Delete, Edit} from "@element-plus/icons-vue";
import {ref} from "vue";
import {page} from "@/api/category.js";
const tableData = ref([])
const pages=async ()=>{
  const result =await page();
  tableData.value=result.data.records
}
pages()

</script>

<template>
  <el-card class="page-container">
    <div>
      <el-row class="login-page" >

        <el-col :span="5" class="bg">
          <h>员工姓名</h>
          <el-input v-model="search" placeholder="请输入员工姓名" />
          <el-button icon="" type="primary">搜索</el-button>
        </el-col>
        <el-col :span="5" class="bg">
          <h>员工姓名</h>
          <el-input v-model="search" placeholder="请输入员工姓名" />
          <el-button icon="" type="primary">搜索</el-button>
        </el-col>
        <el-col :span="5" class="bg">
          <h>员工姓名</h>
          <el-input v-model="search" placeholder="请输入员工姓名" />
          <el-button icon="" type="primary">搜索</el-button>
        </el-col>
        <el-col :span="5" class="bg">

        </el-col>
        <el-col :span="2" class="bg">
          <el-button type="primary" @click="showdialog()"  >添加员工</el-button>
        </el-col>
        <el-col :span="2" class="bg">
          <el-button type="primary" @click="showdialog()"  >添加员工</el-button>
        </el-col>
      </el-row>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="序号" width="100" type="index"></el-table-column>
      <el-table-column label="id" prop="id"></el-table-column>
      <el-table-column label="级别" prop="name"></el-table-column>
      <el-table-column label="姓名" prop="username"></el-table-column>
      <el-table-column label="电话" prop="phone"></el-table-column>
      <el-table-column label="状态" prop="status"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button :icon="Edit" circle plain type="primary" @click=" showdialogedit(row)"></el-button>
          <el-button :icon="Delete" circle plain type="danger" @click="deleteCategory(row)"></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据"/>
      </template>
    </el-table>
  </el-card>
</template>



<style scoped lang="scss">
.page-container {
  padding: 20px;
}

.el-card {
  margin-bottom: 20px;
}
</style>
