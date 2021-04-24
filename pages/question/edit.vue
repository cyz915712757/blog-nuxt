<template>
  <div class="edit-form">
    <el-form
      :rules="rules"
      ref="formData"
      :model="formData"
      label-width="100px"
      label-position="right"
    >
      <el-form-item
        label="标题："
        prop="title"
      >
        <el-input
          v-model="formData.title"
          placeholder="请输入标题"
          maxlength="50"
          show-word-limit
        />
      </el-form-item>

      <el-form-item
        label="内容"
        prop="content"
      >
        <el-input
          v-model="formData.content"
          placeholder="请输入内容"
          maxlength="50"
          show-word-limit
        />
      </el-form-item>
    </el-form>
    <el-row
      type="flex"
      justify="center"
    >
      <el-button
        type="primary"
        @click="submitForm('formData')"
      >发布问题</el-button>
    </el-row>
  </div>
</template>

<script>

export default {
  // 引用中间件，拦截路由请求，判断是否已经身份认证
  middleware: 'auth',

  // 校验
  validate ({ query }) {
    // 如果有传递id,则是修改
    if (query.id) {
      return /^\d+$/.test(query.id)
    }
    return true
  },

  data () {
    const validateContent = (rule, value, callback) => {
      if (this.formData.mdContent && this.formData.htmlContent) {
        callback() // 校验通过，直接放行
      } else {
        callback(new Error('请输入文章内容'))
      }
    }

    return {
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],

        content: [
          { validator: validateContent, trigger: 'change' }
        ]
      },
      formData: {
        title: '',
        userId: '',
        userImage: '',
        nickName: '',
      },
    }
  },

  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitData()
        } else {
          return false
        }
      })
    },

    // 提交数据给后台
    async submitData () {
      console.log('提交数据')
    },



    async asyncData ({ app, query }) {
      // 查询分类和标签
      const { data } = await app.$getCategoryAndLabel()
      // 查询文章详情
      if (query.id) {
        const { data: formData } = await app.$getQuestionById(query.id)
        //   console.log('formData', formData)
        return { labelOptions: data, formData }
      }
      return { labelOptions: data }
    },
  }
}
</script>

<style>
.edit-form {
  width: 500px;
  margin: 50px 0 0 100px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
