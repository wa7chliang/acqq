<template>
    <div>
        <v-header :content="content"></v-header>
        <section class="mod-tab">
            <div class="tab-list">
                <router-link :to="{path: '/comic/dev/'+ num}" replace class="tab-list-item">详情</router-link>
                <router-link :to="{path: '/comic/menu/'+ num}" replace class="tab-list-item">目录</router-link>
                <router-link :to="{path: '/comic/tall/'+ num}" replace class="tab-list-item">评论</router-link>
            </div>
        </section>
        <keep-alive>
            <router-view :content="content" :id="id"></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import header from './header';
    import Recommend from '../../common/api/recommend';

    export default {
        name: 'comic1',
        data() {
            return {
                num: '',
                content: {},
                id: ''
            }
        },
        methods: {
            trim(str) { //删除左右两端的空格
                return str.replace(/(^\s*)|(\s*$)/g, "");
            },
            comrg() {
                var path = this.$route.path;
                this.id = path.substring(path.lastIndexOf('/') + 1);
                Recommend('/api/recommendLi', { 'id': this.id }).then((res) => {
                    this.content = JSON.parse(JSON.stringify(res.data))
                    this.content.author = this.trim(this.content.author)
                    this.num = this.id
                    Recommend('/api/getMonthTicketInfo', { 'id': this.id, t: 1504247586984 }).then((res) => {
                        this.$set(this.content,'monthTicket',res.data.monthTicket)
                    })
                })
            }
        },
        created() {
            this.comrg();
        },
        components: {
            "v-header": header
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