<template>
  <d2-container type="full" class="page">
    <d2-grid-layout
      v-bind="layout"
      @layout-updated="layoutUpdatedHandler">
      <d2-grid-item
        v-for="(item, index) in layout.layout"
        :key="index"
        v-bind="item"
        @resize="resizeHandler"
        @move="moveHandler"
        @resized="resizedHandler"
        @moved="movedHandler">
        <el-card shadow="never" class="page_card">
          <el-tag size="mini" type="info" slot="header">{{item.code}}</el-tag>
          <el-tag size="mini" type="info" slot="header">{{item.name}}</el-tag>
          <template v-if="item.i === '0'">
            <d2-crud
              :columns="columns"
              :data="data"
              :options="options"/>
          </template>
          <template v-if="item.i === '1'">
            <d2-crud
              :columns="columns_1"
              :data="blockdata"
              :options="options"/>
          </template>
          <template v-if="item.i === '2'">
            <d2-crud
              :columns="columns_1"
              :data="data"
              :options="options"/>

          </template>
          <template v-if="item.i === '3'">
            <d2-crud
              :columns="columns"
              :data="data"
              :options="options"/>

          </template>
          <template v-if="item.i === '4'">

              <div id="kline_container"></div>

          </template>
        </el-card>
      </d2-grid-item>
    </d2-grid-layout>
  </d2-container>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Kline from 'qatradechart'
import { GridLayout, GridItem } from 'vue-grid-layout'
import list from '@/views/demo/charts/list/_mixin/list.js'
Vue.component('d2-grid-layout', GridLayout)
Vue.component('d2-grid-item', GridItem)
export default {
  mixins: [
    list
  ],
  data () {
    this.chartSettings = {
      showLine: ['持仓量']
    }
    return {
      layout: {
        layout: [
          { 'code': 'rb2010', 'name': '行情报价', 'x': 0, 'y': 0, 'w': 4, 'h': 10, 'i': '0' },
          { 'code': 'j2010', 'name': '涨速榜', 'x': 4, 'y': 0, 'w': 2, 'h': 15, 'i': '1' },
          { 'code': 'jm2010', 'name': '板块涨跌幅', 'x': 0, 'y': 0, 'w': 4, 'h': 5, 'i': '2' },
          { 'code': 'sc2010', 'name': '1分钟涨速榜', 'x': 10, 'y': 0, 'w': 2, 'h': 10, 'i': '3' },
          { 'code': 'sc2010', 'name': '图表', 'x': 6, 'y': 0, 'w': 6, 'h': 12, 'i': '4' }
        ],
        colNum: 12,
        rowHeight: 30,
        isDraggable: true,
        isResizable: true,
        isMirrored: false,
        verticalCompact: true,
        margin: [10, 10],
        useCssTransforms: true
      },
      columns_1: [
        {
          title: '品种',
          key: 'code',
          width: '120'
        },
        {
          title: '涨跌幅',
          key: 'change'
        }
      ],
      columns: [
        {
          title: '日期',
          key: 'date',
          width: '120'
        },
        {
          title: '品种',
          key: 'code',
          width: '120'
        },
        {
          title: '价格',
          key: 'price'
        }
      ],
      data: [
        {
          date: '2020-03-12',
          code: 'rb2005',
          price: '3390',
          change: '0.2%',
          change1min: '-0.3%'
        }],
      blockdata: [
        {
          date: '2020-03-12',
          code: '黑色系',
          change: '0.2%',
          change1min: '-0.3%'
        },
        {
          date: '2020-03-12',
          code: '农产品',
          change: '0.6%',
          change1min: '-1.3%'
        }
      ]
    }
  },
  mounted () {
    // 加载完成后显示提示
    this.showInfo()
    this.init_url()
    this.initcodes()
    this.initkline()
  },
  methods: {
    log (arg1 = 'log', ...logs) {
      if (logs.length === 0) {
        console.log(arg1)
      } else {
        console.group(arg1)
        logs.forEach(e => {
          console.log(e)
        })
        console.groupEnd()
      }
    },
    // 显示提示
    showInfo () {
      this.$notify({
        title: '提示',
        message: '拖动调整期货位置'
      })
    },
    // 测试代码
    layoutUpdatedHandler (newLayout) {
      console.group('layoutUpdatedHandler')
      newLayout.forEach(e => {
        console.log(`{'x': ${e.x}, 'y': ${e.y}, 'w': ${e.w}, 'h': ${e.h}, 'i': '${e.i}'},`)
      })
      console.groupEnd()
    },
    resizeHandler (i, newH, newW) {
      this.log('resizeHandler', `i: ${i}, newH: ${newH}, newW: ${newW}`)
    },
    moveHandler (i, newX, newY) {
      this.log('moveHandler', `i: ${i}, newX: ${newX}, newY: ${newY}`)
    },
    resizedHandler (i, newH, newW, newHPx, newWPx) {
      this.log('resizedHandler', `i: ${i}, newH: ${newH}, newW: ${newW}, newHPx: ${newHPx}, newWPx: ${newWPx}`)
    },
    movedHandler (i, newX, newY) {
      this.log('movedHandler', `i: ${i}, newX: ${newX}, newY: ${newY}`)
    },
    init_url () {
      // marketuri
      let uri = localStorage.getItem('userUrl')
      if (uri == null) {
        this.url = 'http://127.0.0.1:8010'
      } else {
        this.url = JSON.parse(uri)['marketuri']
      }
    },
    initcodes () {
      axios.get(this.url + '/codelist')
        .then(response => {
          let r = response.data['result']
          console.log(r)
          this.codes = r
        })
    },
    initkline () {
      this.kline = new Kline({
        element: '#kline_container',
        width: 400,
        height: 200,
        theme: 'light', // light/dark
        language: 'zh-cn', // zh-cn/en-us/zh-tw
        ranges: ['1w', '1d', '1h', '30m', '15m', '5m', '1m', 'line'],
        symbol: 'RBL8',
        symbolName: '螺纹主连',
        type: 'poll', // poll/socket
        url: this.url + '/realtime/future',
        limit: 300,
        intervalTime: 1000,
        debug: false,
        showTrade: false,
        reverseColor: false
      })
      this.kline.draw()
      this.handleResize()
    },
    handleResize () {
      console.log('window.innerWidth created', window.innerWidth)
      this.kline.resize(700, 380)
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .vue-grid-layout {
    background-color: $color-bg;
    border-radius: 4px;
    margin: -10px;
    .page_card {
      height: 100%;
      @extend %unable-select;
    }
    .vue-resizable-handle {
      opacity: .3;
      &:hover{
        opacity: 1;
      }
    }
    .kline_container {
        width: 400px;
        margin-left: auto;
        margin-right: auto;
        height: 262px;
        position: relative;
    }

  }
}
</style>
