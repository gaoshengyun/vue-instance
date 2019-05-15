<template>
  <div class="transfer-list">
      <div class="transfer-header">
        <input type="checkbox" >
        <span class="transfer-header-title">{{title}}</span>
        <span class="transfer-header-count">
          {{checkedLength}}/{{data.length}}
        </span>
      </div>

      <div class="transfer-list-body">
        <ul class="transfer-list-content">
          <li 
          v-for="(item, index) in data" :key="index"
          class="transfer-list-content-item">
            <input type="checkbox" v-model="item.checked">
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>

export default {
  props:{
    title:{
      type:String,
      default:''
    },
    data:{
      type:Array,
      default:[]
    }
  },
  computed: {
    checkedLength(){
      return this.data.filter(item => item.checked).length
    }
  },
}
</script>
<style lang="less" scoped>
.transfer {
  line-height: 1.5;
  position: relative;
}
.transfer-list {
  display: inline-block;
  width: 280px;
  height: 210px;
  font-size: 12px;
  vertical-align: middle;
  position: relative;
  padding-top: 35px;
}
.transfer-header {
  box-sizing: border-box;
  padding: 8px 16px;
  background: #f9fafc;
  color: #495060;
  border: 1px solid #dddee1;
  border-bottom: 1px solid #e9eaec;
  border-radius: 6px 6px 0 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.transfer-header-title {
  padding-left: 4px;
}
.transfer-header-count {
  float: right;
  margin-right: 4px;
}
.transfer-list-body {
  height: 100%;
  border: 1px solid #dddee1;
  border-top: none;
  border-radius: 0 0 6px 6px;
  position: relative;
  overflow: hidden;
}
.transfer-list-content {
  height: 100%;
  padding: 4px 0;
  overflow: auto;
}
.transfer-list-content-item {
  margin: 0;
  line-height: normal;
  padding: 7px 16px;
  clear: both;
  color: #495060;
  white-space: nowrap;
  list-style: none;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
