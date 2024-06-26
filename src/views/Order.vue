<template>
  <el-card class="page-container">
    <div class="header">
      <h2>订单管理</h2>
      <el-button type="primary" @click="openDialog">添加订单</el-button>
    </div>
    <el-table :data="orders" style="width: 100%">
      <el-table-column prop="orderNumber" label="订单号" width="180"></el-table-column>
      <el-table-column prop="orderDate" label="订单日期" width="180"></el-table-column>
      <el-table-column prop="orderStatus" label="订单状态" width="180"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="deleteOrder(scope.$index)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="添加订单" :visible.sync="dialogVisible">
      <el-form :model="addOrder">
        <el-form-item label="订单号">
          <el-input v-model="addOrder.orderNumber"></el-input>
        </el-form-item>
        <el-form-item label="订单日期">
          <el-input v-model="addOrder.orderDate"></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-input v-model="addOrder.orderStatus"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addNewOrder">添加</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from "@/stores/counter.js";

const store = useCounterStore();

const orders = ref([
  { orderNumber: '001', orderDate: '2024-06-01', orderStatus: '已完成' },
  { orderNumber: '002', orderDate: '2024-06-02', orderStatus: '处理中' }
]);

const dialogVisible = ref(false);

const addOrder = ref({
  orderNumber: '',
  orderDate: '',
  orderStatus: ''
});

const openDialog = () => {
  dialogVisible.value = true;
};

const addNewOrder = () => {
  orders.value.push({ ...addOrder.value });
  dialogVisible.value = false;
  addOrder.value = {
    orderNumber: '',
    orderDate: '',
    orderStatus: ''
  };
};

const deleteOrder = (index) => {
  orders.value.splice(index, 1);
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
