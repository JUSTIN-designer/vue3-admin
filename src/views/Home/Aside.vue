<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <template v-for="item in items">
      <el-sub-menu v-if="hasChildren(item)" index="item.key">
        <template #title>{{item.name}}</template>
        <Aside :items="item.children"/>
      </el-sub-menu>
      <el-menu-item v-else index="item.key">
        <div
          style="width: 100%;"
          @click="jump(item.routePath)"
        >
          {{ item.name }}
      </div>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import {useRouter} from 'vue-router'
import { ElSubMenu, ElMenuItem, ElMenu } from 'element-plus';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
defineProps(['items']);
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const router = useRouter()
const jump = (path) =>router.push(path)
const hasChildren = (item) => item.children?.length;
const getComponent = (item) => hasChildren(item) ? 'ElSubMenu' : 'ElMenuItem'
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 100%;
}
</style>
