<script setup>
import {ref} from 'vue'

import {ElMessage, ElMessageBox} from "element-plus";
import {getStuBList, loginOut, toAdd, toDelete} from "@/api/score.js";
import {useCounterStore} from "@/stores/counter.js";
import router from "@/router/index.js";


const student = ref([])
const vo = ref([])
const dialogVisible = ref(false)
const form = ref(null)
const store = useCounterStore()

/**
 * 添加表单
 * @type {Ref<UnwrapRef<{teacher: string, name: string, ascore: string, bscore: string}>>}
 */
const addStudent = ref({
  name:'',
  teacher: '',
  ascore: '',
  bscore: '',
});

/**
 * 列表
 * @return {Promise<void>}
 */
const list = async () => {
  const result = await getStuBList();
  student.value = result.data
}

/**
 * 显示遮罩
 */
const showDialog = () => {
  dialogVisible.value = true
}

/**
 * 添加信息
 * @return {Promise<void>}
 */
const toAddStu = async () => {
  const add = await toAdd(addStudent.value);
  ElMessage.success(add.message?add.message:'添加成功')
  await list()
}

/**
 * 删除信息
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
        await toDelete(row.name)
        ElMessage.success("删除成功")
        await list()
      }
  )
}
/**
 * 登出
 * @return {Promise<void>}
 */
const out=async ()=>{
  const result = await loginOut();
  store.clearToken()
  ElMessage.success("退出成功")
  await router.push('/login')
}

list()
</script>
<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <h>

          <el-button  type="primary"@click="showDialog()" >增加记录</el-button>
        </h>
        <div class="extra">

          <el-button type="primary" @click="out()">退出</el-button>
        </div>
      </div>
    </template>
    <el-table :data="student" style="width: 100%">
      <el-table-column label="序号" width="100" type="index"></el-table-column>
      <el-table-column label="课程姓名" prop="name"></el-table-column>
      <el-table-column label="教师姓名" prop="teacher"></el-table-column>
      <el-table-column label="a" prop="ascore"></el-table-column>
      <el-table-column label="b" prop="bscore"></el-table-column>
      <el-table-column label="c" prop="b"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button  type="danger" @click="deleteCategory(row)">删除</el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据"/>
      </template>
    </el-table>

<!--     添加分类弹窗-->
    <el-dialog v-model="dialogVisible" width="30%">
      <el-form ref="form" :model="addStudent" label-width="100px" style="padding-right: 30px">
        <el-form-item label="课程名称" prop="categoryName">
          <el-input v-model="addStudent.name" maxlength="10" minlength="1"></el-input>
        </el-form-item>
        <el-form-item label="教师" prop="categoryAlias">
          <el-input v-model="addStudent.teacher" maxlength="15" minlength="1"></el-input>
        </el-form-item>
        <el-form-item label="a" prop="categoryAlias">
          <el-input v-model="addStudent.ascore" maxlength="15" minlength="1"></el-input>
        </el-form-item>
        <el-form-item label="b" prop="categoryAlias">
          <el-input v-model="toAddStu.bscore" maxlength="15" minlength="1"></el-input>
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
</style>
