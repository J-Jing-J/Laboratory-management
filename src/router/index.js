import Vue from 'vue'
import VueRouter from 'vue-router'
import '../styles/index.scss'
import '../styles/element.scss'
import '../styles/mavonEditor.scss'
import '../styles/scrollbar.scss'
import '../styles/searchFilter.scss'
import '../styles/sidebar.scss'
import '../styles/variables.scss'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/work-bench'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index')
  },
  {
    path: '/work-bench',
    name: 'workBench',
    component: () => import('../views/work-bench/index'),
    redirect: '/basic-data-setting',
    children: [
      {
        path: '/basic-data-setting',
        name: 'basicDataSetting',
        component: () => import('../views/basic-data-setting/index')
      },
      {
        path: '/user-manage',
        name: 'userManage',
        component: () => import('../views/user-manage/index')
      },
      {
        path: '/website-notice-manage',
        name: 'websiteNoticeManage',
        component: () => import('../views/website-notice-manage/index')
      },
      {
        path: '/duty-setting',
        name: 'dutySetting',
        component: () => import('../views/duty-setting/index')
      },
      {
        path: '/maintenance-record-query',
        name: 'maintenanceRecordQuery',
        component: () => import('../views/maintenance-record-query/index')
      },
      {
        path: '/repair-record-query',
        name: 'repairRecordQuery',
        component: () => import('../views/repair-record-query/index')
      },
      {
        path: '/timetable-setting',
        name: 'timetableSetting',
        component: () => import('../views/timetable-setting')
      },
      {
        path: '/software-install-response',
        name: 'softwareInstallResponse',
        component: () => import('../views/software-install-response/index')
      },
      {
        path: '/classroom-borrowing-response',
        name: 'classroomBorrowingResponse',
        component: () => import('../views/classroom-borrowing-response/index')
      },
      {
        path: '/purchase-request-response',
        name: 'purchaseRequestResponse',
        component: () => import('../views/purchase-request-response/index')
      },
      {
        path: '/videos-upload',
        name: 'videosUpload',
        component: () => import('../views/videos-upload/index')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
