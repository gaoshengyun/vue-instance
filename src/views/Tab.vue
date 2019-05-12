<template>
  <div>
    <div class="tab">
		  <div class="tab-header">
		    <div 
        v-for="(item, index) in tabData" :key="index" 
        class="tab-item" 
        :class="{'tab-active' : index === currentIndex}"
        @click="tab(index)"
        >{{item.title}}</div>
		  </div>
		  <div class="tab-content">
		    <div 
        v-for="(item, index) in tabData" :key="index"
        :style="{display:index === currentIndex ? 'block' : 'none'}">
		    	<p v-for="(options, index) in item.list" :key="index">{{options.subTitle}}</p>
		    </div>
		    
		  </div>
		</div>
  </div>
</template>
<script>
let tabData = [
  {
    title: '标签一111',
    list: [
      {
        subTitle: 'css课程'
      },
      {
        subTitle: 'css课程'
      },
      {
        subTitle: 'css课程'
      }
    ]
  },
  {
    title: '标签二222',
    list: [
      {
        subTitle: 'js课程'
      }
    ]
  },
  {
    title: '标签三333',
    list: [
      {
        subTitle: 'Vue课程'
      }
    ]
  }
]
export default {
  data() {
    return {
      tabData,
      currentIndex:0
    }
  },
  methods: {
    tab(index){
      this.currentIndex = index
    }
  },
}
</script>
<style lang="less" scoped>
.tab {
    width: 500px;
    background: #fff;
    margin: 0px auto;
    background: rgb(227, 232, 238);
    padding: 16px;
    .tab-header{
      overflow: hidden;
      .tab-item {
        width: 100px;
        height: 30px;
        line-height: 30px;
        background: #ccc;
        border: 1px solid #dddee1;
        background: #f8f8f9;
        text-align: center;
        margin-right: 5px;
        border-radius: 2px;
        float: left;
        cursor: pointer;
      }
      .tab-active {
        border-color: transparent;
        height: 32px;
        padding-bottom: 5px;
        background: #fff;
        transform: translateZ(0);
        color: #e6451e;
      }
    }
    .tab-content {
      height: 100px;
      line-height: 10px;
      background: #fff;
      overflow: hidden;
      div {
        width: 100%;
        height: 100%;
        text-align: center;
        display: none;
      }
    }
  }
  

</style>
