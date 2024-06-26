<script setup>

</script>

<template>
  <el-aside width="300px">
    <div class="el-aside__logo"></div>
    <el-menu active-text-color="#ffd04b" background-color="#232323" text-color="#fff"    router>
      <el-menu-item index="/work">
        <span>工作台</span>
      </el-menu-item>
      <el-menu-item index="/allTotal">
        <span>数据统计</span>
      </el-menu-item>
      <el-menu-item index="/order">
        <span>订单管理</span>
      </el-menu-item>
      <el-menu-item index="/setemal">
          <span>套餐管理</span>
        </el-menu-item>
      <el-menu-item index="/dish">
          <span>菜品管理</span>
        </el-menu-item>
      <el-menu-item index="/category">
          <span>分类管理</span>
        </el-menu-item>
      <el-menu-item index="/emp">
        <span>员工管理</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style scoped lang="scss">
.el-aside {
  background-color: #232323;

  &__logo {
    height: 120px;
    background: url('@/assets/logo.png') no-repeat center / 120px auto;
  }

  .el-menu {
    border-right: none;
  }
}
</style>