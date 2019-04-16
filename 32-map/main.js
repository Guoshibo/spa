/* global BMap,BMAP_NORMAL_MAP,BMAP_HYBRID_MAP,BMAP_ANIMATION_BOUNCE */
$(function(){
  var map = new BMap.Map('main');
  map.centerAndZoom(new BMap.Point(114.529963, 38.003679), 25);
  map.addControl(new BMap.MapTypeControl({
    mapTypes:[
      BMAP_NORMAL_MAP,
      BMAP_HYBRID_MAP     
    ]
  }));
  map.enableScrollWheelZoom(!0);
  map.setMapType(BMAP_HYBRID_MAP);
  var Map = new BMap.Marker(new BMap.Point(114.529963,38.003679),{title:'SPA 富应用开发'});
  Map.setAnimation(BMAP_ANIMATION_BOUNCE),map.addOverlay(Map);
  var Info=new BMap.InfoWindow('<div style="width: 250px"><p>时间：周二、周三下午<br>地点：505 教室</p><a href="https://github.com/wangding" target="_blank"><img src="https://avatars2.githubusercontent.com/u/1182720?s=400&v=4" alt="王顶" width="40px" height="40px" style="position: relative; top: -58px; left: 190px"></a></div>',{width:230,height:100,title:'<strong>SPA 富应用开发</strong>'});
  Map.openInfoWindow(Info);
});
