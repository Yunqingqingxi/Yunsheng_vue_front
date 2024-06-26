<template>
  <el-card class="page-container">
    <div>
    <el-row class="login-page" >

      <el-col :span="11" class="bg">
        <h>员工姓名</h>
        <el-input v-model="search" placeholder="请输入员工姓名" />
        <el-button icon="" type="primary">搜索</el-button>
      </el-col>
      <el-col :span="11" class="bg">

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

    <el-dialog v-model="addistrue"   width="30%">
      <el-form ref="form" :model="addEmp"  label-width="100px" style="padding-right: 30px">
        <el-form-item label="姓名" prop="categoryName">
          <el-input v-model="addEmp.username" minlength="1" maxlength="15"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="categoryAlias">
          <el-input v-model="addEmp.phone" minlength="1" maxlength="15"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="categoryAlias">
          <el-input v-model="addEmp.sex" minlength="1" maxlength="15"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
            <el-button @click="istrue = false">取消</el-button>
            <el-button type="primary" @click="addemprequest();addistrue=false;"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>

    <el-dialog v-model="editistrue"   width="30%">
      <el-form-item label="姓名" prop="categoryName">
        <el-input v-model="addEmp.username" minlength="1" maxlength="15"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="categoryAlias">
        <el-input v-model="addEmp.phone" minlength="1" maxlength="15"></el-input>
      </el-form-item>
      <template #footer>
        <span class="dialog-footer">
            <el-button @click="istrue = false">取消</el-button>
            <el-button type="primary" @click=";editemprequest(),editistrue=false;"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>

  </el-card>
</template>

<script setup>
import {ref} from 'vue'
import {useCounterStore} from "@/stores/counter.js";
import {getEmplist, addEmprequset, deleteEmp, editEmpinfo} from "@/api/employee.js"
import {BottomRight, Delete, Edit} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";
const store = useCounterStore()

/**
 * 定义发送的数据
 * @type {Ref<UnwrapRef<{studentName: string, studentScore: string, studnetId: string}>>}
 */
const addEmp = ref({
 username:'',
  phone:'',
  sex:''
})


const tableData = ref([])

const addistrue = ref(false)
const editistrue = ref(false)

const showdialog=()=>{
  addistrue.value=true
}
const showdialogedit=(row)=>{
  editistrue.value=true

}
const getList = async () => {
const result = await getEmplist(name)
  tableData.value = result.data.records

}
getList()
const deleteCategory =async (row)=>{
   const result= await deleteEmp(row)
  ElMessage.success(result.data.msg ? result.data.msg : '失败')
}
const addemprequest= async ()=>{
  const result = await addEmprequset(addEmp.value)
  getList()
  ElMessage.success(result.data.msg ? result.data.msg : '添加成功')
}
const editemprequest= async ()=>{
  const result = await editEmpinfo(editEmp)

}
</script>


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
