<template>
    <div>
        <div class="login-banner"><img class="login-img" src="../../common/images/ac_logo.png"></div>
        <div class="login">
            <mt-field placeholder="请输入用户名" v-model="username" :attr="{ maxlength: 10 }"></mt-field>
            <mt-field placeholder="请输入密码" type="password" v-model="password" :attr="{ maxlength: 16 }"></mt-field>
        </div>
        <a class="login-btn" @click="loginTest">
            <mt-button type="primary" size="large">登录</mt-button>
        </a>
        <div class="quick-btn" @click="quickTest">
            <mt-button type="primary" size="large" plain>一键登录</mt-button>
        </div>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex';
    export default {
        name:'login',
        computed:mapGetters([
            'username',
            'password',
            'isLogin'
        ]),
        methods:mapActions([
            'loginTest',
            'quickTest'
        ]),
        watch:{
            isLogin(val,oVal){
                if(val == '/mymsg'){
                    this.$router.push({path:''+this.isLogin});
                }
            }
        }
    }
</script>

<style lang="less">
    .login-banner{
        display: flex;
        width: 100%;
        padding-top:1.5rem;
        margin-bottom:1rem;
        .login-img{
            margin: auto;
        }
    }
    .login,.quick-btn,.login-btn{
        padding:0 2rem;
        margin-bottom:1rem;
        display:block;
    }
</style>
