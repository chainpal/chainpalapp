<template>
    <div class="transfer">
        <mt-header fixed title="转账" class="fu">
            <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <mt-field label="转出账户" placeholder="请输入转出来源账户" v-model="out" class="m zi"></mt-field>
        <mt-field label="转入账户" placeholder="请输入转账目的账户" v-model="shift" class="zi"></mt-field>
        <mt-field label="转账金额" placeholder="请输入金额" v-model="money" class="zi"></mt-field>
        <mt-field></mt-field>
        <mt-button type="primary" class="deng" @click="account">转账</mt-button>
        
        <mt-tabbar v-model="selected">
            <mt-tab-item id="账户">
                <img slot="icon" src=""  @click="account">
                账户
            </mt-tab-item>
            <mt-tab-item id="商品" >
                <img slot="icon" src="" @click="commodity">
                商品
            </mt-tab-item>
            <mt-tab-item id="信息">
                <img slot="icon" src=""  @click="message">
                信息
            </mt-tab-item>
            <mt-tab-item id="设置">
                <img slot="icon" src="" @click="set">
                设置
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import api from '@/API/get'
import Qs from 'qs'
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            //
            out:"Johnny",
            shift:"Will",
            money:"1",
            selected:"账户"
        }
    },
    methods:{
        account(){
//             if(this.out===""){
//                 Toast("请输入转出账户")
//             }else if(this.shift===""){
//                 Toast("请输入转入账户")
//             }else if(this.money===""){
//                 Toast("请输入金额")
//             }else{
//                 Toast({
//                     message: '操作成功',
//                     iconClass: 'icon icon-success'
// });
//             }
            // this.$router.push({ path: "/account" });
            var qs = require('qs');
            let data = {
                peers : ["peer0.org1.example.com","peer1.org1.example.com"],
                fcn : "move",
                args : ["Johnny","Will","10"]
            }
            console.log(data);
            console.log(qs.stringify(data));
            console.log(Qs.stringify(data));
            console.log(JSON.stringify(data));
            console.log(JSON.stringify(qs.stringify(data)));
            let headers = {
                'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDEyNDQzMTcsInVzZXJuYW1lIjoiYXNkIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1NDEyMDgzMTd9.Q-F_KJ4nt8hkMzrBxSX08SrjiejN6uDuwcXz6A3AKSg',
                // 'content-type': 'application/x-www-form-urlencoded'
                'content-type': 'application/json' //application/x-www-form-urlencoded  application/json;charset=UTF-8
            }
            api.post("/channels/mychannel/chaincodes/mycc",data,headers).then(res=>{
                // console.log(res.success)
                console.log(res)
                if(res.token){
                    Toast("wqewq")
                }else{
                    Toast("请输入正确的组织代码")
                }
            })
        },
        commodity(){
            this.$router.push({ path: "/commodity" });
        },
        message(){
            this.$router.push({ path: "/message" });
        },
        set(){
            this.$router.push({ path: "/set" });
        }
    }
}
</script>
<style lang="less" scoped>
    .transfer{
        .logo{
            margin-top: 80px;
            img{
                width: 100%;
                height: 30%;
                // height: 85px;
            }
        }
        .m{
            padding-top: 80px;
        }
        .zi{
            font-weight: 900;
        }
        .deng{
            width: 90%;
            // margin-top: 40px;
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
