// import { myShowLoading , myFailToast } from "../../utils/handler";
const app = getApp()

Component( {
  properties: {
    headList2:{
      type:Array,
      value:['进件号','手机号']
    },
    bodyList2: {
      type: Array,
      value: [ {
        requestId: '1234',
        mobile: '176xxx789',
      },]
    },
    headList:{
      type:Array,
      value:['来源','转化','产品','状态','金额(元)','进件时间']
    },
    bodyList: {
      type: Array,
      value: [ {
        source: '自主展业',
        convert: '已转化',
        product:'快车',
        status:'放款',
        loanAmount:'209,888.00',
        requestTime:'2018-07-01',
      },{
        source: '自主展业',
        convert: '已转化',
        product:'快车',
        status:'放款',
        loanAmount:'209,888.00',
        requestTime:'2018-07-01',
      },{
        source: '自主展业',
        convert: '已转化',
        product:'快车',
        status:'放款',
        loanAmount:'209,888.00',
        requestTime:'2018-07-01',
      },{
        source: '自主展业',
        convert: '已转化',
        product:'快车',
        status:'放款',
        loanAmount:'209,888.00',
        requestTime:'2018-07-01',
      },{
        source: '自主展业',
        convert: '已转化',
        product:'快车',
        status:'放款',
        loanAmount:'209,888.00',
        requestTime:'2018-07-01',
      },{
        source: '商户',
        convert: '已转化',
        product:'快车',
        status:'放款',
        loanAmount:'209,888.00',
        requestTime:'2018-07-01',
      },{
        source: '自主展业',
        convert: '已转化',
        product:'快车',
        status:'放款',
        loanAmount:'9,888.00',
        requestTime:'2018-07-01',
      },{
        source: '自主展业',
        convert: '已转化',
        product:'快车',
        status:'未放款',
        loanAmount:'209,888.00',
        requestTime:'2018-07-01',
      },{
        source: '自主展业',
        convert: '已转化',
        product:'快车',
        status:'未放款',
        loanAmount:'209,888.00',
        requestTime:'2018-07-01',
      },{
        source: '自主展业',
        convert: '已转化',
        product:'快车',
        status:'未放款',
        loanAmount:'209,888.00',
        requestTime:'2018-07-01',
      },{
        source: '自主展业',
        convert: '已转化',
        product:'快车',
        status:'未放款',
        loanAmount:'209,888.00',
        requestTime:'2018-07-01',
      },]
    },
  },
  data: {
  },
  ready: function () {},

  methods: {
    upper: function ( e ) {
      console.log( '滚动到顶部' )
    },
    lower: function ( e ) {
      console.log( '滚动到底部' )
    },
    scroll: function ( e ) {
      // console.log( e )
    },

  },

} )