// functions

function elch(selector) {
  return ($(selector).length > 0);
}

function sizeFix(size) {
  if(winWidth > size) { //  gen_menu fix
    // some action
  }
  else {
    // some action
  }
}

function defineParam() {		//		define basic parametrs
  wh = $(window).height();
  ww = $(window).width();
  whAd = ((wh/100)*10);  //  some height to delay effect

  wsc = $(window).scrollTop();
  uEf = dsc;	//		up_activarea_line
  dEf = (wh + dsc);		//		down_activarea_line
  dsc = $(document).scrollTop();
}

function light(selector) {
  var targLight = $(selector);
  TweenMax.to(targLight, 0, { display : 'block' });
  TweenMax.to(targLight, 0.5, { opacity: 1 });
}
function dark(selector) {
  var targDark = $(selector);
  TweenMax.to(targDark, 0.5, { opacity: 0 });
  TweenMax.to(targDark, 0, { display : 'none', delay: 0.5 });
}

function aA(selector) {		// 	check "is element in visible area"
  var el1u = eUl(selector);
  var el1d = eDl(selector);
  if (((dEf - whAd) > el1u) & ((uEf + whAd) < el1d)) {
    return true;
  }
  else return false;
}
function eUl(arg) {		//		get element up line
  var valEUL = $(arg).offset().top;
  return valEUL;
}
function eDl(arg) {		//		get element down line
  var scrlT1 = $(arg).offset().top;
  var elemH1 = $(arg).outerHeight();
  var valEDL = scrlT1 + elemH1;
  return valEDL;
}

function menuScroll(selector) {
  var targ = $(selector);
  var hwHeight = $(selector).outerHeight();
  if(dsc > hwHeight) {
    TweenMax.to(targ,0,{position:'fixed', top: 0});
  }
  else { TweenMax.to(targ,0,{position:'relative', top: 'auto'}); }
}
