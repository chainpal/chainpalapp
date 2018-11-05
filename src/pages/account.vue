<template>
    <div class="account">
        <mt-header fixed title="账户" class="fu">
            <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right" @click="actionSheet"></mt-button>
        </mt-header>
        <div class="balance">
            <p>余额:{{mas}}元</p>
        </div>
        <div class="page-part">
        <mt-field label="账户名" placeholder="请输入账号" v-model="username" class="zi"></mt-field>
        </div>
        <mt-button type="primary" class="deng" @click="yu">查询余额</mt-button>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="账户">
                <img slot="icon" src="../assets/logo.png"  @click="account">
                账户
            </mt-tab-item>
            <mt-tab-item id="商品" >
                <img slot="icon" src="../assets/logo.png" @click="commodity">
                商品
            </mt-tab-item>
            <mt-tab-item id="信息">
                <img slot="icon" src="../assets/logo.png"  @click="message">
                信息
            </mt-tab-item>
            <mt-tab-item id="设置">
                <img slot="icon" src="../assets/logo.png" @click="set">
                设置
            </mt-tab-item>
        </mt-tabbar>
        <h1 class="page-title"></h1>
 
 
     <mt-actionsheet :actions= "data"  v-model="sheetVisible"></mt-actionsheet>
    </div>
</template>
<script>
import api from '@/API/get'
// import cook from '@/API/cook'
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            selected:"账户",
            username:"",
            mas:"",
            // num="",
            data: [{
        name: '转账',
        method : this.getCamera	// 调用methods中的函数
      },
],
      sheetVisible: false
        }
    },
    methods:{
        yu(){
            console.log(this.username);
            var mycars = new Array(this.username)
             let headers = {
                 'authorization': 'Bearer '+localStorage.getItem("name")+'  '
                // 'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDEwNzAyMjksInVzZXJuYW1lIjoiMjEzIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1NDEwMzQyMjl9.KK53cLEbQhclixNW6DxWa7DalZ3zn4AW1YPHHmVO-fo' //application/x-www-form-urlencoded  application/json;charset=UTF-8
            }
            api.get("http://154.8.210.38:4000/channels/mychannel/chaincodes/mycc?peer=peer0.org1.example.com&fcn=query&args=['"+this.username+"']"
            ).then(res=>{
                   console.log(res);
                   
                // var num= res.replace(/[^0-9]/ig,"");
                // if( num!== ""){
                //     this.mas = num
                // }else{
                //     Toast("请输入正确的账户名")
                //     this.mas = ""
                // }
                // if(return str.contains(substr);)
                var Cts = "bblText";
 
                if(res.indexOf('Error":"Nil amount for' ) > 0 )
                {
                    Toast("请输入正确的账户名")
                    this.mas = ""
                }else if('now has /[^0-9]/ after the move'){
                    var num= res.replace(/[^0-9]/ig,"");
                    this.mas = num
                }else{
                    Toast("请求失败")
                }
                
            })
        },
        actionSheet: function(){
    	// 打开action sheet
      this.sheetVisible = true;
    },
        getCamera: function(){
            this.$router.push({ path: "/transfer" });
        },
        account(){
            this.$router.push({ path: "/account" });
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
    .account{
        .zi{
            font-weight: 900;
        }
        .balance{
            height: 150px;
            width: 100%;
            p{
                // margin: 100px auto;
                line-height: 150px;
                font-size: 28px;
                font-weight: 900;
            }
        }
        .deng{
            width: 100%;
            margin-top: 40px;
        }
    }
</style>
