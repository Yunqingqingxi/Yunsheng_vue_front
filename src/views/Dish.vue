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

    <el-dialog title="添加菜单项" :visible.sync="dialogVisible">
      <el-form :model="newMenuItem">
        <el-form-item label="菜单名称">
          <el-input v-model="newMenuItem.name"></el-input>
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="newMenuItem.link"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addNewMenuItem">添加</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from "@/stores/counter.js";
import {Delete, Edit} from "@element-plus/icons-vue";
import {page} from "@/api/category.js";

const store = useCounterStore();

const menuItems = ref([
  { name: '菜单项1', link: '/menu1' },
  { name: '菜单项2', link: '/menu2' }
]);

const dialogVisible = ref(false);

const newMenuItem = ref({
  name: '',
  link: ''
});

const tableData = ref([])
const pages=async ()=>{
  const result =await page();
  tableData.value=result.data.records
}
pages()


const openDialog = () => {
  dialogVisible.value = true;
};

const addNewMenuItem = () => {
  menuItems.value.push({ ...newMenuItem.value });
  dialogVisible.value = false;
  newMenuItem.value = { name: '', link: '' };
};

const deleteMenuItem = (item) => {
  const index = menuItems.value.indexOf(item);
  if (index !== -1) {
    menuItems.value.splice(index, 1);
  }
};
</script>

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
