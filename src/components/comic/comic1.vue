<template>
    <div>
        <v-header :head="head"></v-header>
        <section class="mod-tab">
            <div class="tab-list">
                <router-link :to="{path: '/comic/'+ num + '/dev'}" replace class="tab-list-item">详情</router-link>
                <router-link :to="{path: '/comic/'+ num + '/menu'}" replace class="tab-list-item">目录</router-link>
                <router-link :to="{path: '/comic/'+ num + '/tall'}" replace class="tab-list-item">评论</router-link>              
            </div>
        </section>
        <keep-alive>
            <router-view :head="head"></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import header from './header';

    export default {
        name:'comic1',
        data(){
            return {
                head:{},
                num:''
            }
        },
        methods:{
            comrg(){
                var path = this.$route.path;
                if(path == '/comic/0/dev' || path == '/comic/0/menu' || path == '/comic/0/tall'){
                    this.$http.get('/api/000').then((rep)=>{
                        rep = rep.body;
                        if(rep.mes == 1){
                            this.head = rep.data.head;
                            this.num = 0;
                        }
                    });                
                }
                if(path == '/comic/1/dev' || path == '/comic/1/menu' || path == '/comic/1/tall'){
                    this.$http.get('/api/001').then((rep)=>{
                        rep = rep.body;
                        if(rep.mes == 1){
                            this.head = rep.data.head;
                            this.num = 1;
                        }
                    });          
                }
                if(path == '/comic/2/dev' || path == '/comic/2/menu' || path == '/comic/2/tall'){
                    this.$http.get('/api/002').then((rep)=>{
                        rep = rep.body;
                        if(rep.mes == 1){
                            this.head = rep.data.head;
                            this.num = 2;
                        }
                    });          
                }
                if(path == '/comic/3/dev' || path == '/comic/3/menu' || path == '/comic/3/tall'){
                    this.$http.get('/api/003').then((rep)=>{
                        rep = rep.body;
                        if(rep.mes == 1){
                            this.head = rep.data.head;
                            this.num = 3;
                        }
                    });          
                }
                if(path == '/comic/4/dev' || path == '/comic/4/menu' || path == '/comic/4/tall'){
                    this.$http.get('/api/004').then((rep)=>{
                        rep = rep.body;
                        if(rep.mes == 1){
                            this.head = rep.data.head;
                            this.num = 4;
                        }
                    });          
                }
                if(path == '/comic/5/dev' || path == '/comic/5/menu' || path == '/comic/5/tall'){
                    this.$http.get('/api/005').then((rep)=>{
                        rep = rep.body;
                        if(rep.mes == 1){
                            this.head = rep.data.head;
                            this.num = 5;
                        }
                    });          
                }
            }
        },
        created(){
            this.comrg();
        },
        watch:{
            '$route':'comrg'
        },
        components:{
            "v-header":header
        }
    }
</script>

<style lang="less">
     /*//标签切换开始*/
  .mod-tab{
      height: 2.25rem;
      background: #ffffff;
      border-bottom: 1px solid #F5F5EE;
      width: 100%;
      .tab-list{
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          .tab-list-item{
              display: block;
              width: 5.75rem;
              text-align: center;
              height: 2.25rem;
              line-height: 2.25rem;
              font-size: 0.75rem;
              position: relative;
              color: #969696;
          }
          .active{
              color: #535252;
              &::after{
                  content: '';
                  width: 0.5rem;
                  height: 0.15rem;
                  left: 2.625rem;
                  bottom: 0;
                  position: absolute;
                  background-color: #ff9a6a;
                  border-radius: 0.15rem;
                  display: block;
              }
          }
      }
  }
</style>