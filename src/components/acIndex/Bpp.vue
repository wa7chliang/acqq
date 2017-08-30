<template>
  <div class="acindex">
    <in-header></in-header>
    <in-banner></in-banner>
    <in-content1></in-content1>
    <in-content2></in-content2>
    <in-today></in-today>
    <in-acgvip></in-acgvip>
    <in-bottom></in-bottom>
  </div>
</template>

<script>
  import header from './header';
  import banner from './banner';
  import content1 from './content1';
  import content2 from './content2';
  import today from './today';
  import acgvip from './acgvip';
  import bottom from './bottom';
  import Recommend from '../../common/api/recommend';


  export default {
    name: 'acindex',
    data() {
      return {
        acindex: {}
      }
    },
    methods: {
      getNav() {
        Recommend('/api/acindex', { req: 1 }).then((res) => {
          if (res.data.isSuccess) {
            this.acindex = res.data.data;
            console.log(this.acindex,11);
          } else {
            console.log(rep.msg);
          }
        })
      }
    },
    created() {
      this.getNav();
    },
    components: {
      'in-header': header,
      'in-banner': banner,
      'in-content1': content1,
      'in-content2': content2,
      'in-today': today,
      'in-acgvip': acgvip,
      'in-bottom': bottom
    }
  }
</script>

<style lang="less">

</style>