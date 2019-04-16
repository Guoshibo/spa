/* global Handsontable */
$(function(){
  var e = $('.main');
  return new Handsontable(e.get(0),{
    data: [      
      ['张三','男']
    ],
    contextMenu: !0,
    manualRowResize: !0,
    manualColumnResize: !0,
    rowHeaders: !0,
    colHeaders:['姓名','性别']      
  });
});

