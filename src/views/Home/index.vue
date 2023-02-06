<template>
	<el-container>
      <el-aside width="201px"><Aside :items="asideItems"/></el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
</template>
<script lang="ts" setup>
import {ElContainer, ElAside, ElHeader, ElMain} from 'element-plus'
import { ref } from 'vue';
import Aside from './Aside.vue';
import menuConfig from '@/configs/menu.js'
const asideItems = ref(menuConfig)
</script>
<style scoped>
.el-aside{
	min-height: 100vh;
}
</style>