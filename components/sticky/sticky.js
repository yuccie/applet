const app = getApp()

Component( {
  properties: {
    headList:{
      type:Object,
      value:{
        left:['进件号','手机号'],
        right:['来源','转化','产品','状态','金额(元)','进件时间']
      }
    },
    sliderList:{
      type:Array,
      value:[
        {requestId:'1234',mobile:'176xxx798'},
        {requestId:'6789',mobile:'176xxx121'},
        {requestId:'6789',mobile:'176xxx121'},
        {requestId:'6789',mobile:'176xxx121'},
        {requestId:'6789',mobile:'176xxx121'},
        {requestId:'6789',mobile:'176xxx121'},
        {requestId:'6789',mobile:'176xxx121'},
        {requestId:'6789',mobile:'176xxx121'},
        {requestId:'6789',mobile:'176xxx121'},
        {requestId:'6789',mobile:'176xxx121'},
        {requestId:'6789',mobile:'176xxx121'},
        {requestId:'6789',mobile:'176xxx121'},
        {requestId:'6789',mobile:'176xxx121'},
      ]
    },
    bodyList: {
      type: Array,
      value: [ 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
        {mobile: '176xxx987',source: '自主展业',isConverted: '否',tag: '强意向',scanTime: '2018-03-04'}, 
      ]
    }
  },
  data: {
  },
  methods: {
    onPageScroll: function ( e ) {
      console.log( "上下拉" )
      this.setData( {
        isFixed: 'fixed',
        isNone: 'block'
      } )
    },
  },

} )