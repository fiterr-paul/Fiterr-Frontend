import React from 'react';
import { Link } from 'react-router-dom';

import splashVideoMP4 from './images/splash-video-optimized.mp4';

import './css/normalize.min.css';
import './css/smartslider.min.css';
{/* <link rel="stylesheet" type="text/css" href="css/normalize.min.css" media="screen, print" /> */}
{/* <link rel="stylesheet" type="text/css" href="css/smartslider.min.css" media="screen, print" /> */}


const HomepageSplash = () => {

    <style type="text/css">.n2-ss-spinner-simple-dark-counter-container {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -27px;
        background: RGBA(0,0,0,0.8);
        width: 34px;
        height: 34px;
        padding: 10px;
        border-radius: 50%;
        z-index: 1000;
        box-sizing: initial;
    }
    
    .n2-ss-spinner-simple-dark-counter {
      outline: 1px solid RGBA(0,0,0,0);
      width: 100%;
      height: 100%;
      color: #fff;
      line-height: 34px;
      text-align: center;
      font-size: 12px;
    }
    
    .n2-ss-spinner-simple-dark-counter:before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 42px;
        height: 42px;
        margin-top: -22px;
        margin-left: -22px;
    }
    
    .n2-ss-spinner-simple-dark-counter:not(:required):before {
        content: '';
        border-radius: 50%;
        border-top: 2px solid #fff;
        border-right: 2px solid transparent;
        animation: n2SimpleDarkCounter .6s linear infinite;
    }
    @keyframes n2SimpleDarkCounter {
        to {transform: rotate(360deg);}
    }</style>

<script type="text/javascript">window.N2PRO=1;window.N2GSAP=1;window.N2PLATFORM="wordpress";(function(){var N=this;N.N2_=N.N2_||{r:[],d:[]},N.N2R=N.N2R||function(){N.N2_.r.push(arguments)},N.N2D=N.N2D||function(){N.N2_.d.push(arguments)}}).call(window);if(!window.n2jQuery){window.n2jQuery={ready:function(cb){console.error('n2jQuery will be deprecated!');N2R(['$'],cb);}}}window.nextend={localization: {}, ready: function(cb){console.error('nextend.ready will be deprecated!');N2R('documentReady', function($){cb.call(window,$)})}};window.N2SSPRO=1;window.N2SS3C="smartslider3";
        nextend.fontsLoaded = false;
        nextend.fontsLoadedActive = function () {nextend.fontsLoaded = true;};
        var requiredFonts = ["Roboto:n3","Roboto:n4"],
            fontData = {
                google: {
                    families: ["Roboto:300,400:latin"]
                },
                active: function(){nextend.fontsLoadedActive()},
                inactive: function(){nextend.fontsLoadedActive()},
                fontactive: function(f,s){fontData.resolveFont(f+':'+s);},
                fontinactive: function(f,s){fontData.resolveFont(f+':'+s);},
                resolveFont: function(n){
                    for(var i = requiredFonts.length - 1; i >= 0; i--) {
                        if(requiredFonts[i] === n) {
                           requiredFonts.splice(i, 1);
                           break;
                        }
                    }
                    if(!requiredFonts.length) nextend.fontsLoadedActive();
                }
            };
        if(typeof WebFontConfig !== 'undefined' && typeof WebFont === 'undefined'){
            var _WebFontConfig = WebFontConfig;
            for(var k in WebFontConfig){
                if(k == 'active'){
                  fontData.active = function(){nextend.fontsLoadedActive();_WebFontConfig.active();}
                }else if(k == 'inactive'){
                  fontData.inactive = function(){nextend.fontsLoadedActive();_WebFontConfig.inactive();}
                }else if(k == 'fontactive'){
                  fontData.fontactive = function(f,s){fontData.resolveFont(f+':'+s);_WebFontConfig.fontactive.apply(this,arguments);}
                }else if(k == 'fontinactive'){
                  fontData.fontinactive = function(f,s){fontData.resolveFont(f+':'+s);_WebFontConfig.fontinactive.apply(this,arguments);}
                }else if(k == 'google'){
                    if(typeof WebFontConfig.google.families !== 'undefined'){
                        for(var i = 0; i < WebFontConfig.google.families.length; i++){
                            fontData.google.families.push(WebFontConfig.google.families[i]);
                        }
                    }
                }else{
                    fontData[k] = WebFontConfig[k];
                }
            }
        }
        fontData.classes=true;
        fontData.events=true;
        
        if(typeof WebFont === 'undefined'){
            window.WebFontConfig = fontData;
        }else{
            WebFont.load(fontData);
        }</script>
<script type="text/javascript" src="js/n2-j.min.js"></script>
<script type="text/javascript" src="js/nextend-gsap.min.js"></script>
<script type="text/javascript" src="js/nextend-frontend.min.js"></script>
<script type="text/javascript" src="js/smartslider-frontend.min.js"></script>
<script type="text/javascript" src="js/smartslider-simple-type-frontend.min.js"></script>
<script type="text/javascript" src="js/nextend-webfontloader.min.js"></script>
<script type="text/javascript">N2R('documentReady', function($){

        nextend.fontsDeferred = $.Deferred();
        if(nextend.fontsLoaded){
            nextend.fontsDeferred.resolve();
        }else{
            nextend.fontsLoadedActive = function () {
                nextend.fontsLoaded = true;
                nextend.fontsDeferred.resolve();
            };
            var intercalCounter = 0;
            nextend.fontInterval = setInterval(function(){
                if(intercalCounter > 3 || document.documentElement.className.indexOf('wf-active') !== -1){
                    nextend.fontsLoadedActive();
                    clearInterval(nextend.fontInterval);
                }
                intercalCounter++;
            }, 1000);
        }
N2R(["nextend-frontend","smartslider-frontend","nextend-gsap","smartslider-simple-type-frontend"],function(){new N2Classes.SmartSliderSimple('#n2-ss-3', {"admin":false,"translate3d":1,"callbacks":"","background.video.mobile":1,"randomize":{"randomize":0,"randomizeFirst":0},"align":"normal","isDelayed":0,"load":{"fade":1,"scroll":0},"playWhenVisible":1,"playWhenVisibleAt":0.5,"responsive":{"desktop":1,"tablet":1,"mobile":1,"onResizeEnabled":true,"type":"fullpage","downscale":1,"upscale":1,"minimumHeight":-1,"maximumHeight":-1,"maximumSlideWidth":3000,"maximumSlideWidthLandscape":3000,"maximumSlideWidthTablet":3000,"maximumSlideWidthTabletLandscape":3000,"maximumSlideWidthMobile":3000,"maximumSlideWidthMobileLandscape":3000,"maximumSlideWidthConstrainHeight":0,"forceFull":1,"forceFullOverflowX":"body","forceFullHorizontalSelector":"","constrainRatio":0,"sliderHeightBasedOn":"real","decreaseSliderHeight":0,"focusUser":0,"deviceModes":{"desktopPortrait":1,"desktopLandscape":0,"tabletPortrait":1,"tabletLandscape":0,"mobilePortrait":1,"mobileLandscape":0},"normalizedDeviceModes":{"unknownUnknown":["unknown","Unknown"],"desktopPortrait":["desktop","Portrait"],"desktopLandscape":["desktop","Portrait"],"tabletPortrait":["tablet","Portrait"],"tabletLandscape":["tablet","Portrait"],"mobilePortrait":["mobile","Portrait"],"mobileLandscape":["mobile","Portrait"]},"verticalRatioModifiers":{"unknownUnknown":1,"desktopPortrait":1,"desktopLandscape":1,"tabletPortrait":1,"tabletLandscape":1,"mobilePortrait":1,"mobileLandscape":1},"minimumFontSizes":{"desktopPortrait":1,"desktopLandscape":1,"tabletPortrait":1,"tabletLandscape":1,"mobilePortrait":1,"mobileLandscape":1},"ratioToDevice":{"Portrait":{"tablet":0.6999999999999999555910790149937383830547332763671875,"mobile":0.5},"Landscape":{"tablet":0,"mobile":0}},"sliderWidthToDevice":{"desktopPortrait":1920,"desktopLandscape":1920,"tabletPortrait":1344,"tabletLandscape":0,"mobilePortrait":960,"mobileLandscape":0},"basedOn":"combined","orientationMode":"width_and_height","overflowHiddenPage":0,"desktopPortraitScreenWidth":1200,"tabletPortraitScreenWidth":800,"mobilePortraitScreenWidth":440,"tabletLandscapeScreenWidth":800,"mobileLandscapeScreenWidth":440,"focus":{"offsetTop":"#menu","offsetBottom":""}},"controls":{"mousewheel":0,"touch":"horizontal","keyboard":1,"blockCarouselInteraction":1},"lazyLoad":0,"lazyLoadNeighbor":0,"blockrightclick":1,"maintainSession":0,"autoplay":{"enabled":0,"start":1,"duration":8000,"autoplayToSlide":-1,"autoplayToSlideIndex":-1,"allowReStart":0,"pause":{"click":1,"mouse":"0","mediaStarted":1},"resume":{"click":0,"mouse":"0","mediaEnded":1,"slidechanged":0}},"perspective":1000,"layerMode":{"playOnce":0,"playFirstLayer":1,"mode":"skippable","inAnimation":"mainInEnd"},"parallax":{"enabled":0,"mobile":0,"is3D":1,"animate":1,"horizontal":"mouse-invert","vertical":"mouse-invert","origin":"slider","scrollmove":"both"},"postBackgroundAnimations":0,"initCallbacks":[],"allowBGImageAttachmentFixed":true,"bgAnimationsColor":"RGBA(51,51,51,1)","bgAnimations":0,"mainanimation":{"type":"horizontal","duration":800,"delay":0,"ease":"easeOutQuad","parallax":0,"shiftedBackgroundAnimation":"auto"},"carousel":1,"dynamicHeight":0});});
});
</script>

    return (
        <>

<div className="n2-section-smartslider " role="region" aria-label="homepage-splash"><div id="homepage-splash" style="height:0; line-height:0; min-height:0; margin:0; padding:0;"></div><style type="text/css">div#n2-ss-3{width:1920px;float:left;margin:0px 0px 0px 0px;}html[dir="rtl"] div#n2-ss-3{float:right;}div#n2-ss-3 .n2-ss-slider-1{position:relative;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;height:1080px;border-style:solid;border-width:0px;border-color:#3e3e3e;border-color:RGBA(62,62,62,1);border-radius:0px;background-clip:padding-box;background-repeat:repeat;background-position:50% 50%;background-size:cover;background-attachment:scroll;}div#n2-ss-3 .n2-ss-slider-background-video-container{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;}div#n2-ss-3 .n2-ss-slider-2{position:relative;width:100%;height:100%;}.x-firefox div#n2-ss-3 .n2-ss-slider-2{opacity:0.99999;}div#n2-ss-3 .n2-ss-slider-3{position:relative;width:100%;height:100%;overflow:hidden;outline:1px solid rgba(0,0,0,0);z-index:10;}div#n2-ss-3 .n2-ss-slide-backgrounds,div#n2-ss-3 .n2-ss-slider-3 > .n-particles-js-canvas-el,div#n2-ss-3 .n2-ss-slider-3 > .n2-ss-divider{position:absolute;left:0;top:0;width:100%;height:100%;}div#n2-ss-3 .n2-ss-slide-backgrounds{z-index:10;}div#n2-ss-3 .n2-ss-slider-3 > .n-particles-js-canvas-el{z-index:12;}div#n2-ss-3 .n2-ss-slide-backgrounds > *{overflow:hidden;}div#n2-ss-3 .n2-ss-slide{position:absolute;top:0;left:0;width:100%;height:100%;z-index:20;display:block;-webkit-backface-visibility:hidden;}div#n2-ss-3 .n2-ss-layers-container{position:relative;width:1920px;height:1080px;}div#n2-ss-3 .n2-ss-parallax-clip > .n2-ss-layers-container{position:absolute;right:0;}div#n2-ss-3 .n2-ss-slide{perspective:1000px;}div#n2-ss-3[data-ie] .n2-ss-slide{perspective:none;transform:perspective(1000px);}div#n2-ss-3 .n2-ss-slide-active{z-index:21;}div#n2-ss-3 .n2-ss-button-container,div#n2-ss-3 .n2-ss-button-container a{display:inline-block;}div#n2-ss-3 .n2-ss-button-container.n2-ss-fullwidth,div#n2-ss-3 .n2-ss-button-container.n2-ss-fullwidth a{display:block;}div#n2-ss-3 .n2-ss-button-container.n2-ss-nowrap{white-space:nowrap;}div#n2-ss-3 .n2-ss-button-container a div{display:inline;font-size:inherit;text-decoration:inherit;color:inherit;line-height:inherit;font-family:inherit;font-weight:inherit;}div#n2-ss-3 .n2-ss-button-container a > div{display:inline-flex;align-items:center;vertical-align:top;}div#n2-ss-3 .n2-ss-button-container span{font-size:100%;vertical-align:baseline;}div#n2-ss-3 .n2-ss-button-container a[data-iconplacement="left"] span{margin-right:0.3em;}div#n2-ss-3 .n2-ss-button-container a[data-iconplacement="right"] span{margin-left:0.3em;}div#n2-ss-3 .n-uc-1662456139ecb-inner{transition:all .3s;transition-property:border,background-image,background-color,border-radius,box-shadow;background:RGBA(0,0,0,0.5);border-radius:5px;border-width:1px 1px 1px 1px ;border-style:solid;border-color:RGBA(0,0,0,0.5);}div#n2-ss-3 .n-uc-1662456139ecb-inner:HOVER{border-width:1px 1px 1px 1px ;border-style:solid;border-color:RGBA(0,0,0,0.5);}div#n2-ss-3 .n2-font-b928120424c9176c78ee4809c27066bd-hover{font-family: 'Roboto','Arial';color: #ffffff;font-size:187.5%;text-shadow: none;line-height: 1.3;font-weight: normal;font-style: normal;text-decoration: none;text-align: inherit;letter-spacing: 2px;word-spacing: normal;text-transform: uppercase;font-weight: 500;}div#n2-ss-3 .n2-style-992ab68df65df636f9e824b4cc704a46-heading{background: #000000;background: RGBA(0,0,0,0);opacity:1;padding:0px 0px 0px 0px ;box-shadow: none;border-width: 0px;border-style: solid;border-color: #000000; border-color: RGBA(0,0,0,0);border-radius:0px;}div#n2-ss-3 .n2-font-7b484c55c4ced92132b12da9970a1444-paragraph{font-family: 'Roboto';color: #ffffff;font-size:156.25%;text-shadow: none;line-height: 1.3;font-weight: normal;font-style: normal;text-decoration: none;text-align: inherit;letter-spacing: normal;word-spacing: normal;text-transform: none;font-weight: 300;}div#n2-ss-3 .n2-font-7b484c55c4ced92132b12da9970a1444-paragraph a, div#n2-ss-3 .n2-font-7b484c55c4ced92132b12da9970a1444-paragraph a:FOCUS{font-family: 'Roboto';color: #1890d7;font-size:100%;text-shadow: none;line-height: 1.3;font-weight: normal;font-style: normal;text-decoration: none;text-align: inherit;letter-spacing: normal;word-spacing: normal;text-transform: none;font-weight: 300;}div#n2-ss-3 .n2-font-7b484c55c4ced92132b12da9970a1444-paragraph a:HOVER, div#n2-ss-3 .n2-font-7b484c55c4ced92132b12da9970a1444-paragraph a:ACTIVE{font-family: 'Roboto';color: #1890d7;font-size:100%;text-shadow: none;line-height: 1.3;font-weight: normal;font-style: normal;text-decoration: none;text-align: inherit;letter-spacing: normal;word-spacing: normal;text-transform: none;font-weight: 300;}div#n2-ss-3 .n2-font-fbfac9b7782100de308a0e64bfba23a8-link a{font-family: 'Roboto','Arial';color: #ffffff;font-size:100%;text-shadow: none;line-height: 1.5;font-weight: normal;font-style: normal;text-decoration: none;text-align: center;letter-spacing: 1px;word-spacing: normal;text-transform: uppercase;font-weight: 600;}div#n2-ss-3 .n2-style-9ac08a580789bc26bf31f928a45382a2-heading{background: #000000;background: RGBA(0,0,0,0);opacity:1;padding:1.3em 2em 1.3em 2em ;box-shadow: none;border-width: 1px;border-style: solid;border-color: #ffffff; border-color: RGBA(255,255,255,1);border-radius:5px;}div#n2-ss-3 .n2-style-9ac08a580789bc26bf31f928a45382a2-heading:Hover, div#n2-ss-3 .n2-style-9ac08a580789bc26bf31f928a45382a2-heading:ACTIVE, div#n2-ss-3 .n2-style-9ac08a580789bc26bf31f928a45382a2-heading:FOCUS{background: #ffffff;background: RGBA(255,255,255,0.2);}</style><div id="n2-ss-3-align" className="n2-ss-align"><div className="n2-padding"><div id="n2-ss-3" data-creator="Smart Slider 3" className="n2-ss-slider n2-ow n2-has-hover n2notransition homepage-splash n2-ss-load-fade " data-minFontSizedesktopPortrait="1" data-minFontSizedesktopLandscape="1" data-minFontSizetabletPortrait="1" data-minFontSizetabletLandscape="1" data-minFontSizemobilePortrait="1" data-minFontSizemobileLandscape="1" style="font-size: 1rem;" data-fontsize="16" data-alias="homepage-splash">
        <div className="n2-ss-slider-1 n2-ss-swipe-element n2-ow" style="">
                        <div className="n2-ss-slider-2 n2-ow">
                                <div className="n2-ss-slider-3 n2-ow" style="">

                    <div className="n2-ss-slide-backgrounds"></div><div data-first="1" data-slide-duration="0" data-id="6" style="" className=" n2-ss-slide n2-ss-canvas n2-ow  n2-ss-slide-6"><div className="n2-ss-slide-background n2-ow" data-mode="fill"><video className="n2-ss-slide-background-video n2-ow" style="opacity:1;" data-mode="fill" playsinline="playsinline" webkit-playsinline="webkit-playsinline" onloadstart="this.n2LoadStarted=1;" data-keepplaying="1" preload="none" muted="muted" loop="loop"><source src={splashVideoMP4} type="video/mp4"></video><div className="n2-ss-slide-background-color" style="background-color: #000000;background-color: RGBA(0,0,0,0.5);" data-overlay="1"></div></div><div className="n2-ss-layers-container n2-ow" data-csstextalign="center" style=""><div className="n2-ss-layer n2-ow" style="max-width: 960px;overflow:visible;" data-csstextalign="center" data-has-maxwidth="1" data-desktopportraitmaxwidth="960" data-cssselfalign="right" data-desktopportraitselfalign="right" data-pm="content" data-desktopportraitpadding="20|*|20|*|20|*|20|*|px+" data-desktopportraitinneralign="center" data-sstype="content" data-hasbackground="0" data-rotation="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="1" data-desktopportraitfontsize="100" data-plugin="rendered"><div className="n2-ss-section-main-content n2-ss-layer-content n2-ow" style="padding:1.25em 1.25em 1.25em 1.25em ;" data-verticalalign="center"><div className="n2-ss-layer n2-ow n-uc-1918e10ae606c" style="margin:0em 0em 0em 0em ;overflow:visible;" data-frontend-fullwidth="0" data-pm="normal" data-desktopportraitmargin="0|*|0|*|0|*|0|*|px+" data-desktopportraitheight="0" data-has-maxwidth="0" data-desktopportraitmaxwidth="0" data-cssselfalign="inherit" data-desktopportraitselfalign="inherit" data-csstextalign="inherit" data-desktopportraitpadding="20|*|20|*|20|*|20|*|px+" data-desktopportraitgutter="20" data-desktopportraitwrapafter="0" data-mobileportraitwrapafter="1" data-mobilelandscapewrapafter="1" data-desktopportraitinneralign="inherit" data-sstype="row" data-rotation="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100" data-plugin="rendered"><div className="n2-ss-layer-row  n-uc-1918e10ae606c-inner" style="padding:1.25em 1.25em 1.25em 1.25em ;"><div className="n2-ss-layer-row-inner "><div className="n2-ss-layer n2-ow n-uc-1662456139ecb" style="max-width: 600px;width: 100%;margin-right: 20px;margin-top: 20px;overflow:visible;" data-csstextalign="inherit" data-has-maxwidth="1" data-desktopportraitmaxwidth="600" data-pm="default" data-desktopportraitpadding="20|*|20|*|20|*|20|*|px+" data-desktopportraitinneralign="inherit" data-desktopportraitorder="0" data-colwidthpercent="100" data-sstype="col" data-rotation="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100" data-plugin="rendered"><div className="n2-ss-layer-col n2-ss-layer-content n-uc-1662456139ecb-inner" style="padding:1.25em 1.25em 1.25em 1.25em ;" data-verticalalign="center"><div className="n2-ss-layer n2-ow" style="margin:0em 0em 0em 0em ;overflow:hidden;" data-pm="normal" data-desktopportraitmargin="0|*|0|*|0|*|0|*|px+" data-desktopportraitheight="0" data-has-maxwidth="0" data-desktopportraitmaxwidth="0" data-cssselfalign="inherit" data-desktopportraitselfalign="inherit" data-sstype="layer" data-rotation="0" data-animatableselector=".n2-ss-layer-mask:first" data-animv2="{&quot;specialZero&quot;:0,&quot;transformOrigin&quot;:&quot;50|*|50|*|0&quot;}" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100" data-mobileportraitfontsize="80" data-plugin="rendered"><div className="n2-ss-layer-mask"><div id="n2-ss-3item1" className="n2-font-b928120424c9176c78ee4809c27066bd-hover n2-style-992ab68df65df636f9e824b4cc704a46-heading   n2-ss-item-content n2-ow" style="display:block;white-space:nowrap;">FITNESS ENTHUSIASTS</div></div></div><div className="n2-ss-layer n2-ow" style="margin:0.625em 0em 1.25em 0em ;overflow:hidden;" data-pm="normal" data-desktopportraitmargin="10|*|0|*|20|*|0|*|px+" data-desktopportraitheight="0" data-has-maxwidth="0" data-desktopportraitmaxwidth="0" data-cssselfalign="inherit" data-desktopportraitselfalign="inherit" data-sstype="layer" data-rotation="0" data-animatableselector=".n2-ss-layer-mask:first" data-animv2="{&quot;specialZero&quot;:0,&quot;transformOrigin&quot;:&quot;50|*|50|*|0&quot;}" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100" data-tabletportraitfontsize="80" data-mobileportraitfontsize="60" data-plugin="rendered"><div className="n2-ss-layer-mask"><div className="n2-ss-item-content n2-ow"><div className="n2-ow n2-ow-all n2-ss-desktop n2-ss-mobile n2-ss-tablet"><p className="n2-font-7b484c55c4ced92132b12da9970a1444-paragraph   n2-ow">Signup now and get started for <strong>FREE</strong>! Download fitness programs, follow your favourite athletes and find a Fitness Professional to coach you!</p>
</div></div></div></div><div className="n2-ss-layer n2-ow" style="margin:0em 0em 0em 0em ;overflow:visible;" data-pm="normal" data-desktopportraitmargin="0|*|0|*|0|*|0|*|px+" data-desktopportraitheight="0" data-has-maxwidth="0" data-desktopportraitmaxwidth="0" data-cssselfalign="inherit" data-desktopportraitselfalign="inherit" data-sstype="layer" data-rotation="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100" data-plugin="rendered"><div className="n2-ss-button-container n2-ss-item-content n2-ow n2-font-fbfac9b7782100de308a0e64bfba23a8-link  n2-ss-nowrap"><a className="n2-style-9ac08a580789bc26bf31f928a45382a2-heading  n2-ow " href="/enthusiasts"><div><div>find out more</div></div></a></div></div></div></div></div></div></div></div></div></div></div>                </div>
            </div>
            
        </div>
        </div><div className="n2-clear"></div><div id="n2-ss-3-spinner" style="display: none;"><div><div className="n2-ss-spinner-simple-dark-counter-container"><div className="n2-ss-spinner-simple-dark-counter n2-ss-spinner-counter">0%</div></div></div></div></div></div><div id="n2-ss-3-placeholder" style="position: relative;z-index:2;background-color:RGBA(0,0,0,0);max-height:3000px; background-color:RGBA(255,255,255,0);"><img style="width: 100%; max-width:3000px; display: block;opacity:0;margin:0px;" className="n2-ow" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMCIgd2lkdGg9IjE5MjAiIGhlaWdodD0iMTA4MCIgPjwvc3ZnPg==" alt="Slider" /></div></div>


    </>
  )
};
      <section className="body homepage">
        homepage
      </section>
export default HomepageSplash;