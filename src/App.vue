<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/tab">选项卡</router-link> | 
      <router-link to="/qqfriends">QQ好友</router-link> | 
      <router-link to="/chuansuokuang">穿梭框</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
      text-decoration: underline;
    }
  }
}
</style>
