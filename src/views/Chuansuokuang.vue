<template>
  <div class="transfer">
    <transfer-list :data="data.originData" title="源列表"></transfer-list>
    <div class="transfer-operation">
      <p>
        <input type="button" value="<" @click="targetToOrigin()">
      </p>
      <p>
        <input type="button" value=">" @click="originToTarget()">
      </p>
    </div>
    <transfer-list :data="data.targetData" title="目标列表"></transfer-list>
  </div>
</template>
<script>
let data = {
  originData: [  // 源列表
    {
      id:1000,
      title: 'js课程',
      checked: false
    },
    {
      id:1101,
      title: 'css课程',
      checked: false
    },
    {
      id:1002,
      title: 'vue课程',
      checked: false
    },
    {
      id:1103,
      title: 'react课程',
      checked: true
    },
  ],
  targetData: [
    {
      id:105660,
      title: 'Node课程',
      checked: true
    },
    {
      id:11088881,
      title: 'canvas课程',
      checked: true
    }, // 目标列表
  ]
}
import TransferList from '../component/chuansuokuang/transfer-list'
export default {
  data() {
    return {
      data
    }
  },
  components:{
    TransferList
  },
  methods: {

    targetToOrigin(){ 
      // 找到目标中选中，放在源列表中
      
      this.objToObj(this.data.targetData,this.data.originData)
      this.data.targetData = this.data.targetData.filter(item => !item.checked)


    },
    /**
     * 源数据到目标数据
     */
    originToTarget(){ 
      this.objToObj(this.data.originData,this.data.targetData)

      this.data.originData = this.data.originData.filter(item => !item.checked)
    },

    objToObj(obj1,obj2){
      let checkedItem = obj1.filter(item => item.checked).map((item) => {
          return {
            ...item,
            checked: false
          }
        })

        console.log(checkedItem); //[{},{}]
        obj2.push(...checkedItem)
    }
  },
};
</script>

<style lang="less" scoped>

.transfer-operation {
  display: inline-block;
  overflow: hidden;
  margin: 0 16px;
  vertical-align: middle;
}
</style>
