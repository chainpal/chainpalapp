<template>
    <div class="logon">
        <div class="logo">
            <img src="../assets/biaoti.png" alt="">
        </div>
        <!-- <mt-button type="primary">primary</mt-button> -->
        <div class="page-part">
        <mt-field label='组织代码      ' placeholder="请输入组织代码" v-model="orgName" class="m zi"></mt-field>
        <mt-field label="管理员账号" placeholder="请输入账号" v-model="username" class="zi"></mt-field>
        </div>
        <mt-button type="primary" class="deng" @click="account" id="1">登录</mt-button>
        <div class="button">
            <span>Copyright 2018 Beijing Fenbuzhihui Technology Co., Ltd.</br> All rights reserved.</span>
        </div>
    </div>
</template>
<script>

import api from '@/API/get'
import Qs from 'qs'
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            username:"",
            orgName:""
        }
    },
    methods:{
        account(){
            var qs = require('qs');
            let data = {
                username:this.username,
                orgName:this.orgName
            }
            let headers = {
                'content-type': 'application/x-www-form-urlencoded' //application/x-www-form-urlencoded  application/json;charset=UTF-8
            }
            api.post("/users",Qs.stringify(data),headers).then(res=>{
                localStorage.setItem("token",res.token)
                if(res.token){
                    this.$router.push({ path: "/account" });
                }else{
                    Toast("请输入正确的组织代码")
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .logon{
        .mint-cell{
            // padding-left: 10%;
        }
        .logo{
            margin-top: 50px;
            img{
                width: 80%;
                height: 30%;
                // height: 85px;
            }
        }
        .m{
            margin-top: 40px;
        }
        .zi{
            font-weight: 900;
            text-align: left;
        }
        .deng{
            width: 100%;
            margin-top: 40px;
        }
        .button{
            position: relative;
            bottom: -96px;
            right: 0;
            span{
                font-size: 12px;
            }
        }
    }
</style>
