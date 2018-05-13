<template>
  <div class="acindex">
    <in-header></in-header>
    <in-banner :state="state"></in-banner>
    <in-content1></in-content1>
    <in-content2 :acindex="acindex"></in-content2>
    <in-today :acindex="acindex"></in-today>
    <in-acgvip :acindex="acindex"></in-acgvip>
    <in-bottom :acindex="acindex"></in-bottom>
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
        acindex: {},
        state: 0
      }
    },
    methods: {
      getNav() {
        if (sessionStorage.getItem('acindex')) {
          this.acindex = JSON.parse(sessionStorage.getItem('acindex'))
        } else {
          Recommend('/api/acindex', { req: 1 }).then((res) => {
            if (res.data.isSuccess) {
              this.acindex = res.data.data;
              var txt = JSON.stringify(this.acindex)
              sessionStorage.setItem('acindex', txt)
            } else {
              console.log(rep.msg);
            }
          })
        }
      }
    },
    created() {
      Recommend('/api/index').then((res) => {
        this.state = res.data.state
      })      
      this.getNav();
    },
    beforeCreate() {
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