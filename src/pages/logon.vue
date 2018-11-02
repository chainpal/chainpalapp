<template>
    <div class="logon">
        <mt-header fixed title="扶贫链Demo" class="fu">
            <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="logo">
            <img src="../assets/biaoti.png" alt="">
        </div>
        <mt-field label="组织代码" placeholder="请输入组织代码" v-model="orgName" class="m zi"></mt-field>
        <mt-field label="管理员账号" placeholder="请输入账号" v-model="username" class="zi"></mt-field>
        <mt-field></mt-field>
        <mt-button type="primary" class="deng" @click="account" id="1">登陆</mt-button>
        <div class="button">
            <span>Copyright 2018 Beijing Fenbuzhihui Technology Co., Ltd. All rights reserved.</span>
        </div>
    </div>
</template>
<script>

import api from '@/API/get'
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            //
            username:"asd",
            orgName:"Org1"
            // username:"Tom",
            // orgName:"Org1"
            //a
        }
    },
    methods:{
        account(){
            console.log(this.username);
            console.log(this.orgName);
            var qs = require('qs');
            let data = {
                username:this.username,
                orgName:this.orgName
            }
            let headers = {
                // 'content-type': 'application/json'
                'content-type': 'application/x-www-form-urlencoded' //application/x-www-form-urlencoded  application/json;charset=UTF-8
            }
            console.log(qs.stringify(data));
            console.log(data);
            
            api.post("/users",qs.stringify(data),headers).then(res=>{
                // console.log(res.success)
                console.log(res)
                if(res.token){
                    this.$router.push({ path: "/account" });
                    // console.log(setToken(token))
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
        .logo{
            margin-top: 80px;
            img{
                width: 100%;
                height: 30%;
                // height: 85px;
            }
        }
        .m{
            margin-top: 40px;
        }
        .zi{
            font-weight: 900;
        }
        .deng{
            width: 90%;
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
