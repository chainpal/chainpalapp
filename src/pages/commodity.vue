<template>
    <div class="commodity">
        <mt-header fixed title="账户" class="fu">
            <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="balance">
            <p>余额：元</p>
        </div>
        <mt-field label="账户名" placeholder="请输入账号" v-model="username" class="zi"></mt-field>
        <mt-field></mt-field>
        <mt-button type="primary" class="deng">查询余额</mt-button>
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
export default {
    data(){
        return{
            selected:"商品",
            username:""
        }
    },
    methods:{
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
            width: 90%;
            margin-top: 40px;
        }
    }
</style>
