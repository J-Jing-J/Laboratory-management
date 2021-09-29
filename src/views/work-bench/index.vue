<template>
  <el-container class="work-bench-container">
<!--    头部-->
    <el-header>
      <div>
        <img src="../../assets/logo.png" alt="" class="top-logo">
        <span>实验室设备管理系统</span>
      </div>
      <el-button
        type="info"
        @click="logoutClick"
      >
        退出
      </el-button>

    </el-header>
<!--    主体内容-->
    <el-container>
<!--      折叠菜单按钮-->
<!--      <div class="toggle-button" @click="toggleCollapse">|||</div>-->

      <el-aside :width="isCollapse ? '64px' : '200px'">
<!--        侧边栏-->
        <el-menu
          unique-opened
          :collapse = "isCollapse"
          :collapse-transition = "false"
          router
          default-active="/basic-data-setting"
        >
<!--          index属性只接受字符串-->
<!--          每个v-for都应该绑定key属性-->
          <el-menu-item
            :index="'/' + item.path"
            :default-active="activePath"
            v-for="item in menuList"
            :key="item.id"
            active-text-color="#778beb"
            @click="saveNavState('/' + item.path)"
          >
            <i :class="iconsObj[item.id]"></i>
            <span slot="title">{{ item.authName }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
<!--      右侧内容-->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      // 左侧菜单数据
      menuList: {
        data1: {
          id: 1,
          authName: '系统基础数据设置',
          path: 'basic-data-setting'
        },
        data2: {
          id: 2,
          authName: '用户管理',
          path: 'user-manage'
        },
        data3: {
          id: 3,
          authName: '网站公告管理',
          path: 'website-notice-manage'
        },
        data4: {
          id: 4,
          authName: '值班人员设置',
          path: 'duty-setting'
        },
        data5: {
          id: 5,
          authName: '维护记录查询',
          path: 'maintenance-record-query'
        },
        data6: {
          id: 6,
          authName: '报修记录查询',
          path: 'repair-record-query'
        },
        data7: {
          id: 7,
          authName: '课表设置',
          path: 'timetable-setting'
        },
        data8: {
          id: 8,
          authName: '处理软件安装申请',
          path: 'software-install-response'
        },
        data9: {
          id: 9,
          authName: '处理教室借用申请',
          path: 'classroom-borrowing-response'
        },
        data10: {
          id: 10,
          authName: '响应采购申请',
          path: 'purchase-request-response'
        },
        data11: {
          id: 11,
          authName: '上传安全教育视频资料',
          path: 'videos-upload'
        },

      },
      // 左侧菜单图标
      iconsObj:{
        1: 'el-icon-setting',
        2: 'el-icon-user',
        3: 'el-icon-date',
        4: 'el-icon-school',
        5: 'el-icon-search',
        6: 'el-icon-document-copy',
        7: 'el-icon-edit-outline',
        8: 'el-icon-monitor',
        9: 'el-icon-office-building',
        10: 'el-icon-shopping-cart-2',
        11: 'el-icon-video-camera'
      },
      // 菜单是否折叠
      isCollapse: false,
      // 菜单激活状态
      activePath: '',
    }
  },
  methods: {
    logoutClick() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    getMenuList() {
      const { data1 : res } = this.menuList;
      console.log(res);
    },
    // 点击按钮切换菜单的折叠展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    // 保存目录的激活状态
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath' , activePath);
      this.activePath = activePath;
    }
  },

  created() {
    this.getMenuList();
    this.activePath = window.sessionStorage.getItem('activePath');
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";
@import "../../styles/sidebar";
.work-bench-container {
  height: 100%;
}
.el-header {
  background-color: $color-bg;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
  font-size: 20px;
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-menu {
  margin: 0px;
}
.el-main {
  background-color: $color-grey;
  padding: 20px;
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-left: 210px;
}
.top-logo {
  width: 50px;
}
.toggle-button {
  background-color: $subMenuActive;
  color: #fff;
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  //文字间距
  letter-spacing: 0.2em;
  cursor: pointer;
  width: 20px;
}
</style>
