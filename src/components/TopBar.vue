
<template>
  <el-header>
    <div>欢迎您:{{ store.user }}</div>
    <el-dropdown placement="bottom-end" @command="handleCommand">
                    <span class="el-dropdown__box">
                      <el-avatar :src="avatar"/>
                    </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="info" >基本资料</el-dropdown-item>
          <el-dropdown-item command="avatar" >更换头像</el-dropdown-item>
          <el-dropdown-item command="resetPassword" >重置密码</el-dropdown-item>
          <el-dropdown-item command="logout" @click="out()">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script setup>
import {ElMessage} from "element-plus";
import router from "@/router/index.js";
import {useCounterStore} from "@/stores/counter.js";
import {ref} from "vue";

const store = useCounterStore()
const avatar = ref(null)


/**
 * 登出
 * @return {Promise<void>}
 */
const out = async () => {
  store.clearToken()
  ElMessage.success("退出成功")
  await router.push('/login')
}


</script>


<style scoped lang="scss">
.el-header {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .el-dropdown__box {
    display: flex;
    align-items: center;

    .el-icon {
      color: #999;
      margin-left: 10px;
    }

    &:active,
    &:focus {
      outline: none;
    }
  }
}
</style>