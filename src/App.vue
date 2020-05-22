<template>
  <div id="app">
    <div class="test-btn" @click="removepano">删除</div>
    <div id="pano" style="width:100%;height:100%;">
      <noscript>
        <table style="width:100%;height:100%;">
          <tr style="vertical-align:middle;">
            <td>
              <div style="text-align:center;">
                ERROR:
                <br />
                <br />Javascript not activated
                <br />
                <br />
              </div>
            </td>
          </tr>
        </table>
      </noscript>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      krpano: null
    }
  },
  mounted () {
    window.krpano_onready_callback = function (krpanoBridge) {
      this.krpano = krpanoBridge;
    }
    embedpano({ // eslint-disable-line
      swf: "../krpano/tour.swf",
      xml: "../krpano/tour.xml",
      target: "pano",
      html5: "auto",
      mobilescale: 1.0,
      passQueryParameters: true,
      onready: krpano_onready_callback // eslint-disable-line
    });
  },
   methods: {
    removepano (){
      // debugger
      removepano("pano");// eslint-disable-line
    }
  }
}
</script>

<style>
html,body {
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height:100vh;
}
.test-btn {
  position: absolute;
  right:10%;
  top: 10px;
  border-radius: 3px;
  padding:10px 20px;
  background:red;
  z-index:1;
  color: white;
}
.test-btn:active{
  opacity: 0.4;
}
</style>
