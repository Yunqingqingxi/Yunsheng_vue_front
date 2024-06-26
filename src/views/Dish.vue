<template>
  <el-card class="page-container">
    <div class="header">
      <h2>菜单</h2>
      <el-button type="primary" @click="openDialog">添加菜单项</el-button>
    </div>
    <el-list :data="menuItems">
      <template v-slot:item="{ item }">
        <el-list-item>
          <span>{{ item.name }}</span>
          <el-button @click="deleteMenuItem(item)" type="text" icon="el-icon-delete"></el-button>
        </el-list-item>
      </template>
    </el-list>

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
