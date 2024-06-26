<template>
  <el-card class="page-container">
    <div class="header">
      <h2>员工管理</h2>
      <el-button type="primary" @click="openDialog">添加员工</el-button>
    </div>
    <el-table :data="employees" style="width: 100%">
      <el-table-column prop="employeeId" label="员工ID" width="180"></el-table-column>
      <el-table-column prop="employeeName" label="员工姓名" width="180"></el-table-column>
      <el-table-column prop="employeeScore" label="员工得分" width="180"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="deleteEmployee(scope.$index)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="添加员工" :visible.sync="dialogVisible">
      <el-form :model="addEmployee">
        <el-form-item label="员工ID">
          <el-input v-model="addEmployee.employeeId"></el-input>
        </el-form-item>
        <el-form-item label="员工姓名">
          <el-input v-model="addEmployee.employeeName"></el-input>
        </el-form-item>
        <el-form-item label="员工得分">
          <el-input v-model="addEmployee.employeeScore"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addNewEmployee">添加</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'

const employees = ref([
  { employeeId: '1', employeeName: '张三', employeeScore: '95' },
  { employeeId: '2', employeeName: '李四', employeeScore: '88' }
]);

const dialogVisible = ref(false);

const addEmployee = ref({
  employeeId: '',
  employeeName: '',
  employeeScore: ''
});

const openDialog = () => {
  dialogVisible.value = true;
};

const addNewEmployee = () => {
  employees.value.push({ ...addEmployee.value });
  dialogVisible.value = false;
  addEmployee.value = {
    employeeId: '',
    employeeName: '',
    employeeScore: ''
  };
};

const deleteEmployee = (index) => {
  employees.value.splice(index, 1);
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
