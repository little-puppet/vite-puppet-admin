<template>
  <div class="app-container">
    <div class="search-area">
      <div class="search-item search-margin">
        <el-input v-model="userParam.mobile" size="small" placeholder="手机号" clearable />
      </div>
      <div class="search-item search-margin">
        <el-input v-model="userParam.nickName" size="small" placeholder="昵称" clearable />
      </div>
      <el-button type="primary" class="search-margin" style="clear:both" size="small" @click="handleChange">查询</el-button>
    </div>
    <div>
      <el-table
        :data="userList"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="mobile"
          :label="t('user_list.mobile')"
          width="180"
        />
        <el-table-column
          prop="nickName"
          :label="t('user_list.nickName')"
          width="180"
        />
        <el-table-column
          prop="createTime"
          :label="t('user_list.createTime')"
        />
        <el-table-column
          prop="updateTime"
          :label="t('user_list.updateTime')"
        />
        <el-table-column
          prop="note"
          :label="t('user_list.note')"
        />
      </el-table>
    </div>

    <div class="block">
      <el-pagination
        @size-change="handleChange"
        @current-change="handleChange"
        v-model:currentPage="current"
        :page-size="size"
        layout="total, prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script lang='ts'>
import {userListRequest} from '@/apis/user'
import {onBeforeMount, onMounted, reactive, ref, toRefs} from 'vue'
import {UserInfoModel} from "@/models/userModel";
import {useI18n} from "vue-i18n";

export default {
  name: '',
  setup() {
    const {t} = useI18n()
    const data = reactive({
      userParam: {
        mobile:'',
        nickName:''
      },
      userList: Array<UserInfoModel>(),
      current:1,
      size:20,
      total:0
    })
    const handleChange = ()=>{

    }

    const requestUserList = () => {
      userListRequest(data.userParam).then((res)=>{
        if (res?.data.list) {
          data.userList = res?.data.list
          data.total = res?.data.total
        }
      });
    }
    onBeforeMount(() => {
    })
    onMounted(() => {
      requestUserList()
    })
    return {
      handleChange,
      t,
      ...toRefs(data)
    }
  },
}
</script>
<style scoped lang='scss'>
.search-area {
  overflow: hidden;
  .search-item {
    float: left;
    width: 160px;
  }
  .search-margin {
    margin: 8px;
  }
}
</style>
