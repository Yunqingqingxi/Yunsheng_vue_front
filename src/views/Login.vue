<template>
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :offset="3" :span="6" class="form">
      <!-- 注册表单 -->
      <el-form
          v-if="isRegister"
          ref="formRef"
          :model="formData"
          :rules="registerRules"
          autocomplete="on"
          size="large"
      >
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>

        <el-form-item prop="username">
          <el-input v-model="formData.username" :prefix-icon="User" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input v-model="formData.password" :prefix-icon="Lock" placeholder="请输入密码"
                    type="password"></el-input>
        </el-form-item>

        <el-form-item prop="rePassword">
          <el-input v-model="formData.rePassword" :prefix-icon="Lock" placeholder="请输入再次密码"
                    type="password"></el-input>
        </el-form-item>
        <!-- 注册按钮 -->
        <el-form-item>
          <el-button :loading="loading" auto-insert-space class="button" type="danger" @click="register"> 注册
          </el-button>
        </el-form-item>

        <el-form-item class="flex">
          <el-link :underline="false" type="info" @click="isRegister = false;clearRegisterData()"> ← 返回</el-link>
        </el-form-item>
      </el-form>

      <!-- 登录表单 -->
      <el-form
          v-else
          ref="formRef"
          :model="formData"
          :rules="loginRules"
          autocomplete="off"
          size="large">
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>

        <el-form-item prop="username">
          <el-input v-model="formData.username" :prefix-icon="User" placeholder="请输入用户名"></el-input>
          <!--：prefix-icon"User" 是输入框的用户标象用户的-->

        </el-form-item>

        <el-form-item prop="password">
          <el-input v-model="formData.password" :prefix-icon="Lock" name="password" placeholder="请输入密码"
                    type="password"></el-input>
        </el-form-item>

        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>记住我</el-checkbox>
            <el-link :underline="false" type="primary">忘记密码？</el-link>
          </div>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button :loading="loading" auto-insert-space class="button" type="primary" @click="login"> 登录</el-button>
        </el-form-item>

        <el-form-item class="flex">
          <el-link :underline="false" type="info" @click="isRegister = true;clearRegisterData()">
            注册 →
          </el-link>
        </el-form-item>
      </el-form>
    </el-col>

  </el-row>
</template>
<script setup>

import {Lock, User} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useCounterStore} from "@/stores/counter.js";
import {toLogin, toRegister} from "@/api/employee.js";

const loading = ref(false)
const router=useRouter()
const store = useCounterStore()
const formRef = ref(null)
const isRegister = ref(false)

/**
 * 注册表单数据
 * @type {Ref<UnwrapRef<{password: string, rePassword: string, username: string}>>}
 */
const formData = ref({
  username: '',
  password: '',
  rePassword: ''
})

/**
 * 二次校验密码
 * @param rule
 * @param value
 * @param callback
 */
const validatePassword = (rule, value, callback) => {
  if (value !== formData.value.password) {
    // 两次输入的密码不一致
    callback(new Error('两次输入的密码不一致'));
  } else {
    // 校验通过
    callback();
  }
};
/**
 * 规则
 */
const registerRules = ref({
  username: {required: true, message: '请输入账号', trigger: 'blur'},
  password: {required: true, message: '请输入密码', trigger: 'blur'},
  rePassword: [
    {required: true, message: '请确认密码', trigger: 'blur'},
    {validator: validatePassword, trigger: 'blur'}
  ]
})
// 登录规则
const loginRules = ref({
  username: {required: true, message: '请输入账号', trigger: 'blur'},
  password: {required: true, message: '请输入密码', trigger: 'blur'},
})


/**
 * 登录方法
 * @return {Promise<void>}
 */
const login = async () => {
  if (formRef.value) {
    formRef.value.validate(async (valid) => {
      if (valid) {
        try {
          loading.value = true; // 点击登录后登录按钮无法再次点击

          const result = await toLogin(formData.value)

          ElMessage.success(result.msg ? result.msg : '登录成功')

          store.setUser(result.data.token, formData.value.username)
          loading.value = false; // 恢复

          await router.push('/home')
        } catch (err) {
          ElMessage.error(err.message);
          loading.value = false
        } finally {
          loading.value = false
        }
      }
    })
  }
}
/**
 * 注册方法
 * @return {Promise<void>}
 */
const register = async () => {
  if (formRef.value) {
    formRef.value.validate(async (valid) => {
      if (valid) {
        try {
          loading.value = true;
          const result = await toRegister(formData.value);

          ElMessage.success(result.message ? result.message : '注册成功')
          loading.value = false;
        } catch (err) {
          ElMessage.error(err)
          loading.value = false
        } finally {
          loading.value = false
        }
      }
    })
  }

}

/**
 * 重置表单
 */
const clearRegisterData=()=>{
  registerData.value={
    username:'',password:'',rePassword:''
  }
}


</script>


<style lang="scss" scoped>
/* 样式 */
.login-page {
  height: 100vh;
  background-color: #fff;

  .bg {
    //background:
    //    //url('@/assets/logo2.png') no-repeat 60% center / 240px auto,
    //url('@/assets/login_bg.jpg') no-repeat center / cover;
    //border-radius: 0 20px 20px 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;


    .title {
      margin: 0 auto;
    }

    .button {
      width: 100%;
    }

    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>