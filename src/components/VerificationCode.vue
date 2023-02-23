<!--Modified from https://juejin.cn/post/7077555922679119908-->

<template>
  <div id="verification-root">
    <canvas id="v-canvas" :width="contentWidth" :height="contentHeight"/>
  </div>
</template>

<script>

export default {
  name: "VerificationCode",
  props: {
    identifyCode: {
      type: Array
    },
    fontSizeMin: {
      type: Number,
      default: 25
    },
    fontSizeMax: {
      type: Number,
      default: 30
    },
    backgroundColorMin: {
      type: Number,
      default: 255
    },
    backgroundColorMax: {
      type: Number,
      default: 255
    },
    colorMin: {
      type: Number,
      default: 0
    },
    colorMax: {
      type: Number,
      default: 160
    },
    lineColorMin: {
      type: Number,
      default: 100
    },lineColorMax: {
      type: Number,
      default: 255
    },
    dotColorMin: {
      type: Number,
      default: 0
    },
    dotColorMax: {
      type: Number,
      default: 255
    },
    contentWidth: {
      type: Number,
      default: 112
    },
    contentHeight: {
      type: Number,
      default: 31
    }
  },
  methods: {
    randomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    randomColor(min, max) {
      return `rgb(${this.randomInt(min, max)}, ${this.randomInt(min, max)}, ${this.randomInt(min, max)})`
    },
    drawChar(ctx, char, i) {
      ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax)
      ctx.font = this.randomInt(this.fontSizeMin, this.fontSizeMax) + 'px SimHei'
      let x = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1))
      let y = this.randomInt(this.fontSizeMax, this.contentHeight-5)
      let deg = this.randomInt(-45, 45)
      ctx.translate(x, y)
      let rot;
      ctx.rotate(rot = deg * Math.PI / 180)
      ctx.fillText(char, 0, 0)
      ctx.rotate(-rot)
      ctx.translate(-x, -y)
    },
    drawLines(ctx) {
      for (let i = 0; i < 5; i++) {
        ctx.strokeStyle = this.randomColor(this.lineColorMin, this.lineColorMax)
        ctx.beginPath()
        ctx.moveTo(this.randomInt(0, this.contentWidth), this.randomInt(0, this.contentHeight))
        ctx.lineTo(this.randomInt(0, this.contentWidth), this.randomInt(0, this.contentHeight))
        ctx.stroke()
      }
    },
    drawDots(ctx) {
      for (let i = 0; i < 80; i++) {
        ctx.fillStyle = this.randomColor(0, 255)
        ctx.beginPath()
        ctx.arc(this.randomInt(0, this.contentWidth), this.randomInt(0, this.contentHeight), 1, 0, 2 * Math.PI)
        ctx.fill()
      }
    },
    drawPic() {
      let canvas = document.getElementById('v-canvas')
      let ctx = canvas.getContext('2d')
      // background
      ctx.fillStyle = this.randomColor(this.backgroundColorMin, this.backgroundColorMax)
      ctx.fillRect(0, 0, this.contentWidth, this.contentHeight)

      for(const [i, char] of this.identifyCode.entries()) {
        this.drawChar(ctx, char, i)
      }
      this.drawLines(ctx)
      this.drawDots(ctx)
    }
  },
  mounted() {
    this.drawPic();
  },
  watch: {
    identifyCode: function() {
      this.drawPic()
    }
  }
}
</script>

<style scoped>

</style>