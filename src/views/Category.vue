<script setup>
import {ref} from 'vue'
import {useCounterStore} from "@/stores/counter.js";
import {page,status,categoryList}from "@/api/category.js"
import {Delete, Edit} from "@element-plus/icons-vue";
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

const tableData = ref([])
const pages=async ()=>{
  const result =await page();
  tableData.value=result.data.records
}
pages()
</script>
<template>
  <div>
    <el-row class="login-page" >
      <el-col :span="10" class="bg">
        <h>员工姓名</h>
        <el-input v-model="search" placeholder="请输入员工姓名" />
        <el-button icon="" type="primary">搜索</el-button>
      </el-col>
      <el-col :span="10" class="bg">
        <h>员工姓名</h>
        <el-input v-model="search" placeholder="请输入员工姓名" />
        <el-button icon="" type="primary">搜索</el-button>
      </el-col>

      <el-col :span="2" class="bg">
        <el-button type="primary" @click="showdialog()"  >添加员工</el-button>
      </el-col>
      <el-col :span="2" class="bg">
        <el-button type="primary" @click="showdialog()"  >添加员工</el-button>
      </el-col>
    </el-row>
  </div>
  <el-card class="page-container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="序号" width="100" type="index"></el-table-column>
      <el-table-column label="级别" prop="id"></el-table-column>
      <el-table-column label="姓名" prop="type"></el-table-column>
      <el-table-column label="电话" prop="name"></el-table-column>
      <el-table-column label="状态" prop="sort"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button :icon="Edit" circle plain type="primary" @click="editCategory(row)"></el-button>
          <el-button :icon="Delete" circle plain type="danger" @click="deleteCategory(row)"></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据"/>
      </template>
    </el-table>
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
