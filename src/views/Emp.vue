<script setup>
import {Delete, Edit} from '@element-plus/icons-vue'
import {ref} from 'vue'

import {ElMessage, ElMessageBox} from "element-plus";
import {getList, getListScore, loginOut, toAdd, toDelete} from "@/api/student.js";
import {useCounterStore} from "@/stores/counter.js";
import router from "@/router/index.js";

const store = useCounterStore()

const student = ref([])
const vo = ref([])
const form = ref(null)
const dialogVisible = ref(false)

/**
 * 定义发送的数据
 * @type {Ref<UnwrapRef<{studentName: string, studentScore: string, studnetId: string}>>}
 */
const addStudent = ref({
  studentId: '',
  studentName: '',
  studentScore: ''
});

/**
 * 获取学生数据
 * @return {Promise<void>}
 */
const list = async () => {
  const result = await getList();
  const resultVo = await getListScore()
  student.value = result.data
  vo.value = resultVo.data
}

/**
 * 添加学生
 * @return {Promise<void>}
 */
const toAddStu = async () => {
  const add = await toAdd(addStudent.value);
  ElMessage.success(add.message?add.message:'添加成功')
  await list()
}

/**
 * 显示遮罩
 * @param row
 */
const showDialog = (row) => {
  dialogVisible.value = true
}

/**
 * 删除学生
 * @param row
 */

const deleteCategory = (row) => {
  ElMessageBox.confirm(
      '你确认要删除该学生信息吗？',
      '温馨提示',
      {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }
  ).then(
      async () => {
        await toDelete(row.studentId)
        ElMessage.success("删除成功")
        await list()
      }
  )
}

/**
 * 退出登录
 * @return {Promise<void>}
 */
const out=async ()=>{
  const result = await loginOut();
  store.clearToken()
  ElMessage.success("退出成功")
  await router.push('/login')
}

// 启动时运行list 方法
list()

</script>
<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>后台</span>
       <h1>优秀:{{vo.a}} 良好:{{vo.b}} </h1>
        <div class="extra">
          <el-button :icon="Edit" circle plain type="primary" @click="showDialog(row)"></el-button>
          <el-button type="primary" @click="out()">退出</el-button>
        </div>
      </div>
    </template>
    <el-table :data="student" style="width: 100%">
      <el-table-column label="序号" width="100" type="index"></el-table-column>
      <el-table-column label="学生id" prop="studentId"></el-table-column>
      <el-table-column label="学生姓名" prop="studentName"></el-table-column>
      <el-table-column label="学生成绩" prop="studentScore"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button :icon="Delete" circle plain type="danger" @click="deleteCategory(row)"></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据"/>
      </template>
    </el-table>

    <!-- 添加分类弹窗 -->
    <el-dialog v-model="dialogVisible" width="30%">
      <el-form ref="form" :model="addStudent" label-width="100px" style="padding-right: 30px">
        <el-form-item label="学生id" prop="categoryName">
          <el-input v-model="addStudent.studentId" maxlength="15" minlength="1"></el-input>
        </el-form-item>
        <el-form-item label="学生姓名" prop="categoryAlias">
          <el-input v-model="addStudent.studentName" maxlength="15" minlength="1"></el-input>
        </el-form-item>
        <el-form-item label="学生成绩" prop="categoryAlias">
          <el-input v-model="addStudent.studentScore" maxlength="15" minlength="1"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="toAddStu();dialogVisible=false;"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
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

table {
  width: 100%;
}

th, td {
  padding: 8px;
  text-align: left;
}

.delete-button {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}


</style>
