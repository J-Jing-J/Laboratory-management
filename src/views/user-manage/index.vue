<template>
  <div>
    <!--    面包屑导航-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="data-container">
      <el-row :gutter="20">
        <!--      搜索区域-->
        <el-col :span="7">
          <el-input
              placeholder="请输入内容"
              v-model="managerQueryInfo.query"
              @click="getManagerList"
              clearable
              @clear="getManagerList"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <!--        添加按钮-->
        <el-col :span="4">
          <el-button type="primary"
                     @click="addManagerDialogVisible = true">
            添加用户
          </el-button>
        </el-col>
      </el-row>

      <el-table :data="managerList" stripe border>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="电话" prop="telephone"></el-table-column>
        <el-table-column label="办公电话" prop="officePhone"></el-table-column>
        <el-table-column label="用户类别" prop="level"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="managerInfo">
            <el-tooltip effect="dark" content="设置管理员权限及信息" placement="top" :enterable="false">
              <el-button @click="showEditManagerDialog(managerInfo.row)" type="primary" icon="el-icon-edit" size="mini"></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="删除管理员" placement="top" :enterable="false">
              <el-button @click="showDeleteManagerDialog(managerInfo.row)" type="danger" icon="el-icon-delete" size="mini"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <!--    分页-->
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="managerQueryInfo.pagenum"
          :page-sizes="[5, 8, 10, 15]"
          :page-size="managerQueryInfo.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="managerTotal">
      </el-pagination>
    </el-card>

    <!--添加用户对话框-->
    <el-dialog
        title="添加管理员"
        :visible.sync="addManagerDialogVisible"
        width="50%"
        @close="addManagerDialogClose">
      <el-form
          :model="addManagerForm"
          :rules="addManagerFormRules"
          ref="addManagerFormRef"
          label-width="90px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="addManagerForm.name"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="telephone">
          <el-input v-model="addManagerForm.telephone"></el-input>
        </el-form-item>
        <el-form-item label="办公电话" prop="officePhone">
          <el-input v-model="addManagerForm.officePhone"></el-input>
        </el-form-item>
        <el-form-item label="权限" prop="level">
          <el-input v-model="addManagerForm.level"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
       <el-button @click="addManagerDialogVisible = false">取 消</el-button>
       <el-button
           type="primary"
           @click="addManagerClick"
       >确 定</el-button>
      </span>
    </el-dialog>
    <!--设置管理员权限及信息对话框-->
    <el-dialog
        title="设置管理员权限及信息"
        :visible.sync="editManagerDialogVisible"
        width="50%"
        @close="editManagerDialogClose">
      <el-form
          :model="editManagerForm"
          :rules="editManagerFormRules"
          ref="editManagerFormRef"
          label-width="90px">
        <el-form-item label="id" prop="id">
          <el-input v-model="editManagerForm.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="editManagerForm.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="telephone">
          <el-input v-model="editManagerForm.telephone"></el-input>
        </el-form-item>
        <el-form-item label="办公电话" prop="officePhone">
          <el-input v-model="editManagerForm.officePhone"></el-input>
        </el-form-item>
        <el-form-item label="权限" prop="level">
          <el-input v-model="editManagerForm.level"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
       <el-button @click="editManagerDialogVisible = false">取 消</el-button>
       <el-button
           type="primary"
           @click="editManagerClick"
       >确 定</el-button>
      </span>
    </el-dialog>




  </div>
</template>

<script>
export default {
  name: "BasicDataSetting",
  data() {
    return{
      // 获取用户列表的参数对象
      managerQueryInfo: {
        query: '',
        // 当前页数
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 5,
        // total: this.managerTotal,
      },

      managerList: [
        {
          id: 1,
          name: '蒋静',
          level: '系统管理员',
          telephone: '13755555555',
          officePhone: '5077777',
        },
        {
          id: 2,
          name: '蒋静',
          level: '系统管理员',
          telephone: '13755555555',
          officePhone: '5077777',
        },
        {
          id: 3,
          name: '蒋静',
          level: '系统管理员',
          telephone: '13755555555',
          officePhone: '5077777',
        },
        {
          id: 4,
          name: '蒋静',
          level: '系统管理员',
          telephone: '13755555555',
          officePhone: '5077777',
        },
        {
          id: 5,
          name: '蒋静',
          level: '系统管理员',
          telephone: '13755555555',
          officePhone: '5077777',
        },
        {
          id: 6,
          name: '蒋静',
          level: '系统管理员',
          telephone: '13755555555',
          officePhone: '5077777',
        }

      ],
      // 添加用户对话框的显示
      addManagerDialogVisible: false,
      // 添加用户的表单数据
      addManagerForm: {
        name: '陶子源',
        telephone: '155',
        officePhone: '155',
        level: '教师'
      },
      // 添加用户的表单验证规则
      addManagerFormRules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur'},
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'},
        ],
        telephone: [
          { required: true, message: '电话不能为空'},
          // { type: 'number', message: '电话必须为数字值'}
        ],
        officePhone: [
          { required: true, message: '办公电话不能为空'},
          // { type: 'number', message: '办公电话必须为数字值'}
        ],
        level: []
      },
      // 设置管理员权限对话框的显示
      editManagerDialogVisible: false,
      // 设置管理员权限对话框的数据
      editManagerForm: {
        id: '',
        name: '',
        telephone: '',
        officePhone: '',
        level: ''
      },
      // 设置管理员权限对话框的验证规则
      editManagerFormRules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur'},
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'},
        ],
        telephone: [
          { required: true, message: '电话不能为空'},
          // { type: 'number', message: '电话必须为数字值'}
        ],
        officePhone: [
          { required: true, message: '办公电话不能为空'},
          // { type: 'number', message: '办公电话必须为数字值'}
        ],
        level: []
      }
    }
  },
  created() {
    this.getManagerList();
  },
  methods: {
    // 获取管理员列表
    getManagerList() {},
    handleSizeChange(newSize) {
      this.managerList.pagesize = newSize;
      this.getManagerList();
    },
    handleCurrentChange(newPage) {
      this.managerList.pagenum = newPage;
      this.getManagerList();
    },
    // 监听添加管理员对话框的关闭事件
    addManagerDialogClose() {
      this.$refs.addManagerFormRef.resetFields();
    },
    // 添加管理员
    addManagerClick() {
      this.$refs.addManagerFormRef.validate(valid => {
        if(!valid) return
        this.getManagerList();
        this.managerList.push(this.addManagerForm);
        console.log(this.addManagerForm)
        this.addManagerDialogVisible = false;
        this.$message.success('添加管理员数据成功');
      });
    },
    // 显示设置管理员权限及信息对话框
    showEditManagerDialog(managerInfo) {
      this.editManagerDialogVisible = true;
      this.editManagerForm = managerInfo;
    },
    // 关闭设置管理员权限及信息对话框
    editManagerDialogClose() {
      this.$refs.editManagerFormRef.resetFields();
    },
    // 设置管理员权限及信息对话框确定按钮
    editManagerClick() {
      this.$refs.editManagerFormRef.validate(valid => {
        if(!valid) return;
        this.getManagerList();
        this.managerList.map((manager, index) => {
          if(this.editManagerForm.id == manager.id) {
            console.log(this.editManagerForm.telephone)
            // this.$set(this.managerList, index, this.editManagerForm)
            this.managerList.splice(index, 1, this.editManagerForm)
            console.log(this.managerList[index].telephone)
          }
        })
        this.editManagerDialogVisible = false;
        this.$message.success('更新管理员数据成功');
      });
    },
    showDeleteManagerDialog(managerInfo) {
      // this.$messagebox.confirm(manageInfo);
      console.log(managerInfo)
      // const theManager = this.managerList.filter( (manager) => {manager.id == managerInfo.id})
      // console.log(theManager)

      this.$messagebox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.managerList.map( (manager, index) => {
          if(manager.id == managerInfo.id) {
            this.managerList.splice(index, 1);
          }
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
  computed: {
    managerTotal() {
      return this.managerList.length;
    }
  }
}
</script>

<style scoped>
.data-container {
  margin-top: 15px;
}
.el-card {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15)!important;
}
.el-table {
  margin-top: 15px;
  font-size: 12px;
}
.el-pagination {
  margin-top: 15px;
}

</style>
