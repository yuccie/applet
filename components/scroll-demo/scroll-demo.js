// import { myShowLoading , myFailToast } from "../../utils/handler";
const app = getApp()

Component( {
  properties: {
    bodyList: {
      type: Array,
      value: [ {
        mobile: '176xxx987',
        source: '自主展业',
        isConverted: '否',
        tag: '强意向',
        scanTime: '2018-03-04'
      }, ]
    }
  },
  data: {
    toView: 'yellow',
    scrollLeft: 0,
    scrolls: [ {
        name: '黄色',
        tag: 'yellow',
      },
      {
        name: '绿色',
        tag: 'green',
      },
      {
        name: '红色',
        tag: 'red',
      },
      {
        name: '黄色',
        tag: 'yellow',
      },
      {
        name: '绿色',
        tag: 'green',
      },
      {
        name: '红色',
        tag: 'red',
      },
    ],
  },
  ready: function () {},

  methods: {
    scrollToRed: function ( e ) {
      this.setData( {
        toView: 'green'
      } )
    },
    scrollTo100: function ( e ) {
      this.setData( {
        scrollLeft: 100
      } )
    },

    upper: function ( e ) {
      console.log( '滚动到顶部' )
    },
    lower: function ( e ) {
      console.log( '滚动到底部' )
    },
    scroll: function ( e ) {
      console.log( e )
    },

  },

} )