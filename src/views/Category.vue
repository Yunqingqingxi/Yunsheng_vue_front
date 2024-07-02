<template>
  <div>菜品分类</div>
  <el-card>
    <!-- 按钮行 -->
    <el-row class="mb-4">
      <el-col :span="8">
        <el-button type="primary" @click="addCategoryForm">添加分类</el-button>
      </el-col>
    </el-row>
    <!-- Tabs -->
    <el-tabs
      v-model="editableTabsValue"
      style="height: 200px" 
      class="demo-tabs min-h-screen"
      @tab-remove="removeTab"
      tab-position="left"
      closable
    >
      <!-- 每个Tab Pane -->
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        <!-- 表格显示 -->
        <el-table :data="item.content">
          <el-table-column prop="name" label="名称" />
          <el-table-column prop="value" label="值" />
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </el-card>
  <!-- 添加分类的对话框 -->
  <el-dialog
    v-model="dialogVisible"
    title="添加分类"
    width="30%"
  >
    <el-form :model="editCate" label-width="120px">
      <el-form-item label="分类名称">
        <el-input v-model="editCate.name" />
      </el-form-item>
      <el-form-item label="分类标题">
        <el-input v-model="editCate.title" />
      </el-form-item>
      <el-form-item label="分类描述">
        <el-input v-model="editCate.description" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addTab">添加</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 初始化tab索引
let tabIndex = 1

// 当前选中的tab的name
const editableTabsValue = ref('0')

// 对话框的显示状态
const dialogVisible = ref(false)

// 初始化tab数据
const editableTabs = ref([
  {
    title: '总菜单',
    name: '0',
    content: [{ name: '示例数据1', value: '示例值1' },{ name: '示例数据2', value: '示例值2' }],
  },
])

// 打开添加分类对话框
const addCategoryForm = () => {
  dialogVisible.value = true
}

// 表单数据模型
const editCate = ref({
  name: '',
  title: '',
  description: '',
})

// 生成表格数据的函数
const generateTableData = () => {
  // 返回示例数据
  return [
    { name: '菜品1', value: '描述1' },
    { name: '菜品2', value: '描述2' },
    { name: '菜品3', value: '描述3' },
  ]
}

// 添加新的tab
const addTab = () => {
  const newTabName = `${++tabIndex}`
  editableTabs.value.push({
    title: editCate.value.title,
    name: newTabName,
    content: generateTableData(),
  })
  // 关闭对话框并重置表单
  dialogVisible.value = false
  editCate.value = {
    name: '',
    title: '',
    description: '',
  }
  // 切换到新添加的tab
  editableTabsValue.value = newTabName
}

// 删除tab
const removeTab = (targetName: string) => {
  const tabs = editableTabs.value
  let activeName = editableTabsValue.value
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }

  editableTabsValue.value = activeName
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}
</script>

<style lang="scss" scoped>
.mb-4 {
  margin-bottom: 16px;
}
</style>
