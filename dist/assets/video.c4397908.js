import{bH as Wl,bI as Vl,d as jl,r as St,$ as Ql,m as tr,I as Xl,c as Zl,w as ut,v as Jl,_ as ed,o as Xe,b as nn,i as ht,bJ as nr,n as Ki,t as Ct,e as it,f as Hi,F as rr,h as xn,l as td,g as nd,bK as rd,j as id,A as qi,s as ad}from"./index.16c19bde.js";import{_ as sd}from"./Card.2df8ff2b.js";import{_ as od}from"./Spin.1623e082.js";import"./Close.ec530792.js";var Na={exports:{}};(function(o,e){(function(t,n){o.exports=n()})(self,()=>(()=>{var t={916:(a,s,l)=>{var d=l(471);a.exports=function(u){var f,p="",A=(u=u||{}).video,b=u.options,x=d.$escape,S=u.tran,k=u.icons,L=u.index,I=d.$each;return u.$value,u.$index,p+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,f=l(568)(A),p+=f,p+=`
    `,b.logo&&(p+=`
    <div class="dplayer-logo">
        <img src="`,p+=x(b.logo),p+=`">
    </div>
    `),p+=`
    <div class="dplayer-danmaku"`,b.danmaku&&b.danmaku.bottom&&(p+=' style="margin-bottom:',p+=x(b.danmaku.bottom),p+='"'),p+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,b.danmaku&&(p+=`
        <span class="dplayer-danloading">`,p+=x(S("danmaku-loading")),p+=`</span>
        `),p+=`
        <span class="diplayer-loading-icon">`,p+=k.loading,p+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,p+=x(S("setting")),p+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,p+=k.pallette,p+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,p+=x(S("set-danmaku-color")),p+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=x(L),p+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=x(L),p+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=x(L),p+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=x(L),p+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=x(L),p+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=x(L),p+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,p+=x(S("set-danmaku-type")),p+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,p+=x(L),p+=`" value="1">
                    <span>`,p+=x(S("top")),p+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,p+=x(L),p+=`" value="0" checked>
                    <span>`,p+=x(S("rolling")),p+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,p+=x(L),p+=`" value="2">
                    <span>`,p+=x(S("bottom")),p+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,p+=x(S("input-danmaku-enter")),p+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,p+=x(S("send")),p+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,p+=k.send,p+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,p+=k.play,p+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,p+=k.volumeDown,p+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,p+=x(b.theme),p+=`;">
                        <span class="dplayer-thumb" style="background: `,p+=x(b.theme),p+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,b.live&&(p+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,p+=x(b.theme),p+=';"></span>',p+=x(S("live")),p+=`</span>
        `),p+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,b.video.quality&&(p+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,p+=x(b.video.quality[b.video.defaultQuality].name),p+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,I(b.video.quality,function(D,_){p+=`
                    <div class="dplayer-quality-item" data-index="`,p+=x(_),p+='">',p+=x(D.name),p+=`</div>
                `}),p+=`
                </div>
            </div>
        </div>
        `),p+=`
        `,b.screenshot&&(p+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,p+=x(S("screenshot")),p+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,p+=k.camera,p+=`</span>
        </div>
        `),p+=`
        `,b.airplay&&(p+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,p+=x(S("airplay")),p+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,p+=k.airplay,p+=`</span>
        </div>
        `),p+=`
        `,b.chromecast&&(p+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,p+=x(S("chromecast")),p+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,p+=k.chromecast,p+=`</span>
        </div>
        `),p+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,p+=x(S("send-danmaku")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=k.comment,p+=`</span>
            </button>
        </div>
        `,b.subtitle&&(p+=`
        `,typeof b.subtitle.url=="string"?(p+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,p+=x(S("hide-subs")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=k.subtitle,p+=`</span>
            </button>
        </div>
        `):(p+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,p+=x(S("subtitle")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=k.subtitle,p+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,I(b.subtitle.url,function(D,_){p+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,p+=x(D.url),p+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,p+=x(D.lang?D.name?D.name+" ("+S(D.lang)+")":S(D.lang):D.name),p+=`</span>
                        </div>
                    `}),p+=`
                </div>
            </div>
        </div>
        `),p+=`
        `),p+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,p+=x(S("setting")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=k.setting,p+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,p+=x(S("speed")),p+=`</span>
                        <div class="dplayer-toggle">`,p+=k.right,p+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,p+=x(S("loop")),p+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,p+=x(S("show-danmaku")),p+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,p+=x(S("unlimited-danmaku")),p+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,p+=x(S("opacity-danmaku")),p+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,I(b.playbackSpeed,function(D,_){p+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,p+=x(D),p+=`">
                            <span class="dplayer-label">`,p+=x(D===1?S("normal"):D),p+=`</span>
                        </div>
                    `}),p+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,p+=x(S("web-fullscreen")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=k.fullWeb,p+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,p+=x(S("fullscreen")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=k.full,p+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,p+=x(b.theme),p+=`">
                <span class="dplayer-thumb" style="background: `,p+=x(b.theme),p+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,b.danmaku&&(p+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),p+=`
</div>
<div class="dplayer-menu">
    `,I(b.contextmenu,function(D,_){p+=`
        <div class="dplayer-menu-item">
            <a`,D.link&&(p+=' target="_blank"'),p+=' href="',p+=x(D.link||"javascript:void(0);"),p+='">',D.key&&(p+=" ",p+=x(S(D.key))),D.text&&(p+=" ",p+=x(D.text)),p+=`</a>
        </div>
    `}),p+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,p+=k.play,p+=`
</button>`}},568:(a,s,l)=>{var d=l(471);a.exports=function(u){var f="",p=(u=u||{}).enableSubtitle,A=u.subtitle,b=u.current,x=u.airplay,S=u.pic,k=d.$escape,L=u.screenshot,I=u.preload,D=u.url;return p=A&&A.type==="webvtt",f+=`
<video
    class="dplayer-video `,b&&(f+="dplayer-video-current"),f+=`"
    webkit-playsinline
    `,x&&(f+=' x-webkit-airplay="allow" '),f+=`
    playsinline
    `,S&&(f+='poster="',f+=k(S),f+='"'),f+=`
    `,(L||p)&&(f+='crossorigin="anonymous"'),f+=`
    `,I&&(f+='preload="',f+=k(I),f+='"'),f+=`
    `,x?f+=`
    nosrc
    `:D&&(f+=`
    src="`,f+=k(D),f+=`"
    `),f+=`
    >
    `,x&&(f+=`
    <source src="`,f+=k(D),f+=`">
    `),f+=`
    `,p&&(f+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,f+=k(typeof A.url=="string"?A.url:A.url[A.index].url),f+=`"></track>
    `),f+`
</video>`}},49:(a,s,l)=>{l.d(s,{Z:()=>A});var d=l(415),u=l.n(d),f=l(352),p=l.n(f)()(u());p.push([a.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);const A=p},685:(a,s,l)=>{l.d(s,{Z:()=>I});var d=l(415),u=l.n(d),f=l(352),p=l.n(f),A=l(49),b=l(80),x=l.n(b),S=new URL(l(831),l.b),k=p()(u());k.i(A.Z);var L=x()(S);k.push([a.id,`@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+L+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/notice.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);const I=k},856:a=>{var s=[];function l(f){for(var p=-1,A=0;A<s.length;A++)if(s[A].identifier===f){p=A;break}return p}function d(f,p){for(var A={},b=[],x=0;x<f.length;x++){var S=f[x],k=p.base?S[0]+p.base:S[0],L=A[k]||0,I="".concat(k," ").concat(L);A[k]=L+1;var D=l(I),_={css:S[1],media:S[2],sourceMap:S[3],supports:S[4],layer:S[5]};if(D!==-1)s[D].references++,s[D].updater(_);else{var K=u(_,p);p.byIndex=x,s.splice(x,0,{identifier:I,updater:K,references:1})}b.push(I)}return b}function u(f,p){var A=p.domAPI(p);return A.update(f),function(b){if(b){if(b.css===f.css&&b.media===f.media&&b.sourceMap===f.sourceMap&&b.supports===f.supports&&b.layer===f.layer)return;A.update(f=b)}else A.remove()}}a.exports=function(f,p){var A=d(f=f||[],p=p||{});return function(b){b=b||[];for(var x=0;x<A.length;x++){var S=l(A[x]);s[S].references--}for(var k=d(b,p),L=0;L<A.length;L++){var I=l(A[L]);s[I].references===0&&(s[I].updater(),s.splice(I,1))}A=k}}},370:a=>{var s={};a.exports=function(l,d){var u=function(f){if(s[f]===void 0){var p=document.querySelector(f);if(window.HTMLIFrameElement&&p instanceof window.HTMLIFrameElement)try{p=p.contentDocument.head}catch{p=null}s[f]=p}return s[f]}(l);if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(d)}},278:a=>{a.exports=function(s){var l=document.createElement("style");return s.setAttributes(l,s.attributes),s.insert(l,s.options),l}},458:(a,s,l)=>{a.exports=function(d){var u=l.nc;u&&d.setAttribute("nonce",u)}},470:a=>{a.exports=function(s){var l=s.insertStyleElement(s);return{update:function(d){(function(u,f,p){var A="";p.supports&&(A+="@supports (".concat(p.supports,") {")),p.media&&(A+="@media ".concat(p.media," {"));var b=p.layer!==void 0;b&&(A+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),A+=p.css,b&&(A+="}"),p.media&&(A+="}"),p.supports&&(A+="}");var x=p.sourceMap;x&&typeof btoa<"u"&&(A+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(x))))," */")),f.styleTagTransform(A,u,f.options)})(l,s,d)},remove:function(){(function(d){if(d.parentNode===null)return!1;d.parentNode.removeChild(d)})(l)}}}},488:a=>{a.exports=function(s,l){if(l.styleSheet)l.styleSheet.cssText=s;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(s))}}},251:a=>{a.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:a=>{a.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:a=>{a.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(a,s,l)=>{var d=typeof self<"u"?self:typeof window<"u"?window:l.g!==void 0?l.g:{},u=Object.create(d),f=/["&'<>]/;function p(A){return typeof A!="string"&&(A=A==null?"":typeof A=="function"?p(A.call(A)):JSON.stringify(A)),A}u.$escape=function(A){return function(b){var x=""+b,S=f.exec(x);if(!S)return b;var k="",L=void 0,I=void 0,D=void 0;for(L=S.index,I=0;L<x.length;L++){switch(x.charCodeAt(L)){case 34:D="&#34;";break;case 38:D="&#38;";break;case 39:D="&#39;";break;case 60:D="&#60;";break;case 62:D="&#62;";break;default:continue}I!==L&&(k+=x.substring(I,L)),I=L+1,k+=D}return I!==L?k+x.substring(I,L):k}(p(A))},u.$each=function(A,b){if(Array.isArray(A))for(var x=0,S=A.length;x<S;x++)b(A[x],x);else for(var k in A)b(A[k],k)},a.exports=u},471:(a,s,l)=>{a.exports=l(897)},352:a=>{a.exports=function(s){var l=[];return l.toString=function(){return this.map(function(d){var u="",f=d[5]!==void 0;return d[4]&&(u+="@supports (".concat(d[4],") {")),d[2]&&(u+="@media ".concat(d[2]," {")),f&&(u+="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {")),u+=s(d),f&&(u+="}"),d[2]&&(u+="}"),d[4]&&(u+="}"),u}).join("")},l.i=function(d,u,f,p,A){typeof d=="string"&&(d=[[null,d,void 0]]);var b={};if(f)for(var x=0;x<this.length;x++){var S=this[x][0];S!=null&&(b[S]=!0)}for(var k=0;k<d.length;k++){var L=[].concat(d[k]);f&&b[L[0]]||(A!==void 0&&(L[5]===void 0||(L[1]="@layer".concat(L[5].length>0?" ".concat(L[5]):""," {").concat(L[1],"}")),L[5]=A),u&&(L[2]&&(L[1]="@media ".concat(L[2]," {").concat(L[1],"}")),L[2]=u),p&&(L[4]?(L[1]="@supports (".concat(L[4],") {").concat(L[1],"}"),L[4]=p):L[4]="".concat(p)),l.push(L))}},l}},80:a=>{a.exports=function(s,l){return l||(l={}),s&&(s=String(s.__esModule?s.default:s),/^['"].*['"]$/.test(s)&&(s=s.slice(1,-1)),l.hash&&(s+=l.hash),/["'() \t\n]|(%20)/.test(s)||l.needQuotes?'"'.concat(s.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):s)}},415:a=>{a.exports=function(s){var l=s[1],d=s[3];if(!d)return l;if(typeof btoa=="function"){var u=btoa(unescape(encodeURIComponent(JSON.stringify(d)))),f="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),p="/*# ".concat(f," */");return[l].concat([p]).join(`
`)}return[l].join(`
`)}},937:a=>{function s(l){return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},s(l)}a.exports=(typeof self>"u"?"undefined":s(self))=="object"?self.FormData:window.FormData},831:a=>{a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},n={};function r(a){var s=n[a];if(s!==void 0)return s.exports;var l=n[a]={id:a,exports:{}};return t[a](l,l.exports,r),l.exports}r.m=t,r.n=a=>{var s=a&&a.__esModule?()=>a.default:()=>a;return r.d(s,{a:s}),s},r.d=(a,s)=>{for(var l in s)r.o(s,l)&&!r.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:s[l]})},r.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),r.o=(a,s)=>Object.prototype.hasOwnProperty.call(a,s),r.b=document.baseURI||self.location.href,r.nc=void 0;var i={};return(()=>{r.d(i,{default:()=>zl});var a=r(856),s=r.n(a),l=r(470),d=r.n(l),u=r(370),f=r.n(u),p=r(458),A=r.n(p),b=r(278),x=r.n(b),S=r(488),k=r.n(S),L=r(685),I={};I.styleTagTransform=k(),I.setAttributes=A(),I.insert=f().bind(null,"head"),I.domAPI=d(),I.insertStyleElement=x(),s()(L.Z,I),L.Z&&L.Z.locals&&L.Z.locals;function D(h){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},D(h)}function _(h,m){this.name="AggregateError",this.errors=h,this.message=m||""}_.prototype=Error.prototype;function K(h){return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},K(h)}var U=setTimeout;function H(h){return Boolean(h&&h.length!==void 0)}function z(){}function O(h){if(!(this instanceof O))throw new TypeError("Promises must be constructed via new");if(typeof h!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],me(h,this)}function J(h,m){for(;h._state===3;)h=h._value;h._state!==0?(h._handled=!0,O._immediateFn(function(){var v=h._state===1?m.onFulfilled:m.onRejected;if(v!==null){var c;try{c=v(h._value)}catch(y){return void ae(m.promise,y)}j(m.promise,c)}else(h._state===1?j:ae)(m.promise,h._value)})):h._deferreds.push(m)}function j(h,m){try{if(m===h)throw new TypeError("A promise cannot be resolved with itself.");if(m&&(K(m)==="object"||typeof m=="function")){var v=m.then;if(m instanceof O)return h._state=3,h._value=m,void Te(h);if(typeof v=="function")return void me((c=v,y=m,function(){c.apply(y,arguments)}),h)}h._state=1,h._value=m,Te(h)}catch(g){ae(h,g)}var c,y}function ae(h,m){h._state=2,h._value=m,Te(h)}function Te(h){h._state===2&&h._deferreds.length===0&&O._immediateFn(function(){h._handled||O._unhandledRejectionFn(h._value)});for(var m=0,v=h._deferreds.length;m<v;m++)J(h,h._deferreds[m]);h._deferreds=null}function fe(h,m,v){this.onFulfilled=typeof h=="function"?h:null,this.onRejected=typeof m=="function"?m:null,this.promise=v}function me(h,m){var v=!1;try{h(function(c){v||(v=!0,j(m,c))},function(c){v||(v=!0,ae(m,c))})}catch(c){if(v)return;v=!0,ae(m,c)}}O.prototype.catch=function(h){return this.then(null,h)},O.prototype.then=function(h,m){var v=new this.constructor(z);return J(this,new fe(h,m,v)),v},O.prototype.finally=function(h){var m=this.constructor;return this.then(function(v){return m.resolve(h()).then(function(){return v})},function(v){return m.resolve(h()).then(function(){return m.reject(v)})})},O.all=function(h){return new O(function(m,v){if(!H(h))return v(new TypeError("Promise.all accepts an array"));var c=Array.prototype.slice.call(h);if(c.length===0)return m([]);var y=c.length;function g(C,w){try{if(w&&(K(w)==="object"||typeof w=="function")){var B=w.then;if(typeof B=="function")return void B.call(w,function(F){g(C,F)},v)}c[C]=w,--y==0&&m(c)}catch(F){v(F)}}for(var E=0;E<c.length;E++)g(E,c[E])})},O.any=function(h){var m=this;return new m(function(v,c){if(!h||h.length===void 0)return c(new TypeError("Promise.any accepts an array"));var y=Array.prototype.slice.call(h);if(y.length===0)return c();for(var g=[],E=0;E<y.length;E++)try{m.resolve(y[E]).then(v).catch(function(C){g.push(C),g.length===y.length&&c(new _(g,"All promises were rejected"))})}catch(C){c(C)}})},O.allSettled=function(h){return new this(function(m,v){if(!h||h.length===void 0)return v(new TypeError(D(h)+" "+h+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var c=Array.prototype.slice.call(h);if(c.length===0)return m([]);var y=c.length;function g(C,w){if(w&&(D(w)==="object"||typeof w=="function")){var B=w.then;if(typeof B=="function")return void B.call(w,function(F){g(C,F)},function(F){c[C]={status:"rejected",reason:F},--y==0&&m(c)})}c[C]={status:"fulfilled",value:w},--y==0&&m(c)}for(var E=0;E<c.length;E++)g(E,c[E])})},O.resolve=function(h){return h&&K(h)==="object"&&h.constructor===O?h:new O(function(m){m(h)})},O.reject=function(h){return new O(function(m,v){v(h)})},O.race=function(h){return new O(function(m,v){if(!H(h))return v(new TypeError("Promise.race accepts an array"));for(var c=0,y=h.length;c<y;c++)O.resolve(h[c]).then(m,v)})},O._immediateFn=typeof setImmediate=="function"&&function(h){setImmediate(h)}||function(h){U(h,0)},O._unhandledRejectionFn=function(h){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",h)};const ye=O;var X=/mobile/i.test(window.navigator.userAgent);const G={secondToTime:function(h){if((h=h||0)===0||h===1/0||h.toString()==="NaN")return"00:00";var m=Math.floor(h/3600),v=Math.floor((h-3600*m)/60),c=Math.floor(h-3600*m-60*v);return(m>0?[m,v,c]:[v,c]).map(function(y){return y<10?"0"+y:""+y}).join(":")},getElementViewLeft:function(h){var m=h.offsetLeft,v=h.offsetParent,c=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;v!==null&&v!==h;)m+=v.offsetLeft,v=v.offsetParent;else for(;v!==null;)m+=v.offsetLeft,v=v.offsetParent;return m-c},getBoundingClientRectViewLeft:function(h){var m=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(h.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var v=document.createElement("div");v.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(v),this.getBoundingClientRectViewLeft.offset=-v.getBoundingClientRect().top-m,document.body.removeChild(v),v=null}var c=h.getBoundingClientRect(),y=this.getBoundingClientRectViewLeft.offset;return c.left+y}return this.getElementViewLeft(h)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(h){var m=h.left,v=m===void 0?0:m,c=h.top,y=c===void 0?0:c;this.isFirefox?(document.documentElement.scrollLeft=v,document.documentElement.scrollTop=y):window.scrollTo(v,y)},isMobile:X,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(h,m){localStorage.setItem(h,m)},get:function(h){return localStorage.getItem(h)}},nameMap:{dragStart:X?"touchstart":"mousedown",dragMove:X?"touchmove":"mousemove",dragEnd:X?"touchend":"mouseup"},color2Number:function(h){return h[0]==="#"&&(h=h.substr(1)),h.length===3&&(h="".concat(h[0]).concat(h[0]).concat(h[1]).concat(h[1]).concat(h[2]).concat(h[2])),parseInt(h,16)+0&16777215},number2Color:function(h){return"#"+("00000"+h.toString(16)).slice(-6)},number2Type:function(h){switch(h){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function ce(h,m){return function(){return h.apply(m,arguments)}}function de(h){return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},de(h)}var se,ve=Object.prototype.toString,Le=Object.getPrototypeOf,Ie=(se=Object.create(null),function(h){var m=ve.call(h);return se[m]||(se[m]=m.slice(8,-1).toLowerCase())}),xe=function(h){return h=h.toLowerCase(),function(m){return Ie(m)===h}},Me=function(h){return function(m){return de(m)===h}},Ye=Array.isArray,Dt=Me("undefined"),ei=xe("ArrayBuffer"),Os=Me("string"),dt=Me("function"),ti=Me("number"),$n=function(h){return h!==null&&de(h)==="object"},hn=function(h){if(Ie(h)!=="object")return!1;var m=Le(h);return!(m!==null&&m!==Object.prototype&&Object.getPrototypeOf(m)!==null||Symbol.toStringTag in h||Symbol.iterator in h)},Fs=xe("Date"),Ms=xe("File"),Ns=xe("Blob"),Us=xe("FileList"),$s=xe("URLSearchParams");function _t(h,m){var v,c,y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},g=y.allOwnKeys,E=g!==void 0&&g;if(h!=null)if(de(h)!=="object"&&(h=[h]),Ye(h))for(v=0,c=h.length;v<c;v++)m.call(null,h[v],v,h);else{var C,w=E?Object.getOwnPropertyNames(h):Object.keys(h),B=w.length;for(v=0;v<B;v++)C=w[v],m.call(null,h[C],C,h)}}function ni(h,m){m=m.toLowerCase();for(var v,c=Object.keys(h),y=c.length;y-- >0;)if(m===(v=c[y]).toLowerCase())return v;return null}var Gn,ri,ii=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Wl,ai=function(h){return!Dt(h)&&h!==ii},Gs=(Gn=typeof Uint8Array<"u"&&Le(Uint8Array),function(h){return Gn&&h instanceof Gn}),Ks=xe("HTMLFormElement"),si=(ri=Object.prototype.hasOwnProperty,function(h,m){return ri.call(h,m)}),Hs=xe("RegExp"),oi=function(h,m){var v=Object.getOwnPropertyDescriptors(h),c={};_t(v,function(y,g){m(y,g,h)!==!1&&(c[g]=y)}),Object.defineProperties(h,c)};const N={isArray:Ye,isArrayBuffer:ei,isBuffer:function(h){return h!==null&&!Dt(h)&&h.constructor!==null&&!Dt(h.constructor)&&dt(h.constructor.isBuffer)&&h.constructor.isBuffer(h)},isFormData:function(h){var m="[object FormData]";return h&&(typeof FormData=="function"&&h instanceof FormData||ve.call(h)===m||dt(h.toString)&&h.toString()===m)},isArrayBufferView:function(h){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(h):h&&h.buffer&&ei(h.buffer)},isString:Os,isNumber:ti,isBoolean:function(h){return h===!0||h===!1},isObject:$n,isPlainObject:hn,isUndefined:Dt,isDate:Fs,isFile:Ms,isBlob:Ns,isRegExp:Hs,isFunction:dt,isStream:function(h){return $n(h)&&dt(h.pipe)},isURLSearchParams:$s,isTypedArray:Gs,isFileList:Us,forEach:_t,merge:function h(){for(var m=ai(this)&&this||{},v=m.caseless,c={},y=function(C,w){var B=v&&ni(c,w)||w;hn(c[B])&&hn(C)?c[B]=h(c[B],C):hn(C)?c[B]=h({},C):Ye(C)?c[B]=C.slice():c[B]=C},g=0,E=arguments.length;g<E;g++)arguments[g]&&_t(arguments[g],y);return c},extend:function(h,m,v){var c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},y=c.allOwnKeys;return _t(m,function(g,E){v&&dt(g)?h[E]=ce(g,v):h[E]=g},{allOwnKeys:y}),h},trim:function(h){return h.trim?h.trim():h.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(h){return h.charCodeAt(0)===65279&&(h=h.slice(1)),h},inherits:function(h,m,v,c){h.prototype=Object.create(m.prototype,c),h.prototype.constructor=h,Object.defineProperty(h,"super",{value:m.prototype}),v&&Object.assign(h.prototype,v)},toFlatObject:function(h,m,v,c){var y,g,E,C={};if(m=m||{},h==null)return m;do{for(g=(y=Object.getOwnPropertyNames(h)).length;g-- >0;)E=y[g],c&&!c(E,h,m)||C[E]||(m[E]=h[E],C[E]=!0);h=v!==!1&&Le(h)}while(h&&(!v||v(h,m))&&h!==Object.prototype);return m},kindOf:Ie,kindOfTest:xe,endsWith:function(h,m,v){h=String(h),(v===void 0||v>h.length)&&(v=h.length),v-=m.length;var c=h.indexOf(m,v);return c!==-1&&c===v},toArray:function(h){if(!h)return null;if(Ye(h))return h;var m=h.length;if(!ti(m))return null;for(var v=new Array(m);m-- >0;)v[m]=h[m];return v},forEachEntry:function(h,m){for(var v,c=(h&&h[Symbol.iterator]).call(h);(v=c.next())&&!v.done;){var y=v.value;m.call(h,y[0],y[1])}},matchAll:function(h,m){for(var v,c=[];(v=h.exec(m))!==null;)c.push(v);return c},isHTMLForm:Ks,hasOwnProperty:si,hasOwnProp:si,reduceDescriptors:oi,freezeMethods:function(h){oi(h,function(m,v){if(dt(h)&&["arguments","caller","callee"].indexOf(v)!==-1)return!1;var c=h[v];dt(c)&&(m.enumerable=!1,"writable"in m?m.writable=!1:m.set||(m.set=function(){throw Error("Can not rewrite read-only method '"+v+"'")}))})},toObjectSet:function(h,m){var v={},c=function(y){y.forEach(function(g){v[g]=!0})};return Ye(h)?c(h):c(String(h).split(m)),v},toCamelCase:function(h){return h.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(m,v,c){return v.toUpperCase()+c})},noop:function(){},toFiniteNumber:function(h,m){return h=+h,Number.isFinite(h)?h:m},findKey:ni,global:ii,isContextDefined:ai,toJSONObject:function(h){var m=new Array(10);return function v(c,y){if($n(c)){if(m.indexOf(c)>=0)return;if(!("toJSON"in c)){m[y]=c;var g=Ye(c)?[]:{};return _t(c,function(E,C){var w=v(E,y+1);!Dt(w)&&(g[C]=w)}),m[y]=void 0,g}}return c}(h,0)}};function At(h,m,v,c,y){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=h,this.name="AxiosError",m&&(this.code=m),v&&(this.config=v),c&&(this.request=c),y&&(this.response=y)}N.inherits(At,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var li=At.prototype,di={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(h){di[h]={value:h}}),Object.defineProperties(At,di),Object.defineProperty(li,"isAxiosError",{value:!0}),At.from=function(h,m,v,c,y,g){var E=Object.create(li);return N.toFlatObject(h,E,function(C){return C!==Error.prototype},function(C){return C!=="isAxiosError"}),At.call(E,h.message,m,v,c,y),E.cause=h,E.name=h.name,g&&Object.assign(E,g),E};const ue=At,qs=r(937);function Kn(h){return Kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Kn(h)}function Hn(h){return N.isPlainObject(h)||N.isArray(h)}function ci(h){return N.endsWith(h,"[]")?h.slice(0,-2):h}function ui(h,m,v){return h?h.concat(m).map(function(c,y){return c=ci(c),!v&&y?"["+c+"]":c}).join(v?".":""):m}var Ys=N.toFlatObject(N,{},null,function(h){return/^is[A-Z]/.test(h)});const pn=function(h,m,v){if(!N.isObject(h))throw new TypeError("target must be an object");m=m||new(qs||FormData);var c,y=(v=N.toFlatObject(v,{metaTokens:!0,dots:!1,indexes:!1},!1,function(Q,V){return!N.isUndefined(V[Q])})).metaTokens,g=v.visitor||F,E=v.dots,C=v.indexes,w=(v.Blob||typeof Blob<"u"&&Blob)&&(c=m)&&N.isFunction(c.append)&&c[Symbol.toStringTag]==="FormData"&&c[Symbol.iterator];if(!N.isFunction(g))throw new TypeError("visitor must be a function");function B(Q){if(Q===null)return"";if(N.isDate(Q))return Q.toISOString();if(!w&&N.isBlob(Q))throw new ue("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(Q)||N.isTypedArray(Q)?w&&typeof Blob=="function"?new Blob([Q]):Buffer.from(Q):Q}function F(Q,V,Y){var Z=Q;if(Q&&!Y&&Kn(Q)==="object"){if(N.endsWith(V,"{}"))V=y?V:V.slice(0,-2),Q=JSON.stringify(Q);else if(N.isArray(Q)&&function(re){return N.isArray(re)&&!re.some(Hn)}(Q)||N.isFileList(Q)||N.endsWith(V,"[]")&&(Z=N.toArray(Q)))return V=ci(V),Z.forEach(function(re,Ce){!N.isUndefined(re)&&re!==null&&m.append(C===!0?ui([V],Ce,E):C===null?V:V+"[]",B(re))}),!1}return!!Hn(Q)||(m.append(ui(Y,V,E),B(Q)),!1)}var q=[],W=Object.assign(Ys,{defaultVisitor:F,convertValue:B,isVisitable:Hn});if(!N.isObject(h))throw new TypeError("data must be an object");return function Q(V,Y){if(!N.isUndefined(V)){if(q.indexOf(V)!==-1)throw Error("Circular reference detected in "+Y.join("."));q.push(V),N.forEach(V,function(Z,re){(!(N.isUndefined(Z)||Z===null)&&g.call(m,Z,N.isString(re)?re.trim():re,Y,W))===!0&&Q(Z,Y?Y.concat(re):[re])}),q.pop()}}(h),m};function hi(h){var m={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(h).replace(/[!'()~]|%20|%00/g,function(v){return m[v]})}function pi(h,m){this._pairs=[],h&&pn(h,this,m)}var fi=pi.prototype;fi.append=function(h,m){this._pairs.push([h,m])},fi.toString=function(h){var m=h?function(v){return h.call(this,v,hi)}:hi;return this._pairs.map(function(v){return m(v[0])+"="+m(v[1])},"").join("&")};const mi=pi;function zs(h){return encodeURIComponent(h).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function yi(h,m,v){if(!m)return h;var c,y=v&&v.encode||zs,g=v&&v.serialize;if(c=g?g(m,v):N.isURLSearchParams(m)?m.toString():new mi(m,v).toString(y)){var E=h.indexOf("#");E!==-1&&(h=h.slice(0,E)),h+=(h.indexOf("?")===-1?"?":"&")+c}return h}function Bt(h){return Bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Bt(h)}function Ws(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(Bt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(Bt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),Bt(y)==="symbol"?y:String(y)),c)}var y}var Vs=function(){function h(){(function(c,y){if(!(c instanceof y))throw new TypeError("Cannot call a class as a function")})(this,h),this.handlers=[]}var m,v;return m=h,v=[{key:"use",value:function(c,y,g){return this.handlers.push({fulfilled:c,rejected:y,synchronous:!!g&&g.synchronous,runWhen:g?g.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(c){this.handlers[c]&&(this.handlers[c]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(c){N.forEach(this.handlers,function(y){y!==null&&c(y)})}}],v&&Ws(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();const gi=Vs,Ai={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},js=typeof URLSearchParams<"u"?URLSearchParams:mi,Qs=FormData;var qn,Xs=(typeof navigator>"u"||(qn=navigator.product)!=="ReactNative"&&qn!=="NativeScript"&&qn!=="NS")&&typeof window<"u"&&typeof document<"u",Zs=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const ze={isBrowser:!0,classes:{URLSearchParams:js,FormData:Qs,Blob},isStandardBrowserEnv:Xs,isStandardBrowserWebWorkerEnv:Zs,protocols:["http","https","file","blob","url","data"]},bi=function(h){function m(c,y,g,E){var C=c[E++],w=Number.isFinite(+C),B=E>=c.length;return C=!C&&N.isArray(g)?g.length:C,B?(N.hasOwnProp(g,C)?g[C]=[g[C],y]:g[C]=y,!w):(g[C]&&N.isObject(g[C])||(g[C]=[]),m(c,y,g[C],E)&&N.isArray(g[C])&&(g[C]=function(F){var q,W,Q={},V=Object.keys(F),Y=V.length;for(q=0;q<Y;q++)Q[W=V[q]]=F[W];return Q}(g[C])),!w)}if(N.isFormData(h)&&N.isFunction(h.entries)){var v={};return N.forEachEntry(h,function(c,y){m(function(g){return N.matchAll(/\w+|\[(\w*)]/g,g).map(function(E){return E[0]==="[]"?"":E[1]||E[0]})}(c),y,v,0)}),v}return null};var Js={"Content-Type":void 0},fn={transitional:Ai,adapter:["xhr","http"],transformRequest:[function(h,m){var v,c=m.getContentType()||"",y=c.indexOf("application/json")>-1,g=N.isObject(h);if(g&&N.isHTMLForm(h)&&(h=new FormData(h)),N.isFormData(h))return y&&y?JSON.stringify(bi(h)):h;if(N.isArrayBuffer(h)||N.isBuffer(h)||N.isStream(h)||N.isFile(h)||N.isBlob(h))return h;if(N.isArrayBufferView(h))return h.buffer;if(N.isURLSearchParams(h))return m.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),h.toString();if(g){if(c.indexOf("application/x-www-form-urlencoded")>-1)return function(C,w){return pn(C,new ze.classes.URLSearchParams,Object.assign({visitor:function(B,F,q,W){return ze.isNode&&N.isBuffer(B)?(this.append(F,B.toString("base64")),!1):W.defaultVisitor.apply(this,arguments)}},w))}(h,this.formSerializer).toString();if((v=N.isFileList(h))||c.indexOf("multipart/form-data")>-1){var E=this.env&&this.env.FormData;return pn(v?{"files[]":h}:h,E&&new E,this.formSerializer)}}return g||y?(m.setContentType("application/json",!1),function(C,w,B){if(N.isString(C))try{return(0,JSON.parse)(C),N.trim(C)}catch(F){if(F.name!=="SyntaxError")throw F}return(0,JSON.stringify)(C)}(h)):h}],transformResponse:[function(h){var m=this.transitional||fn.transitional,v=m&&m.forcedJSONParsing,c=this.responseType==="json";if(h&&N.isString(h)&&(v&&!this.responseType||c)){var y=!(m&&m.silentJSONParsing)&&c;try{return JSON.parse(h)}catch(g){if(y)throw g.name==="SyntaxError"?ue.from(g,ue.ERR_BAD_RESPONSE,this,null,this.response):g}}return h}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ze.classes.FormData,Blob:ze.classes.Blob},validateStatus:function(h){return h>=200&&h<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};N.forEach(["delete","get","head"],function(h){fn.headers[h]={}}),N.forEach(["post","put","patch"],function(h){fn.headers[h]=N.merge(Js)});const Yn=fn;var eo=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function Pt(h){return Pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Pt(h)}function vi(h,m){(m==null||m>h.length)&&(m=h.length);for(var v=0,c=new Array(m);v<m;v++)c[v]=h[v];return c}function xi(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(Pt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(Pt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),Pt(y)==="symbol"?y:String(y)),c)}var y}var Ei=Symbol("internals");function Ot(h){return h&&String(h).trim().toLowerCase()}function mn(h){return h===!1||h==null?h:N.isArray(h)?h.map(mn):String(h)}function Ti(h,m,v,c){return N.isFunction(c)?c.call(this,m,v):N.isString(m)?N.isString(c)?m.indexOf(c)!==-1:N.isRegExp(c)?c.test(m):void 0:void 0}var yn=function(h,m){function v(E){(function(C,w){if(!(C instanceof w))throw new TypeError("Cannot call a class as a function")})(this,v),E&&this.set(E)}var c,y,g;return c=v,y=[{key:"set",value:function(E,C,w){var B=this;function F(re,Ce,Ee){var he=Ot(Ce);if(!he)throw new Error("header name must be a non-empty string");var rt=N.findKey(B,he);(!rt||B[rt]===void 0||Ee===!0||Ee===void 0&&B[rt]!==!1)&&(B[rt||Ce]=mn(re))}var q,W,Q,V,Y,Z=function(re,Ce){return N.forEach(re,function(Ee,he){return F(Ee,he,Ce)})};return N.isPlainObject(E)||E instanceof this.constructor?Z(E,C):N.isString(E)&&(E=E.trim())&&!/^[-_a-zA-Z]+$/.test(E.trim())?Z((Y={},(q=E)&&q.split(`
`).forEach(function(re){V=re.indexOf(":"),W=re.substring(0,V).trim().toLowerCase(),Q=re.substring(V+1).trim(),!W||Y[W]&&eo[W]||(W==="set-cookie"?Y[W]?Y[W].push(Q):Y[W]=[Q]:Y[W]=Y[W]?Y[W]+", "+Q:Q)}),Y),C):E!=null&&F(C,E,w),this}},{key:"get",value:function(E,C){if(E=Ot(E)){var w=N.findKey(this,E);if(w){var B=this[w];if(!C)return B;if(C===!0)return function(F){for(var q,W=Object.create(null),Q=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;q=Q.exec(F);)W[q[1]]=q[2];return W}(B);if(N.isFunction(C))return C.call(this,B,w);if(N.isRegExp(C))return C.exec(B);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(E,C){if(E=Ot(E)){var w=N.findKey(this,E);return!(!w||C&&!Ti(0,this[w],w,C))}return!1}},{key:"delete",value:function(E,C){var w=this,B=!1;function F(q){if(q=Ot(q)){var W=N.findKey(w,q);!W||C&&!Ti(0,w[W],W,C)||(delete w[W],B=!0)}}return N.isArray(E)?E.forEach(F):F(E),B}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(E){var C=this,w={};return N.forEach(this,function(B,F){var q=N.findKey(w,F);if(q)return C[q]=mn(B),void delete C[F];var W=E?function(Q){return Q.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(V,Y,Z){return Y.toUpperCase()+Z})}(F):String(F).trim();W!==F&&delete C[F],C[W]=mn(B),w[W]=!0}),this}},{key:"concat",value:function(){for(var E,C=arguments.length,w=new Array(C),B=0;B<C;B++)w[B]=arguments[B];return(E=this.constructor).concat.apply(E,[this].concat(w))}},{key:"toJSON",value:function(E){var C=Object.create(null);return N.forEach(this,function(w,B){w!=null&&w!==!1&&(C[B]=E&&N.isArray(w)?w.join(", "):w)}),C}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(E){var C,w,B=(w=2,function(F){if(Array.isArray(F))return F}(C=E)||function(F,q){var W=F==null?null:typeof Symbol<"u"&&F[Symbol.iterator]||F["@@iterator"];if(W!=null){var Q,V,Y,Z,re=[],Ce=!0,Ee=!1;try{if(Y=(W=W.call(F)).next,q===0){if(Object(W)!==W)return;Ce=!1}else for(;!(Ce=(Q=Y.call(W)).done)&&(re.push(Q.value),re.length!==q);Ce=!0);}catch(he){Ee=!0,V=he}finally{try{if(!Ce&&W.return!=null&&(Z=W.return(),Object(Z)!==Z))return}finally{if(Ee)throw V}}return re}}(C,w)||function(F,q){if(F){if(typeof F=="string")return vi(F,q);var W=Object.prototype.toString.call(F).slice(8,-1);return W==="Object"&&F.constructor&&(W=F.constructor.name),W==="Map"||W==="Set"?Array.from(F):W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W)?vi(F,q):void 0}}(C,w)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return B[0]+": "+B[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],g=[{key:"from",value:function(E){return E instanceof this?E:new this(E)}},{key:"concat",value:function(E){for(var C=new this(E),w=arguments.length,B=new Array(w>1?w-1:0),F=1;F<w;F++)B[F-1]=arguments[F];return B.forEach(function(q){return C.set(q)}),C}},{key:"accessor",value:function(E){var C=(this[Ei]=this[Ei]={accessors:{}}).accessors,w=this.prototype;function B(F){var q=Ot(F);C[q]||(function(W,Q){var V=N.toCamelCase(" "+Q);["get","set","has"].forEach(function(Y){Object.defineProperty(W,Y+V,{value:function(Z,re,Ce){return this[Y].call(this,Q,Z,re,Ce)},configurable:!0})})}(w,F),C[q]=!0)}return N.isArray(E)?E.forEach(B):B(E),this}}],y&&xi(c.prototype,y),g&&xi(c,g),Object.defineProperty(c,"prototype",{writable:!1}),v}();yn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),N.freezeMethods(yn.prototype),N.freezeMethods(yn);const Qe=yn;function zn(h,m){var v=this||Yn,c=m||v,y=Qe.from(c.headers),g=c.data;return N.forEach(h,function(E){g=E.call(v,g,y.normalize(),m?m.status:void 0)}),y.normalize(),g}function Si(h){return!(!h||!h.__CANCEL__)}function Ci(h,m,v){ue.call(this,h==null?"canceled":h,ue.ERR_CANCELED,m,v),this.name="CanceledError"}N.inherits(Ci,ue,{__CANCEL__:!0});const gn=Ci,to=ze.isStandardBrowserEnv?{write:function(h,m,v,c,y,g){var E=[];E.push(h+"="+encodeURIComponent(m)),N.isNumber(v)&&E.push("expires="+new Date(v).toGMTString()),N.isString(c)&&E.push("path="+c),N.isString(y)&&E.push("domain="+y),g===!0&&E.push("secure"),document.cookie=E.join("; ")},read:function(h){var m=document.cookie.match(new RegExp("(^|;\\s*)("+h+")=([^;]*)"));return m?decodeURIComponent(m[3]):null},remove:function(h){this.write(h,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function wi(h,m){return h&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(m)?function(v,c){return c?v.replace(/\/+$/,"")+"/"+c.replace(/^\/+/,""):v}(h,m):m}const no=ze.isStandardBrowserEnv?function(){var h,m=/(msie|trident)/i.test(navigator.userAgent),v=document.createElement("a");function c(y){var g=y;return m&&(v.setAttribute("href",g),g=v.href),v.setAttribute("href",g),{href:v.href,protocol:v.protocol?v.protocol.replace(/:$/,""):"",host:v.host,search:v.search?v.search.replace(/^\?/,""):"",hash:v.hash?v.hash.replace(/^#/,""):"",hostname:v.hostname,port:v.port,pathname:v.pathname.charAt(0)==="/"?v.pathname:"/"+v.pathname}}return h=c(window.location.href),function(y){var g=N.isString(y)?c(y):y;return g.protocol===h.protocol&&g.host===h.host}}():function(){return!0};function ki(h,m){var v=0,c=function(y,g){y=y||10;var E,C=new Array(y),w=new Array(y),B=0,F=0;return g=g!==void 0?g:1e3,function(q){var W=Date.now(),Q=w[F];E||(E=W),C[B]=q,w[B]=W;for(var V=F,Y=0;V!==B;)Y+=C[V++],V%=y;if((B=(B+1)%y)===F&&(F=(F+1)%y),!(W-E<g)){var Z=Q&&W-Q;return Z?Math.round(1e3*Y/Z):void 0}}}(50,250);return function(y){var g=y.loaded,E=y.lengthComputable?y.total:void 0,C=g-v,w=c(C);v=g;var B={loaded:g,total:E,progress:E?g/E:void 0,bytes:C,rate:w||void 0,estimated:w&&E&&g<=E?(E-g)/w:void 0,event:y};B[m?"download":"upload"]=!0,h(B)}}var Wn={http:null,xhr:typeof XMLHttpRequest<"u"&&function(h){return new Promise(function(m,v){var c,y=h.data,g=Qe.from(h.headers).normalize(),E=h.responseType;function C(){h.cancelToken&&h.cancelToken.unsubscribe(c),h.signal&&h.signal.removeEventListener("abort",c)}N.isFormData(y)&&(ze.isStandardBrowserEnv||ze.isStandardBrowserWebWorkerEnv)&&g.setContentType(!1);var w=new XMLHttpRequest;if(h.auth){var B=h.auth.username||"",F=h.auth.password?unescape(encodeURIComponent(h.auth.password)):"";g.set("Authorization","Basic "+btoa(B+":"+F))}var q=wi(h.baseURL,h.url);function W(){if(w){var Z=Qe.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders());(function(re,Ce,Ee){var he=Ee.config.validateStatus;Ee.status&&he&&!he(Ee.status)?Ce(new ue("Request failed with status code "+Ee.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(Ee.status/100)-4],Ee.config,Ee.request,Ee)):re(Ee)})(function(re){m(re),C()},function(re){v(re),C()},{data:E&&E!=="text"&&E!=="json"?w.response:w.responseText,status:w.status,statusText:w.statusText,headers:Z,config:h,request:w}),w=null}}if(w.open(h.method.toUpperCase(),yi(q,h.params,h.paramsSerializer),!0),w.timeout=h.timeout,"onloadend"in w?w.onloadend=W:w.onreadystatechange=function(){w&&w.readyState===4&&(w.status!==0||w.responseURL&&w.responseURL.indexOf("file:")===0)&&setTimeout(W)},w.onabort=function(){w&&(v(new ue("Request aborted",ue.ECONNABORTED,h,w)),w=null)},w.onerror=function(){v(new ue("Network Error",ue.ERR_NETWORK,h,w)),w=null},w.ontimeout=function(){var Z=h.timeout?"timeout of "+h.timeout+"ms exceeded":"timeout exceeded",re=h.transitional||Ai;h.timeoutErrorMessage&&(Z=h.timeoutErrorMessage),v(new ue(Z,re.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,h,w)),w=null},ze.isStandardBrowserEnv){var Q=(h.withCredentials||no(q))&&h.xsrfCookieName&&to.read(h.xsrfCookieName);Q&&g.set(h.xsrfHeaderName,Q)}y===void 0&&g.setContentType(null),"setRequestHeader"in w&&N.forEach(g.toJSON(),function(Z,re){w.setRequestHeader(re,Z)}),N.isUndefined(h.withCredentials)||(w.withCredentials=!!h.withCredentials),E&&E!=="json"&&(w.responseType=h.responseType),typeof h.onDownloadProgress=="function"&&w.addEventListener("progress",ki(h.onDownloadProgress,!0)),typeof h.onUploadProgress=="function"&&w.upload&&w.upload.addEventListener("progress",ki(h.onUploadProgress)),(h.cancelToken||h.signal)&&(c=function(Z){w&&(v(!Z||Z.type?new gn(null,h,w):Z),w.abort(),w=null)},h.cancelToken&&h.cancelToken.subscribe(c),h.signal&&(h.signal.aborted?c():h.signal.addEventListener("abort",c)));var V,Y=(V=/^([-+\w]{1,25})(:?\/\/|:)/.exec(q))&&V[1]||"";Y&&ze.protocols.indexOf(Y)===-1?v(new ue("Unsupported protocol "+Y+":",ue.ERR_BAD_REQUEST,h)):w.send(y||null)})}};N.forEach(Wn,function(h,m){if(h){try{Object.defineProperty(h,"name",{value:m})}catch{}Object.defineProperty(h,"adapterName",{value:m})}});function Vn(h){if(h.cancelToken&&h.cancelToken.throwIfRequested(),h.signal&&h.signal.aborted)throw new gn(null,h)}function Li(h){return Vn(h),h.headers=Qe.from(h.headers),h.data=zn.call(h,h.transformRequest),["post","put","patch"].indexOf(h.method)!==-1&&h.headers.setContentType("application/x-www-form-urlencoded",!1),function(m){for(var v,c,y=(m=N.isArray(m)?m:[m]).length,g=0;g<y&&(v=m[g],!(c=N.isString(v)?Wn[v.toLowerCase()]:v));g++);if(!c)throw c===!1?new ue("Adapter ".concat(v," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(N.hasOwnProp(Wn,v)?"Adapter '".concat(v,"' is not available in the build"):"Unknown adapter '".concat(v,"'"));if(!N.isFunction(c))throw new TypeError("adapter is not a function");return c}(h.adapter||Yn.adapter)(h).then(function(m){return Vn(h),m.data=zn.call(h,h.transformResponse,m),m.headers=Qe.from(m.headers),m},function(m){return Si(m)||(Vn(h),m&&m.response&&(m.response.data=zn.call(h,h.transformResponse,m.response),m.response.headers=Qe.from(m.response.headers))),Promise.reject(m)})}var Ii=function(h){return h instanceof Qe?h.toJSON():h};function bt(h,m){m=m||{};var v={};function c(B,F,q){return N.isPlainObject(B)&&N.isPlainObject(F)?N.merge.call({caseless:q},B,F):N.isPlainObject(F)?N.merge({},F):N.isArray(F)?F.slice():F}function y(B,F,q){return N.isUndefined(F)?N.isUndefined(B)?void 0:c(void 0,B,q):c(B,F,q)}function g(B,F){if(!N.isUndefined(F))return c(void 0,F)}function E(B,F){return N.isUndefined(F)?N.isUndefined(B)?void 0:c(void 0,B):c(void 0,F)}function C(B,F,q){return q in m?c(B,F):q in h?c(void 0,B):void 0}var w={url:g,method:g,data:g,baseURL:E,transformRequest:E,transformResponse:E,paramsSerializer:E,timeout:E,timeoutMessage:E,withCredentials:E,adapter:E,responseType:E,xsrfCookieName:E,xsrfHeaderName:E,onUploadProgress:E,onDownloadProgress:E,decompress:E,maxContentLength:E,maxBodyLength:E,beforeRedirect:E,transport:E,httpAgent:E,httpsAgent:E,cancelToken:E,socketPath:E,responseEncoding:E,validateStatus:C,headers:function(B,F){return y(Ii(B),Ii(F),!0)}};return N.forEach(Object.keys(h).concat(Object.keys(m)),function(B){var F=w[B]||y,q=F(h[B],m[B],B);N.isUndefined(q)&&F!==C||(v[B]=q)}),v}function An(h){return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},An(h)}var jn={};["object","boolean","number","function","string","symbol"].forEach(function(h,m){jn[h]=function(v){return An(v)===h||"a"+(m<1?"n ":" ")+h}});var Ri={};jn.transitional=function(h,m,v){function c(y,g){return"[Axios v1.2.3] Transitional option '"+y+"'"+g+(v?". "+v:"")}return function(y,g,E){if(h===!1)throw new ue(c(g," has been removed"+(m?" in "+m:"")),ue.ERR_DEPRECATED);return m&&!Ri[g]&&(Ri[g]=!0,console.warn(c(g," has been deprecated since v"+m+" and will be removed in the near future"))),!h||h(y,g,E)}};const Qn={assertOptions:function(h,m,v){if(An(h)!=="object")throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);for(var c=Object.keys(h),y=c.length;y-- >0;){var g=c[y],E=m[g];if(E){var C=h[g],w=C===void 0||E(C,g,h);if(w!==!0)throw new ue("option "+g+" must be "+w,ue.ERR_BAD_OPTION_VALUE)}else if(v!==!0)throw new ue("Unknown option "+g,ue.ERR_BAD_OPTION)}},validators:jn};function Ft(h){return Ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Ft(h)}function ro(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(Ft(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(Ft(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),Ft(y)==="symbol"?y:String(y)),c)}var y}var tt=Qn.validators,bn=function(){function h(c){(function(y,g){if(!(y instanceof g))throw new TypeError("Cannot call a class as a function")})(this,h),this.defaults=c,this.interceptors={request:new gi,response:new gi}}var m,v;return m=h,(v=[{key:"request",value:function(c,y){typeof c=="string"?(y=y||{}).url=c:y=c||{};var g,E=y=bt(this.defaults,y),C=E.transitional,w=E.paramsSerializer,B=E.headers;C!==void 0&&Qn.assertOptions(C,{silentJSONParsing:tt.transitional(tt.boolean),forcedJSONParsing:tt.transitional(tt.boolean),clarifyTimeoutError:tt.transitional(tt.boolean)},!1),w!==void 0&&Qn.assertOptions(w,{encode:tt.function,serialize:tt.function},!0),y.method=(y.method||this.defaults.method||"get").toLowerCase(),(g=B&&N.merge(B.common,B[y.method]))&&N.forEach(["delete","get","head","post","put","patch","common"],function(he){delete B[he]}),y.headers=Qe.concat(g,B);var F=[],q=!0;this.interceptors.request.forEach(function(he){typeof he.runWhen=="function"&&he.runWhen(y)===!1||(q=q&&he.synchronous,F.unshift(he.fulfilled,he.rejected))});var W,Q=[];this.interceptors.response.forEach(function(he){Q.push(he.fulfilled,he.rejected)});var V,Y=0;if(!q){var Z=[Li.bind(this),void 0];for(Z.unshift.apply(Z,F),Z.push.apply(Z,Q),V=Z.length,W=Promise.resolve(y);Y<V;)W=W.then(Z[Y++],Z[Y++]);return W}V=F.length;var re=y;for(Y=0;Y<V;){var Ce=F[Y++],Ee=F[Y++];try{re=Ce(re)}catch(he){Ee.call(this,he);break}}try{W=Li.call(this,re)}catch(he){return Promise.reject(he)}for(Y=0,V=Q.length;Y<V;)W=W.then(Q[Y++],Q[Y++]);return W}},{key:"getUri",value:function(c){return yi(wi((c=bt(this.defaults,c)).baseURL,c.url),c.params,c.paramsSerializer)}}])&&ro(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();N.forEach(["delete","get","head","options"],function(h){bn.prototype[h]=function(m,v){return this.request(bt(v||{},{method:h,url:m,data:(v||{}).data}))}}),N.forEach(["post","put","patch"],function(h){function m(v){return function(c,y,g){return this.request(bt(g||{},{method:h,headers:v?{"Content-Type":"multipart/form-data"}:{},url:c,data:y}))}}bn.prototype[h]=m(),bn.prototype[h+"Form"]=m(!0)});const vn=bn;function Mt(h){return Mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Mt(h)}function Di(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(Mt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(Mt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),Mt(y)==="symbol"?y:String(y)),c)}var y}var io=function(){function h(y){if(function(C,w){if(!(C instanceof w))throw new TypeError("Cannot call a class as a function")}(this,h),typeof y!="function")throw new TypeError("executor must be a function.");var g;this.promise=new Promise(function(C){g=C});var E=this;this.promise.then(function(C){if(E._listeners){for(var w=E._listeners.length;w-- >0;)E._listeners[w](C);E._listeners=null}}),this.promise.then=function(C){var w,B=new Promise(function(F){E.subscribe(F),w=F}).then(C);return B.cancel=function(){E.unsubscribe(w)},B},y(function(C,w,B){E.reason||(E.reason=new gn(C,w,B),g(E.reason))})}var m,v,c;return m=h,v=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(y){this.reason?y(this.reason):this._listeners?this._listeners.push(y):this._listeners=[y]}},{key:"unsubscribe",value:function(y){if(this._listeners){var g=this._listeners.indexOf(y);g!==-1&&this._listeners.splice(g,1)}}}],c=[{key:"source",value:function(){var y;return{token:new h(function(g){y=g}),cancel:y}}}],v&&Di(m.prototype,v),c&&Di(m,c),Object.defineProperty(m,"prototype",{writable:!1}),h}();const ao=io;function _i(h,m){(m==null||m>h.length)&&(m=h.length);for(var v=0,c=new Array(m);v<m;v++)c[v]=h[v];return c}var Xn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Xn).forEach(function(h){var m,v,c=(v=2,function(E){if(Array.isArray(E))return E}(m=h)||function(E,C){var w=E==null?null:typeof Symbol<"u"&&E[Symbol.iterator]||E["@@iterator"];if(w!=null){var B,F,q,W,Q=[],V=!0,Y=!1;try{if(q=(w=w.call(E)).next,C===0){if(Object(w)!==w)return;V=!1}else for(;!(V=(B=q.call(w)).done)&&(Q.push(B.value),Q.length!==C);V=!0);}catch(Z){Y=!0,F=Z}finally{try{if(!V&&w.return!=null&&(W=w.return(),Object(W)!==W))return}finally{if(Y)throw F}}return Q}}(m,v)||function(E,C){if(E){if(typeof E=="string")return _i(E,C);var w=Object.prototype.toString.call(E).slice(8,-1);return w==="Object"&&E.constructor&&(w=E.constructor.name),w==="Map"||w==="Set"?Array.from(E):w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w)?_i(E,C):void 0}}(m,v)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),y=c[0],g=c[1];Xn[g]=y});const so=Xn;var Se=function h(m){var v=new vn(m),c=ce(vn.prototype.request,v);return N.extend(c,vn.prototype,v,{allOwnKeys:!0}),N.extend(c,v,null,{allOwnKeys:!0}),c.create=function(y){return h(bt(m,y))},c}(Yn);Se.Axios=vn,Se.CanceledError=gn,Se.CancelToken=ao,Se.isCancel=Si,Se.VERSION="1.2.3",Se.toFormData=pn,Se.AxiosError=ue,Se.Cancel=Se.CanceledError,Se.all=function(h){return Promise.all(h)},Se.spread=function(h){return function(m){return h.apply(null,m)}},Se.isAxiosError=function(h){return N.isObject(h)&&h.isAxiosError===!0},Se.mergeConfig=bt,Se.AxiosHeaders=Qe,Se.formToJSON=function(h){return bi(N.isHTMLForm(h)?new FormData(h):h)},Se.HttpStatusCode=so,Se.default=Se;const Bi=Se,oo={send:function(h){Bi.post(h.url,h.data).then(function(m){var v=m.data;v&&v.code===0?h.success&&h.success(v):h.error&&h.error(v&&v.msg)}).catch(function(m){console.error(m),h.error&&h.error()})},read:function(h){Bi.get(h.url).then(function(m){var v=m.data;v&&v.code===0?h.success&&h.success(v.data.map(function(c){return{time:c[0],type:c[1],color:c[2],author:c[3],text:c[4]}})):h.error&&h.error(v&&v.msg)}).catch(function(m){console.error(m),h.error&&h.error()})}};function Zn(h){return Zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Zn(h)}function lo(h){var m=this;this.lang=h,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(v){return v=v.toLowerCase(),vt[m.lang]&&vt[m.lang][v]?vt[m.lang][v]:vt[m.fallbackLang]&&vt[m.fallbackLang][v]?vt[m.fallbackLang][v]:Jn[v]?Jn[v]:v}}var Jn={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},vt={en:Jn,"zh-cn":{"danmaku-loading":"\u5F39\u5E55\u52A0\u8F7D\u4E2D",top:"\u9876\u90E8",bottom:"\u5E95\u90E8",rolling:"\u6EDA\u52A8","input-danmaku-enter":"\u8F93\u5165\u5F39\u5E55\uFF0C\u56DE\u8F66\u53D1\u9001","about-author":"\u5173\u4E8E\u4F5C\u8005","dplayer-feedback":"\u64AD\u653E\u5668\u610F\u89C1\u53CD\u9988","about-dplayer":"\u5173\u4E8E DPlayer \u64AD\u653E\u5668",loop:"\u6D17\u8111\u5FAA\u73AF",speed:"\u901F\u5EA6","opacity-danmaku":"\u5F39\u5E55\u900F\u660E\u5EA6",normal:"\u6B63\u5E38","please-input-danmaku":"\u8981\u8F93\u5165\u5F39\u5E55\u5185\u5BB9\u554A\u5582\uFF01","set-danmaku-color":"\u8BBE\u7F6E\u5F39\u5E55\u989C\u8272","set-danmaku-type":"\u8BBE\u7F6E\u5F39\u5E55\u7C7B\u578B","show-danmaku":"\u663E\u793A\u5F39\u5E55","video-failed":"\u89C6\u9891\u52A0\u8F7D\u5931\u8D25","danmaku-failed":"\u5F39\u5E55\u52A0\u8F7D\u5931\u8D25","danmaku-send-failed":"\u5F39\u5E55\u53D1\u9001\u5931\u8D25","switching-quality":"\u6B63\u5728\u5207\u6362\u81F3 %q \u753B\u8D28","switched-quality":"\u5DF2\u7ECF\u5207\u6362\u81F3 %q \u753B\u8D28",ff:"\u5FEB\u8FDB %s \u79D2",rew:"\u5FEB\u9000 %s \u79D2","unlimited-danmaku":"\u6D77\u91CF\u5F39\u5E55","send-danmaku":"\u53D1\u9001\u5F39\u5E55",setting:"\u8BBE\u7F6E",fullscreen:"\u5168\u5C4F","web-fullscreen":"\u9875\u9762\u5168\u5C4F",send:"\u53D1\u9001",screenshot:"\u622A\u56FE",airplay:"\u65E0\u7EBF\u6295\u5C4F",chromecast:"ChromeCast",subtitle:"\u5B57\u5E55",off:"\u5173\u95ED","show-subs":"\u663E\u793A\u5B57\u5E55","hide-subs":"\u9690\u85CF\u5B57\u5E55",volume:"\u97F3\u91CF",live:"\u76F4\u64AD","video-info":"\u89C6\u9891\u7EDF\u8BA1\u4FE1\u606F"},"zh-tw":{"danmaku-loading":"\u5F48\u5E55\u8F09\u5165\u4E2D",top:"\u9802\u90E8",bottom:"\u5E95\u90E8",rolling:"\u6EFE\u52D5","input-danmaku-enter":"\u8F38\u5165\u5F48\u5E55\uFF0CEnter \u767C\u9001","about-author":"\u95DC\u65BC\u4F5C\u8005","dplayer-feedback":"\u64AD\u653E\u5668\u610F\u898B\u56DE\u994B","about-dplayer":"\u95DC\u65BC DPlayer \u64AD\u653E\u5668",loop:"\u5FAA\u74B0\u64AD\u653E",speed:"\u901F\u5EA6","opacity-danmaku":"\u5F48\u5E55\u900F\u660E\u5EA6",normal:"\u6B63\u5E38","please-input-danmaku":"\u8ACB\u8F38\u5165\u5F48\u5E55\u5167\u5BB9\u554A\uFF01","set-danmaku-color":"\u8A2D\u5B9A\u5F48\u5E55\u984F\u8272","set-danmaku-type":"\u8A2D\u5B9A\u5F48\u5E55\u985E\u578B","show-danmaku":"\u986F\u793A\u5F48\u5E55","video-failed":"\u5F71\u7247\u8F09\u5165\u5931\u6557","danmaku-failed":"\u5F48\u5E55\u8F09\u5165\u5931\u6557","danmaku-send-failed":"\u5F48\u5E55\u767C\u9001\u5931\u6557","switching-quality":"\u6B63\u5728\u5207\u63DB\u81F3 %q \u756B\u8CEA","switched-quality":"\u5DF2\u7D93\u5207\u63DB\u81F3 %q \u756B\u8CEA",ff:"\u5FEB\u9032 %s \u79D2",rew:"\u5FEB\u9000 %s \u79D2","unlimited-danmaku":"\u5DE8\u91CF\u5F48\u5E55","send-danmaku":"\u767C\u9001\u5F48\u5E55",setting:"\u8A2D\u5B9A",fullscreen:"\u5168\u87A2\u5E55","web-fullscreen":"\u9801\u9762\u5168\u87A2\u5E55",send:"\u767C\u9001",screenshot:"\u622A\u5716",airplay:"\u7121\u7DDA\u6295\u5C4F",chromecast:"ChromeCast",subtitle:"\u5B57\u5E55",off:"\u95DC\u9589","show-subs":"\u986F\u793A\u5B57\u5E55","hide-subs":"\u96B1\u85CF\u5B57\u5E55",volume:"\u97F3\u91CF",live:"\u76F4\u64AD","video-info":"\u5F71\u7247\u7D71\u8A08\u8A0A\u606F"},"ko-kr":{"danmaku-loading":"Danmaku\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku\uB97C \uC785\uB825\uD558\uACE0 Enter\uB97C \uB204\uB974\uC138\uC694.","about-author":"\uB9CC\uB4E0\uC774","dplayer-feedback":"\uD53C\uB4DC\uBC31 \uBCF4\uB0B4\uAE30","about-dplayer":"DPlayer \uC815\uBCF4",loop:"\uBC18\uBCF5",speed:"\uBC30\uC18D","opacity-danmaku":"Danmaku \uBD88\uD22C\uBA85\uB3C4",normal:"\uD45C\uC900","please-input-danmaku":"Danmaku\uB97C \uC785\uB825\uD558\uC138\uC694!","set-danmaku-color":"Danmaku \uC0C9\uC0C1","set-danmaku-type":"Danmaku \uC124\uC815","show-danmaku":"Danmaku \uD45C\uC2DC","video-failed":"\uBE44\uB514\uC624\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","danmaku-failed":"Danmaku\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","danmaku-send-failed":"Danmaku \uC804\uC1A1\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","Switching to":"","Switched to":"","switching-quality":"\uC804\uD658 %q \uD654\uC9C8","switched-quality":"\uC804\uD658 \uB428 %q \uD654\uC9C8",ff:"\uC55E\uC73C\uB85C %s \uCD08",rew:"\uB4A4\uB85C %s \uCD08","unlimited-danmaku":"\uB05D\uC5C6\uB294 Danmaku","send-danmaku":"Danmaku \uBCF4\uB0B4\uAE30",setting:"\uC124\uC815",fullscreen:"\uC804\uCCB4 \uD654\uBA74","web-fullscreen":"\uC6F9 \uB0B4 \uC804\uCCB4\uD654\uBA74",send:"\uBCF4\uB0B4\uAE30",screenshot:"\uD654\uBA74 \uCEA1\uCCD0",airplay:"\uC5D0\uC5B4\uD50C\uB808\uC774",chromecast:"ChromeCast",subtitle:"\uBD80\uC81C",off:"\uB044\uB2E4","show-subs":"\uC790\uB9C9 \uBCF4\uC774\uAE30","hide-subs":"\uC790\uB9C9 \uC228\uAE30\uAE30",Volume:"\uBCFC\uB968",live:"\uC0DD\uBC29\uC1A1","video-info":"\uBE44\uB514\uC624 \uC815\uBCF4"},de:{"danmaku-loading":"Danmaku l\xE4dt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Dr\xFCcke Enter nach dem Einf\xFCgen vom Danmaku","about-author":"\xDCber den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"\xDCber DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz f\xFCr Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualit\xE4t","switched-quality":"Zur %q Qualit\xE4t gewechselt",ff:"%s s Vorw\xE4rts",rew:"%s s Zur\xFCck","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schlie\xDFung","hide-subs":"Verstecke Untertitel",volume:"Lautst\xE4rke",live:"Live","video-info":"Video Info"}},co=r(730),uo=r.n(co),ho=r(74),po=r.n(ho),fo=r(437),mo=r.n(fo),yo=r(644),go=r.n(yo),Ao=r(324),bo=r.n(Ao),vo=r(574),xo=r.n(vo),Eo=r(300),To=r.n(Eo),So=r(934),Co=r.n(So),wo=r(428),ko=r.n(wo),Lo=r(807),Io=r.n(Lo),Ro=r(338),Do=r.n(Ro),_o=r(254),Bo=r.n(_o),Po=r(965),Oo=r.n(Po),Fo=r(113),Mo=r.n(Fo),No=r(251),Uo=r.n(No),$o=r(410),Go=r.n($o),Ko=r(182),Ho=r.n(Ko),qo=r(193),Yo=r.n(qo);const Ge={play:uo(),pause:po(),volumeUp:mo(),volumeDown:go(),volumeOff:bo(),full:xo(),fullWeb:To(),setting:Co(),right:ko(),comment:Io(),commentOff:Do(),send:Bo(),pallette:Oo(),camera:Mo(),subtitle:Go(),loading:Ho(),airplay:Uo(),chromecast:Yo()};var zo=r(916),Wo=r.n(zo);function Nt(h){return Nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Nt(h)}function Pi(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(Nt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(Nt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),Nt(y)==="symbol"?y:String(y)),c)}var y}var Vo=function(){function h(y){(function(g,E){if(!(g instanceof E))throw new TypeError("Cannot call a class as a function")})(this,h),this.container=y.container,this.options=y.options,this.index=y.index,this.tran=y.tran,this.init()}var m,v,c;return m=h,c=[{key:"NewNotice",value:function(y,g,E){var C=document.createElement("div");return C.classList.add("dplayer-notice"),C.style.opacity=g,C.innerText=y,E&&(C.id="dplayer-notice-".concat(E)),C}}],(v=[{key:"init",value:function(){this.container.innerHTML=Wo()({options:this.options,index:this.index,tran:this.tran,icons:Ge,mobile:G.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!G.isSafari||G.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&Pi(m.prototype,v),c&&Pi(m,c),Object.defineProperty(m,"prototype",{writable:!1}),h}();const Oi=Vo;function xt(h){return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},xt(h)}function jo(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(xt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(xt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),xt(y)==="symbol"?y:String(y)),c)}var y}var Qo=function(){function h(c){(function(y,g){if(!(y instanceof g))throw new TypeError("Cannot call a class as a function")})(this,h),this.options=c,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var m,v;return m=h,v=[{key:"load",value:function(){var c,y=this;c=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var g=(this.options.api.addition||[]).slice(0);g.push(c),this.events&&this.events.trigger("danmaku_load_start",g),this._readAllEndpoints(g,function(E){y.dan=[].concat.apply([],E).sort(function(C,w){return C.time-w.time}),window.requestAnimationFrame(function(){y.frame()}),y.options.callback(),y.events&&y.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(c){this.options.api=c,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(c,y){for(var g=this,E=[],C=0,w=function(F){g.options.apiBackend.read({url:c[F],success:function(q){E[F]=q,++C===c.length&&y(E)},error:function(q){g.options.error(q||g.options.tran("danmaku-failed")),E[F]=[],++C===c.length&&y(E)}})},B=0;B<c.length;++B)w(B)}},{key:"send",value:function(c,y){var g=this,E={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:c.text,color:c.color,type:c.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:E,success:y,error:function(w){g.options.error(w||g.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,E),this.danIndex++;var C={text:this.htmlEncode(E.text),color:E.color,type:E.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(C),this.events&&this.events.trigger("danmaku_send",E)}},{key:"frame",value:function(){var c=this;if(this.dan.length&&!this.paused&&this.showing){for(var y=this.dan[this.danIndex],g=[];y&&this.options.time()>parseFloat(y.time);)g.push(y),y=this.dan[++this.danIndex];this.draw(g)}window.requestAnimationFrame(function(){c.frame()})}},{key:"opacity",value:function(c){if(c!==void 0){for(var y=this.container.getElementsByClassName("dplayer-danmaku-item"),g=0;g<y.length;g++)y[g].style.opacity=c;this._opacity=c,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(c){var y=this;if(this.showing){var g=this.options.height,E=this.container.offsetWidth,C=this.container.offsetHeight,w=parseInt(C/g),B=function(Y){var Z=Y.offsetWidth||parseInt(Y.style.width),re=Y.getBoundingClientRect().right||y.container.getBoundingClientRect().right+Z;return y.container.getBoundingClientRect().right-re},F=function(Y){return(E+Y)/5},q=function(Y,Z,re){for(var Ce=E/F(re),Ee=function(ct){var Tt=y.danTunnel[Z][ct+""];if(!Tt||!Tt.length)return y.danTunnel[Z][ct+""]=[Y],Y.addEventListener("animationend",function(){y.danTunnel[Z][ct+""].splice(0,1)}),{v:ct%w};if(Z!=="right")return"continue";for(var tn=0;tn<Tt.length;tn++){var Gi=B(Tt[tn])-10;if(Gi<=E-Ce*F(parseInt(Tt[tn].style.width))||Gi<=0)break;if(tn===Tt.length-1)return y.danTunnel[Z][ct+""].push(Y),Y.addEventListener("animationend",function(){y.danTunnel[Z][ct+""].splice(0,1)}),{v:ct%w}}},he=0;y.unlimited||he<w;he++){var rt=Ee(he);if(rt!=="continue"&&xt(rt)==="object")return rt.v}return-1};Object.prototype.toString.call(c)!=="[object Array]"&&(c=[c]);for(var W=document.createDocumentFragment(),Q=function(){c[V].type=G.number2Type(c[V].type),c[V].color||(c[V].color=16777215);var Y=document.createElement("div");Y.classList.add("dplayer-danmaku-item"),Y.classList.add("dplayer-danmaku-".concat(c[V].type)),c[V].border?Y.innerHTML='<span style="border:'.concat(c[V].border,'">').concat(c[V].text,"</span>"):Y.innerHTML=c[V].text,Y.style.opacity=y._opacity,Y.style.color=G.number2Color(c[V].color),Y.addEventListener("animationend",function(){y.container.removeChild(Y)});var Z,re=y._measure(c[V].text);switch(c[V].type){case"right":(Z=q(Y,c[V].type,re))>=0&&(Y.style.width=re+1+"px",Y.style.top=g*Z+"px",Y.style.transform="translateX(-".concat(E,"px)"));break;case"top":(Z=q(Y,c[V].type))>=0&&(Y.style.top=g*Z+"px");break;case"bottom":(Z=q(Y,c[V].type))>=0&&(Y.style.bottom=g*Z+"px");break;default:console.error("Can't handled danmaku type: ".concat(c[V].type))}Z>=0&&(Y.classList.add("dplayer-danmaku-move"),Y.style.animationDuration=y._danAnimation(c[V].type),W.appendChild(Y))},V=0;V<c.length;V++)Q();return this.container.appendChild(W),W}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(c){if(!this.context){var y=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=y.getPropertyValue("font")}return this.context.measureText(c).width}},{key:"seek",value:function(){this.clear();for(var c=0;c<this.dan.length;c++){if(this.dan[c].time>=this.options.time()){this.danIndex=c;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(c){return c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var c=this.container.offsetWidth,y=this.container.getElementsByClassName("dplayer-danmaku-item"),g=0;g<y.length;g++)y[g].style.transform="translateX(-".concat(c,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(c){this.unlimited=c}},{key:"speed",value:function(c){this.options.api.speedRate=c}},{key:"_danAnimation",value:function(c){var y=this.options.api.speedRate||1,g=!!this.player.fullScreen.isFullScreen();return{top:"".concat((g?6:4)/y,"s"),right:"".concat((g?8:5)/y,"s"),bottom:"".concat((g?6:4)/y,"s")}[c]}}],v&&jo(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();const Xo=Qo;function Ut(h){return Ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Ut(h)}function Zo(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(Ut(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(Ut(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),Ut(y)==="symbol"?y:String(y)),c)}var y}const Jo=function(){function h(){(function(c,y){if(!(c instanceof y))throw new TypeError("Cannot call a class as a function")})(this,h),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var m,v;return m=h,(v=[{key:"on",value:function(c,y){this.type(c)&&typeof y=="function"&&(this.events[c]||(this.events[c]=[]),this.events[c].push(y))}},{key:"trigger",value:function(c,y){if(this.events[c]&&this.events[c].length)for(var g=0;g<this.events[c].length;g++)this.events[c][g](y)}},{key:"type",value:function(c){return this.playerEvents.indexOf(c)!==-1?"player":this.videoEvents.indexOf(c)!==-1?"video":(console.error("Unknown event name: ".concat(c)),null)}}])&&Zo(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();function $t(h){return $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},$t(h)}function el(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if($t(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if($t(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),$t(y)==="symbol"?y:String(y)),c)}var y}var tl=function(){function h(c){var y=this;(function(g,E){if(!(g instanceof E))throw new TypeError("Cannot call a class as a function")})(this,h),this.player=c,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){y.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){y.player.resize(),G.setScrollPosition(y.lastScrollPosition)}),this.fullscreenchange=function(){y.player.resize(),y.isFullScreen("browser")?y.player.events.trigger("fullscreen"):(G.setScrollPosition(y.lastScrollPosition),y.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var g=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;g&&g!==y.player.container||(y.player.resize(),g?y.player.events.trigger("fullscreen"):(G.setScrollPosition(y.lastScrollPosition),y.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var m,v;return m=h,v=[{key:"isFullScreen",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(c){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",y=c==="browser"?"web":"browser",g=this.isFullScreen(y);switch(g||(this.lastScrollPosition=G.getScrollPosition()),c){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}g&&this.cancel(y)}},{key:"cancel",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(c){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(c)?this.cancel(c):this.request(c)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],v&&el(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();const nl=tl;function Gt(h){return Gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Gt(h)}function rl(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(Gt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(Gt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),Gt(y)==="symbol"?y:String(y)),c)}var y}var il=function(){function h(c){(function(y,g){if(!(y instanceof g))throw new TypeError("Cannot call a class as a function")})(this,h),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:c.options.hasOwnProperty("volume")?c.options.volume:.7,unlimited:(c.options.danmaku&&c.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var m,v;return m=h,(v=[{key:"init",value:function(){for(var c in this.storageName){var y=this.storageName[c];this.data[c]=parseFloat(G.storage.get(y)||this.default[c])}}},{key:"get",value:function(c){return this.data[c]}},{key:"set",value:function(c,y){this.data[c]=y,G.storage.set(this.storageName[c],y)}}])&&rl(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();const al=il;function Kt(h){return Kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Kt(h)}function sl(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(Kt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(Kt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),Kt(y)==="symbol"?y:String(y)),c)}var y}var ol=function(){function h(c,y,g,E){(function(C,w){if(!(C instanceof w))throw new TypeError("Cannot call a class as a function")})(this,h),this.container=c,this.video=y,this.options=g,this.events=E,this.init()}var m,v;return m=h,v=[{key:"init",value:function(){var c=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var y=this.video.textTracks[0];y.oncuechange=function(){var g=y.activeCues[y.activeCues.length-1];if(c.container.innerHTML="",g){var E=document.createElement("div");E.appendChild(g.getCueAsHTML());var C=E.innerHTML.split(/\r?\n/).map(function(w){return"<p>".concat(w,"</p>")}).join("");c.container.innerHTML=C}c.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],v&&sl(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();const ll=ol;function Ht(h){return Ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Ht(h)}function dl(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(Ht(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(Ht(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),Ht(y)==="symbol"?y:String(y)),c)}var y}var cl=function(){function h(c){var y=this;(function(w,B){if(!(w instanceof B))throw new TypeError("Cannot call a class as a function")})(this,h),this.player=c,this.player.template.mask.addEventListener("click",function(){y.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){y.adaptiveHeight(),y.show()});for(var g=this.player.template.subtitlesItem.length-1,E=function(w){y.player.template.subtitlesItem[w].addEventListener("click",function(){y.hide(),y.player.options.subtitle.index!==w&&(y.player.template.subtitle.innerHTML="<p></p>",y.player.template.subtrack.src=y.player.template.subtitlesItem[w].dataset.subtitle,y.player.options.subtitle.index=w,y.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&y.subContainerShow())})},C=0;C<g;C++)E(C);this.player.template.subtitlesItem[g].addEventListener("click",function(){y.hide(),y.player.options.subtitle.index!==g&&(y.player.template.subtitle.innerHTML="<p></p>",y.player.template.subtrack.src="",y.player.options.subtitle.index=g,y.subContainerHide())})}var m,v;return m=h,(v=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var c=30*this.player.template.subtitlesItem.length+14,y=.8*this.player.template.videoWrap.offsetHeight;c>=y-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=y-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=y-50+"px")}}])&&dl(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();const ul=cl;function qt(h){return qt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},qt(h)}function hl(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(qt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(qt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),qt(y)==="symbol"?y:String(y)),c)}var y}var pl=function(){function h(c){(function(y,g){if(!(y instanceof g))throw new TypeError("Cannot call a class as a function")})(this,h),this.elements={},this.elements.volume=c.volumeBar,this.elements.played=c.playedBar,this.elements.loaded=c.loadedBar,this.elements.danmaku=c.danmakuOpacityBar}var m,v;return m=h,(v=[{key:"set",value:function(c,y,g){y=Math.max(y,0),y=Math.min(y,1),this.elements[c].style[g]=100*y+"%"}},{key:"get",value:function(c){return parseFloat(this.elements[c].style.width)/100}}])&&hl(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();const fl=pl;function Yt(h){return Yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Yt(h)}function ml(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(Yt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(Yt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),Yt(y)==="symbol"?y:String(y)),c)}var y}var yl=function(){function h(c){(function(y,g){if(!(y instanceof g))throw new TypeError("Cannot call a class as a function")})(this,h),this.player=c,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(y){window.setTimeout(y,1e3/60)},this.types=["loading","info","fps"],this.init()}var m,v;return m=h,(v=[{key:"init",value:function(){var c=this;this.types.map(function(y){return y!=="fps"&&c["init".concat(y,"Checker")](),y})}},{key:"initloadingChecker",value:function(){var c=this,y=0,g=0,E=!1;this.loadingChecker=setInterval(function(){c.enableloadingChecker&&(g=c.player.video.currentTime,E||g!==y||c.player.video.paused||(c.player.container.classList.add("dplayer-loading"),E=!0),E&&g>y&&!c.player.video.paused&&(c.player.container.classList.remove("dplayer-loading"),E=!1),y=g)},100)}},{key:"initfpsChecker",value:function(){var c=this;window.requestAnimationFrame(function(){if(c.enablefpsChecker)if(c.initfpsChecker(),c.fpsStart){c.fpsIndex++;var y=new Date;y-c.fpsStart>1e3&&(c.player.infoPanel.fps(c.fpsIndex/(y-c.fpsStart)*1e3),c.fpsStart=new Date,c.fpsIndex=0)}else c.fpsStart=new Date,c.fpsIndex=0;else c.fpsStart=0,c.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var c=this;this.infoChecker=setInterval(function(){c.enableinfoChecker&&c.player.infoPanel.update()},1e3)}},{key:"enable",value:function(c){this["enable".concat(c,"Checker")]=!0,c==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(c){this["enable".concat(c,"Checker")]=!1}},{key:"destroy",value:function(){var c=this;this.types.map(function(y){return c["enable".concat(y,"Checker")]=!1,c["".concat(y,"Checker")]&&clearInterval(c["".concat(y,"Checker")]),y})}}])&&ml(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();const gl=yl;function zt(h){return zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},zt(h)}function Al(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(zt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(zt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),zt(y)==="symbol"?y:String(y)),c)}var y}const bl=function(){function h(c){var y=this;(function(g,E){if(!(g instanceof E))throw new TypeError("Cannot call a class as a function")})(this,h),this.container=c,this.container.addEventListener("animationend",function(){y.container.classList.remove("dplayer-bezel-transition")})}var m,v;return m=h,(v=[{key:"switch",value:function(c){this.container.innerHTML=c,this.container.classList.add("dplayer-bezel-transition")}}])&&Al(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();function Wt(h){return Wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Wt(h)}function vl(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(Wt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(Wt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),Wt(y)==="symbol"?y:String(y)),c)}var y}var xl=function(){function h(c){(function(y,g){if(!(y instanceof g))throw new TypeError("Cannot call a class as a function")})(this,h),this.container=c.container,this.barWidth=c.barWidth,this.container.style.backgroundImage="url('".concat(c.url,"')"),this.events=c.events}var m,v;return m=h,(v=[{key:"resize",value:function(c,y,g){this.container.style.width="".concat(c,"px"),this.container.style.height="".concat(y,"px"),this.container.style.top="".concat(2-y,"px"),this.barWidth=g}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(c){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(c/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(c-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&vl(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();const El=xl;function Vt(h){return Vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Vt(h)}function Tl(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(Vt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(Vt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),Vt(y)==="symbol"?y:String(y)),c)}var y}var nt,Fi=!0,er=!1,Sl=function(){function h(c){(function(y,g){if(!(y instanceof g))throw new TypeError("Cannot call a class as a function")})(this,h),this.player=c,this.autoHideTimer=0,G.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),G.isMobile||this.initVolumeButton()}var m,v;return m=h,(v=[{key:"initPlayButton",value:function(){var c=this;this.player.template.playButton.addEventListener("click",function(){c.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){c.player.toggle()}),G.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){c.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){c.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){c.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){c.player.toggle()}))}},{key:"initHighlights",value:function(){var c=this;this.player.on("durationchange",function(){if(c.player.video.duration!==1&&c.player.video.duration!==1/0&&c.player.options.highlight){var y=c.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(y,0).forEach(function(C){c.player.template.playedBarWrap.removeChild(C)});for(var g=0;g<c.player.options.highlight.length;g++)if(c.player.options.highlight[g].text&&c.player.options.highlight[g].time){var E=document.createElement("div");E.classList.add("dplayer-highlight"),E.style.left=c.player.options.highlight[g].time/c.player.video.duration*100+"%",E.innerHTML='<span class="dplayer-highlight-text">'+c.player.options.highlight[g].text+"</span>",c.player.template.playedBarWrap.insertBefore(E,c.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var c=this;this.player.options.video.thumbnails&&(this.thumbnails=new El({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){c.thumbnails.resize(160,c.player.video.videoHeight/c.player.video.videoWidth*160,c.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var c=this,y=function(E){var C=((E.clientX||E.changedTouches[0].clientX)-G.getBoundingClientRectViewLeft(c.player.template.playedBarWrap))/c.player.template.playedBarWrap.clientWidth;C=Math.max(C,0),C=Math.min(C,1),c.player.bar.set("played",C,"width"),c.player.template.ptime.innerHTML=G.secondToTime(C*c.player.video.duration)},g=function E(C){document.removeEventListener(G.nameMap.dragEnd,E),document.removeEventListener(G.nameMap.dragMove,y);var w=((C.clientX||C.changedTouches[0].clientX)-G.getBoundingClientRectViewLeft(c.player.template.playedBarWrap))/c.player.template.playedBarWrap.clientWidth;w=Math.max(w,0),w=Math.min(w,1),c.player.bar.set("played",w,"width"),c.player.seek(c.player.bar.get("played")*c.player.video.duration),c.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(G.nameMap.dragStart,function(){c.player.timer.disable("progress"),document.addEventListener(G.nameMap.dragMove,y),document.addEventListener(G.nameMap.dragEnd,g)}),this.player.template.playedBarWrap.addEventListener(G.nameMap.dragMove,function(E){if(c.player.video.duration){var C=c.player.template.playedBarWrap.getBoundingClientRect().left,w=(E.clientX||E.changedTouches[0].clientX)-C;if(w<0||w>c.player.template.playedBarWrap.offsetWidth)return;var B=c.player.video.duration*(w/c.player.template.playedBarWrap.offsetWidth);G.isMobile&&c.thumbnails&&c.thumbnails.show(),c.thumbnails&&c.thumbnails.move(w),c.player.template.playedBarTime.style.left="".concat(w-(B>=3600?25:20),"px"),c.player.template.playedBarTime.innerText=G.secondToTime(B),c.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(G.nameMap.dragEnd,function(){G.isMobile&&c.thumbnails&&c.thumbnails.hide()}),G.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){c.player.video.duration&&(c.thumbnails&&c.thumbnails.show(),c.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){c.player.video.duration&&(c.thumbnails&&c.thumbnails.hide(),c.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var c=this;this.player.template.browserFullButton.addEventListener("click",function(){c.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){c.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var c=this,y=function(E){var C=E||window.event,w=((C.clientX||C.changedTouches[0].clientX)-G.getBoundingClientRectViewLeft(c.player.template.volumeBarWrap)-5.5)/35;c.player.volume(w)},g=function E(){document.removeEventListener(G.nameMap.dragEnd,E),document.removeEventListener(G.nameMap.dragMove,y),c.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(E){var C=E||window.event,w=((C.clientX||C.changedTouches[0].clientX)-G.getBoundingClientRectViewLeft(c.player.template.volumeBarWrap)-5.5)/35;c.player.volume(w)}),this.player.template.volumeBarWrapWrap.addEventListener(G.nameMap.dragStart,function(){document.addEventListener(G.nameMap.dragMove,y),document.addEventListener(G.nameMap.dragEnd,g),c.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){c.player.video.muted?(c.player.video.muted=!1,c.player.switchVolumeIcon(),c.player.bar.set("volume",c.player.volume(),"width")):(c.player.video.muted=!0,c.player.template.volumeIcon.innerHTML=Ge.volumeOff,c.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var c=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(y){y.target.classList.contains("dplayer-quality-item")&&c.player.switchQuality(y.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var c=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var y,g=document.createElement("canvas");g.width=c.player.video.videoWidth,g.height=c.player.video.videoHeight,g.getContext("2d").drawImage(c.player.video,0,0,g.width,g.height),g.toBlob(function(E){y=URL.createObjectURL(E);var C=document.createElement("a");C.href=y,C.download="DPlayer.png",C.style.display="none",document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(y),c.player.events.trigger("screenshot",y)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(c){c.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var c=window.document.createElement("script");c.setAttribute("type","text/javascript"),c.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(c),window.__onGCastApiAvailable=function(y){if(y){var g=new(nt=window.chrome.cast).SessionRequest(nt.media.DEFAULT_MEDIA_RECEIVER_APP_ID),E=new nt.ApiConfig(g,function(){},function(C){C===nt.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",C)});nt.initialize(E,function(){})}}}},{key:"initChromecastButton",value:function(){var c=this;if(this.player.options.chromecast){Fi&&(Fi=!1,this.initChromecast());var y=function(E,C){c.currentMedia=C},g=function(E){console.error("Error launching media",E)};this.player.template.chromecastButton.addEventListener("click",function(){er?(er=!1,c.currentMedia.stop(),c.session.stop(),c.initChromecast()):(er=!0,nt.requestSession(function(E){var C,w,B;c.session=E,C=c.player.options.video.url,w=new nt.media.MediaInfo(C),B=new nt.media.LoadRequest(w),c.session?c.session.loadMedia(B,y.bind(c,"loadMedia"),g).play():window.open(C)},function(E){E.code==="cancel"?c.session=void 0:console.error("Error selecting a cast device",E)}))})}}},{key:"initSubtitleButton",value:function(){var c=this;this.player.events.on("subtitle_show",function(){c.player.template.subtitleButton.dataset.balloon=c.player.tran("hide-subs"),c.player.template.subtitleButtonInner.style.opacity="",c.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){c.player.template.subtitleButton.dataset.balloon=c.player.tran("show-subs"),c.player.template.subtitleButtonInner.style.opacity="0.4",c.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){c.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var c=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!c.player.video.played.length||c.player.paused||c.disableAutoHide||c.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){G.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&Tl(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();const Cl=Sl;function jt(h){return jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},jt(h)}function wl(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(jt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(jt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),jt(y)==="symbol"?y:String(y)),c)}var y}var kl=function(){function h(c){var y=this;(function(B,F){if(!(B instanceof F))throw new TypeError("Cannot call a class as a function")})(this,h),this.player=c,this.player.template.mask.addEventListener("click",function(){y.hide()}),this.player.template.settingButton.addEventListener("click",function(){y.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){y.player.template.loopToggle.checked=!y.player.template.loopToggle.checked,y.player.template.loopToggle.checked?y.loop=!0:y.loop=!1,y.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){y.player.template.showDanmakuToggle.checked=!y.player.template.showDanmakuToggle.checked,y.player.template.showDanmakuToggle.checked?(y.showDanmaku=!0,y.player.danmaku.show()):(y.showDanmaku=!1,y.player.danmaku.hide()),y.player.user.set("danmaku",y.showDanmaku?1:0),y.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){y.player.template.unlimitDanmakuToggle.checked=!y.player.template.unlimitDanmakuToggle.checked,y.player.template.unlimitDanmakuToggle.checked?(y.unlimitDanmaku=!0,y.player.danmaku.unlimit(!0)):(y.unlimitDanmaku=!1,y.player.danmaku.unlimit(!1)),y.player.user.set("unlimited",y.unlimitDanmaku?1:0),y.hide()}),this.player.template.speed.addEventListener("click",function(){y.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),y.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var g=function(B){y.player.template.speedItem[B].addEventListener("click",function(){y.player.speed(y.player.template.speedItem[B].dataset.speed),y.hide()})},E=0;E<this.player.template.speedItem.length;E++)g(E);if(this.player.danmaku){this.player.on("danmaku_opacity",function(B){y.player.bar.set("danmaku",B,"width"),y.player.user.set("opacity",B)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var C=function(B){var F=B||window.event,q=((F.clientX||F.changedTouches[0].clientX)-G.getBoundingClientRectViewLeft(y.player.template.danmakuOpacityBarWrap))/130;q=Math.max(q,0),q=Math.min(q,1),y.player.danmaku.opacity(q)},w=function B(){document.removeEventListener(G.nameMap.dragEnd,B),document.removeEventListener(G.nameMap.dragMove,C),y.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(B){var F=B||window.event,q=((F.clientX||F.changedTouches[0].clientX)-G.getBoundingClientRectViewLeft(y.player.template.danmakuOpacityBarWrap))/130;q=Math.max(q,0),q=Math.min(q,1),y.player.danmaku.opacity(q)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(G.nameMap.dragStart,function(){document.addEventListener(G.nameMap.dragMove,C),document.addEventListener(G.nameMap.dragEnd,w),y.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var m,v;return m=h,(v=[{key:"hide",value:function(){var c=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){c.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),c.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&wl(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();const Ll=kl;function Qt(h){return Qt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Qt(h)}function Il(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(Qt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(Qt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),Qt(y)==="symbol"?y:String(y)),c)}var y}var Rl=function(){function h(c){var y=this;(function(g,E){if(!(g instanceof E))throw new TypeError("Cannot call a class as a function")})(this,h),this.player=c,this.player.template.mask.addEventListener("click",function(){y.hide()}),this.player.template.commentButton.addEventListener("click",function(){y.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){y.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(y.player.template.commentColorSettingBox.querySelector("input:checked+span")){var g=y.player.template.commentColorSettingBox.querySelector("input:checked").value;y.player.template.commentSettingFill.style.fill=g,y.player.template.commentInput.style.color=g,y.player.template.commentSendFill.style.fill=g}}),this.player.template.commentInput.addEventListener("click",function(){y.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(g){(g||window.event).keyCode===13&&y.send()}),this.player.template.commentSendButton.addEventListener("click",function(){y.send()})}var m,v;return m=h,(v=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var c=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:G.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){c.player.template.commentInput.value="",c.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Il(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();const Dl=Rl;function Xt(h){return Xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Xt(h)}function _l(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(Xt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(Xt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),Xt(y)==="symbol"?y:String(y)),c)}var y}var Bl=function(){function h(c){(function(y,g){if(!(y instanceof g))throw new TypeError("Cannot call a class as a function")})(this,h),this.player=c,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var m,v;return m=h,(v=[{key:"doHotKey",value:function(c){if(this.player.focus){var y=document.activeElement.tagName.toUpperCase(),g=document.activeElement.getAttribute("contenteditable");if(y!=="INPUT"&&y!=="TEXTAREA"&&g!==""&&g!=="true"){var E,C=c||window.event;switch(C.keyCode){case 32:C.preventDefault(),this.player.toggle();break;case 37:if(C.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(C.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:C.preventDefault(),E=this.player.volume()+.1,this.player.volume(E);break;case 40:C.preventDefault(),E=this.player.volume()-.1,this.player.volume(E)}}}}},{key:"cancelFullScreen",value:function(c){(c||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&_l(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();const Pl=Bl;function Zt(h){return Zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Zt(h)}function Ol(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(Zt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(Zt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),Zt(y)==="symbol"?y:String(y)),c)}var y}var Fl=function(){function h(c){var y=this;(function(g,E){if(!(g instanceof E))throw new TypeError("Cannot call a class as a function")})(this,h),this.player=c,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(g,E){y.player.options.contextmenu[E].click&&g.addEventListener("click",function(){y.player.options.contextmenu[E].click(y.player),y.hide()})}),this.contextmenuHandler=function(g){if(y.shown)y.hide();else{var E=g||window.event;E.preventDefault();var C=y.player.container.getBoundingClientRect();y.show(E.clientX-C.left,E.clientY-C.top),y.player.template.mask.addEventListener("click",function(){y.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var m,v;return m=h,(v=[{key:"show",value:function(c,y){this.player.template.menu.classList.add("dplayer-menu-show");var g=this.player.container.getBoundingClientRect();c+this.player.template.menu.offsetWidth>=g.width?(this.player.template.menu.style.right=g.width-c+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=c+"px",this.player.template.menu.style.right="initial"),y+this.player.template.menu.offsetHeight>=g.height?(this.player.template.menu.style.bottom=g.height-y+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=y+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&Ol(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();const Ml=Fl;function Jt(h){return Jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Jt(h)}function Nl(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,(y=function(g,E){if(Jt(g)!=="object"||g===null)return g;var C=g[Symbol.toPrimitive];if(C!==void 0){var w=C.call(g,"string");if(Jt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(c.key),Jt(y)==="symbol"?y:String(y)),c)}var y}var Ul=function(){function h(c){var y=this;(function(g,E){if(!(g instanceof E))throw new TypeError("Cannot call a class as a function")})(this,h),this.container=c.template.infoPanel,this.template=c.template,this.video=c.video,this.player=c,this.template.infoPanelClose.addEventListener("click",function(){y.hide()})}var m,v;return m=h,(v=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(c){this.template.infoFPS.innerHTML="".concat(c.toFixed(1))}}])&&Nl(m.prototype,v),Object.defineProperty(m,"prototype",{writable:!1}),h}();const $l=Ul;var Gl=r(568),Kl=r.n(Gl);function en(h){return en=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},en(h)}function Mi(h,m){var v=Object.keys(h);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(h);m&&(c=c.filter(function(y){return Object.getOwnPropertyDescriptor(h,y).enumerable})),v.push.apply(v,c)}return v}function Hl(h,m,v){return(m=Ui(m))in h?Object.defineProperty(h,m,{value:v,enumerable:!0,configurable:!0,writable:!0}):h[m]=v,h}function Ni(h,m){for(var v=0;v<m.length;v++){var c=m[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,Ui(c.key),c)}}function Ui(h){var m=function(v,c){if(en(v)!=="object"||v===null)return v;var y=v[Symbol.toPrimitive];if(y!==void 0){var g=y.call(v,"string");if(en(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(h);return en(m)==="symbol"?m:String(m)}var $i=0,Et=[],ql=function(){function h(y){var g=this;(function(E,C){if(!(E instanceof C))throw new TypeError("Cannot call a class as a function")})(this,h),this.options=function(E){var C={container:E.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:oo,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var w in C)C.hasOwnProperty(w)&&!E.hasOwnProperty(w)&&(E[w]=C[w]);return E.video&&!E.video.type&&(E.video.type="auto"),Zn(E.danmaku)==="object"&&E.danmaku&&!E.danmaku.user&&(E.danmaku.user="DIYgod"),E.subtitle&&(!E.subtitle.type&&(E.subtitle.type="webvtt"),!E.subtitle.fontSize&&(E.subtitle.fontSize="20px"),!E.subtitle.bottom&&(E.subtitle.bottom="40px"),!E.subtitle.color&&(E.subtitle.color="#fff")),E.video.quality&&(E.video.url=E.video.quality[E.video.defaultQuality].url),E.lang&&(E.lang=E.lang.toLowerCase()),E.contextmenu=E.contextmenu.concat([{key:"video-info",click:function(B){B.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),E}(function(E){for(var C=1;C<arguments.length;C++){var w=arguments[C]!=null?arguments[C]:{};C%2?Mi(Object(w),!0).forEach(function(B){Hl(E,B,w[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(w)):Mi(Object(w)).forEach(function(B){Object.defineProperty(E,B,Object.getOwnPropertyDescriptor(w,B))})}return E}({preload:y.video.type==="webtorrent"?"none":"metadata"},y)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new lo(this.options.lang).tran,this.events=new Jo,this.user=new al(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),G.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(E){return E.lang===g.options.subtitle.defaultSubtitle||E.name===g.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(E){return E.lang===g.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new Oi({container:this.container,options:this.options,index:$i,tran:this.tran}),this.video=this.template.video,this.bar=new fl(this.template),this.bezel=new bl(this.template.bezel),this.fullScreen=new nl(this),this.controller=new Cl(this),this.options.danmaku&&(this.danmaku=new Xo({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){g.template.danmakuLoading.style.display="none",g.options.autoplay&&g.play()},0)},error:function(E){g.notice(E)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return g.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(E){return g.tran(E)}}),this.comment=new Dl(this)),this.setting=new Ll(this),this.plugins={},this.docClickFun=function(){g.focus=!1},this.containerClickFun=function(){g.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new gl(this),this.hotkey=new Pl(this),this.contextmenu=new Ml(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new $l(this),!this.danmaku&&this.options.autoplay&&this.play(),$i++,Et.push(this)}var m,v,c;return m=h,v=[{key:"seek",value:function(y){y=Math.max(y,0),this.video.duration&&(y=Math.min(y,this.video.duration)),this.video.currentTime<y?this.notice("".concat(this.tran("ff").replace("%s",(y-this.video.currentTime).toFixed(0)))):this.video.currentTime>y&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-y).toFixed(0)))),this.video.currentTime=y,this.danmaku&&this.danmaku.seek(),this.bar.set("played",y/this.video.duration,"width"),this.template.ptime.innerHTML=G.secondToTime(y)}},{key:"play",value:function(y){var g=this;if(this.paused=!1,this.video.paused&&!G.isMobile&&this.bezel.switch(Ge.play),this.template.playButton.innerHTML=Ge.pause,this.template.mobilePlayButton.innerHTML=Ge.pause,y||ye.resolve(this.video.play()).catch(function(){g.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var E=0;E<Et.length;E++)this!==Et[E]&&Et[E].pause()}},{key:"pause",value:function(y){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||G.isMobile||this.bezel.switch(Ge.pause),this.template.playButton.innerHTML=Ge.play,this.template.mobilePlayButton.innerHTML=Ge.play,y||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=Ge.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=Ge.volumeDown:this.template.volumeIcon.innerHTML=Ge.volumeOff}},{key:"volume",value:function(y,g,E){if(y=parseFloat(y),!isNaN(y)){y=Math.max(y,0),y=Math.min(y,1),this.bar.set("volume",y,"width");var C="".concat((100*y).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=C,g||this.user.set("volume",y),E||this.notice("".concat(this.tran("volume")," ").concat((100*y).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=y,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(y,g){this.events.on(y,g)}},{key:"switchVideo",value:function(y,g){this.pause(),this.video.poster=y.pic?y.pic:"",this.video.src=y.url,this.initMSE(this.video,y.type||"auto"),g&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:g.id,address:g.api,token:g.token,maximum:g.maximum,addition:g.addition,user:g.user}))}},{key:"initMSE",value:function(y,g){var E=this;if(this.type=g,this.options.video.customType&&this.options.video.customType[g])Object.prototype.toString.call(this.options.video.customType[g])==="[object Function]"?this.options.video.customType[g](this.video,this):console.error("Illegal customType: ".concat(g));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(y.src)?this.type="hls":/.flv(#|\?|$)/i.exec(y.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(y.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(y.canPlayType("application/x-mpegURL")||y.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var C=this.options.pluginOptions.hls,w=new window.Hls(C);this.plugins.hls=w,w.loadSource(y.src),w.attachMedia(y),this.events.on("destroy",function(){w.destroy(),delete E.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var B=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:y.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=B,B.attachMediaElement(y),B.load(),this.events.on("destroy",function(){B.unload(),B.detachMediaElement(),B.destroy(),delete E.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var F=window.dashjs.MediaPlayer().create().initialize(y,y.src,!1),q=this.options.pluginOptions.dash;F.updateSettings(q),this.plugins.dash=F,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete E.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var W=this.options.pluginOptions.webtorrent,Q=new window.WebTorrent(W);this.plugins.webtorrent=Q;var V=y.src;y.src="",y.preload="metadata",y.addEventListener("durationchange",function(){return E.container.classList.remove("dplayer-loading")},{once:!0}),Q.add(V,function(Y){Y.files.find(function(Z){return Z.name.endsWith(".mp4")}).renderTo(E.video,{autoplay:E.options.autoplay,controls:!1})}),this.events.on("destroy",function(){Q.remove(V),Q.destroy(),delete E.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(y,g){var E=this;this.initMSE(y,g),this.on("durationchange",function(){y.duration!==1&&y.duration!==1/0&&(E.template.dtime.innerHTML=G.secondToTime(y.duration))}),this.on("progress",function(){var B=y.buffered.length?y.buffered.end(y.buffered.length-1)/y.duration:0;E.bar.set("loaded",B,"width")}),this.on("error",function(){E.video.error&&E.tran&&E.notice&&E.type!=="webtorrent"&&E.notice(E.tran("video-failed"))}),this.on("ended",function(){E.bar.set("played",1,"width"),E.setting.loop?(E.seek(0),E.play()):E.pause(),E.danmaku&&(E.danmaku.danIndex=0)}),this.on("play",function(){E.paused&&E.play(!0)}),this.on("pause",function(){E.paused||E.pause(!0)}),this.on("timeupdate",function(){E.bar.set("played",E.video.currentTime/E.video.duration,"width");var B=G.secondToTime(E.video.currentTime);E.template.ptime.innerHTML!==B&&(E.template.ptime.innerHTML=B)});for(var C=function(B){y.addEventListener(E.events.videoEvents[B],function(F){E.events.trigger(E.events.videoEvents[B],F)})},w=0;w<this.events.videoEvents.length;w++)C(w);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new ll(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new ul(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(y){var g=this;if(y=typeof y=="string"?parseInt(y):y,this.qualityIndex!==y&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=y,this.switchingQuality=!0,this.quality=this.options.video.quality[y],this.template.qualityButton.innerHTML=this.quality.name;var E=this.video.paused;this.video.pause();var C=Kl()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),w=new DOMParser().parseFromString(C,"text/html").body.firstChild;this.template.videoWrap.insertBefore(w,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=w,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(g.prevVideo){if(g.video.currentTime!==g.prevVideo.currentTime)return void g.seek(g.prevVideo.currentTime);g.template.videoWrap.removeChild(g.prevVideo),g.video.classList.add("dplayer-video-current"),E||g.video.play(),g.prevVideo=null,g.notice("".concat(g.tran("switched-quality").replace("%q",g.quality.name)),void 0,void 0,"switch-quality"),g.switchingQuality=!1,g.events.trigger("quality_end")}}),this.on("error",function(){g.video.error&&g.prevVideo&&(g.template.videoWrap.removeChild(g.video),g.video=g.prevVideo,E||g.video.play(),g.qualityIndex=g.prevIndex,g.quality=g.options.video.quality[g.qualityIndex],g.noticeTime=setTimeout(function(){g.template.notice.style.opacity=0,g.events.trigger("notice_hide")},3e3),g.prevVideo=null,g.switchingQuality=!1)})}}},{key:"notice",value:function(y){var g,E,C,w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,B=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,F=arguments.length>3?arguments[3]:void 0;if(F&&((g=document.getElementById("dplayer-notice-".concat(F)))&&(g.innerHTML=y),this.noticeList[F]&&(clearTimeout(this.noticeList[F]),this.noticeList[F]=null)),!g){var q=Oi.NewNotice(y,B,F);this.template.noticeList.appendChild(q),g=q}this.events.trigger("notice_show",g),w>0&&(this.noticeList[F]=setTimeout((E=g,C=this,function(){E.addEventListener("animationend",function(){C.template.noticeList.removeChild(E)}),E.classList.add("remove-notice"),C.events.trigger("notice_hide"),C.noticeList[F]=null}),w))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(y){this.video.playbackRate=y}},{key:"destroy",value:function(){Et.splice(Et.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],c=[{key:"version",get:function(){return"1.27.1"}}],v&&Ni(m.prototype,v),c&&Ni(m,c),Object.defineProperty(m,"prototype",{writable:!1}),h}();const Yl=ql;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const zl=Yl})(),i.default})())})(Na);const ld=Vl(Na.exports);var on={},dd={get exports(){return on},set exports(o){on=o}};(function(o,e){(function(t){var n=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,r=/^(?=([^\/?#]*))\1([^]*)$/,i=/(?:\/|^)\.(?=\/)/g,a=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,s={buildAbsoluteURL:function(l,d,u){if(u=u||{},l=l.trim(),d=d.trim(),!d){if(!u.alwaysNormalize)return l;var f=s.parseURL(l);if(!f)throw new Error("Error trying to parse base URL.");return f.path=s.normalizePath(f.path),s.buildURLFromParts(f)}var p=s.parseURL(d);if(!p)throw new Error("Error trying to parse relative URL.");if(p.scheme)return u.alwaysNormalize?(p.path=s.normalizePath(p.path),s.buildURLFromParts(p)):d;var A=s.parseURL(l);if(!A)throw new Error("Error trying to parse base URL.");if(!A.netLoc&&A.path&&A.path[0]!=="/"){var b=r.exec(A.path);A.netLoc=b[1],A.path=b[2]}A.netLoc&&!A.path&&(A.path="/");var x={scheme:A.scheme,netLoc:p.netLoc,path:null,params:p.params,query:p.query,fragment:p.fragment};if(!p.netLoc&&(x.netLoc=A.netLoc,p.path[0]!=="/"))if(!p.path)x.path=A.path,p.params||(x.params=A.params,p.query||(x.query=A.query));else{var S=A.path,k=S.substring(0,S.lastIndexOf("/")+1)+p.path;x.path=s.normalizePath(k)}return x.path===null&&(x.path=u.alwaysNormalize?s.normalizePath(p.path):p.path),s.buildURLFromParts(x)},parseURL:function(l){var d=n.exec(l);return d?{scheme:d[1]||"",netLoc:d[2]||"",path:d[3]||"",params:d[4]||"",query:d[5]||"",fragment:d[6]||""}:null},normalizePath:function(l){for(l=l.split("").reverse().join("").replace(i,"");l.length!==(l=l.replace(a,"")).length;);return l.split("").reverse().join("")},buildURLFromParts:function(l){return l.scheme+l.netLoc+l.path+l.params+l.query+l.fragment}};o.exports=s})()})(dd);function Yi(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable})),t.push.apply(t,n)}return t}function Fe(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Yi(Object(t),!0).forEach(function(n){cd(o,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):Yi(Object(t)).forEach(function(n){Object.defineProperty(o,n,Object.getOwnPropertyDescriptor(t,n))})}return o}function cd(o,e,t){return e=hd(e),e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function we(){return we=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])}return o},we.apply(this,arguments)}function ud(o,e){if(typeof o!="object"||o===null)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var n=t.call(o,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function hd(o){var e=ud(o,"string");return typeof e=="symbol"?e:String(e)}const ee=Number.isFinite||function(o){return typeof o=="number"&&isFinite(o)};let T=function(o){return o.MEDIA_ATTACHING="hlsMediaAttaching",o.MEDIA_ATTACHED="hlsMediaAttached",o.MEDIA_DETACHING="hlsMediaDetaching",o.MEDIA_DETACHED="hlsMediaDetached",o.BUFFER_RESET="hlsBufferReset",o.BUFFER_CODECS="hlsBufferCodecs",o.BUFFER_CREATED="hlsBufferCreated",o.BUFFER_APPENDING="hlsBufferAppending",o.BUFFER_APPENDED="hlsBufferAppended",o.BUFFER_EOS="hlsBufferEos",o.BUFFER_FLUSHING="hlsBufferFlushing",o.BUFFER_FLUSHED="hlsBufferFlushed",o.MANIFEST_LOADING="hlsManifestLoading",o.MANIFEST_LOADED="hlsManifestLoaded",o.MANIFEST_PARSED="hlsManifestParsed",o.LEVEL_SWITCHING="hlsLevelSwitching",o.LEVEL_SWITCHED="hlsLevelSwitched",o.LEVEL_LOADING="hlsLevelLoading",o.LEVEL_LOADED="hlsLevelLoaded",o.LEVEL_UPDATED="hlsLevelUpdated",o.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",o.LEVELS_UPDATED="hlsLevelsUpdated",o.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",o.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",o.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",o.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",o.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",o.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",o.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",o.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",o.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",o.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",o.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",o.CUES_PARSED="hlsCuesParsed",o.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",o.INIT_PTS_FOUND="hlsInitPtsFound",o.FRAG_LOADING="hlsFragLoading",o.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",o.FRAG_LOADED="hlsFragLoaded",o.FRAG_DECRYPTED="hlsFragDecrypted",o.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",o.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",o.FRAG_PARSING_METADATA="hlsFragParsingMetadata",o.FRAG_PARSED="hlsFragParsed",o.FRAG_BUFFERED="hlsFragBuffered",o.FRAG_CHANGED="hlsFragChanged",o.FPS_DROP="hlsFpsDrop",o.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",o.ERROR="hlsError",o.DESTROYING="hlsDestroying",o.KEY_LOADING="hlsKeyLoading",o.KEY_LOADED="hlsKeyLoaded",o.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",o.BACK_BUFFER_REACHED="hlsBackBufferReached",o}({}),te=function(o){return o.NETWORK_ERROR="networkError",o.MEDIA_ERROR="mediaError",o.KEY_SYSTEM_ERROR="keySystemError",o.MUX_ERROR="muxError",o.OTHER_ERROR="otherError",o}({}),M=function(o){return o.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",o.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",o.KEY_SYSTEM_NO_SESSION="keySystemNoSession",o.KEY_SYSTEM_NO_CONFIGURED_LICENSE="keySystemNoConfiguredLicense",o.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",o.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED="keySystemServerCertificateRequestFailed",o.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED="keySystemServerCertificateUpdateFailed",o.KEY_SYSTEM_SESSION_UPDATE_FAILED="keySystemSessionUpdateFailed",o.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED="keySystemStatusOutputRestricted",o.KEY_SYSTEM_STATUS_INTERNAL_ERROR="keySystemStatusInternalError",o.MANIFEST_LOAD_ERROR="manifestLoadError",o.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",o.MANIFEST_PARSING_ERROR="manifestParsingError",o.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",o.LEVEL_EMPTY_ERROR="levelEmptyError",o.LEVEL_LOAD_ERROR="levelLoadError",o.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",o.LEVEL_PARSING_ERROR="levelParsingError",o.LEVEL_SWITCH_ERROR="levelSwitchError",o.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",o.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",o.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",o.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",o.FRAG_LOAD_ERROR="fragLoadError",o.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",o.FRAG_DECRYPT_ERROR="fragDecryptError",o.FRAG_PARSING_ERROR="fragParsingError",o.FRAG_GAP="fragGap",o.REMUX_ALLOC_ERROR="remuxAllocError",o.KEY_LOAD_ERROR="keyLoadError",o.KEY_LOAD_TIMEOUT="keyLoadTimeOut",o.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",o.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",o.BUFFER_APPEND_ERROR="bufferAppendError",o.BUFFER_APPENDING_ERROR="bufferAppendingError",o.BUFFER_STALLED_ERROR="bufferStalledError",o.BUFFER_FULL_ERROR="bufferFullError",o.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",o.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",o.INTERNAL_EXCEPTION="internalException",o.INTERNAL_ABORTED="aborted",o.UNKNOWN="unknown",o}({});const ft=function(){},Ir={trace:ft,debug:ft,log:ft,warn:ft,info:ft,error:ft};let an=Ir;function pd(o){const e=self.console[o];return e?e.bind(self.console,`[${o}] >`):ft}function fd(o,...e){e.forEach(function(t){an[t]=o[t]?o[t].bind(o):pd(t)})}function md(o,e){if(self.console&&o===!0||typeof o=="object"){fd(o,"debug","log","info","warn","error");try{an.log(`Debug logs enabled for "${e}" in hls.js version 1.4.0`)}catch{an=Ir}}else an=Ir}const R=an,yd=/^(\d+)x(\d+)$/,zi=/(.+?)=(".*?"|.*?)(?:,|$)/g;class Ae{constructor(e){typeof e=="string"&&(e=Ae.parseAttrList(e));for(const t in e)e.hasOwnProperty(t)&&(t.substring(0,2)==="X-"&&(this.clientAttrs=this.clientAttrs||[],this.clientAttrs.push(t)),this[t]=e[t])}decimalInteger(e){const t=parseInt(this[e],10);return t>Number.MAX_SAFE_INTEGER?1/0:t}hexadecimalInteger(e){if(this[e]){let t=(this[e]||"0x").slice(2);t=(t.length&1?"0":"")+t;const n=new Uint8Array(t.length/2);for(let r=0;r<t.length/2;r++)n[r]=parseInt(t.slice(r*2,r*2+2),16);return n}else return null}hexadecimalIntegerAsNumber(e){const t=parseInt(this[e],16);return t>Number.MAX_SAFE_INTEGER?1/0:t}decimalFloatingPoint(e){return parseFloat(this[e])}optionalFloat(e,t){const n=this[e];return n?parseFloat(n):t}enumeratedString(e){return this[e]}bool(e){return this[e]==="YES"}decimalResolution(e){const t=yd.exec(this[e]);if(t!==null)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}}static parseAttrList(e){let t;const n={},r='"';for(zi.lastIndex=0;(t=zi.exec(e))!==null;){let i=t[2];i.indexOf(r)===0&&i.lastIndexOf(r)===i.length-1&&(i=i.slice(1,-1));const a=t[1].trim();n[a]=i}return n}}function gd(o){return o!=="ID"&&o!=="CLASS"&&o!=="START-DATE"&&o!=="DURATION"&&o!=="END-DATE"&&o!=="END-ON-NEXT"}function Ad(o){return o==="SCTE35-OUT"||o==="SCTE35-IN"}class Ua{constructor(e,t){if(this.attr=void 0,this._startDate=void 0,this._endDate=void 0,this._badValueForSameId=void 0,t){const n=t.attr;for(const r in n)if(Object.prototype.hasOwnProperty.call(e,r)&&e[r]!==n[r]){R.warn(`DATERANGE tag attribute: "${r}" does not match for tags with ID: "${e.ID}"`),this._badValueForSameId=r;break}e=we(new Ae({}),n,e)}if(this.attr=e,this._startDate=new Date(e["START-DATE"]),"END-DATE"in this.attr){const n=new Date(this.attr["END-DATE"]);ee(n.getTime())&&(this._endDate=n)}}get id(){return this.attr.ID}get class(){return this.attr.CLASS}get startDate(){return this._startDate}get endDate(){if(this._endDate)return this._endDate;const e=this.duration;return e!==null?new Date(this._startDate.getTime()+e*1e3):null}get duration(){if("DURATION"in this.attr){const e=this.attr.decimalFloatingPoint("DURATION");if(ee(e))return e}else if(this._endDate)return(this._endDate.getTime()-this._startDate.getTime())/1e3;return null}get plannedDuration(){return"PLANNED-DURATION"in this.attr?this.attr.decimalFloatingPoint("PLANNED-DURATION"):null}get endOnNext(){return this.attr.bool("END-ON-NEXT")}get isValid(){return!!this.id&&!this._badValueForSameId&&ee(this.startDate.getTime())&&(this.duration===null||this.duration>=0)&&(!this.endOnNext||!!this.class)}}class Nn{constructor(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}}var pe={AUDIO:"audio",VIDEO:"video",AUDIOVIDEO:"audiovideo"};class $a{constructor(e){this._byteRange=null,this._url=null,this.baseurl=void 0,this.relurl=void 0,this.elementaryStreams={[pe.AUDIO]:null,[pe.VIDEO]:null,[pe.AUDIOVIDEO]:null},this.baseurl=e}setByteRange(e,t){const n=e.split("@",2),r=[];n.length===1?r[0]=t?t.byteRangeEndOffset:0:r[0]=parseInt(n[1]),r[1]=parseInt(n[0])+r[0],this._byteRange=r}get byteRange(){return this._byteRange?this._byteRange:[]}get byteRangeStartOffset(){return this.byteRange[0]}get byteRangeEndOffset(){return this.byteRange[1]}get url(){return!this._url&&this.baseurl&&this.relurl&&(this._url=on.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""}set url(e){this._url=e}}class ir extends $a{constructor(e,t){super(t),this._decryptdata=null,this.rawProgramDateTime=null,this.programDateTime=null,this.tagList=[],this.duration=0,this.sn=0,this.levelkeys=void 0,this.type=void 0,this.loader=null,this.keyLoader=null,this.level=-1,this.cc=0,this.startPTS=void 0,this.endPTS=void 0,this.startDTS=void 0,this.endDTS=void 0,this.start=0,this.deltaPTS=void 0,this.maxStartPTS=void 0,this.minEndPTS=void 0,this.stats=new Nn,this.urlId=0,this.data=void 0,this.bitrateTest=!1,this.title=null,this.initSegment=null,this.endList=void 0,this.gap=void 0,this.type=e}get decryptdata(){const{levelkeys:e}=this;if(!e&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkeys&&!this.levelkeys.NONE){const t=this.levelkeys.identity;if(t)this._decryptdata=t.getDecryptData(this.sn);else{const n=Object.keys(this.levelkeys);if(n.length===1)return this._decryptdata=this.levelkeys[n[0]].getDecryptData(this.sn)}}return this._decryptdata}get end(){return this.start+this.duration}get endProgramDateTime(){if(this.programDateTime===null||!ee(this.programDateTime))return null;const e=ee(this.duration)?this.duration:0;return this.programDateTime+e*1e3}get encrypted(){var e;if((e=this._decryptdata)!=null&&e.encrypted)return!0;if(this.levelkeys){const t=Object.keys(this.levelkeys),n=t.length;if(n>1||n===1&&this.levelkeys[t[0]].encrypted)return!0}return!1}setKeyFormat(e){if(this.levelkeys){const t=this.levelkeys[e];t&&!this._decryptdata&&(this._decryptdata=t.getDecryptData(this.sn))}}abortRequests(){var e,t;(e=this.loader)==null||e.abort(),(t=this.keyLoader)==null||t.abort()}setElementaryStreamInfo(e,t,n,r,i,a=!1){const{elementaryStreams:s}=this,l=s[e];if(!l){s[e]={startPTS:t,endPTS:n,startDTS:r,endDTS:i,partial:a};return}l.startPTS=Math.min(l.startPTS,t),l.endPTS=Math.max(l.endPTS,n),l.startDTS=Math.min(l.startDTS,r),l.endDTS=Math.max(l.endDTS,i)}clearElementaryStreamInfo(){const{elementaryStreams:e}=this;e[pe.AUDIO]=null,e[pe.VIDEO]=null,e[pe.AUDIOVIDEO]=null}}class bd extends $a{constructor(e,t,n,r,i){super(n),this.fragOffset=0,this.duration=0,this.gap=!1,this.independent=!1,this.relurl=void 0,this.fragment=void 0,this.index=void 0,this.stats=new Nn,this.duration=e.decimalFloatingPoint("DURATION"),this.gap=e.bool("GAP"),this.independent=e.bool("INDEPENDENT"),this.relurl=e.enumeratedString("URI"),this.fragment=t,this.index=r;const a=e.enumeratedString("BYTERANGE");a&&this.setByteRange(a,i),i&&(this.fragOffset=i.fragOffset+i.duration)}get start(){return this.fragment.start+this.fragOffset}get end(){return this.start+this.duration}get loaded(){const{elementaryStreams:e}=this;return!!(e.audio||e.video||e.audiovideo)}}const vd=10;class xd{constructor(e){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.dateRanges=void 0,this.live=!0,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.availabilityDelay=void 0,this.misses=0,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.encryptedFragments=void 0,this.playlistParsingError=null,this.variableList=null,this.hasVariableRefs=!1,this.fragments=[],this.encryptedFragments=[],this.dateRanges={},this.url=e}reloaded(e){if(!e){this.advanced=!0,this.updated=!0;return}const t=this.lastPartSn-e.lastPartSn,n=this.lastPartIndex-e.lastPartIndex;this.updated=this.endSN!==e.endSN||!!n||!!t,this.advanced=this.endSN>e.endSN||t>0||t===0&&n>0,this.updated||this.advanced?this.misses=Math.floor(e.misses*.6):this.misses=e.misses+1,this.availabilityDelay=e.availabilityDelay}get hasProgramDateTime(){return this.fragments.length?ee(this.fragments[this.fragments.length-1].programDateTime):!1}get levelTargetDuration(){return this.averagetargetduration||this.targetduration||vd}get drift(){const e=this.driftEndTime-this.driftStartTime;return e>0?(this.driftEnd-this.driftStart)*1e3/e:1}get edge(){return this.partEnd||this.fragmentEnd}get partEnd(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].end:this.fragmentEnd}get fragmentEnd(){var e;return(e=this.fragments)!=null&&e.length?this.fragments[this.fragments.length-1].end:0}get age(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}get lastPartIndex(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].index:-1}get lastPartSn(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}}function Ur(o){return Uint8Array.from(atob(o),e=>e.charCodeAt(0))}function Ed(o){const e=Ga(o).subarray(0,16),t=new Uint8Array(16);return t.set(e,16-e.length),t}function Td(o){const e=function(n,r,i){const a=n[r];n[r]=n[i],n[i]=a};e(o,0,3),e(o,1,2),e(o,4,5),e(o,6,7)}function Sd(o){const e=o.split(":");let t=null;if(e[0]==="data"&&e.length===2){const n=e[1].split(";"),r=n[n.length-1].split(",");if(r.length===2){const i=r[0]==="base64",a=r[1];i?(n.splice(-1,1),t=Ur(a)):t=Ed(a)}}return t}function Ga(o){return Uint8Array.from(unescape(encodeURIComponent(o)),e=>e.charCodeAt(0))}var be={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.fps",PLAYREADY:"com.microsoft.playready",WIDEVINE:"com.widevine.alpha"},Oe={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.streamingkeydelivery",PLAYREADY:"com.microsoft.playready",WIDEVINE:"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"};function Wi(o){switch(o){case Oe.FAIRPLAY:return be.FAIRPLAY;case Oe.PLAYREADY:return be.PLAYREADY;case Oe.WIDEVINE:return be.WIDEVINE;case Oe.CLEARKEY:return be.CLEARKEY}}var Ka={WIDEVINE:"edef8ba979d64acea3c827dcd51d21ed"};function Cd(o){if(o===Ka.WIDEVINE)return be.WIDEVINE}function Vi(o){switch(o){case be.FAIRPLAY:return Oe.FAIRPLAY;case be.PLAYREADY:return Oe.PLAYREADY;case be.WIDEVINE:return Oe.WIDEVINE;case be.CLEARKEY:return Oe.CLEARKEY}}function ar(o){const{drmSystems:e,widevineLicenseUrl:t}=o,n=e?[be.FAIRPLAY,be.WIDEVINE,be.PLAYREADY,be.CLEARKEY].filter(r=>!!e[r]):[];return!n[be.WIDEVINE]&&t&&n.push(be.WIDEVINE),n}const Ha=function(){return typeof self<"u"&&self.navigator&&self.navigator.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null}();function wd(o,e,t,n){let r;switch(o){case be.FAIRPLAY:r=["cenc","sinf"];break;case be.WIDEVINE:case be.PLAYREADY:r=["cenc"];break;case be.CLEARKEY:r=["cenc","keyids"];break;default:throw new Error(`Unknown key-system: ${o}`)}return kd(r,e,t,n)}function kd(o,e,t,n){return[{initDataTypes:o,persistentState:n.persistentState||"not-allowed",distinctiveIdentifier:n.distinctiveIdentifier||"not-allowed",sessionTypes:n.sessionTypes||[n.sessionType||"temporary"],audioCapabilities:e.map(i=>({contentType:`audio/mp4; codecs="${i}"`,robustness:n.audioRobustness||"",encryptionScheme:n.audioEncryptionScheme||null})),videoCapabilities:t.map(i=>({contentType:`video/mp4; codecs="${i}"`,robustness:n.videoRobustness||"",encryptionScheme:n.videoEncryptionScheme||null}))}]}function yt(o,e,t){return Uint8Array.prototype.slice?o.slice(e,t):new Uint8Array(Array.prototype.slice.call(o,e,t))}const $r=(o,e)=>e+10<=o.length&&o[e]===73&&o[e+1]===68&&o[e+2]===51&&o[e+3]<255&&o[e+4]<255&&o[e+6]<128&&o[e+7]<128&&o[e+8]<128&&o[e+9]<128,qa=(o,e)=>e+10<=o.length&&o[e]===51&&o[e+1]===68&&o[e+2]===73&&o[e+3]<255&&o[e+4]<255&&o[e+6]<128&&o[e+7]<128&&o[e+8]<128&&o[e+9]<128,_n=(o,e)=>{const t=e;let n=0;for(;$r(o,e);){n+=10;const r=Un(o,e+6);n+=r,qa(o,e+10)&&(n+=10),e+=n}if(n>0)return o.subarray(t,t+n)},Un=(o,e)=>{let t=0;return t=(o[e]&127)<<21,t|=(o[e+1]&127)<<14,t|=(o[e+2]&127)<<7,t|=o[e+3]&127,t},Ld=(o,e)=>$r(o,e)&&Un(o,e+6)+10<=o.length-e,Id=o=>{const e=za(o);for(let t=0;t<e.length;t++){const n=e[t];if(Ya(n))return Od(n)}},Ya=o=>o&&o.key==="PRIV"&&o.info==="com.apple.streaming.transportStreamTimestamp",Rd=o=>{const e=String.fromCharCode(o[0],o[1],o[2],o[3]),t=Un(o,4),n=10;return{type:e,size:t,data:o.subarray(n,n+t)}},za=o=>{let e=0;const t=[];for(;$r(o,e);){const n=Un(o,e+6);e+=10;const r=e+n;for(;e+8<r;){const i=Rd(o.subarray(e)),a=Dd(i);a&&t.push(a),e+=i.size+10}qa(o,e)&&(e+=10)}return t},Dd=o=>o.type==="PRIV"?_d(o):o.type[0]==="W"?Pd(o):Bd(o),_d=o=>{if(o.size<2)return;const e=je(o.data,!0),t=new Uint8Array(o.data.subarray(e.length+1));return{key:o.type,info:e,data:t.buffer}},Bd=o=>{if(o.size<2)return;if(o.type==="TXXX"){let t=1;const n=je(o.data.subarray(t),!0);t+=n.length+1;const r=je(o.data.subarray(t));return{key:o.type,info:n,data:r}}const e=je(o.data.subarray(1));return{key:o.type,data:e}},Pd=o=>{if(o.type==="WXXX"){if(o.size<2)return;let t=1;const n=je(o.data.subarray(t),!0);t+=n.length+1;const r=je(o.data.subarray(t));return{key:o.type,info:n,data:r}}const e=je(o.data);return{key:o.type,data:e}},Od=o=>{if(o.data.byteLength===8){const e=new Uint8Array(o.data),t=e[3]&1;let n=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return n/=45,t&&(n+=4772185884e-2),Math.round(n)}},je=(o,e=!1)=>{const t=Fd();if(t){const d=t.decode(o);if(e){const u=d.indexOf("\0");return u!==-1?d.substring(0,u):d}return d.replace(/\0/g,"")}const n=o.length;let r,i,a,s="",l=0;for(;l<n;){if(r=o[l++],r===0&&e)return s;if(r===0||r===3)continue;switch(r>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:s+=String.fromCharCode(r);break;case 12:case 13:i=o[l++],s+=String.fromCharCode((r&31)<<6|i&63);break;case 14:i=o[l++],a=o[l++],s+=String.fromCharCode((r&15)<<12|(i&63)<<6|(a&63)<<0);break}}return s};let sr;function Fd(){return!sr&&typeof self.TextDecoder<"u"&&(sr=new self.TextDecoder("utf-8")),sr}const We={hexDump:function(o){let e="";for(let t=0;t<o.length;t++){let n=o[t].toString(16);n.length<2&&(n="0"+n),e+=n}return e}},Bn=Math.pow(2,32)-1,Md=[].push,Wa={video:1,audio:2,id3:3,text:4};function ke(o){return String.fromCharCode.apply(null,o)}function Va(o,e){const t=o[e]<<8|o[e+1];return t<0?65536+t:t}function ie(o,e){const t=ja(o,e);return t<0?4294967296+t:t}function ja(o,e){return o[e]<<24|o[e+1]<<16|o[e+2]<<8|o[e+3]}function or(o,e,t){o[e]=t>>24,o[e+1]=t>>16&255,o[e+2]=t>>8&255,o[e+3]=t&255}function oe(o,e){const t=[];if(!e.length)return t;const n=o.byteLength;for(let r=0;r<n;){const i=ie(o,r),a=ke(o.subarray(r+4,r+8)),s=i>1?r+i:n;if(a===e[0])if(e.length===1)t.push(o.subarray(r+8,s));else{const l=oe(o.subarray(r+8,s),e.slice(1));l.length&&Md.apply(t,l)}r=s}return t}function Nd(o){const e=[],t=o[0];let n=8;const r=ie(o,n);n+=4;const i=0,a=0;t===0?n+=8:n+=16,n+=2;let s=o.length+a;const l=Va(o,n);n+=2;for(let d=0;d<l;d++){let u=n;const f=ie(o,u);u+=4;const p=f&2147483647;if((f&2147483648)>>>31===1)return R.warn("SIDX has hierarchical references (not supported)"),null;const b=ie(o,u);u+=4,e.push({referenceSize:p,subsegmentDuration:b,info:{duration:b/r,start:s,end:s+p-1}}),s+=p,u+=4,n=u}return{earliestPresentationTime:i,timescale:r,version:t,referencesCount:l,references:e}}function Qa(o){const e=[],t=oe(o,["moov","trak"]);for(let r=0;r<t.length;r++){const i=t[r],a=oe(i,["tkhd"])[0];if(a){let s=a[0],l=s===0?12:20;const d=ie(a,l),u=oe(i,["mdia","mdhd"])[0];if(u){s=u[0],l=s===0?12:20;const f=ie(u,l),p=oe(i,["mdia","hdlr"])[0];if(p){const A=ke(p.subarray(8,12)),b={soun:pe.AUDIO,vide:pe.VIDEO}[A];if(b){const x=oe(i,["mdia","minf","stbl","stsd"])[0];let S;x&&(S=ke(x.subarray(12,16))),e[d]={timescale:f,type:b},e[b]={timescale:f,id:d,codec:S}}}}}}return oe(o,["moov","mvex","trex"]).forEach(r=>{const i=ie(r,4),a=e[i];a&&(a.default={duration:ie(r,12),flags:ie(r,20)})}),e}function Ud(o,e){if(!o||!e)return o;const t=e.keyId;return t&&e.isCommonEncryption&&oe(o,["moov","trak"]).forEach(r=>{const a=oe(r,["mdia","minf","stbl","stsd"])[0].subarray(8);let s=oe(a,["enca"]);const l=s.length>0;l||(s=oe(a,["encv"])),s.forEach(d=>{const u=l?d.subarray(28):d.subarray(78);oe(u,["sinf"]).forEach(p=>{const A=Xa(p);if(A){const b=A.subarray(8,24);b.some(x=>x!==0)||(R.log(`[eme] Patching keyId in 'enc${l?"a":"v"}>sinf>>tenc' box: ${We.hexDump(b)} -> ${We.hexDump(t)}`),A.set(t,8))}})})}),o}function Xa(o){const e=oe(o,["schm"])[0];if(e){const t=ke(e.subarray(4,8));if(t==="cbcs"||t==="cenc")return oe(o,["schi","tenc"])[0]}return R.error("[eme] missing 'schm' box"),null}function $d(o,e){return oe(e,["moof","traf"]).reduce((t,n)=>{const r=oe(n,["tfdt"])[0],i=r[0],a=oe(n,["tfhd"]).reduce((s,l)=>{const d=ie(l,4),u=o[d];if(u){let f=ie(r,4);if(i===1){if(f===Bn)return R.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"),s;f*=Bn+1,f+=ie(r,8)}const p=u.timescale||9e4,A=f/p;if(isFinite(A)&&(s===null||A<s))return A}return s},null);return a!==null&&isFinite(a)&&(t===null||a<t)?a:t},null)}function Gd(o,e){let t=0,n=0,r=0;const i=oe(o,["moof","traf"]);for(let a=0;a<i.length;a++){const s=i[a],l=oe(s,["tfhd"])[0],d=ie(l,4),u=e[d];if(!u)continue;const f=u.default,p=ie(l,0)|(f==null?void 0:f.flags);let A=f==null?void 0:f.duration;p&8&&(p&2?A=ie(l,12):A=ie(l,8));const b=u.timescale||9e4,x=oe(s,["trun"]);for(let S=0;S<x.length;S++){if(t=Kd(x[S]),!t&&A){const k=ie(x[S],4);t=A*k}u.type===pe.VIDEO?n+=t/b:u.type===pe.AUDIO&&(r+=t/b)}}if(n===0&&r===0){let a=0;const s=oe(o,["sidx"]);for(let l=0;l<s.length;l++){const d=Nd(s[l]);d!=null&&d.references&&(a+=d.references.reduce((u,f)=>u+f.info.duration||0,0))}return a}return n||r}function Kd(o){const e=ie(o,0);let t=8;e&1&&(t+=4),e&4&&(t+=4);let n=0;const r=ie(o,4);for(let i=0;i<r;i++){if(e&256){const a=ie(o,t);n+=a,t+=4}e&512&&(t+=4),e&1024&&(t+=4),e&2048&&(t+=4)}return n}function Hd(o,e,t){oe(e,["moof","traf"]).forEach(n=>{oe(n,["tfhd"]).forEach(r=>{const i=ie(r,4),a=o[i];if(!a)return;const s=a.timescale||9e4;oe(n,["tfdt"]).forEach(l=>{const d=l[0];let u=ie(l,4);if(d===0)u-=t*s,u=Math.max(u,0),or(l,4,u);else{u*=Math.pow(2,32),u+=ie(l,8),u-=t*s,u=Math.max(u,0);const f=Math.floor(u/(Bn+1)),p=Math.floor(u%(Bn+1));or(l,4,f),or(l,8,p)}})})})}function qd(o){const e={valid:null,remainder:null},t=oe(o,["moof"]);if(t){if(t.length<2)return e.remainder=o,e}else return e;const n=t[t.length-1];return e.valid=yt(o,0,n.byteOffset-8),e.remainder=yt(o,n.byteOffset-8),e}function gt(o,e){const t=new Uint8Array(o.length+e.length);return t.set(o),t.set(e,o.length),t}function ji(o,e){const t=[],n=e.samples,r=e.timescale,i=e.id;let a=!1;return oe(n,["moof"]).map(l=>{const d=l.byteOffset-8;oe(l,["traf"]).map(f=>{const p=oe(f,["tfdt"]).map(A=>{const b=A[0];let x=ie(A,4);return b===1&&(x*=Math.pow(2,32),x+=ie(A,8)),x/r})[0];return p!==void 0&&(o=p),oe(f,["tfhd"]).map(A=>{const b=ie(A,4),x=ie(A,0)&16777215,S=(x&1)!==0,k=(x&2)!==0,L=(x&8)!==0;let I=0;const D=(x&16)!==0;let _=0;const K=(x&32)!==0;let U=8;b===i&&(S&&(U+=8),k&&(U+=4),L&&(I=ie(A,U),U+=4),D&&(_=ie(A,U),U+=4),K&&(U+=4),e.type==="video"&&(a=Yd(e.codec)),oe(f,["trun"]).map(H=>{const z=H[0],O=ie(H,0)&16777215,J=(O&1)!==0;let j=0;const ae=(O&4)!==0,Te=(O&256)!==0;let fe=0;const me=(O&512)!==0;let ye=0;const X=(O&1024)!==0,G=(O&2048)!==0;let ce=0;const de=ie(H,4);let se=8;J&&(j=ie(H,se),se+=4),ae&&(se+=4);let ve=j+d;for(let Le=0;Le<de;Le++){if(Te?(fe=ie(H,se),se+=4):fe=I,me?(ye=ie(H,se),se+=4):ye=_,X&&(se+=4),G&&(z===0?ce=ie(H,se):ce=ja(H,se),se+=4),e.type===pe.VIDEO){let Ie=0;for(;Ie<ye;){const xe=ie(n,ve);if(ve+=4,zd(a,n[ve])){const Me=n.subarray(ve,ve+xe);Za(Me,a?2:1,o+ce/r,t)}ve+=xe,Ie+=xe+4}}o+=fe/r}}))})})}),t}function Yd(o){if(!o)return!1;const e=o.indexOf("."),t=e<0?o:o.substring(0,e);return t==="hvc1"||t==="hev1"||t==="dvh1"||t==="dvhe"}function zd(o,e){if(o){const t=e>>1&63;return t===39||t===40}else return(e&31)===6}function Za(o,e,t,n){const r=Ja(o);let i=0;i+=e;let a=0,s=0,l=!1,d=0;for(;i<r.length;){a=0;do{if(i>=r.length)break;d=r[i++],a+=d}while(d===255);s=0;do{if(i>=r.length)break;d=r[i++],s+=d}while(d===255);const u=r.length-i;if(!l&&a===4&&i<r.length){if(l=!0,r[i++]===181){const p=Va(r,i);if(i+=2,p===49){const A=ie(r,i);if(i+=4,A===1195456820){const b=r[i++];if(b===3){const x=r[i++],S=31&x,k=64&x,L=k?2+S*3:0,I=new Uint8Array(L);if(k){I[0]=x;for(let D=1;D<L;D++)I[D]=r[i++]}n.push({type:b,payloadType:a,pts:t,bytes:I})}}}}}else if(a===5&&s<u){if(l=!0,s>16){const f=[];for(let b=0;b<16;b++){const x=r[i++].toString(16);f.push(x.length==1?"0"+x:x),(b===3||b===5||b===7||b===9)&&f.push("-")}const p=s-16,A=new Uint8Array(p);for(let b=0;b<p;b++)A[b]=r[i++];n.push({payloadType:a,pts:t,uuid:f.join(""),userData:je(A),userDataBytes:A})}}else if(s<u)i+=s;else if(s>u)break}}function Ja(o){const e=o.byteLength,t=[];let n=1;for(;n<e-2;)o[n]===0&&o[n+1]===0&&o[n+2]===3?(t.push(n+2),n+=2):n++;if(t.length===0)return o;const r=e-t.length,i=new Uint8Array(r);let a=0;for(n=0;n<r;a++,n++)a===t[0]&&(a++,t.shift()),i[n]=o[a];return i}function Wd(o){const e=o[0];let t="",n="",r=0,i=0,a=0,s=0,l=0,d=0;if(e===0){for(;ke(o.subarray(d,d+1))!=="\0";)t+=ke(o.subarray(d,d+1)),d+=1;for(t+=ke(o.subarray(d,d+1)),d+=1;ke(o.subarray(d,d+1))!=="\0";)n+=ke(o.subarray(d,d+1)),d+=1;n+=ke(o.subarray(d,d+1)),d+=1,r=ie(o,12),i=ie(o,16),s=ie(o,20),l=ie(o,24),d=28}else if(e===1){d+=4,r=ie(o,d),d+=4;const f=ie(o,d);d+=4;const p=ie(o,d);for(d+=4,a=2**32*f+p,Number.isSafeInteger(a)||(a=Number.MAX_SAFE_INTEGER,R.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),s=ie(o,d),d+=4,l=ie(o,d),d+=4;ke(o.subarray(d,d+1))!=="\0";)t+=ke(o.subarray(d,d+1)),d+=1;for(t+=ke(o.subarray(d,d+1)),d+=1;ke(o.subarray(d,d+1))!=="\0";)n+=ke(o.subarray(d,d+1)),d+=1;n+=ke(o.subarray(d,d+1)),d+=1}const u=o.subarray(d,o.byteLength);return{schemeIdUri:t,value:n,timeScale:r,presentationTime:a,presentationTimeDelta:i,eventDuration:s,id:l,payload:u}}function Vd(o,...e){const t=e.length;let n=8,r=t;for(;r--;)n+=e[r].byteLength;const i=new Uint8Array(n);for(i[0]=n>>24&255,i[1]=n>>16&255,i[2]=n>>8&255,i[3]=n&255,i.set(o,4),r=0,n=8;r<t;r++)i.set(e[r],n),n+=e[r].byteLength;return i}function jd(o,e,t){if(o.byteLength!==16)throw new RangeError("Invalid system id");let n,r;if(e){n=1,r=new Uint8Array(e.length*16);for(let s=0;s<e.length;s++){const l=e[s];if(l.byteLength!==16)throw new RangeError("Invalid key");r.set(l,s*16)}}else n=0,r=new Uint8Array;let i;n>0?(i=new Uint8Array(4),e.length>0&&new DataView(i.buffer).setUint32(0,e.length,!1)):i=new Uint8Array;const a=new Uint8Array(4);return t&&t.byteLength>0&&new DataView(a.buffer).setUint32(0,t.byteLength,!1),Vd([112,115,115,104],new Uint8Array([n,0,0,0]),o,i,r,a,t||new Uint8Array)}function Qd(o){if(!(o instanceof ArrayBuffer)||o.byteLength<32)return null;const e={version:0,systemId:"",kids:null,data:null},t=new DataView(o),n=t.getUint32(0);if(o.byteLength!==n&&n>44||t.getUint32(4)!==1886614376||(e.version=t.getUint32(8)>>>24,e.version>1))return null;e.systemId=We.hexDump(new Uint8Array(o,12,16));const i=t.getUint32(28);if(e.version===0){if(n-32<i)return null;e.data=new Uint8Array(o,32,i)}else if(e.version===1){e.kids=[];for(let a=0;a<i;a++)e.kids.push(new Uint8Array(o,32+a*16,16))}return e}let En={};class ln{static clearKeyUriToKeyIdMap(){En={}}constructor(e,t,n,r=[1],i=null){this.uri=void 0,this.method=void 0,this.keyFormat=void 0,this.keyFormatVersions=void 0,this.encrypted=void 0,this.isCommonEncryption=void 0,this.iv=null,this.key=null,this.keyId=null,this.pssh=null,this.method=e,this.uri=t,this.keyFormat=n,this.keyFormatVersions=r,this.iv=i,this.encrypted=e?e!=="NONE":!1,this.isCommonEncryption=this.encrypted&&e!=="AES-128"}isSupported(){if(this.method){if(this.method==="AES-128"||this.method==="NONE")return!0;if(this.keyFormat==="identity")return this.method==="SAMPLE-AES";switch(this.keyFormat){case Oe.FAIRPLAY:case Oe.WIDEVINE:case Oe.PLAYREADY:case Oe.CLEARKEY:return["ISO-23001-7","SAMPLE-AES","SAMPLE-AES-CENC","SAMPLE-AES-CTR"].indexOf(this.method)!==-1}}return!1}getDecryptData(e){if(!this.encrypted||!this.uri)return null;if(this.method==="AES-128"&&this.uri&&!this.iv){typeof e!="number"&&(this.method==="AES-128"&&!this.iv&&R.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`),e=0);const n=Xd(e);return new ln(this.method,this.uri,"identity",this.keyFormatVersions,n)}const t=Sd(this.uri);if(t)switch(this.keyFormat){case Oe.WIDEVINE:this.pssh=t,t.length>=22&&(this.keyId=t.subarray(t.length-22,t.length-6));break;case Oe.PLAYREADY:{const n=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]);this.pssh=jd(n,null,t);const r=new Uint16Array(t.buffer,t.byteOffset,t.byteLength/2),i=String.fromCharCode.apply(null,Array.from(r)),a=i.substring(i.indexOf("<"),i.length),d=new DOMParser().parseFromString(a,"text/xml").getElementsByTagName("KID")[0];if(d){const u=d.childNodes[0]?d.childNodes[0].nodeValue:d.getAttribute("VALUE");if(u){const f=Ur(u).subarray(0,16);Td(f),this.keyId=f}}break}default:{let n=t.subarray(0,16);if(n.length!==16){const r=new Uint8Array(16);r.set(n,16-n.length),n=r}this.keyId=n;break}}if(!this.keyId||this.keyId.byteLength!==16){let n=En[this.uri];if(!n){const r=Object.keys(En).length%Number.MAX_SAFE_INTEGER;n=new Uint8Array(16),new DataView(n.buffer,12,4).setUint32(0,r),En[this.uri]=n}this.keyId=n}return this}}function Xd(o){const e=new Uint8Array(16);for(let t=12;t<16;t++)e[t]=o>>8*(15-t)&255;return e}const es=/\{\$([a-zA-Z0-9-_]+)\}/g;function Qi(o){return es.test(o)}function Be(o,e,t){if(o.variableList!==null||o.hasVariableRefs)for(let n=t.length;n--;){const r=t[n],i=e[r];i&&(e[r]=Rr(o,i))}}function Rr(o,e){if(o.variableList!==null||o.hasVariableRefs){const t=o.variableList;return e.replace(es,n=>{const r=n.substring(2,n.length-1),i=t==null?void 0:t[r];return i===void 0?(o.playlistParsingError||(o.playlistParsingError=new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${r}"`)),n):i})}return e}function Xi(o,e,t){let n=o.variableList;n||(o.variableList=n={});let r,i;if("QUERYPARAM"in e){r=e.QUERYPARAM;try{const a=new self.URL(t).searchParams;if(a.has(r))i=a.get(r);else throw new Error(`"${r}" does not match any query parameter in URI: "${t}"`)}catch(a){o.playlistParsingError||(o.playlistParsingError=new Error(`EXT-X-DEFINE QUERYPARAM: ${a.message}`))}}else r=e.NAME,i=e.VALUE;r in n?o.playlistParsingError||(o.playlistParsingError=new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${r}"`)):n[r]=i||""}function Zd(o,e,t){const n=e.IMPORT;if(t&&n in t){let r=o.variableList;r||(o.variableList=r={}),r[n]=t[n]}else o.playlistParsingError||(o.playlistParsingError=new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${n}"`))}const Jd={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,av01:!0,drac:!0,dva1:!0,dvav:!0,dvh1:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0},text:{stpp:!0,wvtt:!0}};function ec(o,e){const t=Jd[e];return!!t&&t[o.slice(0,4)]===!0}function lr(o,e){return MediaSource.isTypeSupported(`${e||"video"}/mp4;codecs="${o}"`)}const Zi=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,Ji=/#EXT-X-MEDIA:(.*)/g,tc=/^#EXT(?:INF|-X-TARGETDURATION):/m,ea=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[\S ]*)/.source,/#EXT-X-BYTERANGE:*(.+)/.source,/#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/#.*/.source].join("|"),"g"),nc=new RegExp([/#(EXTM3U)/.source,/#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source,/#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,/#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|"));class qe{static findGroup(e,t){for(let n=0;n<e.length;n++){const r=e[n];if(r.id===t)return r}}static convertAVC1ToAVCOTI(e){const t=e.split(".");if(t.length>2){let n=t.shift()+".";return n+=parseInt(t.shift()).toString(16),n+=("000"+parseInt(t.shift()).toString(16)).slice(-4),n}return e}static resolve(e,t){return on.buildAbsoluteURL(t,e,{alwaysNormalize:!0})}static isMediaPlaylist(e){return tc.test(e)}static parseMasterPlaylist(e,t){const n=Qi(e),r={contentSteering:null,levels:[],playlistParsingError:null,sessionData:null,sessionKeys:null,startTimeOffset:null,variableList:null,hasVariableRefs:n},i=[];Zi.lastIndex=0;let a;for(;(a=Zi.exec(e))!=null;)if(a[1]){var s;const d=new Ae(a[1]);Be(r,d,["CODECS","SUPPLEMENTAL-CODECS","ALLOWED-CPC","PATHWAY-ID","STABLE-VARIANT-ID","AUDIO","VIDEO","SUBTITLES","CLOSED-CAPTIONS","NAME"]);const u=Rr(r,a[2]),f={attrs:d,bitrate:d.decimalInteger("AVERAGE-BANDWIDTH")||d.decimalInteger("BANDWIDTH"),name:d.NAME,url:qe.resolve(u,t)},p=d.decimalResolution("RESOLUTION");p&&(f.width=p.width,f.height=p.height),rc((d.CODECS||"").split(/[ ,]+/).filter(A=>A),f),f.videoCodec&&f.videoCodec.indexOf("avc1")!==-1&&(f.videoCodec=qe.convertAVC1ToAVCOTI(f.videoCodec)),(s=f.unknownCodecs)!=null&&s.length||i.push(f),r.levels.push(f)}else if(a[3]){const d=a[3],u=a[4];switch(d){case"SESSION-DATA":{const f=new Ae(u);Be(r,f,["DATA-ID","LANGUAGE","VALUE","URI"]);const p=f["DATA-ID"];p&&(r.sessionData===null&&(r.sessionData={}),r.sessionData[p]=f);break}case"SESSION-KEY":{const f=ta(u,t,r);f.encrypted&&f.isSupported()?(r.sessionKeys===null&&(r.sessionKeys=[]),r.sessionKeys.push(f)):R.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${u}"`);break}case"DEFINE":{{const f=new Ae(u);Be(r,f,["NAME","VALUE","QUERYPARAM"]),Xi(r,f,t)}break}case"CONTENT-STEERING":{const f=new Ae(u);Be(r,f,["SERVER-URI","PATHWAY-ID"]),r.contentSteering={uri:qe.resolve(f["SERVER-URI"],t),pathwayId:f["PATHWAY-ID"]||"."};break}case"START":{r.startTimeOffset=na(u);break}}}const l=i.length>0&&i.length<r.levels.length;return r.levels=l?i:r.levels,r.levels.length===0&&(r.playlistParsingError=new Error("no levels found in manifest")),r}static parseMasterPlaylistMedia(e,t,n){let r;const i={},a=n.levels,s={AUDIO:a.map(d=>({id:d.attrs.AUDIO,audioCodec:d.audioCodec})),SUBTITLES:a.map(d=>({id:d.attrs.SUBTITLES,textCodec:d.textCodec})),"CLOSED-CAPTIONS":[]};let l=0;for(Ji.lastIndex=0;(r=Ji.exec(e))!==null;){const d=new Ae(r[1]),u=d.TYPE;if(u){const f=s[u],p=i[u]||[];i[u]=p,Be(n,d,["URI","GROUP-ID","LANGUAGE","ASSOC-LANGUAGE","STABLE-RENDITION-ID","NAME","INSTREAM-ID","CHARACTERISTICS","CHANNELS"]);const A={attrs:d,bitrate:0,id:l++,groupId:d["GROUP-ID"]||"",instreamId:d["INSTREAM-ID"],name:d.NAME||d.LANGUAGE||"",type:u,default:d.bool("DEFAULT"),autoselect:d.bool("AUTOSELECT"),forced:d.bool("FORCED"),lang:d.LANGUAGE,url:d.URI?qe.resolve(d.URI,t):""};if(f!=null&&f.length){const b=qe.findGroup(f,A.groupId)||f[0];ra(A,b,"audioCodec"),ra(A,b,"textCodec")}p.push(A)}}return i}static parseLevelPlaylist(e,t,n,r,i,a){const s=new xd(t),l=s.fragments;let d=null,u=0,f=0,p=0,A=0,b=null,x=new ir(r,t),S,k,L,I=-1,D=!1;for(ea.lastIndex=0,s.m3u8=e,s.hasVariableRefs=Qi(e);(S=ea.exec(e))!==null;){D&&(D=!1,x=new ir(r,t),x.start=p,x.sn=u,x.cc=A,x.level=n,d&&(x.initSegment=d,x.rawProgramDateTime=d.rawProgramDateTime,d.rawProgramDateTime=null));const H=S[1];if(H){x.duration=parseFloat(H);const z=(" "+S[2]).slice(1);x.title=z||null,x.tagList.push(z?["INF",H,z]:["INF",H])}else if(S[3]){if(ee(x.duration)){x.start=p,L&&sa(x,L,s),x.sn=u,x.level=n,x.cc=A,x.urlId=i,l.push(x);const z=(" "+S[3]).slice(1);x.relurl=Rr(s,z),ia(x,b),b=x,p+=x.duration,u++,f=0,D=!0}}else if(S[4]){const z=(" "+S[4]).slice(1);b?x.setByteRange(z,b):x.setByteRange(z)}else if(S[5])x.rawProgramDateTime=(" "+S[5]).slice(1),x.tagList.push(["PROGRAM-DATE-TIME",x.rawProgramDateTime]),I===-1&&(I=l.length);else{if(S=S[0].match(nc),!S){R.warn("No matches on slow regex match for level playlist!");continue}for(k=1;k<S.length&&!(typeof S[k]<"u");k++);const z=(" "+S[k]).slice(1),O=(" "+S[k+1]).slice(1),J=S[k+2]?(" "+S[k+2]).slice(1):"";switch(z){case"PLAYLIST-TYPE":s.type=O.toUpperCase();break;case"MEDIA-SEQUENCE":u=s.startSN=parseInt(O);break;case"SKIP":{const j=new Ae(O);Be(s,j,["RECENTLY-REMOVED-DATERANGES"]);const ae=j.decimalInteger("SKIPPED-SEGMENTS");if(ee(ae)){s.skippedSegments=ae;for(let fe=ae;fe--;)l.unshift(null);u+=ae}const Te=j.enumeratedString("RECENTLY-REMOVED-DATERANGES");Te&&(s.recentlyRemovedDateranges=Te.split("	"));break}case"TARGETDURATION":s.targetduration=Math.max(parseInt(O),1);break;case"VERSION":s.version=parseInt(O);break;case"EXTM3U":break;case"ENDLIST":s.live=!1;break;case"#":(O||J)&&x.tagList.push(J?[O,J]:[O]);break;case"DISCONTINUITY":A++,x.tagList.push(["DIS"]);break;case"GAP":x.gap=!0,x.tagList.push([z]);break;case"BITRATE":x.tagList.push([z,O]);break;case"DATERANGE":{const j=new Ae(O);Be(s,j,["ID","CLASS","START-DATE","END-DATE","SCTE35-CMD","SCTE35-OUT","SCTE35-IN"]),Be(s,j,j.clientAttrs);const ae=new Ua(j,s.dateRanges[j.ID]);ae.isValid||s.skippedSegments?s.dateRanges[ae.id]=ae:R.warn(`Ignoring invalid DATERANGE tag: "${O}"`),x.tagList.push(["EXT-X-DATERANGE",O]);break}case"DEFINE":{{const j=new Ae(O);Be(s,j,["NAME","VALUE","IMPORT","QUERYPARAM"]),"IMPORT"in j?Zd(s,j,a):Xi(s,j,t)}break}case"DISCONTINUITY-SEQUENCE":A=parseInt(O);break;case"KEY":{const j=ta(O,t,s);if(j.isSupported()){if(j.method==="NONE"){L=void 0;break}L||(L={}),L[j.keyFormat]&&(L=we({},L)),L[j.keyFormat]=j}else R.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${O}"`);break}case"START":s.startTimeOffset=na(O);break;case"MAP":{const j=new Ae(O);if(Be(s,j,["BYTERANGE","URI"]),x.duration){const ae=new ir(r,t);aa(ae,j,n,L),d=ae,x.initSegment=d,d.rawProgramDateTime&&!x.rawProgramDateTime&&(x.rawProgramDateTime=d.rawProgramDateTime)}else aa(x,j,n,L),d=x,D=!0;break}case"SERVER-CONTROL":{const j=new Ae(O);s.canBlockReload=j.bool("CAN-BLOCK-RELOAD"),s.canSkipUntil=j.optionalFloat("CAN-SKIP-UNTIL",0),s.canSkipDateRanges=s.canSkipUntil>0&&j.bool("CAN-SKIP-DATERANGES"),s.partHoldBack=j.optionalFloat("PART-HOLD-BACK",0),s.holdBack=j.optionalFloat("HOLD-BACK",0);break}case"PART-INF":{const j=new Ae(O);s.partTarget=j.decimalFloatingPoint("PART-TARGET");break}case"PART":{let j=s.partList;j||(j=s.partList=[]);const ae=f>0?j[j.length-1]:void 0,Te=f++,fe=new Ae(O);Be(s,fe,["BYTERANGE","URI"]);const me=new bd(fe,x,t,Te,ae);j.push(me),x.duration+=me.duration;break}case"PRELOAD-HINT":{const j=new Ae(O);Be(s,j,["URI"]),s.preloadHint=j;break}case"RENDITION-REPORT":{const j=new Ae(O);Be(s,j,["URI"]),s.renditionReports=s.renditionReports||[],s.renditionReports.push(j);break}default:R.warn(`line parsed but not handled: ${S}`);break}}}b&&!b.relurl?(l.pop(),p-=b.duration,s.partList&&(s.fragmentHint=b)):s.partList&&(ia(x,b),x.cc=A,s.fragmentHint=x,L&&sa(x,L,s));const _=l.length,K=l[0],U=l[_-1];if(p+=s.skippedSegments*s.targetduration,p>0&&_&&U){s.averagetargetduration=p/_;const H=U.sn;s.endSN=H!=="initSegment"?H:0,s.live||(U.endList=!0),K&&(s.startCC=K.cc)}else s.endSN=0,s.startCC=0;return s.fragmentHint&&(p+=s.fragmentHint.duration),s.totalduration=p,s.endCC=A,I>0&&ic(l,I),s}}function ta(o,e,t){var n,r;const i=new Ae(o);Be(t,i,["KEYFORMAT","KEYFORMATVERSIONS","URI","IV","URI"]);const a=(n=i.METHOD)!=null?n:"",s=i.URI,l=i.hexadecimalInteger("IV"),d=i.KEYFORMATVERSIONS,u=(r=i.KEYFORMAT)!=null?r:"identity";s&&i.IV&&!l&&R.error(`Invalid IV: ${i.IV}`);const f=s?qe.resolve(s,e):"",p=(d||"1").split("/").map(Number).filter(Number.isFinite);return new ln(a,f,u,p,l)}function na(o){const t=new Ae(o).decimalFloatingPoint("TIME-OFFSET");return ee(t)?t:null}function rc(o,e){["video","audio","text"].forEach(t=>{const n=o.filter(r=>ec(r,t));if(n.length){const r=n.filter(i=>i.lastIndexOf("avc1",0)===0||i.lastIndexOf("mp4a",0)===0);e[`${t}Codec`]=r.length>0?r[0]:n[0],o=o.filter(i=>n.indexOf(i)===-1)}}),e.unknownCodecs=o}function ra(o,e,t){const n=e[t];n&&(o[t]=n)}function ic(o,e){let t=o[e];for(let n=e;n--;){const r=o[n];if(!r)return;r.programDateTime=t.programDateTime-r.duration*1e3,t=r}}function ia(o,e){o.rawProgramDateTime?o.programDateTime=Date.parse(o.rawProgramDateTime):e!=null&&e.programDateTime&&(o.programDateTime=e.endProgramDateTime),ee(o.programDateTime)||(o.programDateTime=null,o.rawProgramDateTime=null)}function aa(o,e,t,n){o.relurl=e.URI,e.BYTERANGE&&o.setByteRange(e.BYTERANGE),o.level=t,o.sn="initSegment",n&&(o.levelkeys=n),o.initSegment=null}function sa(o,e,t){o.levelkeys=e;const{encryptedFragments:n}=t;(!n.length||n[n.length-1].levelkeys!==e)&&Object.keys(e).some(r=>e[r].isCommonEncryption)&&n.push(o)}var le={MANIFEST:"manifest",LEVEL:"level",AUDIO_TRACK:"audioTrack",SUBTITLE_TRACK:"subtitleTrack"},ne={MAIN:"main",AUDIO:"audio",SUBTITLE:"subtitle"};function oa(o){const{type:e}=o;switch(e){case le.AUDIO_TRACK:return ne.AUDIO;case le.SUBTITLE_TRACK:return ne.SUBTITLE;default:return ne.MAIN}}function dr(o,e){let t=o.url;return(t===void 0||t.indexOf("data:")===0)&&(t=e.url),t}class ac{constructor(e){this.hls=void 0,this.loaders=Object.create(null),this.variableList=null,this.hls=e,this.registerListeners()}startLoad(e){}stopLoad(){this.destroyInternalLoaders()}registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.on(T.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_LOADING,this.onLevelLoading,this),e.off(T.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.off(T.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)}createInternalLoader(e){const t=this.hls.config,n=t.pLoader,r=t.loader,i=n||r,a=new i(t);return this.loaders[e.type]=a,a}getInternalLoader(e){return this.loaders[e.type]}resetInternalLoader(e){this.loaders[e]&&delete this.loaders[e]}destroyInternalLoaders(){for(const e in this.loaders){const t=this.loaders[e];t&&t.destroy(),this.resetInternalLoader(e)}}destroy(){this.variableList=null,this.unregisterListeners(),this.destroyInternalLoaders()}onManifestLoading(e,t){const{url:n}=t;this.variableList=null,this.load({id:null,level:0,responseType:"text",type:le.MANIFEST,url:n,deliveryDirectives:null})}onLevelLoading(e,t){const{id:n,level:r,url:i,deliveryDirectives:a}=t;this.load({id:n,level:r,responseType:"text",type:le.LEVEL,url:i,deliveryDirectives:a})}onAudioTrackLoading(e,t){const{id:n,groupId:r,url:i,deliveryDirectives:a}=t;this.load({id:n,groupId:r,level:null,responseType:"text",type:le.AUDIO_TRACK,url:i,deliveryDirectives:a})}onSubtitleTrackLoading(e,t){const{id:n,groupId:r,url:i,deliveryDirectives:a}=t;this.load({id:n,groupId:r,level:null,responseType:"text",type:le.SUBTITLE_TRACK,url:i,deliveryDirectives:a})}load(e){var t;const n=this.hls.config;let r=this.getInternalLoader(e);if(r){const d=r.context;if(d&&d.url===e.url){R.trace("[playlist-loader]: playlist request ongoing");return}R.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`),r.abort()}let i;if(e.type===le.MANIFEST?i=n.manifestLoadPolicy.default:i=we({},n.playlistLoadPolicy.default,{timeoutRetry:null,errorRetry:null}),r=this.createInternalLoader(e),(t=e.deliveryDirectives)!=null&&t.part){let d;if(e.type===le.LEVEL&&e.level!==null?d=this.hls.levels[e.level].details:e.type===le.AUDIO_TRACK&&e.id!==null?d=this.hls.audioTracks[e.id].details:e.type===le.SUBTITLE_TRACK&&e.id!==null&&(d=this.hls.subtitleTracks[e.id].details),d){const u=d.partTarget,f=d.targetduration;if(u&&f){const p=Math.max(u*3,f*.8)*1e3;i=we({},i,{maxTimeToFirstByteMs:Math.min(p,i.maxTimeToFirstByteMs),maxLoadTimeMs:Math.min(p,i.maxTimeToFirstByteMs)})}}}const a=i.errorRetry||i.timeoutRetry||{},s={loadPolicy:i,timeout:i.maxLoadTimeMs,maxRetry:a.maxNumRetry||0,retryDelay:a.retryDelayMs||0,maxRetryDelay:a.maxRetryDelayMs||0},l={onSuccess:(d,u,f,p)=>{const A=this.getInternalLoader(f);this.resetInternalLoader(f.type);const b=d.data;if(b.indexOf("#EXTM3U")!==0){this.handleManifestParsingError(d,f,new Error("no EXTM3U delimiter"),p||null,u);return}u.parsing.start=performance.now(),qe.isMediaPlaylist(b)?this.handleTrackOrLevelPlaylist(d,u,f,p||null,A):this.handleMasterPlaylist(d,u,f,p)},onError:(d,u,f,p)=>{this.handleNetworkError(u,f,!1,d,p)},onTimeout:(d,u,f)=>{this.handleNetworkError(u,f,!0,void 0,d)}};r.load(e,s,l)}handleMasterPlaylist(e,t,n,r){const i=this.hls,a=e.data,s=dr(e,n),l=qe.parseMasterPlaylist(a,s);if(l.playlistParsingError){this.handleManifestParsingError(e,n,l.playlistParsingError,r,t);return}const{contentSteering:d,levels:u,sessionData:f,sessionKeys:p,startTimeOffset:A,variableList:b}=l;this.variableList=b;const{AUDIO:x=[],SUBTITLES:S,"CLOSED-CAPTIONS":k}=qe.parseMasterPlaylistMedia(a,s,l);x.length&&!x.some(I=>!I.url)&&u[0].audioCodec&&!u[0].attrs.AUDIO&&(R.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),x.unshift({type:"main",name:"main",groupId:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new Ae({}),bitrate:0,url:""})),i.trigger(T.MANIFEST_LOADED,{levels:u,audioTracks:x,subtitles:S,captions:k,contentSteering:d,url:s,stats:t,networkDetails:r,sessionData:f,sessionKeys:p,startTimeOffset:A,variableList:b})}handleTrackOrLevelPlaylist(e,t,n,r,i){const a=this.hls,{id:s,level:l,type:d}=n,u=dr(e,n),f=ee(s)?s:0,p=ee(l)?l:f,A=oa(n),b=qe.parseLevelPlaylist(e.data,u,p,A,f,this.variableList);if(d===le.MANIFEST){const x={attrs:new Ae({}),bitrate:0,details:b,name:"",url:u};a.trigger(T.MANIFEST_LOADED,{levels:[x],audioTracks:[],url:u,stats:t,networkDetails:r,sessionData:null,sessionKeys:null,contentSteering:null,startTimeOffset:null,variableList:null})}t.parsing.end=performance.now(),n.levelDetails=b,this.handlePlaylistLoaded(b,e,t,n,r,i)}handleManifestParsingError(e,t,n,r,i){this.hls.trigger(T.ERROR,{type:te.NETWORK_ERROR,details:M.MANIFEST_PARSING_ERROR,fatal:t.type===le.MANIFEST,url:e.url,err:n,error:n,reason:n.message,response:e,context:t,networkDetails:r,stats:i})}handleNetworkError(e,t,n=!1,r,i){let a=`A network ${n?"timeout":"error"+(r?" (status "+r.code+")":"")} occurred while loading ${e.type}`;e.type===le.LEVEL?a+=`: ${e.level} id: ${e.id}`:(e.type===le.AUDIO_TRACK||e.type===le.SUBTITLE_TRACK)&&(a+=` id: ${e.id} group-id: "${e.groupId}"`);const s=new Error(a);R.warn(`[playlist-loader]: ${a}`);let l=M.UNKNOWN,d=!1;const u=this.getInternalLoader(e);switch(e.type){case le.MANIFEST:l=n?M.MANIFEST_LOAD_TIMEOUT:M.MANIFEST_LOAD_ERROR,d=!0;break;case le.LEVEL:l=n?M.LEVEL_LOAD_TIMEOUT:M.LEVEL_LOAD_ERROR,d=!1;break;case le.AUDIO_TRACK:l=n?M.AUDIO_TRACK_LOAD_TIMEOUT:M.AUDIO_TRACK_LOAD_ERROR,d=!1;break;case le.SUBTITLE_TRACK:l=n?M.SUBTITLE_TRACK_LOAD_TIMEOUT:M.SUBTITLE_LOAD_ERROR,d=!1;break}u&&this.resetInternalLoader(e.type);const f={type:te.NETWORK_ERROR,details:l,fatal:d,url:e.url,loader:u,context:e,error:s,networkDetails:t,stats:i};if(r){const p=(t==null?void 0:t.url)||e.url;f.response=Fe({url:p,data:void 0},r)}this.hls.trigger(T.ERROR,f)}handlePlaylistLoaded(e,t,n,r,i,a){const s=this.hls,{type:l,level:d,id:u,groupId:f,deliveryDirectives:p}=r,A=dr(t,r),b=oa(r),x=typeof r.level=="number"&&b===ne.MAIN?d:void 0;if(!e.fragments.length){const k=new Error("No Segments found in Playlist");s.trigger(T.ERROR,{type:te.NETWORK_ERROR,details:M.LEVEL_EMPTY_ERROR,fatal:!1,url:A,error:k,reason:k.message,response:t,context:r,level:x,parent:b,networkDetails:i,stats:n});return}e.targetduration||(e.playlistParsingError=new Error("Missing Target Duration"));const S=e.playlistParsingError;if(S){s.trigger(T.ERROR,{type:te.NETWORK_ERROR,details:M.LEVEL_PARSING_ERROR,fatal:!1,url:A,error:S,reason:S.message,response:t,context:r,level:x,parent:b,networkDetails:i,stats:n});return}switch(e.live&&a&&(a.getCacheAge&&(e.ageHeader=a.getCacheAge()||0),(!a.getCacheAge||isNaN(e.ageHeader))&&(e.ageHeader=0)),l){case le.MANIFEST:case le.LEVEL:s.trigger(T.LEVEL_LOADED,{details:e,level:x||0,id:u||0,stats:n,networkDetails:i,deliveryDirectives:p});break;case le.AUDIO_TRACK:s.trigger(T.AUDIO_TRACK_LOADED,{details:e,id:u||0,groupId:f||"",stats:n,networkDetails:i,deliveryDirectives:p});break;case le.SUBTITLE_TRACK:s.trigger(T.SUBTITLE_TRACK_LOADED,{details:e,id:u||0,groupId:f||"",stats:n,networkDetails:i,deliveryDirectives:p});break}}}function ts(o,e){let t;try{t=new Event("addtrack")}catch{t=document.createEvent("Event"),t.initEvent("addtrack",!1,!1)}t.track=o,e.dispatchEvent(t)}function ns(o,e){const t=o.mode;if(t==="disabled"&&(o.mode="hidden"),o.cues&&!o.cues.getCueById(e.id))try{if(o.addCue(e),!o.cues.getCueById(e.id))throw new Error(`addCue is failed for: ${e}`)}catch(n){R.debug(`[texttrack-utils]: ${n}`);const r=new self.TextTrackCue(e.startTime,e.endTime,e.text);r.id=e.id,o.addCue(r)}t==="disabled"&&(o.mode=t)}function It(o){const e=o.mode;if(e==="disabled"&&(o.mode="hidden"),o.cues)for(let t=o.cues.length;t--;)o.removeCue(o.cues[t]);e==="disabled"&&(o.mode=e)}function Dr(o,e,t,n){const r=o.mode;if(r==="disabled"&&(o.mode="hidden"),o.cues&&o.cues.length>0){const i=oc(o.cues,e,t);for(let a=0;a<i.length;a++)(!n||n(i[a]))&&o.removeCue(i[a])}r==="disabled"&&(o.mode=r)}function sc(o,e){if(e<o[0].startTime)return 0;const t=o.length-1;if(e>o[t].endTime)return-1;let n=0,r=t;for(;n<=r;){const i=Math.floor((r+n)/2);if(e<o[i].startTime)r=i-1;else if(e>o[i].startTime&&n<t)n=i+1;else return i}return o[n].startTime-e<e-o[r].startTime?n:r}function oc(o,e,t){const n=[],r=sc(o,e);if(r>-1)for(let i=r,a=o.length;i<a;i++){const s=o[i];if(s.startTime>=e&&s.endTime<=t)n.push(s);else if(s.startTime>t)return n}return n}var He={audioId3:"org.id3",dateRange:"com.apple.quicktime.HLS",emsg:"https://aomedia.org/emsg/ID3"};const lc=.25;function _r(){if(!(typeof self>"u"))return self.WebKitDataCue||self.VTTCue||self.TextTrackCue}const Tn=(()=>{const o=_r();try{new o(0,Number.POSITIVE_INFINITY,"")}catch{return Number.MAX_VALUE}return Number.POSITIVE_INFINITY})();function cr(o,e){return o.getTime()/1e3-e}function dc(o){return Uint8Array.from(o.replace(/^0x/,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ")).buffer}class cc{constructor(e){this.hls=void 0,this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=e,this._registerListeners()}destroy(){this._unregisterListeners(),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=null}_registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.LEVEL_UPDATED,this.onLevelUpdated,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.LEVEL_UPDATED,this.onLevelUpdated,this)}onMediaAttached(e,t){this.media=t.media}onMediaDetaching(){!this.id3Track||(It(this.id3Track),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={})}onManifestLoading(){this.dateRangeCuesAppended={}}createTrack(e){const t=this.getID3Track(e.textTracks);return t.mode="hidden",t}getID3Track(e){if(!!this.media){for(let t=0;t<e.length;t++){const n=e[t];if(n.kind==="metadata"&&n.label==="id3")return ts(n,this.media),n}return this.media.addTextTrack("metadata","id3")}}onFragParsingMetadata(e,t){if(!this.media)return;const{hls:{config:{enableEmsgMetadataCues:n,enableID3MetadataCues:r}}}=this;if(!n&&!r)return;const{samples:i}=t;this.id3Track||(this.id3Track=this.createTrack(this.media));const a=_r();for(let s=0;s<i.length;s++){const l=i[s].type;if(l===He.emsg&&!n||!r)continue;const d=za(i[s].data);if(d){const u=i[s].pts;let f=u+i[s].duration;f>Tn&&(f=Tn),f-u<=0&&(f=u+lc);for(let A=0;A<d.length;A++){const b=d[A];if(!Ya(b)){this.updateId3CueEnds(u);const x=new a(u,f,"");x.value=b,l&&(x.type=l),this.id3Track.addCue(x)}}}}}updateId3CueEnds(e){var t;const n=(t=this.id3Track)==null?void 0:t.cues;if(n)for(let r=n.length;r--;){const i=n[r];i.startTime<e&&i.endTime===Tn&&(i.endTime=e)}}onBufferFlushing(e,{startOffset:t,endOffset:n,type:r}){const{id3Track:i,hls:a}=this;if(!a)return;const{config:{enableEmsgMetadataCues:s,enableID3MetadataCues:l}}=a;if(i&&(s||l)){let d;r==="audio"?d=u=>u.type===He.audioId3&&l:r==="video"?d=u=>u.type===He.emsg&&s:d=u=>u.type===He.audioId3&&l||u.type===He.emsg&&s,Dr(i,t,n,d)}}onLevelUpdated(e,{details:t}){if(!this.media||!t.hasProgramDateTime||!this.hls.config.enableDateRangeMetadataCues)return;const{dateRangeCuesAppended:n,id3Track:r}=this,{dateRanges:i}=t,a=Object.keys(i);if(r){const u=Object.keys(n).filter(f=>!a.includes(f));for(let f=u.length;f--;){const p=u[f];Object.keys(n[p].cues).forEach(A=>{r.removeCue(n[p].cues[A])}),delete n[p]}}const s=t.fragments[t.fragments.length-1];if(a.length===0||!ee(s==null?void 0:s.programDateTime))return;this.id3Track||(this.id3Track=this.createTrack(this.media));const l=s.programDateTime/1e3-s.start,d=_r();for(let u=0;u<a.length;u++){const f=a[u],p=i[f],A=n[f],b=(A==null?void 0:A.cues)||{};let x=(A==null?void 0:A.durationKnown)||!1;const S=cr(p.startDate,l);let k=Tn;const L=p.endDate;if(L)k=cr(L,l),x=!0;else if(p.endOnNext&&!x){const D=a.reduce((_,K)=>{const U=i[K];return U.class===p.class&&U.id!==K&&U.startDate>p.startDate&&_.push(U),_},[]).sort((_,K)=>_.startDate.getTime()-K.startDate.getTime())[0];D&&(k=cr(D.startDate,l),x=!0)}const I=Object.keys(p.attr);for(let D=0;D<I.length;D++){const _=I[D];if(!gd(_))continue;let K=b[_];if(K)x&&!A.durationKnown&&(K.endTime=k);else{let U=p.attr[_];K=new d(S,k,""),Ad(_)&&(U=dc(U)),K.value={key:_,data:U},K.type=He.dateRange,K.id=f,this.id3Track.addCue(K),b[_]=K}}n[f]={cues:b,dateRange:p,durationKnown:x}}}}class uc{constructor(e){this.hls=void 0,this.config=void 0,this.media=null,this.levelDetails=null,this.currentTime=0,this.stallCount=0,this._latency=null,this.timeupdateHandler=()=>this.timeupdate(),this.hls=e,this.config=e.config,this.registerListeners()}get latency(){return this._latency||0}get maxLatency(){const{config:e,levelDetails:t}=this;return e.liveMaxLatencyDuration!==void 0?e.liveMaxLatencyDuration:t?e.liveMaxLatencyDurationCount*t.targetduration:0}get targetLatency(){const{levelDetails:e}=this;if(e===null)return null;const{holdBack:t,partHoldBack:n,targetduration:r}=e,{liveSyncDuration:i,liveSyncDurationCount:a,lowLatencyMode:s}=this.config,l=this.hls.userConfig;let d=s&&n||t;(l.liveSyncDuration||l.liveSyncDurationCount||d===0)&&(d=i!==void 0?i:a*r);const u=r,f=1;return d+Math.min(this.stallCount*f,u)}get liveSyncPosition(){const e=this.estimateLiveEdge(),t=this.targetLatency,n=this.levelDetails;if(e===null||t===null||n===null)return null;const r=n.edge,i=e-t-this.edgeStalled,a=r-n.totalduration,s=r-(this.config.lowLatencyMode&&n.partTarget||n.targetduration);return Math.min(Math.max(a,i),s)}get drift(){const{levelDetails:e}=this;return e===null?1:e.drift}get edgeStalled(){const{levelDetails:e}=this;if(e===null)return 0;const t=(this.config.lowLatencyMode&&e.partTarget||e.targetduration)*3;return Math.max(e.age-t,0)}get forwardBufferLength(){const{media:e,levelDetails:t}=this;if(!e||!t)return 0;const n=e.buffered.length;return(n?e.buffered.end(n-1):t.edge)-this.currentTime}destroy(){this.unregisterListeners(),this.onMediaDetaching(),this.levelDetails=null,this.hls=this.timeupdateHandler=null}registerListeners(){this.hls.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.on(T.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(T.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.on(T.ERROR,this.onError,this)}unregisterListeners(){this.hls.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.off(T.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(T.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.off(T.ERROR,this.onError,this)}onMediaAttached(e,t){this.media=t.media,this.media.addEventListener("timeupdate",this.timeupdateHandler)}onMediaDetaching(){this.media&&(this.media.removeEventListener("timeupdate",this.timeupdateHandler),this.media=null)}onManifestLoading(){this.levelDetails=null,this._latency=null,this.stallCount=0}onLevelUpdated(e,{details:t}){this.levelDetails=t,t.advanced&&this.timeupdate(),!t.live&&this.media&&this.media.removeEventListener("timeupdate",this.timeupdateHandler)}onError(e,t){var n;t.details===M.BUFFER_STALLED_ERROR&&(this.stallCount++,(n=this.levelDetails)!=null&&n.live&&R.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))}timeupdate(){const{media:e,levelDetails:t}=this;if(!e||!t)return;this.currentTime=e.currentTime;const n=this.computeLatency();if(n===null)return;this._latency=n;const{lowLatencyMode:r,maxLiveSyncPlaybackRate:i}=this.config;if(!r||i===1)return;const a=this.targetLatency;if(a===null)return;const s=n-a,l=Math.min(this.maxLatency,a+t.targetduration),d=s<l;if(t.live&&d&&s>.05&&this.forwardBufferLength>1){const u=Math.min(2,Math.max(1,i)),f=Math.round(2/(1+Math.exp(-.75*s-this.edgeStalled))*20)/20;e.playbackRate=Math.min(u,Math.max(1,f))}else e.playbackRate!==1&&e.playbackRate!==0&&(e.playbackRate=1)}estimateLiveEdge(){const{levelDetails:e}=this;return e===null?null:e.edge+e.age}computeLatency(){const e=this.estimateLiveEdge();return e===null?null:e-this.currentTime}}const Br=["NONE","TYPE-0","TYPE-1",null];var sn={No:"",Yes:"YES",v2:"v2"};function hc(o,e){const{canSkipUntil:t,canSkipDateRanges:n,endSN:r}=o,i=e!==void 0?e-r:0;return t&&i<t?n?sn.v2:sn.Yes:sn.No}class la{constructor(e,t,n){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=e,this.part=t,this.skip=n}addDirectives(e){const t=new self.URL(e);return this.msn!==void 0&&t.searchParams.set("_HLS_msn",this.msn.toString()),this.part!==void 0&&t.searchParams.set("_HLS_part",this.part.toString()),this.skip&&t.searchParams.set("_HLS_skip",this.skip),t.href}}class dn{constructor(e){this._attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.videoCodec=void 0,this.width=void 0,this.unknownCodecs=void 0,this.audioGroupIds=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.textGroupIds=void 0,this.url=void 0,this._urlId=0,this.url=[e.url],this._attrs=[e.attrs],this.bitrate=e.bitrate,e.details&&(this.details=e.details),this.id=e.id||0,this.name=e.name,this.width=e.width||0,this.height=e.height||0,this.audioCodec=e.audioCodec,this.videoCodec=e.videoCodec,this.unknownCodecs=e.unknownCodecs,this.codecSet=[e.videoCodec,e.audioCodec].filter(t=>t).join(",").replace(/\.[^.,]+/g,"")}get maxBitrate(){return Math.max(this.realBitrate,this.bitrate)}get attrs(){return this._attrs[this._urlId]}get pathwayId(){return this.attrs["PATHWAY-ID"]||"."}get uri(){return this.url[this._urlId]||""}get urlId(){return this._urlId}set urlId(e){const t=e%this.url.length;this._urlId!==t&&(this.fragmentError=0,this.loadError=0,this.details=void 0,this._urlId=t)}get audioGroupId(){var e;return(e=this.audioGroupIds)==null?void 0:e[this.urlId]}get textGroupId(){var e;return(e=this.textGroupIds)==null?void 0:e[this.urlId]}addFallback(e){this.url.push(e.url),this._attrs.push(e.attrs)}}function ur(o,e){const t=e.startPTS;if(ee(t)){let n=0,r;e.sn>o.sn?(n=t-o.start,r=o):(n=o.start-t,r=e),r.duration!==n&&(r.duration=n)}else e.sn>o.sn?o.cc===e.cc&&o.minEndPTS?e.start=o.start+(o.minEndPTS-o.start):e.start=o.start+o.duration:e.start=Math.max(o.start-e.duration,0)}function rs(o,e,t,n,r,i){n-t<=0&&(R.warn("Fragment should have a positive duration",e),n=t+e.duration,i=r+e.duration);let s=t,l=n;const d=e.startPTS,u=e.endPTS;if(ee(d)){const S=Math.abs(d-t);ee(e.deltaPTS)?e.deltaPTS=Math.max(S,e.deltaPTS):e.deltaPTS=S,s=Math.max(t,d),t=Math.min(t,d),r=Math.min(r,e.startDTS),l=Math.min(n,u),n=Math.max(n,u),i=Math.max(i,e.endDTS)}const f=t-e.start;e.start!==0&&(e.start=t),e.duration=n-e.start,e.startPTS=t,e.maxStartPTS=s,e.startDTS=r,e.endPTS=n,e.minEndPTS=l,e.endDTS=i;const p=e.sn;if(!o||p<o.startSN||p>o.endSN)return 0;let A;const b=p-o.startSN,x=o.fragments;for(x[b]=e,A=b;A>0;A--)ur(x[A],x[A-1]);for(A=b;A<x.length-1;A++)ur(x[A],x[A+1]);return o.fragmentHint&&ur(x[x.length-1],o.fragmentHint),o.PTSKnown=o.alignedSliding=!0,f}function pc(o,e){let t=null;const n=o.fragments;for(let l=n.length-1;l>=0;l--){const d=n[l].initSegment;if(d){t=d;break}}o.fragmentHint&&delete o.fragmentHint.endPTS;let r=0,i;if(yc(o,e,(l,d)=>{l.relurl&&(r=l.cc-d.cc),ee(l.startPTS)&&ee(l.endPTS)&&(d.start=d.startPTS=l.startPTS,d.startDTS=l.startDTS,d.maxStartPTS=l.maxStartPTS,d.endPTS=l.endPTS,d.endDTS=l.endDTS,d.minEndPTS=l.minEndPTS,d.duration=l.endPTS-l.startPTS,d.duration&&(i=d),e.PTSKnown=e.alignedSliding=!0),d.elementaryStreams=l.elementaryStreams,d.loader=l.loader,d.stats=l.stats,d.urlId=l.urlId,l.initSegment&&(d.initSegment=l.initSegment,t=l.initSegment)}),t&&(e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments).forEach(d=>{var u;(!d.initSegment||d.initSegment.relurl===((u=t)==null?void 0:u.relurl))&&(d.initSegment=t)}),e.skippedSegments)if(e.deltaUpdateFailed=e.fragments.some(l=>!l),e.deltaUpdateFailed){R.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(let l=e.skippedSegments;l--;)e.fragments.shift();e.startSN=e.fragments[0].sn,e.startCC=e.fragments[0].cc}else e.canSkipDateRanges&&(e.dateRanges=fc(o.dateRanges,e.dateRanges,e.recentlyRemovedDateranges));const a=e.fragments;if(r){R.warn("discontinuity sliding from playlist, take drift into account");for(let l=0;l<a.length;l++)a[l].cc+=r}e.skippedSegments&&(e.startCC=e.fragments[0].cc),mc(o.partList,e.partList,(l,d)=>{d.elementaryStreams=l.elementaryStreams,d.stats=l.stats}),i?rs(e,i,i.startPTS,i.endPTS,i.startDTS,i.endDTS):is(o,e),a.length&&(e.totalduration=e.edge-a[0].start),e.driftStartTime=o.driftStartTime,e.driftStart=o.driftStart;const s=e.advancedDateTime;if(e.advanced&&s){const l=e.edge;e.driftStart||(e.driftStartTime=s,e.driftStart=l),e.driftEndTime=s,e.driftEnd=l}else e.driftEndTime=o.driftEndTime,e.driftEnd=o.driftEnd,e.advancedDateTime=o.advancedDateTime}function fc(o,e,t){const n=we({},o);return t&&t.forEach(r=>{delete n[r]}),Object.keys(e).forEach(r=>{const i=new Ua(e[r].attr,n[r]);i.isValid?n[r]=i:R.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(e[r].attr)}"`)}),n}function mc(o,e,t){if(o&&e){let n=0;for(let r=0,i=o.length;r<=i;r++){const a=o[r],s=e[r+n];a&&s&&a.index===s.index&&a.fragment.sn===s.fragment.sn?t(a,s):n--}}}function yc(o,e,t){const n=e.skippedSegments,r=Math.max(o.startSN,e.startSN)-e.startSN,i=(o.fragmentHint?1:0)+(n?e.endSN:Math.min(o.endSN,e.endSN))-e.startSN,a=e.startSN-o.startSN,s=e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments,l=o.fragmentHint?o.fragments.concat(o.fragmentHint):o.fragments;for(let d=r;d<=i;d++){const u=l[a+d];let f=s[d];n&&!f&&d<n&&(f=e.fragments[d]=u),u&&f&&t(u,f)}}function is(o,e){const t=e.startSN+e.skippedSegments-o.startSN,n=o.fragments;t<0||t>=n.length||Pr(e,n[t].start)}function Pr(o,e){if(e){const t=o.fragments;for(let n=o.skippedSegments;n<t.length;n++)t[n].start+=e;o.fragmentHint&&(o.fragmentHint.start+=e)}}function gc(o,e=1/0){let t=1e3*o.targetduration;if(o.updated){const n=o.fragments,r=4;if(n.length&&t*r>e){const i=n[n.length-1].duration*1e3;i<t&&(t=i)}}else t/=2;return Math.round(t)}function Ac(o,e,t){if(!(o!=null&&o.details))return null;const n=o.details;let r=n.fragments[e-n.startSN];return r||(r=n.fragmentHint,r&&r.sn===e)?r:e<n.startSN&&t&&t.sn===e?t:null}function da(o,e,t){var n;return o!=null&&o.details?as((n=o.details)==null?void 0:n.partList,e,t):null}function as(o,e,t){if(o)for(let n=o.length;n--;){const r=o[n];if(r.index===t&&r.fragment.sn===e)return r}return null}function Pn(o){switch(o.details){case M.FRAG_LOAD_TIMEOUT:case M.KEY_LOAD_TIMEOUT:case M.LEVEL_LOAD_TIMEOUT:case M.MANIFEST_LOAD_TIMEOUT:return!0}return!1}function ca(o,e){const t=Pn(e);return o.default[`${t?"timeout":"error"}Retry`]}function Gr(o,e){const t=o.backoff==="linear"?1:Math.pow(2,e);return Math.min(t*o.retryDelayMs,o.maxRetryDelayMs)}function ua(o){return Fe(Fe({},o),{errorRetry:null,timeoutRetry:null})}function On(o,e,t,n){return!!o&&e<o.maxNumRetry&&(bc(n)||!!t)}function bc(o){return o===0&&navigator.onLine===!1||!!o&&(o<400||o>499)}const ss={search:function(o,e){let t=0,n=o.length-1,r=null,i=null;for(;t<=n;){r=(t+n)/2|0,i=o[r];const a=e(i);if(a>0)t=r+1;else if(a<0)n=r-1;else return i}return null}};function vc(o,e,t){if(e===null||!Array.isArray(o)||!o.length||!ee(e))return null;const n=o[0].programDateTime;if(e<(n||0))return null;const r=o[o.length-1].endProgramDateTime;if(e>=(r||0))return null;t=t||0;for(let i=0;i<o.length;++i){const a=o[i];if(xc(e,t,a))return a}return null}function cn(o,e,t=0,n=0){let r=null;if(o?r=e[o.sn-e[0].sn+1]||null:t===0&&e[0].start===0&&(r=e[0]),r&&Or(t,n,r)===0)return r;const i=ss.search(e,Or.bind(null,t,n));return i&&(i!==o||!r)?i:r}function Or(o=0,e=0,t){if(t.start<=o&&t.start+t.duration>o)return 0;const n=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0));return t.start+t.duration-n<=o?1:t.start-n>o&&t.start?-1:0}function xc(o,e,t){const n=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0))*1e3;return(t.endProgramDateTime||0)-n>o}function Ec(o,e){return ss.search(o,t=>t.cc<e?1:t.cc>e?-1:0)}const Tc=3e5;var Pe={DoNothing:0,SendEndCallback:1,SendAlternateToPenaltyBox:2,RemoveAlternatePermanently:3,InsertDiscontinuity:4,RetryRequest:5},Ue={None:0,MoveAllAlternatesMatchingHost:1,MoveAllAlternatesMatchingHDCP:2,SwitchToSDR:4};class Sc{constructor(e){this.hls=void 0,this.playlistError=0,this.penalizedRenditions={},this.log=void 0,this.warn=void 0,this.error=void 0,this.hls=e,this.log=R.log.bind(R,"[info]:"),this.warn=R.warn.bind(R,"[warning]:"),this.error=R.error.bind(R,"[error]:"),this.registerListeners()}registerListeners(){const e=this.hls;e.on(T.ERROR,this.onError,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this)}unregisterListeners(){const e=this.hls;!e||(e.off(T.ERROR,this.onError,this),e.off(T.ERROR,this.onErrorOut,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this))}destroy(){this.unregisterListeners(),this.hls=null,this.penalizedRenditions={}}startLoad(e){this.playlistError=0}stopLoad(){}getVariantLevelIndex(e){return(e==null?void 0:e.type)===ne.MAIN?e.level:this.hls.loadLevel}onManifestLoading(){this.playlistError=0,this.penalizedRenditions={}}onError(e,t){var n;if(t.fatal)return;const r=this.hls,i=t.context;switch(t.details){case M.FRAG_LOAD_ERROR:case M.FRAG_LOAD_TIMEOUT:case M.KEY_LOAD_ERROR:case M.KEY_LOAD_TIMEOUT:t.errorAction=this.getFragRetryOrSwitchAction(t);return;case M.FRAG_GAP:case M.FRAG_PARSING_ERROR:case M.FRAG_DECRYPT_ERROR:{t.errorAction=this.getFragRetryOrSwitchAction(t),t.errorAction.action=Pe.SendAlternateToPenaltyBox;return}case M.LEVEL_EMPTY_ERROR:case M.LEVEL_PARSING_ERROR:{var a,s;const l=t.parent===ne.MAIN?t.level:r.loadLevel;t.details===M.LEVEL_EMPTY_ERROR&&!!((a=t.context)!=null&&(s=a.levelDetails)!=null&&s.live)?t.errorAction=this.getPlaylistRetryOrSwitchAction(t,l):(t.levelRetry=!1,t.errorAction=this.getLevelSwitchAction(t,l))}return;case M.LEVEL_LOAD_ERROR:case M.LEVEL_LOAD_TIMEOUT:typeof(i==null?void 0:i.level)=="number"&&(t.errorAction=this.getPlaylistRetryOrSwitchAction(t,i.level));return;case M.AUDIO_TRACK_LOAD_ERROR:case M.AUDIO_TRACK_LOAD_TIMEOUT:case M.SUBTITLE_LOAD_ERROR:case M.SUBTITLE_TRACK_LOAD_TIMEOUT:if(i){const l=r.levels[r.loadLevel];if(l&&(i.type===le.AUDIO_TRACK&&i.groupId===l.audioGroupId||i.type===le.SUBTITLE_TRACK&&i.groupId===l.textGroupId)){t.errorAction=this.getPlaylistRetryOrSwitchAction(t,r.loadLevel),t.errorAction.action=Pe.SendAlternateToPenaltyBox,t.errorAction.flags=Ue.MoveAllAlternatesMatchingHost;return}}return;case M.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:{const l=r.levels[r.loadLevel],d=l==null?void 0:l.attrs["HDCP-LEVEL"];d&&(t.errorAction={action:Pe.SendAlternateToPenaltyBox,flags:Ue.MoveAllAlternatesMatchingHDCP,hdcpLevel:d})}return;case M.BUFFER_ADD_CODEC_ERROR:case M.REMUX_ALLOC_ERROR:t.errorAction=this.getLevelSwitchAction(t,(n=t.level)!=null?n:r.loadLevel);return;case M.INTERNAL_EXCEPTION:case M.BUFFER_APPENDING_ERROR:case M.BUFFER_APPEND_ERROR:case M.BUFFER_FULL_ERROR:case M.LEVEL_SWITCH_ERROR:case M.BUFFER_STALLED_ERROR:case M.BUFFER_SEEK_OVER_HOLE:case M.BUFFER_NUDGE_ON_STALL:t.errorAction={action:Pe.DoNothing,flags:Ue.None};return}if(t.type===te.KEY_SYSTEM_ERROR){const l=this.getVariantLevelIndex(t.frag);t.levelRetry=!1,t.errorAction=this.getLevelSwitchAction(t,l);return}}getPlaylistRetryOrSwitchAction(e,t){var n,r;const i=this.hls,a=ca(i.config.playlistLoadPolicy,e),s=this.playlistError++,l=(n=e.response)==null?void 0:n.code;return On(a,s,Pn(e),l)?{action:Pe.RetryRequest,flags:Ue.None,retryConfig:a,retryCount:s}:(r=e.context)!=null&&r.deliveryDirectives?{action:Pe.DoNothing,flags:Ue.None,retryConfig:a||{maxNumRetry:0,retryDelayMs:0,maxRetryDelayMs:0},retryCount:s}:this.getLevelSwitchAction(e,t)}getFragRetryOrSwitchAction(e){const t=this.hls,n=this.getVariantLevelIndex(e.frag),r=t.levels[n],{fragLoadPolicy:i,keyLoadPolicy:a}=t.config,s=ca(e.details.startsWith("key")?a:i,e),l=t.levels.reduce((f,p)=>f+p.fragmentError,0);if(r){var d;e.details!==M.FRAG_GAP&&r.fragmentError++;const f=(d=e.response)==null?void 0:d.code;if(On(s,l,Pn(e),f))return{action:Pe.RetryRequest,flags:Ue.None,retryConfig:s,retryCount:l}}const u=this.getLevelSwitchAction(e,n);return s&&(u.retryConfig=s,u.retryCount=l),u}getLevelSwitchAction(e,t){const n=this.hls;t==null&&(t=n.loadLevel);const r=this.hls.levels[t];if(r&&(r.loadError++,n.autoLevelEnabled)){var i,a;let s=-1;const l=n.levels,d=(i=e.frag)==null?void 0:i.type,{type:u,groupId:f}=(a=e.context)!=null?a:{};for(let p=l.length;p--;){const A=(p+n.loadLevel)%l.length;if(A!==n.loadLevel&&l[A].loadError===0){const b=l[A];if(e.details===M.FRAG_GAP&&e.frag){const x=l[A].details;if(x){const S=cn(e.frag,x.fragments,e.frag.start);if(S!=null&&S.gap)continue}}else{if(u===le.AUDIO_TRACK&&f===b.audioGroupId||u===le.SUBTITLE_TRACK&&f===b.textGroupId)continue;if(d===ne.AUDIO&&r.audioGroupId===b.audioGroupId||d===ne.SUBTITLE&&r.textGroupId===b.textGroupId)continue}s=A;break}}if(s>-1&&n.loadLevel!==s)return e.levelRetry=!0,{action:Pe.SendAlternateToPenaltyBox,flags:Ue.None,nextAutoLevel:s}}return{action:Pe.SendAlternateToPenaltyBox,flags:Ue.MoveAllAlternatesMatchingHost}}onErrorOut(e,t){var n;switch((n=t.errorAction)==null?void 0:n.action){case Pe.DoNothing:break;case Pe.SendAlternateToPenaltyBox:this.sendAlternateToPenaltyBox(t),!t.errorAction.resolved&&t.details!==M.FRAG_GAP&&(t.fatal=!0);break}if(t.fatal){this.hls.stopLoad();return}}sendAlternateToPenaltyBox(e){const t=this.hls,n=e.errorAction;if(!n)return;const{flags:r,hdcpLevel:i,nextAutoLevel:a}=n;switch(r){case Ue.None:this.switchLevel(e,a);break;case Ue.MoveAllAlternatesMatchingHost:n.resolved||(n.resolved=this.redundantFailover(e));break;case Ue.MoveAllAlternatesMatchingHDCP:i&&(t.maxHdcpLevel=Br[Br.indexOf(i)-1],n.resolved=!0),this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);break}n.resolved||this.switchLevel(e,a)}switchLevel(e,t){t!==void 0&&e.errorAction&&(this.warn(`switching to level ${t} after ${e.details}`),this.hls.nextAutoLevel=t,e.errorAction.resolved=!0,this.hls.nextLoadLevel=this.hls.nextAutoLevel)}redundantFailover(e){const{hls:t,penalizedRenditions:n}=this,r=e.parent===ne.MAIN?e.level:t.loadLevel,i=t.levels[r],a=i.url.length,s=e.frag?e.frag.urlId:i.urlId;i.urlId===s&&(!e.frag||i.details)&&this.penalizeRendition(i,e);for(let l=1;l<a;l++){const d=(s+l)%a,u=n[d];if(!u||Cc(u,e,n[s]))return this.warn(`Switching to Redundant Stream ${d+1}/${a}: "${i.url[d]}" after ${e.details}`),this.playlistError=0,t.levels.forEach(f=>{f.urlId=d}),t.nextLoadLevel=r,!0}return!1}penalizeRendition(e,t){const{penalizedRenditions:n}=this,r=n[e.urlId]||{lastErrorPerfMs:0,errors:[],details:void 0};r.lastErrorPerfMs=performance.now(),r.errors.push(t),r.details=e.details,n[e.urlId]=r}}function Cc(o,e,t){if(performance.now()-o.lastErrorPerfMs>Tc)return!0;const n=o.details;if(e.details===M.FRAG_GAP&&n&&e.frag){const r=e.frag.start,i=cn(null,n.fragments,r);if(i&&!i.gap)return!0}if(t&&o.errors.length<t.errors.length){const r=o.errors[o.errors.length-1];if(n&&r.frag&&e.frag&&Math.abs(r.frag.start-e.frag.start)>n.targetduration*3)return!0}return!1}class Kr{constructor(e,t){this.hls=void 0,this.timer=-1,this.requestScheduled=-1,this.canLoad=!1,this.log=void 0,this.warn=void 0,this.log=R.log.bind(R,`${t}:`),this.warn=R.warn.bind(R,`${t}:`),this.hls=e}destroy(){this.clearTimer(),this.hls=this.log=this.warn=null}clearTimer(){clearTimeout(this.timer),this.timer=-1}startLoad(){this.canLoad=!0,this.requestScheduled=-1,this.loadPlaylist()}stopLoad(){this.canLoad=!1,this.clearTimer()}switchParams(e,t){const n=t==null?void 0:t.renditionReports;if(n){let r=-1;for(let i=0;i<n.length;i++){const a=n[i];let s;try{s=new self.URL(a.URI,t.url).href}catch(l){R.warn(`Could not construct new URL for Rendition Report: ${l}`),s=a.URI||""}if(s===e){r=i;break}else s===e.substring(0,s.length)&&(r=i)}if(r!==-1){const i=n[r],a=parseInt(i["LAST-MSN"])||(t==null?void 0:t.lastPartSn);let s=parseInt(i["LAST-PART"])||(t==null?void 0:t.lastPartIndex);if(this.hls.config.lowLatencyMode){const l=Math.min(t.age-t.partTarget,t.targetduration);s>=0&&l>t.partTarget&&(s+=1)}return new la(a,s>=0?s:void 0,sn.No)}}}loadPlaylist(e){this.requestScheduled===-1&&(this.requestScheduled=self.performance.now())}shouldLoadPlaylist(e){return this.canLoad&&!!e&&!!e.url&&(!e.details||e.details.live)}shouldReloadPlaylist(e){return this.timer===-1&&this.requestScheduled===-1&&this.shouldLoadPlaylist(e)}playlistLoaded(e,t,n){const{details:r,stats:i}=t,a=self.performance.now(),s=i.loading.first?Math.max(0,a-i.loading.first):0;if(r.advancedDateTime=Date.now()-s,r.live||n!=null&&n.live){if(r.reloaded(n),n&&this.log(`live playlist ${e} ${r.advanced?"REFRESHED "+r.lastPartSn+"-"+r.lastPartIndex:"MISSED"}`),n&&r.fragments.length>0&&pc(n,r),!this.canLoad||!r.live)return;let l,d,u;if(r.canBlockReload&&r.endSN&&r.advanced){const S=this.hls.config.lowLatencyMode,k=r.lastPartSn,L=r.endSN,I=r.lastPartIndex,D=I!==-1,_=k===L,K=S?0:I;D?(d=_?L+1:k,u=_?K:I+1):d=L+1;const U=r.age,H=U+r.ageHeader;let z=Math.min(H-r.partTarget,r.targetduration*1.5);if(z>0){if(n&&z>n.tuneInGoal)this.warn(`CDN Tune-in goal increased from: ${n.tuneInGoal} to: ${z} with playlist age: ${r.age}`),z=0;else{const O=Math.floor(z/r.targetduration);if(d+=O,u!==void 0){const J=Math.round(z%r.targetduration/r.partTarget);u+=J}this.log(`CDN Tune-in age: ${r.ageHeader}s last advanced ${U.toFixed(2)}s goal: ${z} skip sn ${O} to part ${u}`)}r.tuneInGoal=z}if(l=this.getDeliveryDirectives(r,t.deliveryDirectives,d,u),S||!_){this.loadPlaylist(l);return}}else r.canBlockReload&&(l=this.getDeliveryDirectives(r,t.deliveryDirectives,d,u));const f=this.hls.mainForwardBufferInfo,p=f?f.end-f.len:0,A=(r.edge-p)*1e3,b=gc(r,A);r.updated&&a>this.requestScheduled+b&&(this.requestScheduled=i.loading.start),d!==void 0&&r.canBlockReload?this.requestScheduled=i.loading.first+b-(r.partTarget*1e3||1e3):this.requestScheduled===-1||this.requestScheduled+b<a?this.requestScheduled=a:this.requestScheduled-a<=0&&(this.requestScheduled+=b);let x=this.requestScheduled-a;x=Math.max(0,x),this.log(`reload live playlist ${e} in ${Math.round(x)} ms`),this.timer=self.setTimeout(()=>this.loadPlaylist(l),x)}else this.clearTimer()}getDeliveryDirectives(e,t,n,r){let i=hc(e,n);return t!=null&&t.skip&&e.deltaUpdateFailed&&(n=t.msn,r=t.part,i=sn.No),new la(n,r,i)}checkRetry(e){const t=e.details,n=Pn(e),r=e.errorAction,{action:i,retryCount:a=0,retryConfig:s}=r||{},l=i===Pe.RetryRequest&&!!r&&!!s;if(l){var d;if(this.requestScheduled=-1,n&&(d=e.context)!=null&&d.deliveryDirectives)this.warn(`Retrying playlist loading ${a+1}/${s.maxNumRetry} after "${t}" without delivery-directives`),this.loadPlaylist();else{const u=Gr(s,a);this.timer=self.setTimeout(()=>this.loadPlaylist(),u),this.warn(`Retrying playlist loading ${a+1}/${s.maxNumRetry} after "${t}" in ${u}ms`)}e.levelRetry=!0,r.resolved=!0}return l}}let hr;class wc extends Kr{constructor(e,t){super(e,"[level-controller]"),this._levels=[],this._firstLevel=-1,this._startLevel=void 0,this.currentLevel=null,this.currentLevelIndex=-1,this.manualLevelIndex=-1,this.steering=void 0,this.onParsedComplete=void 0,this.steering=t,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(T.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.on(T.FRAG_LOADED,this.onFragLoaded,this),e.on(T.ERROR,this.onError,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(T.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.off(T.FRAG_LOADED,this.onFragLoaded,this),e.off(T.ERROR,this.onError,this)}destroy(){this._unregisterListeners(),this.steering=null,this.resetLevels(),super.destroy()}startLoad(){this._levels.forEach(t=>{t.loadError=0,t.fragmentError=0}),super.startLoad()}resetLevels(){this._startLevel=void 0,this.manualLevelIndex=-1,this.currentLevelIndex=-1,this.currentLevel=null,this._levels=[]}onManifestLoading(e,t){this.resetLevels()}onManifestLoaded(e,t){const n=[],r={};let i;t.levels.forEach(a=>{var s;const l=a.attrs;((s=a.audioCodec)==null?void 0:s.indexOf("mp4a.40.34"))!==-1&&(hr||(hr=/chrome|firefox/i.test(navigator.userAgent)),hr&&(a.audioCodec=void 0));const{AUDIO:d,CODECS:u,"FRAME-RATE":f,"PATHWAY-ID":p,RESOLUTION:A,SUBTITLES:b}=l,S=`${`${p||"."}-`}${a.bitrate}-${A}-${f}-${u}`;i=r[S],i?i.addFallback(a):(i=new dn(a),r[S]=i,n.push(i)),Fn(i,"audio",d),Fn(i,"text",b)}),this.filterAndSortMediaOptions(n,t)}filterAndSortMediaOptions(e,t){let n=[],r=[],i=!1,a=!1,s=!1,l=e.filter(({audioCodec:A,videoCodec:b,width:x,height:S,unknownCodecs:k})=>(i||(i=!!(x&&S)),a||(a=!!b),s||(s=!!A),!(k!=null&&k.length)&&(!A||lr(A,"audio"))&&(!b||lr(b,"video"))));if((i||a)&&s&&(l=l.filter(({videoCodec:A,width:b,height:x})=>!!A||!!(b&&x))),l.length===0){Promise.resolve().then(()=>{if(this.hls){const A=new Error("no level with compatible codecs found in manifest");this.hls.trigger(T.ERROR,{type:te.MEDIA_ERROR,details:M.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:t.url,error:A,reason:A.message})}});return}t.audioTracks&&(n=t.audioTracks.filter(A=>!A.audioCodec||lr(A.audioCodec,"audio")),ha(n)),t.subtitles&&(r=t.subtitles,ha(r));const d=l.slice(0);l.sort((A,b)=>A.attrs["HDCP-LEVEL"]!==b.attrs["HDCP-LEVEL"]?(A.attrs["HDCP-LEVEL"]||"")>(b.attrs["HDCP-LEVEL"]||"")?1:-1:A.bitrate!==b.bitrate?A.bitrate-b.bitrate:A.attrs["FRAME-RATE"]!==b.attrs["FRAME-RATE"]?A.attrs.decimalFloatingPoint("FRAME-RATE")-b.attrs.decimalFloatingPoint("FRAME-RATE"):A.attrs.SCORE!==b.attrs.SCORE?A.attrs.decimalFloatingPoint("SCORE")-b.attrs.decimalFloatingPoint("SCORE"):i&&A.height!==b.height?A.height-b.height:0);let u=d[0];if(this.steering&&(l=this.steering.filterParsedLevels(l),l.length!==d.length)){for(let A=0;A<d.length;A++)if(d[A].pathwayId===l[0].pathwayId){u=d[A];break}}this._levels=l;for(let A=0;A<l.length;A++)if(l[A]===u){this._firstLevel=A,this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${u.bitrate}`);break}const f=s&&!a,p={levels:l,audioTracks:n,subtitleTracks:r,sessionData:t.sessionData,sessionKeys:t.sessionKeys,firstLevel:this._firstLevel,stats:t.stats,audio:s,video:a,altAudio:!f&&n.some(A=>!!A.url)};this.hls.trigger(T.MANIFEST_PARSED,p),(this.hls.config.autoStartLoad||this.hls.forceStartLoad)&&this.hls.startLoad(this.hls.config.startPosition)}get levels(){return this._levels.length===0?null:this._levels}get level(){return this.currentLevelIndex}set level(e){const t=this._levels;if(t.length===0)return;if(e<0||e>=t.length){const u=new Error("invalid level idx"),f=e<0;if(this.hls.trigger(T.ERROR,{type:te.OTHER_ERROR,details:M.LEVEL_SWITCH_ERROR,level:e,fatal:f,error:u,reason:u.message}),f)return;e=Math.min(e,t.length-1)}const n=this.currentLevelIndex,r=this.currentLevel,i=r?r.attrs["PATHWAY-ID"]:void 0,a=t[e],s=a.attrs["PATHWAY-ID"];if(this.currentLevelIndex=e,this.currentLevel=a,n===e&&a.details&&r&&i===s)return;this.log(`Switching to level ${e}${s?" with Pathway "+s:""} from level ${n}${i?" with Pathway "+i:""}`);const l=we({},a,{level:e,maxBitrate:a.maxBitrate,attrs:a.attrs,uri:a.uri,urlId:a.urlId});delete l._attrs,delete l._urlId,this.hls.trigger(T.LEVEL_SWITCHING,l);const d=a.details;if(!d||d.live){const u=this.switchParams(a.uri,r==null?void 0:r.details);this.loadPlaylist(u)}}get manualLevel(){return this.manualLevelIndex}set manualLevel(e){this.manualLevelIndex=e,this._startLevel===void 0&&(this._startLevel=e),e!==-1&&(this.level=e)}get firstLevel(){return this._firstLevel}set firstLevel(e){this._firstLevel=e}get startLevel(){if(this._startLevel===void 0){const e=this.hls.config.startLevel;return e!==void 0?e:this._firstLevel}else return this._startLevel}set startLevel(e){this._startLevel=e}onError(e,t){t.fatal||!t.context||t.context.type===le.LEVEL&&t.context.level===this.level&&this.checkRetry(t)}onFragLoaded(e,{frag:t}){if(t!==void 0&&t.type===ne.MAIN){const n=this._levels[t.level];n!==void 0&&(n.loadError=0)}}onLevelLoaded(e,t){var n;const{level:r,details:i}=t,a=this._levels[r];if(!a){var s;this.warn(`Invalid level index ${r}`),(s=t.deliveryDirectives)!=null&&s.skip&&(i.deltaUpdateFailed=!0);return}r===this.currentLevelIndex?(a.fragmentError===0&&(a.loadError=0),this.playlistLoaded(r,t,a.details)):(n=t.deliveryDirectives)!=null&&n.skip&&(i.deltaUpdateFailed=!0)}onAudioTrackSwitched(e,t){const n=this.currentLevel;if(!n)return;const r=this.hls.audioTracks[t.id].groupId;if(n.audioGroupIds&&n.audioGroupId!==r){let i=-1;for(let a=0;a<n.audioGroupIds.length;a++)if(n.audioGroupIds[a]===r){i=a;break}i!==-1&&i!==n.urlId&&(n.urlId=i,this.canLoad&&this.startLoad())}}loadPlaylist(e){super.loadPlaylist();const t=this.currentLevelIndex,n=this.currentLevel;if(n&&this.shouldLoadPlaylist(n)){const r=n.urlId;let i=n.uri;if(e)try{i=e.addDirectives(i)}catch(s){this.warn(`Could not construct new URL with HLS Delivery Directives: ${s}`)}const a=n.attrs["PATHWAY-ID"];this.log(`Loading level index ${t}${(e==null?void 0:e.msn)!==void 0?" at sn "+e.msn+" part "+e.part:""} with${a?" Pathway "+a:""} URI ${r+1}/${n.url.length} ${i}`),this.clearTimer(),this.hls.trigger(T.LEVEL_LOADING,{url:i,level:t,id:r,deliveryDirectives:e||null})}}get nextLoadLevel(){return this.manualLevelIndex!==-1?this.manualLevelIndex:this.hls.nextAutoLevel}set nextLoadLevel(e){this.level=e,this.manualLevelIndex===-1&&(this.hls.nextAutoLevel=e)}removeLevel(e,t){const n=(i,a)=>a!==t,r=this._levels.filter((i,a)=>a!==e?!0:i.url.length>1&&t!==void 0?(i.url=i.url.filter(n),i.audioGroupIds&&(i.audioGroupIds=i.audioGroupIds.filter(n)),i.textGroupIds&&(i.textGroupIds=i.textGroupIds.filter(n)),i.urlId=0,!0):(this.steering&&this.steering.removeLevel(i),!1));this.hls.trigger(T.LEVELS_UPDATED,{levels:r})}onLevelsUpdated(e,{levels:t}){t.forEach((n,r)=>{const{details:i}=n;i!=null&&i.fragments&&i.fragments.forEach(a=>{a.level=r})}),this._levels=t}}function Fn(o,e,t){!t||(e==="audio"?(o.audioGroupIds||(o.audioGroupIds=[]),o.audioGroupIds[o.url.length-1]=t):e==="text"&&(o.textGroupIds||(o.textGroupIds=[]),o.textGroupIds[o.url.length-1]=t))}function ha(o){const e={};o.forEach(t=>{const n=t.groupId||"";t.id=e[n]=e[n]||0,e[n]++})}var Re={NOT_LOADED:"NOT_LOADED",APPENDING:"APPENDING",PARTIAL:"PARTIAL",OK:"OK"};class kc{constructor(e){this.mainFragEntity=null,this.activeParts=null,this.endListFragments=Object.create(null),this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hasGaps=!1,this.hls=e,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(T.BUFFER_APPENDED,this.onBufferAppended,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this),e.on(T.FRAG_LOADED,this.onFragLoaded,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.BUFFER_APPENDED,this.onBufferAppended,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this),e.off(T.FRAG_LOADED,this.onFragLoaded,this)}destroy(){this._unregisterListeners(),this.fragments=this.endListFragments=this.timeRanges=this.mainFragEntity=this.activeParts=null}getAppendedFrag(e,t){if(t===ne.MAIN){const{mainFragEntity:n,activeParts:r}=this;if(n){if(n&&r)for(let i=r.length;i--;){const a=r[i],s=a?a.end:n.appendedPTS;if(a.start<=e&&s!==null&&e<=s)return i>9&&(this.activeParts=r.slice(i-9)),a}else if(n.body.start<=e&&n.appendedPTS!==null&&e<=n.appendedPTS)return n.body}}return this.getBufferedFrag(e,t)}getBufferedFrag(e,t){const{fragments:n}=this,r=Object.keys(n);for(let i=r.length;i--;){const a=n[r[i]];if((a==null?void 0:a.body.type)===t&&a.buffered){const s=a.body;if(s.start<=e&&e<=s.end)return s}}return null}detectEvictedFragments(e,t,n){this.timeRanges&&(this.timeRanges[e]=t),Object.keys(this.fragments).forEach(r=>{const i=this.fragments[r];if(!i)return;if(!i.buffered&&!i.loaded){i.body.type===n&&this.removeFragment(i.body);return}const a=i.range[e];!a||a.time.some(s=>{const l=!this.isTimeBuffered(s.startPTS,s.endPTS,t);return l&&this.removeFragment(i.body),l})})}detectPartialFragments(e){const t=this.timeRanges,{frag:n,part:r}=e;if(!t||n.sn==="initSegment")return;const i=at(n),a=this.fragments[i];!a||(Object.keys(t).forEach(s=>{const l=n.elementaryStreams[s];if(!l)return;const d=t[s],u=r!==null||l.partial===!0;a.range[s]=this.getBufferedTimes(n,r,u,d)}),a.loaded=null,Object.keys(a.range).length?(a.buffered=!0,a.body.endList&&(this.endListFragments[a.body.type]=a)):this.removeFragment(a.body))}fragBuffered(e,t){const n=at(e);let r=this.fragments[n];!r&&t&&(r=this.fragments[n]={body:e,appendedPTS:null,loaded:null,buffered:!1,range:Object.create(null)},e.gap&&(this.hasGaps=!0)),r&&(r.loaded=null,r.buffered=!0)}getBufferedTimes(e,t,n,r){const i={time:[],partial:n},a=t?t.start:e.start,s=t?t.end:e.end,l=e.minEndPTS||s,d=e.maxStartPTS||a;for(let u=0;u<r.length;u++){const f=r.start(u)-this.bufferPadding,p=r.end(u)+this.bufferPadding;if(d>=f&&l<=p){i.time.push({startPTS:Math.max(a,r.start(u)),endPTS:Math.min(s,r.end(u))});break}else if(a<p&&s>f)i.partial=!0,i.time.push({startPTS:Math.max(a,r.start(u)),endPTS:Math.min(s,r.end(u))});else if(s<=f)break}return i}getPartialFragment(e){let t=null,n,r,i,a=0;const{bufferPadding:s,fragments:l}=this;return Object.keys(l).forEach(d=>{const u=l[d];!u||pr(u)&&(r=u.body.start-s,i=u.body.end+s,e>=r&&e<=i&&(n=Math.min(e-r,i-e),a<=n&&(t=u.body,a=n)))}),t}isEndListAppended(e){const t=this.endListFragments[e];return t!==void 0&&(t.buffered||pr(t))}getState(e){const t=at(e),n=this.fragments[t];return n?n.buffered?pr(n)?Re.PARTIAL:Re.OK:Re.APPENDING:Re.NOT_LOADED}isTimeBuffered(e,t,n){let r,i;for(let a=0;a<n.length;a++){if(r=n.start(a)-this.bufferPadding,i=n.end(a)+this.bufferPadding,e>=r&&t<=i)return!0;if(t<=r)return!1}return!1}onFragLoaded(e,t){const{frag:n,part:r}=t;if(n.sn==="initSegment"||n.bitrateTest||r)return;const i=at(n);this.fragments[i]={body:n,appendedPTS:null,loaded:t,buffered:!1,range:Object.create(null)}}onBufferAppended(e,t){const{frag:n,part:r,timeRanges:i}=t;let a=this.mainFragEntity;if(n.type===ne.MAIN){const s=a?a.body:null;if(s!==n){a&&s&&s.sn!==n.sn&&(a.buffered=!0,this.fragments[at(s)]=a);const l=at(n);a=this.mainFragEntity=this.fragments[l]||{body:n,appendedPTS:null,loaded:null,buffered:!1,range:Object.create(null)}}if(r){let l=this.activeParts;l||(this.activeParts=l=[]),l.push(r)}else this.activeParts=null}this.timeRanges=i,Object.keys(i).forEach(s=>{const l=i[s];if(this.detectEvictedFragments(s,l),!r&&a){const d=n.elementaryStreams[s];if(!d)return;for(let u=0;u<l.length;u++){const f=l.end(u);f<=d.endPTS&&f>d.startPTS?a.appendedPTS=Math.max(f,a.appendedPTS||0):a.appendedPTS=d.endPTS}}})}onFragBuffered(e,t){this.detectPartialFragments(t)}hasFragment(e){const t=at(e);return!!this.fragments[t]}removeFragmentsInRange(e,t,n,r,i){r&&!this.hasGaps||Object.keys(this.fragments).forEach(a=>{const s=this.fragments[a];if(!s)return;const l=s.body;l.type!==n||r&&!l.gap||l.start<t&&l.end>e&&(s.buffered||i)&&this.removeFragment(l)})}removeFragment(e){const t=at(e);e.stats.loaded=0,e.clearElementaryStreamInfo(),this.mainFragEntity===this.fragments[t]&&(this.mainFragEntity=null),delete this.fragments[t],e.endList&&delete this.endListFragments[e.type]}removeAllFragments(){this.fragments=Object.create(null),this.endListFragments=Object.create(null),this.mainFragEntity=null,this.activeParts=null,this.hasGaps=!1}}function pr(o){var e,t;return o.buffered&&(o.body.gap||((e=o.range.video)==null?void 0:e.partial)||((t=o.range.audio)==null?void 0:t.partial))}function at(o){return`${o.type}_${o.level}_${o.urlId}_${o.sn}`}const pa=Math.pow(2,17);class Lc{constructor(e){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=e}destroy(){this.loader&&(this.loader.destroy(),this.loader=null)}abort(){this.loader&&this.loader.abort()}load(e,t){const n=e.url;if(!n)return Promise.reject(new Je({type:te.NETWORK_ERROR,details:M.FRAG_LOAD_ERROR,fatal:!1,frag:e,error:new Error(`Fragment does not have a ${n?"part list":"url"}`),networkDetails:null}));this.abort();const r=this.config,i=r.fLoader,a=r.loader;return new Promise((s,l)=>{if(this.loader&&this.loader.destroy(),e.gap){l(ma(e));return}const d=this.loader=e.loader=i?new i(r):new a(r),u=fa(e),f=ua(r.fragLoadPolicy.default),p={loadPolicy:f,timeout:f.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:e.sn==="initSegment"?1/0:pa};e.stats=d.stats,d.load(u,p,{onSuccess:(A,b,x,S)=>{this.resetLoader(e,d);let k=A.data;x.resetIV&&e.decryptdata&&(e.decryptdata.iv=new Uint8Array(k.slice(0,16)),k=k.slice(16)),s({frag:e,part:null,payload:k,networkDetails:S})},onError:(A,b,x,S)=>{this.resetLoader(e,d),l(new Je({type:te.NETWORK_ERROR,details:M.FRAG_LOAD_ERROR,fatal:!1,frag:e,response:Fe({url:n,data:void 0},A),error:new Error(`HTTP Error ${A.code} ${A.text}`),networkDetails:x,stats:S}))},onAbort:(A,b,x)=>{this.resetLoader(e,d),l(new Je({type:te.NETWORK_ERROR,details:M.INTERNAL_ABORTED,fatal:!1,frag:e,error:new Error("Aborted"),networkDetails:x,stats:A}))},onTimeout:(A,b,x)=>{this.resetLoader(e,d),l(new Je({type:te.NETWORK_ERROR,details:M.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,error:new Error(`Timeout after ${p.timeout}ms`),networkDetails:x,stats:A}))},onProgress:(A,b,x,S)=>{t&&t({frag:e,part:null,payload:x,networkDetails:S})}})})}loadPart(e,t,n){this.abort();const r=this.config,i=r.fLoader,a=r.loader;return new Promise((s,l)=>{if(this.loader&&this.loader.destroy(),e.gap||t.gap){l(ma(e,t));return}const d=this.loader=e.loader=i?new i(r):new a(r),u=fa(e,t),f=ua(r.fragLoadPolicy.default),p={loadPolicy:f,timeout:f.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:pa};t.stats=d.stats,d.load(u,p,{onSuccess:(A,b,x,S)=>{this.resetLoader(e,d),this.updateStatsFromPart(e,t);const k={frag:e,part:t,payload:A.data,networkDetails:S};n(k),s(k)},onError:(A,b,x,S)=>{this.resetLoader(e,d),l(new Je({type:te.NETWORK_ERROR,details:M.FRAG_LOAD_ERROR,fatal:!1,frag:e,part:t,response:Fe({url:u.url,data:void 0},A),error:new Error(`HTTP Error ${A.code} ${A.text}`),networkDetails:x,stats:S}))},onAbort:(A,b,x)=>{e.stats.aborted=t.stats.aborted,this.resetLoader(e,d),l(new Je({type:te.NETWORK_ERROR,details:M.INTERNAL_ABORTED,fatal:!1,frag:e,part:t,error:new Error("Aborted"),networkDetails:x,stats:A}))},onTimeout:(A,b,x)=>{this.resetLoader(e,d),l(new Je({type:te.NETWORK_ERROR,details:M.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,part:t,error:new Error(`Timeout after ${p.timeout}ms`),networkDetails:x,stats:A}))}})})}updateStatsFromPart(e,t){const n=e.stats,r=t.stats,i=r.total;if(n.loaded+=r.loaded,i){const l=Math.round(e.duration/t.duration),d=Math.min(Math.round(n.loaded/i),l),f=(l-d)*Math.round(n.loaded/d);n.total=n.loaded+f}else n.total=Math.max(n.loaded,n.total);const a=n.loading,s=r.loading;a.start?a.first+=s.first-s.start:(a.start=s.start,a.first=s.first),a.end=s.end}resetLoader(e,t){e.loader=null,this.loader===t&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),t.destroy()}}function fa(o,e=null){const t=e||o,n={frag:o,part:e,responseType:"arraybuffer",url:t.url,headers:{},rangeStart:0,rangeEnd:0},r=t.byteRangeStartOffset,i=t.byteRangeEndOffset;if(ee(r)&&ee(i)){var a;let s=r,l=i;if(o.sn==="initSegment"&&((a=o.decryptdata)==null?void 0:a.method)==="AES-128"){const d=i-r;d%16&&(l=i+(16-d%16)),r!==0&&(n.resetIV=!0,s=r-16)}n.rangeStart=s,n.rangeEnd=l}return n}function ma(o,e){const t=new Error(`GAP ${o.gap?"tag":"attribute"} found`),n={type:te.MEDIA_ERROR,details:M.FRAG_GAP,fatal:!1,frag:o,error:t,networkDetails:null};return e&&(n.part=e),(e||o).stats.aborted=!0,new Je(n)}class Je extends Error{constructor(e){super(e.error.message),this.data=void 0,this.data=e}}class Ic{constructor(e){this.config=void 0,this.keyUriToKeyInfo={},this.emeController=null,this.config=e}abort(){for(const e in this.keyUriToKeyInfo){const t=this.keyUriToKeyInfo[e].loader;t&&t.abort()}}detach(){for(const e in this.keyUriToKeyInfo){const t=this.keyUriToKeyInfo[e];(t.mediaKeySessionContext||t.decryptdata.isCommonEncryption)&&delete this.keyUriToKeyInfo[e]}}destroy(){this.detach();for(const e in this.keyUriToKeyInfo){const t=this.keyUriToKeyInfo[e].loader;t&&t.destroy()}this.keyUriToKeyInfo={}}createKeyLoadError(e,t=M.KEY_LOAD_ERROR,n,r,i){return new Je({type:te.NETWORK_ERROR,details:t,fatal:!1,frag:e,response:i,error:n,networkDetails:r})}loadClear(e,t){if(this.emeController&&this.config.emeEnabled){const{sn:n,cc:r}=e;for(let i=0;i<t.length;i++){const a=t[i];if(r<=a.cc&&(n==="initSegment"||a.sn==="initSegment"||n<a.sn)){this.emeController.selectKeySystemFormat(a).then(s=>{a.setKeyFormat(s)});break}}}}load(e){return!e.decryptdata&&e.encrypted&&this.emeController?this.emeController.selectKeySystemFormat(e).then(t=>this.loadInternal(e,t)):this.loadInternal(e)}loadInternal(e,t){var n,r;t&&e.setKeyFormat(t);const i=e.decryptdata;if(!i){const d=new Error(t?`Expected frag.decryptdata to be defined after setting format ${t}`:"Missing decryption data on fragment in onKeyLoading");return Promise.reject(this.createKeyLoadError(e,M.KEY_LOAD_ERROR,d))}const a=i.uri;if(!a)return Promise.reject(this.createKeyLoadError(e,M.KEY_LOAD_ERROR,new Error(`Invalid key URI: "${a}"`)));let s=this.keyUriToKeyInfo[a];if((n=s)!=null&&n.decryptdata.key)return i.key=s.decryptdata.key,Promise.resolve({frag:e,keyInfo:s});if((r=s)!=null&&r.keyLoadPromise){var l;switch((l=s.mediaKeySessionContext)==null?void 0:l.keyStatus){case void 0:case"status-pending":case"usable":case"usable-in-future":return s.keyLoadPromise.then(d=>(i.key=d.keyInfo.decryptdata.key,{frag:e,keyInfo:s}))}}switch(s=this.keyUriToKeyInfo[a]={decryptdata:i,keyLoadPromise:null,loader:null,mediaKeySessionContext:null},i.method){case"ISO-23001-7":case"SAMPLE-AES":case"SAMPLE-AES-CENC":case"SAMPLE-AES-CTR":return i.keyFormat==="identity"?this.loadKeyHTTP(s,e):this.loadKeyEME(s,e);case"AES-128":return this.loadKeyHTTP(s,e);default:return Promise.reject(this.createKeyLoadError(e,M.KEY_LOAD_ERROR,new Error(`Key supplied with unsupported METHOD: "${i.method}"`)))}}loadKeyEME(e,t){const n={frag:t,keyInfo:e};if(this.emeController&&this.config.emeEnabled){const r=this.emeController.loadKey(n);if(r)return(e.keyLoadPromise=r.then(i=>(e.mediaKeySessionContext=i,n))).catch(i=>{throw e.keyLoadPromise=null,i})}return Promise.resolve(n)}loadKeyHTTP(e,t){const n=this.config,r=n.loader,i=new r(n);return t.keyLoader=e.loader=i,e.keyLoadPromise=new Promise((a,s)=>{const l={keyInfo:e,frag:t,responseType:"arraybuffer",url:e.decryptdata.uri},d=n.keyLoadPolicy.default,u={loadPolicy:d,timeout:d.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},f={onSuccess:(p,A,b,x)=>{const{frag:S,keyInfo:k,url:L}=b;if(!S.decryptdata||k!==this.keyUriToKeyInfo[L])return s(this.createKeyLoadError(S,M.KEY_LOAD_ERROR,new Error("after key load, decryptdata unset or changed"),x));k.decryptdata.key=S.decryptdata.key=new Uint8Array(p.data),S.keyLoader=null,k.loader=null,a({frag:S,keyInfo:k})},onError:(p,A,b,x)=>{this.resetLoader(A),s(this.createKeyLoadError(t,M.KEY_LOAD_ERROR,new Error(`HTTP Error ${p.code} loading key ${p.text}`),b,Fe({url:l.url,data:void 0},p)))},onTimeout:(p,A,b)=>{this.resetLoader(A),s(this.createKeyLoadError(t,M.KEY_LOAD_TIMEOUT,new Error("key loading timed out"),b))},onAbort:(p,A,b)=>{this.resetLoader(A),s(this.createKeyLoadError(t,M.INTERNAL_ABORTED,new Error("key loading aborted"),b))}};i.load(l,u,f)})}resetLoader(e){const{frag:t,keyInfo:n,url:r}=e,i=n.loader;t.keyLoader===i&&(t.keyLoader=null,n.loader=null),delete this.keyUriToKeyInfo[r],i&&i.destroy()}}class Rc{constructor(){this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}destroy(){this.onHandlerDestroying(),this.onHandlerDestroyed()}onHandlerDestroying(){this.clearNextTick(),this.clearInterval()}onHandlerDestroyed(){}hasInterval(){return!!this._tickInterval}hasNextTick(){return!!this._tickTimer}setInterval(e){return this._tickInterval?!1:(this._tickCallCount=0,this._tickInterval=self.setInterval(this._boundTick,e),!0)}clearInterval(){return this._tickInterval?(self.clearInterval(this._tickInterval),this._tickInterval=null,!0):!1}clearNextTick(){return this._tickTimer?(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0):!1}tick(){this._tickCallCount++,this._tickCallCount===1&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)}tickImmediate(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)}doTick(){}}const Dc={length:0,start:()=>0,end:()=>0};class ge{static isBuffered(e,t){try{if(e){const n=ge.getBuffered(e);for(let r=0;r<n.length;r++)if(t>=n.start(r)&&t<=n.end(r))return!0}}catch{}return!1}static bufferInfo(e,t,n){try{if(e){const r=ge.getBuffered(e),i=[];let a;for(a=0;a<r.length;a++)i.push({start:r.start(a),end:r.end(a)});return this.bufferedInfo(i,t,n)}}catch{}return{len:0,start:t,end:t,nextStart:void 0}}static bufferedInfo(e,t,n){t=Math.max(0,t),e.sort(function(d,u){const f=d.start-u.start;return f||u.end-d.end});let r=[];if(n)for(let d=0;d<e.length;d++){const u=r.length;if(u){const f=r[u-1].end;e[d].start-f<n?e[d].end>f&&(r[u-1].end=e[d].end):r.push(e[d])}else r.push(e[d])}else r=e;let i=0,a,s=t,l=t;for(let d=0;d<r.length;d++){const u=r[d].start,f=r[d].end;if(t+n>=u&&t<f)s=u,l=f,i=l-t;else if(t+n<u){a=u;break}}return{len:i,start:s||0,end:l||0,nextStart:a}}static getBuffered(e){try{return e.buffered}catch(t){return R.log("failed to get media.buffered",t),Dc}}}class Hr{constructor(e,t,n,r=0,i=-1,a=!1){this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing=Sn(),this.buffering={audio:Sn(),video:Sn(),audiovideo:Sn()},this.level=e,this.sn=t,this.id=n,this.size=r,this.part=i,this.partial=a}}function Sn(){return{start:0,executeStart:0,executeEnd:0,end:0}}function os(o,e){let t=null;for(let n=0,r=o.length;n<r;n++){const i=o[n];if(i&&i.cc===e){t=i;break}}return t}function _c(o,e,t){return!!(e.details&&(t.endCC>t.startCC||o&&o.cc<t.startCC))}function Bc(o,e,t=0){const n=o.fragments,r=e.fragments;if(!r.length||!n.length){R.log("No fragments to align");return}const i=os(n,r[0].cc);if(!i||i&&!i.startPTS){R.log("No frag in previous level to align on");return}return i}function ya(o,e){if(o){const t=o.start+e;o.start=o.startPTS=t,o.endPTS=t+o.duration}}function qr(o,e){const t=e.fragments;for(let n=0,r=t.length;n<r;n++)ya(t[n],o);e.fragmentHint&&ya(e.fragmentHint,o),e.alignedSliding=!0}function Pc(o,e,t){!e||(Oc(o,t,e),!t.alignedSliding&&e.details&&Fc(t,e.details),!t.alignedSliding&&e.details&&!t.skippedSegments&&is(e.details,t))}function Oc(o,e,t){if(_c(o,t,e)){const n=Bc(t.details,e);n&&ee(n.start)&&(R.log(`Adjusting PTS using last level due to CC increase within current level ${e.url}`),qr(n.start,e))}}function Fc(o,e){if(!e.fragments.length||!o.hasProgramDateTime||!e.hasProgramDateTime)return;const t=e.fragments[0].programDateTime,n=o.fragments[0].programDateTime,r=(n-t)/1e3+e.fragments[0].start;r&&ee(r)&&(R.log(`Adjusting PTS using programDateTime delta ${n-t}ms, sliding:${r.toFixed(3)} ${o.url} `),qr(r,o))}function ls(o,e){if(!o.hasProgramDateTime||!e.hasProgramDateTime)return;const t=o.fragments,n=e.fragments;if(!t.length||!n.length)return;const r=Math.round(n.length/2)-1,i=n[r],a=os(t,i.cc)||t[Math.round(t.length/2)-1],s=i.programDateTime,l=a.programDateTime;if(s===null||l===null)return;const d=(l-s)/1e3-(a.start-i.start);qr(d,o)}class Mc{constructor(e,t){this.subtle=void 0,this.aesIV=void 0,this.subtle=e,this.aesIV=t}decrypt(e,t){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e)}}class Nc{constructor(e,t){this.subtle=void 0,this.key=void 0,this.subtle=e,this.key=t}expandKey(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])}}function Uc(o){const e=o.byteLength,t=e&&new DataView(o.buffer).getUint8(e-1);return t?yt(o,0,e-t):o}class $c{constructor(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}uint8ArrayToUint32Array_(e){const t=new DataView(e),n=new Uint32Array(4);for(let r=0;r<4;r++)n[r]=t.getUint32(r*4);return n}initTable(){const e=this.sBox,t=this.invSBox,n=this.subMix,r=n[0],i=n[1],a=n[2],s=n[3],l=this.invSubMix,d=l[0],u=l[1],f=l[2],p=l[3],A=new Uint32Array(256);let b=0,x=0,S=0;for(S=0;S<256;S++)S<128?A[S]=S<<1:A[S]=S<<1^283;for(S=0;S<256;S++){let k=x^x<<1^x<<2^x<<3^x<<4;k=k>>>8^k&255^99,e[b]=k,t[k]=b;const L=A[b],I=A[L],D=A[I];let _=A[k]*257^k*16843008;r[b]=_<<24|_>>>8,i[b]=_<<16|_>>>16,a[b]=_<<8|_>>>24,s[b]=_,_=D*16843009^I*65537^L*257^b*16843008,d[k]=_<<24|_>>>8,u[k]=_<<16|_>>>16,f[k]=_<<8|_>>>24,p[k]=_,b?(b=L^A[A[A[D^L]]],x^=A[A[x]]):b=x=1}}expandKey(e){const t=this.uint8ArrayToUint32Array_(e);let n=!0,r=0;for(;r<t.length&&n;)n=t[r]===this.key[r],r++;if(n)return;this.key=t;const i=this.keySize=t.length;if(i!==4&&i!==6&&i!==8)throw new Error("Invalid aes key size="+i);const a=this.ksRows=(i+6+1)*4;let s,l;const d=this.keySchedule=new Uint32Array(a),u=this.invKeySchedule=new Uint32Array(a),f=this.sBox,p=this.rcon,A=this.invSubMix,b=A[0],x=A[1],S=A[2],k=A[3];let L,I;for(s=0;s<a;s++){if(s<i){L=d[s]=t[s];continue}I=L,s%i===0?(I=I<<8|I>>>24,I=f[I>>>24]<<24|f[I>>>16&255]<<16|f[I>>>8&255]<<8|f[I&255],I^=p[s/i|0]<<24):i>6&&s%i===4&&(I=f[I>>>24]<<24|f[I>>>16&255]<<16|f[I>>>8&255]<<8|f[I&255]),d[s]=L=(d[s-i]^I)>>>0}for(l=0;l<a;l++)s=a-l,l&3?I=d[s]:I=d[s-4],l<4||s<=4?u[l]=I:u[l]=b[f[I>>>24]]^x[f[I>>>16&255]]^S[f[I>>>8&255]]^k[f[I&255]],u[l]=u[l]>>>0}networkToHostOrderSwap(e){return e<<24|(e&65280)<<8|(e&16711680)>>8|e>>>24}decrypt(e,t,n){const r=this.keySize+6,i=this.invKeySchedule,a=this.invSBox,s=this.invSubMix,l=s[0],d=s[1],u=s[2],f=s[3],p=this.uint8ArrayToUint32Array_(n);let A=p[0],b=p[1],x=p[2],S=p[3];const k=new Int32Array(e),L=new Int32Array(k.length);let I,D,_,K,U,H,z,O,J,j,ae,Te,fe,me;const ye=this.networkToHostOrderSwap;for(;t<k.length;){for(J=ye(k[t]),j=ye(k[t+1]),ae=ye(k[t+2]),Te=ye(k[t+3]),U=J^i[0],H=Te^i[1],z=ae^i[2],O=j^i[3],fe=4,me=1;me<r;me++)I=l[U>>>24]^d[H>>16&255]^u[z>>8&255]^f[O&255]^i[fe],D=l[H>>>24]^d[z>>16&255]^u[O>>8&255]^f[U&255]^i[fe+1],_=l[z>>>24]^d[O>>16&255]^u[U>>8&255]^f[H&255]^i[fe+2],K=l[O>>>24]^d[U>>16&255]^u[H>>8&255]^f[z&255]^i[fe+3],U=I,H=D,z=_,O=K,fe=fe+4;I=a[U>>>24]<<24^a[H>>16&255]<<16^a[z>>8&255]<<8^a[O&255]^i[fe],D=a[H>>>24]<<24^a[z>>16&255]<<16^a[O>>8&255]<<8^a[U&255]^i[fe+1],_=a[z>>>24]<<24^a[O>>16&255]<<16^a[U>>8&255]<<8^a[H&255]^i[fe+2],K=a[O>>>24]<<24^a[U>>16&255]<<16^a[H>>8&255]<<8^a[z&255]^i[fe+3],L[t]=ye(I^A),L[t+1]=ye(K^b),L[t+2]=ye(_^x),L[t+3]=ye(D^S),A=J,b=j,x=ae,S=Te,t=t+4}return L.buffer}}const Gc=16;class Yr{constructor(e,{removePKCS7Padding:t=!0}={}){if(this.logEnabled=!0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.useSoftware=void 0,this.useSoftware=e.enableSoftwareAES,this.removePKCS7Padding=t,t)try{const n=self.crypto;n&&(this.subtle=n.subtle||n.webkitSubtle)}catch{}this.subtle===null&&(this.useSoftware=!0)}destroy(){this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null}isSync(){return this.useSoftware}flush(){const{currentResult:e,remainderData:t}=this;if(!e||t)return this.reset(),null;const n=new Uint8Array(e);return this.reset(),this.removePKCS7Padding?Uc(n):n}reset(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)}decrypt(e,t,n){return this.useSoftware?new Promise((r,i)=>{this.softwareDecrypt(new Uint8Array(e),t,n);const a=this.flush();a?r(a.buffer):i(new Error("[softwareDecrypt] Failed to decrypt data"))}):this.webCryptoDecrypt(new Uint8Array(e),t,n)}softwareDecrypt(e,t,n){const{currentIV:r,currentResult:i,remainderData:a}=this;this.logOnce("JS AES decrypt"),a&&(e=gt(a,e),this.remainderData=null);const s=this.getValidChunk(e);if(!s.length)return null;r&&(n=r);let l=this.softwareDecrypter;l||(l=this.softwareDecrypter=new $c),l.expandKey(t);const d=i;return this.currentResult=l.decrypt(s.buffer,0,n),this.currentIV=yt(s,-16).buffer,d||null}webCryptoDecrypt(e,t,n){const r=this.subtle;return(this.key!==t||!this.fastAesKey)&&(this.key=t,this.fastAesKey=new Nc(r,t)),this.fastAesKey.expandKey().then(i=>r?(this.logOnce("WebCrypto AES decrypt"),new Mc(r,new Uint8Array(n)).decrypt(e.buffer,i)):Promise.reject(new Error("web crypto not initialized"))).catch(i=>(R.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${i.name}: ${i.message}`),this.onWebCryptoError(e,t,n)))}onWebCryptoError(e,t,n){this.useSoftware=!0,this.logEnabled=!0,this.softwareDecrypt(e,t,n);const r=this.flush();if(r)return r.buffer;throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data")}getValidChunk(e){let t=e;const n=e.length-e.length%Gc;return n!==e.length&&(t=yt(e,0,n),this.remainderData=yt(e,n)),t}logOnce(e){!this.logEnabled||(R.log(`[decrypter]: ${e}`),this.logEnabled=!1)}}const Kc={toString:function(o){let e="";const t=o.length;for(let n=0;n<t;n++)e+=`[${o.start(n).toFixed(3)}-${o.end(n).toFixed(3)}]`;return e}},$={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"};class zr extends Rc{constructor(e,t,n,r,i){super(),this.hls=void 0,this.fragPrevious=null,this.fragCurrent=null,this.fragmentTracker=void 0,this.transmuxer=null,this._state=$.STOPPED,this.playlistType=void 0,this.media=null,this.mediaBuffer=null,this.config=void 0,this.bitrateTest=!1,this.lastCurrentTime=0,this.nextLoadPosition=0,this.startPosition=0,this.startTimeOffset=null,this.loadedmetadata=!1,this.retryDate=0,this.levels=null,this.fragmentLoader=void 0,this.keyLoader=void 0,this.levelLastLoaded=null,this.startFragRequested=!1,this.decrypter=void 0,this.initPTS=[],this.onvseeking=null,this.onvended=null,this.logPrefix="",this.log=void 0,this.warn=void 0,this.playlistType=i,this.logPrefix=r,this.log=R.log.bind(R,`${r}:`),this.warn=R.warn.bind(R,`${r}:`),this.hls=e,this.fragmentLoader=new Lc(e.config),this.keyLoader=n,this.fragmentTracker=t,this.config=e.config,this.decrypter=new Yr(e.config),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this)}doTick(){this.onTickEnd()}onTickEnd(){}startLoad(e){}stopLoad(){this.fragmentLoader.abort(),this.keyLoader.abort();const e=this.fragCurrent;e!=null&&e.loader&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=$.STOPPED}_streamEnded(e,t){if(t.live||e.nextStart||!e.end||!this.media)return!1;const n=t.partList;if(n!=null&&n.length){const i=n[n.length-1];return ge.isBuffered(this.media,i.start+i.duration/2)}const r=t.fragments[t.fragments.length-1].type;return this.fragmentTracker.isEndListAppended(r)}getLevelDetails(){if(this.levels&&this.levelLastLoaded!==null){var e;return(e=this.levels[this.levelLastLoaded])==null?void 0:e.details}}onMediaAttached(e,t){const n=this.media=this.mediaBuffer=t.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),n.addEventListener("seeking",this.onvseeking),n.addEventListener("ended",this.onvended);const r=this.config;this.levels&&r.autoStartLoad&&this.state===$.STOPPED&&this.startLoad(r.startPosition)}onMediaDetaching(){const e=this.media;e!=null&&e.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),e&&this.onvseeking&&this.onvended&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvended=null),this.keyLoader&&this.keyLoader.detach(),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()}onMediaSeeking(){const{config:e,fragCurrent:t,media:n,mediaBuffer:r,state:i}=this,a=n?n.currentTime:0,s=ge.bufferInfo(r||n,a,e.maxBufferHole);if(this.log(`media seeking to ${ee(a)?a.toFixed(3):a}, state: ${i}`),this.state===$.ENDED)this.resetLoadingState();else if(t){const l=e.maxFragLookUpTolerance,d=t.start-l,u=t.start+t.duration+l;if(!s.len||u<s.start||d>s.end){const f=a>u;(a<d||f)&&(f&&t.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),t.abortRequests()),this.resetLoadingState())}}n&&(this.fragmentTracker.removeFragmentsInRange(a,1/0,this.playlistType,!0),this.lastCurrentTime=a),!this.loadedmetadata&&!s.len&&(this.nextLoadPosition=this.startPosition=a),this.tickImmediate()}onMediaEnded(){this.startPosition=this.lastCurrentTime=0}onManifestLoaded(e,t){this.startTimeOffset=t.startTimeOffset,this.initPTS=[]}onHandlerDestroying(){this.stopLoad(),super.onHandlerDestroying()}onHandlerDestroyed(){this.state=$.STOPPED,this.fragmentLoader&&this.fragmentLoader.destroy(),this.keyLoader&&this.keyLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.keyLoader=this.fragmentLoader=this.fragmentTracker=null,super.onHandlerDestroyed()}loadFragment(e,t,n){this._loadFragForPlayback(e,t,n)}_loadFragForPlayback(e,t,n){const r=i=>{if(this.fragContextChanged(e)){this.warn(`Fragment ${e.sn}${i.part?" p: "+i.part.index:""} of level ${e.level} was dropped during download.`),this.fragmentTracker.removeFragment(e);return}e.stats.chunkCount++,this._handleFragmentLoadProgress(i)};this._doFragLoad(e,t,n,r).then(i=>{if(!i)return;const a=this.state;if(this.fragContextChanged(e)){(a===$.FRAG_LOADING||!this.fragCurrent&&a===$.PARSING)&&(this.fragmentTracker.removeFragment(e),this.state=$.IDLE);return}"payload"in i&&(this.log(`Loaded fragment ${e.sn} of level ${e.level}`),this.hls.trigger(T.FRAG_LOADED,i)),this._handleFragmentLoadComplete(i)}).catch(i=>{this.state===$.STOPPED||this.state===$.ERROR||(this.warn(i),this.resetFragmentLoading(e))})}clearTrackerIfNeeded(e){var t;if(this.fragmentTracker.getState(e)===Re.APPENDING){const r=e.type,i=this.getFwdBufferInfo(this.mediaBuffer,r),a=Math.max(e.duration,i?i.len:this.config.maxBufferLength);this.reduceMaxBufferLength(a)&&this.fragmentTracker.removeFragment(e)}else((t=this.mediaBuffer)==null?void 0:t.buffered.length)===0&&this.fragmentTracker.removeAllFragments()}flushMainBuffer(e,t,n=null){if(!(e-t))return;const r={startOffset:e,endOffset:t,type:n};this.hls.trigger(T.BUFFER_FLUSHING,r)}_loadInitSegment(e,t){this._doFragLoad(e,t).then(n=>{if(!n||this.fragContextChanged(e)||!this.levels)throw new Error("init load aborted");return n}).then(n=>{const{hls:r}=this,{payload:i}=n,a=e.decryptdata;if(i&&i.byteLength>0&&a&&a.key&&a.iv&&a.method==="AES-128"){const s=self.performance.now();return this.decrypter.decrypt(new Uint8Array(i),a.key.buffer,a.iv.buffer).catch(l=>{throw r.trigger(T.ERROR,{type:te.MEDIA_ERROR,details:M.FRAG_DECRYPT_ERROR,fatal:!1,error:l,reason:l.message,frag:e}),l}).then(l=>{const d=self.performance.now();return r.trigger(T.FRAG_DECRYPTED,{frag:e,payload:l,stats:{tstart:s,tdecrypt:d}}),n.payload=l,n})}return n}).then(n=>{const{fragCurrent:r,hls:i,levels:a}=this;if(!a)throw new Error("init load aborted, missing levels");const s=e.stats;this.state=$.IDLE,t.fragmentError=0,e.data=new Uint8Array(n.payload),s.parsing.start=s.buffering.start=self.performance.now(),s.parsing.end=s.buffering.end=self.performance.now(),n.frag===r&&i.trigger(T.FRAG_BUFFERED,{stats:s,frag:r,part:null,id:e.type}),this.tick()}).catch(n=>{this.state===$.STOPPED||this.state===$.ERROR||(this.warn(n),this.resetFragmentLoading(e))})}fragContextChanged(e){const{fragCurrent:t}=this;return!e||!t||e.level!==t.level||e.sn!==t.sn||e.urlId!==t.urlId}fragBufferedComplete(e,t){var n,r,i,a;const s=this.mediaBuffer?this.mediaBuffer:this.media;this.log(`Buffered ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.logPrefix==="[stream-controller]"?"level":"track"} ${e.level} (frag:[${((n=e.startPTS)!=null?n:NaN).toFixed(3)}-${((r=e.endPTS)!=null?r:NaN).toFixed(3)}] > buffer:${s?Kc.toString(ge.getBuffered(s)):"(detached)"})`),this.state=$.IDLE,s&&(!this.loadedmetadata&&e.type==ne.MAIN&&s.buffered.length&&((i=this.fragCurrent)==null?void 0:i.sn)===((a=this.fragPrevious)==null?void 0:a.sn)&&(this.loadedmetadata=!0,this.seekToStartPos()),this.tick())}seekToStartPos(){}_handleFragmentLoadComplete(e){const{transmuxer:t}=this;if(!t)return;const{frag:n,part:r,partsLoaded:i}=e,a=!i||i.length===0||i.some(l=>!l),s=new Hr(n.level,n.sn,n.stats.chunkCount+1,0,r?r.index:-1,!a);t.flush(s)}_handleFragmentLoadProgress(e){}_doFragLoad(e,t,n=null,r){var i;const a=t==null?void 0:t.details;if(!this.levels||!a)throw new Error(`frag load aborted, missing level${a?"":" detail"}s`);let s=null;if(e.encrypted&&!((i=e.decryptdata)!=null&&i.key)?(this.log(`Loading key for ${e.sn} of [${a.startSN}-${a.endSN}], ${this.logPrefix==="[stream-controller]"?"level":"track"} ${e.level}`),this.state=$.KEY_LOADING,this.fragCurrent=e,s=this.keyLoader.load(e).then(u=>{if(!this.fragContextChanged(u.frag))return this.hls.trigger(T.KEY_LOADED,u),this.state===$.KEY_LOADING&&(this.state=$.IDLE),u}),this.hls.trigger(T.KEY_LOADING,{frag:e}),this.fragCurrent===null&&(s=Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))):!e.encrypted&&a.encryptedFragments.length&&this.keyLoader.loadClear(e,a.encryptedFragments),n=Math.max(e.start,n||0),this.config.lowLatencyMode){const u=a.partList;if(u&&r){n>e.end&&a.fragmentHint&&(e=a.fragmentHint);const f=this.getNextPart(u,e,n);if(f>-1){const p=u[f];this.log(`Loading part sn: ${e.sn} p: ${p.index} cc: ${e.cc} of playlist [${a.startSN}-${a.endSN}] parts [0-${f}-${u.length-1}] ${this.logPrefix==="[stream-controller]"?"level":"track"}: ${e.level}, target: ${parseFloat(n.toFixed(3))}`),this.nextLoadPosition=p.start+p.duration,this.state=$.FRAG_LOADING;let A;return s?A=s.then(b=>!b||this.fragContextChanged(b.frag)?null:this.doFragPartsLoad(e,p,t,r)).catch(b=>this.handleFragLoadError(b)):A=this.doFragPartsLoad(e,p,t,r).catch(b=>this.handleFragLoadError(b)),this.hls.trigger(T.FRAG_LOADING,{frag:e,part:p,targetBufferTime:n}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")):A}else if(!e.url||this.loadedEndOfParts(u,n))return Promise.resolve(null)}}this.log(`Loading fragment ${e.sn} cc: ${e.cc} ${a?"of ["+a.startSN+"-"+a.endSN+"] ":""}${this.logPrefix==="[stream-controller]"?"level":"track"}: ${e.level}, target: ${parseFloat(n.toFixed(3))}`),ee(e.sn)&&!this.bitrateTest&&(this.nextLoadPosition=e.start+e.duration),this.state=$.FRAG_LOADING;const l=this.config.progressive;let d;return l&&s?d=s.then(u=>!u||this.fragContextChanged(u==null?void 0:u.frag)?null:this.fragmentLoader.load(e,r)).catch(u=>this.handleFragLoadError(u)):d=Promise.all([this.fragmentLoader.load(e,l?r:void 0),s]).then(([u])=>(!l&&u&&r&&r(u),u)).catch(u=>this.handleFragLoadError(u)),this.hls.trigger(T.FRAG_LOADING,{frag:e,targetBufferTime:n}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")):d}doFragPartsLoad(e,t,n,r){return new Promise((i,a)=>{var s;const l=[],d=(s=n.details)==null?void 0:s.partList,u=f=>{this.fragmentLoader.loadPart(e,f,r).then(p=>{l[f.index]=p;const A=p.part;this.hls.trigger(T.FRAG_LOADED,p);const b=da(n,e.sn,f.index+1)||as(d,e.sn,f.index+1);if(b)u(b);else return i({frag:e,part:A,partsLoaded:l})}).catch(a)};u(t)})}handleFragLoadError(e){if("data"in e){const t=e.data;e.data&&t.details===M.INTERNAL_ABORTED?this.handleFragLoadAborted(t.frag,t.part):this.hls.trigger(T.ERROR,t)}else this.hls.trigger(T.ERROR,{type:te.OTHER_ERROR,details:M.INTERNAL_EXCEPTION,err:e,error:e,fatal:!0});return null}_handleTransmuxerFlush(e){const t=this.getCurrentContext(e);if(!t||this.state!==$.PARSING){!this.fragCurrent&&this.state!==$.STOPPED&&this.state!==$.ERROR&&(this.state=$.IDLE);return}const{frag:n,part:r,level:i}=t,a=self.performance.now();n.stats.parsing.end=a,r&&(r.stats.parsing.end=a),this.updateLevelTiming(n,r,i,e.partial)}getCurrentContext(e){const{levels:t,fragCurrent:n}=this,{level:r,sn:i,part:a}=e;if(!(t!=null&&t[r]))return this.warn(`Levels object was unset while buffering fragment ${i} of level ${r}. The current chunk will not be buffered.`),null;const s=t[r],l=a>-1?da(s,i,a):null,d=l?l.fragment:Ac(s,i,n);return d?(n&&n!==d&&(d.stats=n.stats),{frag:d,part:l,level:s}):null}bufferFragmentData(e,t,n,r){var i;if(!e||this.state!==$.PARSING)return;const{data1:a,data2:s}=e;let l=a;if(a&&s&&(l=gt(a,s)),!((i=l)!=null&&i.length))return;const d={type:e.type,frag:t,part:n,chunkMeta:r,parent:t.type,data:l};this.hls.trigger(T.BUFFER_APPENDING,d),e.dropped&&e.independent&&!n&&this.flushBufferGap(t)}flushBufferGap(e){const t=this.media;if(!t)return;if(!ge.isBuffered(t,t.currentTime)){this.flushMainBuffer(0,e.start);return}const n=t.currentTime,r=ge.bufferInfo(t,n,0),i=e.duration,a=Math.min(this.config.maxFragLookUpTolerance*2,i*.25),s=Math.max(Math.min(e.start-a,r.end-a),n+a);e.start-s>a&&this.flushMainBuffer(s,e.start)}getFwdBufferInfo(e,t){const n=this.getLoadPosition();return ee(n)?this.getFwdBufferInfoAtPos(e,n,t):null}getFwdBufferInfoAtPos(e,t,n){const{config:{maxBufferHole:r}}=this,i=ge.bufferInfo(e,t,r);if(i.len===0&&i.nextStart!==void 0){const a=this.fragmentTracker.getBufferedFrag(t,n);if(a&&i.nextStart<a.end)return ge.bufferInfo(e,t,Math.max(i.nextStart,r))}return i}getMaxBufferLength(e){const{config:t}=this;let n;return e?n=Math.max(8*t.maxBufferSize/e,t.maxBufferLength):n=t.maxBufferLength,Math.min(n,t.maxMaxBufferLength)}reduceMaxBufferLength(e){const t=this.config,n=e||t.maxBufferLength;return t.maxMaxBufferLength>=n?(t.maxMaxBufferLength/=2,this.warn(`Reduce max buffer length to ${t.maxMaxBufferLength}s`),!0):!1}getNextFragment(e,t){const n=t.fragments,r=n.length;if(!r)return null;const{config:i}=this,a=n[0].start;let s;if(t.live){const l=i.initialLiveManifestSize;if(r<l)return this.warn(`Not enough fragments to start playback (have: ${r}, need: ${l})`),null;!t.PTSKnown&&!this.startFragRequested&&this.startPosition===-1&&(s=this.getInitialLiveFragment(t,n),this.startPosition=s?this.hls.liveSyncPosition||s.start:e)}else e<=a&&(s=n[0]);if(!s){const l=i.lowLatencyMode?t.partEnd:t.fragmentEnd;s=this.getFragmentAtPosition(e,l,t)}return this.mapToInitFragWhenRequired(s)}isLoopLoading(e,t){const n=this.fragmentTracker.getState(e);return(n===Re.OK||n===Re.PARTIAL&&!!e.gap)&&this.nextLoadPosition>t}getNextFragmentLoopLoading(e,t,n,r,i){const a=e.gap,s=this.getNextFragment(this.nextLoadPosition,t);if(s===null)return s;if(e=s,a&&e&&!e.gap&&n.nextStart){const l=this.getFwdBufferInfoAtPos(this.mediaBuffer?this.mediaBuffer:this.media,n.nextStart,r);if(l!==null&&n.len+l.len>=i)return this.log(`buffer full after gaps in "${r}" playlist starting at sn: ${e.sn}`),null}return e}mapToInitFragWhenRequired(e){return e!=null&&e.initSegment&&!(e!=null&&e.initSegment.data)&&!this.bitrateTest?e.initSegment:e}getNextPart(e,t,n){let r=-1,i=!1,a=!0;for(let s=0,l=e.length;s<l;s++){const d=e[s];if(a=a&&!d.independent,r>-1&&n<d.start)break;const u=d.loaded;u?r=-1:(i||d.independent||a)&&d.fragment===t&&(r=s),i=u}return r}loadedEndOfParts(e,t){const n=e[e.length-1];return n&&t>n.start&&n.loaded}getInitialLiveFragment(e,t){const n=this.fragPrevious;let r=null;if(n){if(e.hasProgramDateTime&&(this.log(`Live playlist, switching playlist, load frag with same PDT: ${n.programDateTime}`),r=vc(t,n.endProgramDateTime,this.config.maxFragLookUpTolerance)),!r){const i=n.sn+1;if(i>=e.startSN&&i<=e.endSN){const a=t[i-e.startSN];n.cc===a.cc&&(r=a,this.log(`Live playlist, switching playlist, load frag with next SN: ${r.sn}`))}r||(r=Ec(t,n.cc),r&&this.log(`Live playlist, switching playlist, load frag with same CC: ${r.sn}`))}}else{const i=this.hls.liveSyncPosition;i!==null&&(r=this.getFragmentAtPosition(i,this.bitrateTest?e.fragmentEnd:e.edge,e))}return r}getFragmentAtPosition(e,t,n){const{config:r}=this;let{fragPrevious:i}=this,{fragments:a,endSN:s}=n;const{fragmentHint:l}=n,d=r.maxFragLookUpTolerance,u=!!(r.lowLatencyMode&&n.partList&&l);u&&l&&!this.bitrateTest&&(a=a.concat(l),s=l.sn);let f;if(e<t){const p=e>t-d?0:d;f=cn(i,a,e,p)}else f=a[a.length-1];if(f){const p=f.sn-n.startSN,A=this.fragmentTracker.getState(f);if((A===Re.OK||A===Re.PARTIAL&&f.gap)&&(i=f),i&&f.sn===i.sn&&!u&&i&&f.level===i.level){const x=a[p+1];f.sn<s&&this.fragmentTracker.getState(x)!==Re.OK?f=x:f=null}}return f}synchronizeToLiveEdge(e){const{config:t,media:n}=this;if(!n)return;const r=this.hls.liveSyncPosition,i=n.currentTime,a=e.fragments[0].start,s=e.edge,l=i>=a-t.maxFragLookUpTolerance&&i<=s;if(r!==null&&n.duration>r&&(i<r||!l)){const d=t.liveMaxLatencyDuration!==void 0?t.liveMaxLatencyDuration:t.liveMaxLatencyDurationCount*e.targetduration;(!l&&n.readyState<4||i<s-d)&&(this.loadedmetadata||(this.nextLoadPosition=r),n.readyState&&(this.warn(`Playback: ${i.toFixed(3)} is located too far from the end of live sliding playlist: ${s}, reset currentTime to : ${r.toFixed(3)}`),n.currentTime=r))}}alignPlaylists(e,t){const{levels:n,levelLastLoaded:r,fragPrevious:i}=this,a=r!==null?n[r]:null,s=e.fragments.length;if(!s)return this.warn("No fragments in live playlist"),0;const l=e.fragments[0].start,d=!t,u=e.alignedSliding&&ee(l);if(d||!u&&!l){Pc(i,a,e);const f=e.fragments[0].start;return this.log(`Live playlist sliding: ${f.toFixed(2)} start-sn: ${t?t.startSN:"na"}->${e.startSN} prev-sn: ${i?i.sn:"na"} fragments: ${s}`),f}return l}waitForCdnTuneIn(e){return e.live&&e.canBlockReload&&e.partTarget&&e.tuneInGoal>Math.max(e.partHoldBack,e.partTarget*3)}setStartPosition(e,t){let n=this.startPosition;if(n<t&&(n=-1),n===-1||this.lastCurrentTime===-1){const r=this.startTimeOffset!==null,i=r?this.startTimeOffset:e.startTimeOffset;i!==null&&ee(i)?(n=t+i,i<0&&(n+=e.totalduration),n=Math.min(Math.max(t,n),t+e.totalduration),this.log(`Start time offset ${i} found in ${r?"multivariant":"media"} playlist, adjust startPosition to ${n}`),this.startPosition=n):e.live?n=this.hls.liveSyncPosition||t:this.startPosition=n=0,this.lastCurrentTime=n}this.nextLoadPosition=n}getLoadPosition(){const{media:e}=this;let t=0;return this.loadedmetadata&&e?t=e.currentTime:this.nextLoadPosition&&(t=this.nextLoadPosition),t}handleFragLoadAborted(e,t){this.transmuxer&&e.sn!=="initSegment"&&e.stats.aborted&&(this.warn(`Fragment ${e.sn}${t?" part"+t.index:""} of level ${e.level} was aborted`),this.resetFragmentLoading(e))}resetFragmentLoading(e){(!this.fragCurrent||!this.fragContextChanged(e)&&this.state!==$.FRAG_LOADING_WAITING_RETRY)&&(this.state=$.IDLE)}onFragmentOrKeyLoadError(e,t){if(t.chunkMeta&&!t.frag){const u=this.getCurrentContext(t.chunkMeta);u&&(t.frag=u.frag)}const n=t.frag;if(!n||n.type!==e||!this.levels)return;if(this.fragContextChanged(n)){var r;this.warn(`Frag load error must match current frag to retry ${n.url} > ${(r=this.fragCurrent)==null?void 0:r.url}`);return}const i=t.details===M.FRAG_GAP;i&&this.fragmentTracker.fragBuffered(n,!0);const a=t.errorAction,{action:s,retryCount:l=0,retryConfig:d}=a||{};if(a&&s===Pe.RetryRequest&&d){this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition);const u=Gr(d,l);this.warn(`Fragment ${n.sn} of ${e} ${n.level} errored with ${t.details}, retrying loading ${l+1}/${d.maxNumRetry} in ${u}ms`),a.resolved=!0,this.retryDate=self.performance.now()+u,this.state=$.FRAG_LOADING_WAITING_RETRY}else d&&a?(this.resetFragmentErrors(e),l<d.maxNumRetry?i||(a.resolved=!0):R.warn(`${t.details} reached or exceeded max retry (${l})`)):this.state=$.ERROR;this.tickImmediate()}reduceLengthAndFlushBuffer(e){if(this.state===$.PARSING||this.state===$.PARSED){const t=e.parent,n=this.getFwdBufferInfo(this.mediaBuffer,t),r=n&&n.len>.5;r&&this.reduceMaxBufferLength(n.len);const i=!r;return i&&this.warn(`Buffer full error while media.currentTime is not buffered, flush ${t} buffer`),e.frag&&(this.fragmentTracker.removeFragment(e.frag),this.nextLoadPosition=e.frag.start),this.resetLoadingState(),i}return!1}resetFragmentErrors(e){e===ne.AUDIO&&(this.fragCurrent=null),this.loadedmetadata||(this.startFragRequested=!1),this.state!==$.STOPPED&&(this.state=$.IDLE)}afterBufferFlushed(e,t,n){if(!e)return;const r=ge.getBuffered(e);this.fragmentTracker.detectEvictedFragments(t,r,n),this.state===$.ENDED&&this.resetLoadingState()}resetLoadingState(){this.log("Reset loading state"),this.fragCurrent=null,this.fragPrevious=null,this.state=$.IDLE}resetStartWhenNotLoaded(e){if(!this.loadedmetadata){this.startFragRequested=!1;const t=this.levels?this.levels[e].details:null;t!=null&&t.live?(this.startPosition=-1,this.setStartPosition(t,0),this.resetLoadingState()):this.nextLoadPosition=this.startPosition}}resetWhenMissingContext(e){this.warn(`The loading context changed while buffering fragment ${e.sn} of level ${e.level}. This chunk will not be buffered.`),this.removeUnbufferedFrags(),this.resetStartWhenNotLoaded(e.level),this.resetLoadingState()}removeUnbufferedFrags(e=0){this.fragmentTracker.removeFragmentsInRange(e,1/0,this.playlistType,!1,!0)}updateLevelTiming(e,t,n,r){var i;const a=n.details;if(!a){this.warn("level.details undefined");return}if(Object.keys(e.elementaryStreams).reduce((l,d)=>{const u=e.elementaryStreams[d];if(u){const f=u.endPTS-u.startPTS;if(f<=0)return this.warn(`Could not parse fragment ${e.sn} ${d} duration reliably (${f})`),l||!1;const p=r?0:rs(a,e,u.startPTS,u.endPTS,u.startDTS,u.endDTS);return this.hls.trigger(T.LEVEL_PTS_UPDATED,{details:a,level:n,drift:p,type:d,frag:e,start:u.startPTS,end:u.endPTS}),!0}return l},!1))n.fragmentError=0;else if(((i=this.transmuxer)==null?void 0:i.error)===null){const l=new Error(`Found no media in fragment ${e.sn} of level ${n.id} resetting transmuxer to fallback to playlist timing`);if(this.warn(l.message),this.hls.trigger(T.ERROR,{type:te.MEDIA_ERROR,details:M.FRAG_PARSING_ERROR,fatal:!1,error:l,frag:e,reason:`Found no media in msn ${e.sn} of level "${n.url}"`}),!this.hls)return;this.resetTransmuxer()}this.state=$.PARSED,this.hls.trigger(T.FRAG_PARSED,{frag:e,part:t})}resetTransmuxer(){this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null)}recoverWorkerError(e){e.event==="demuxerWorker"&&(this.resetTransmuxer(),this.resetLoadingState())}set state(e){const t=this._state;t!==e&&(this._state=e,this.log(`${t}->${e}`))}get state(){return this._state}}function Wr(){if(!(typeof self>"u"))return self.MediaSource||self.WebKitMediaSource}function ds(){return self.SourceBuffer||self.WebKitSourceBuffer}function Hc(){const o=Wr();if(!o)return!1;const e=ds(),t=o&&typeof o.isTypeSupported=="function"&&o.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),n=!e||e.prototype&&typeof e.prototype.appendBuffer=="function"&&typeof e.prototype.remove=="function";return!!t&&!!n}function qc(){var o;const e=ds();return typeof(e==null||(o=e.prototype)==null?void 0:o.changeType)=="function"}function Yc(){return typeof __HLS_WORKER_BUNDLE__=="function"}function zc(){const o=new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`],{type:"text/javascript"}),e=self.URL.createObjectURL(o);return{worker:new self.Worker(e),objectURL:e}}function Wc(o){const e=new self.URL(o,self.location.href).href;return{worker:new self.Worker(e),scriptURL:e}}function Ve(o="",e=9e4){return{type:o,id:-1,pid:-1,inputTimeScale:e,sequenceNumber:-1,samples:[],dropped:0}}class cs{constructor(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.basePTS=null,this.initPTS=null,this.lastPTS=null}resetInitSegment(e,t,n,r){this._id3Track={type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}}resetTimeStamp(e){this.initPTS=e,this.resetContiguity()}resetContiguity(){this.basePTS=null,this.lastPTS=null,this.frameIndex=0}canParse(e,t){return!1}appendFrame(e,t,n){}demux(e,t){this.cachedData&&(e=gt(this.cachedData,e),this.cachedData=null);let n=_n(e,0),r=n?n.length:0,i;const a=this._audioTrack,s=this._id3Track,l=n?Id(n):void 0,d=e.length;for((this.basePTS===null||this.frameIndex===0&&ee(l))&&(this.basePTS=Vc(l,t,this.initPTS),this.lastPTS=this.basePTS),this.lastPTS===null&&(this.lastPTS=this.basePTS),n&&n.length>0&&s.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:n,type:He.audioId3,duration:Number.POSITIVE_INFINITY});r<d;){if(this.canParse(e,r)){const u=this.appendFrame(a,e,r);u?(this.frameIndex++,this.lastPTS=u.sample.pts,r+=u.length,i=r):r=d}else Ld(e,r)?(n=_n(e,r),s.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:n,type:He.audioId3,duration:Number.POSITIVE_INFINITY}),r+=n.length,i=r):r++;if(r===d&&i!==d){const u=yt(e,i);this.cachedData?this.cachedData=gt(this.cachedData,u):this.cachedData=u}}return{audioTrack:a,videoTrack:Ve(),id3Track:s,textTrack:Ve()}}demuxSampleAes(e,t,n){return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`))}flush(e){const t=this.cachedData;return t&&(this.cachedData=null,this.demux(t,0)),{audioTrack:this._audioTrack,videoTrack:Ve(),id3Track:this._id3Track,textTrack:Ve()}}destroy(){}}const Vc=(o,e,t)=>{if(ee(o))return o*90;const n=t?t.baseTime*9e4/t.timescale:0;return e*9e4+n};function jc(o,e,t,n){let r,i,a,s;const l=navigator.userAgent.toLowerCase(),d=n,u=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];r=((e[t+2]&192)>>>6)+1;const f=(e[t+2]&60)>>>2;if(f>u.length-1){o.trigger(T.ERROR,{type:te.MEDIA_ERROR,details:M.FRAG_PARSING_ERROR,fatal:!0,reason:`invalid ADTS sampling index:${f}`});return}return a=(e[t+2]&1)<<2,a|=(e[t+3]&192)>>>6,R.log(`manifest codec:${n}, ADTS type:${r}, samplingIndex:${f}`),/firefox/i.test(l)?f>=6?(r=5,s=new Array(4),i=f-3):(r=2,s=new Array(2),i=f):l.indexOf("android")!==-1?(r=2,s=new Array(2),i=f):(r=5,s=new Array(4),n&&(n.indexOf("mp4a.40.29")!==-1||n.indexOf("mp4a.40.5")!==-1)||!n&&f>=6?i=f-3:((n&&n.indexOf("mp4a.40.2")!==-1&&(f>=6&&a===1||/vivaldi/i.test(l))||!n&&a===1)&&(r=2,s=new Array(2)),i=f)),s[0]=r<<3,s[0]|=(f&14)>>1,s[1]|=(f&1)<<7,s[1]|=a<<3,r===5&&(s[1]|=(i&14)>>1,s[2]=(i&1)<<7,s[2]|=2<<2,s[3]=0),{config:s,samplerate:u[f],channelCount:a,codec:"mp4a.40."+r,manifestCodec:d}}function us(o,e){return o[e]===255&&(o[e+1]&246)===240}function hs(o,e){return o[e+1]&1?7:9}function Vr(o,e){return(o[e+3]&3)<<11|o[e+4]<<3|(o[e+5]&224)>>>5}function Qc(o,e){return e+5<o.length}function Mn(o,e){return e+1<o.length&&us(o,e)}function Xc(o,e){return Qc(o,e)&&us(o,e)&&Vr(o,e)<=o.length-e}function Zc(o,e){if(Mn(o,e)){const t=hs(o,e);if(e+t>=o.length)return!1;const n=Vr(o,e);if(n<=t)return!1;const r=e+n;return r===o.length||Mn(o,r)}return!1}function ps(o,e,t,n,r){if(!o.samplerate){const i=jc(e,t,n,r);if(!i)return;o.config=i.config,o.samplerate=i.samplerate,o.channelCount=i.channelCount,o.codec=i.codec,o.manifestCodec=i.manifestCodec,R.log(`parsed codec:${o.codec}, rate:${i.samplerate}, channels:${i.channelCount}`)}}function fs(o){return 1024*9e4/o}function Jc(o,e){const t=hs(o,e);if(e+t<=o.length){const n=Vr(o,e)-t;if(n>0)return{headerLength:t,frameLength:n}}}function ms(o,e,t,n,r){const i=fs(o.samplerate),a=n+r*i,s=Jc(e,t);let l;if(s){const{frameLength:f,headerLength:p}=s,A=p+f,b=Math.max(0,t+A-e.length);b?(l=new Uint8Array(A-p),l.set(e.subarray(t+p,e.length),0)):l=e.subarray(t+p,t+A);const x={unit:l,pts:a};return b||o.samples.push(x),{sample:x,length:A,missing:b}}const d=e.length-t;return l=new Uint8Array(d),l.set(e.subarray(t,e.length),0),{sample:{unit:l,pts:a},length:d,missing:-1}}class eu extends cs{constructor(e,t){super(),this.observer=void 0,this.config=void 0,this.observer=e,this.config=t}resetInitSegment(e,t,n,r){super.resetInitSegment(e,t,n,r),this._audioTrack={container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"aac",samples:[],manifestCodec:t,duration:r,inputTimeScale:9e4,dropped:0}}static probe(e){if(!e)return!1;let n=(_n(e,0)||[]).length;for(let r=e.length;n<r;n++)if(Zc(e,n))return R.log("ADTS sync word found !"),!0;return!1}canParse(e,t){return Xc(e,t)}appendFrame(e,t,n){ps(e,this.observer,t,n,e.manifestCodec);const r=ms(e,t,n,this.basePTS,this.frameIndex);if(r&&r.missing===0)return r}}const tu=/\/emsg[-/]ID3/i;class nu{constructor(e,t){this.remainderData=null,this.timeOffset=0,this.config=void 0,this.videoTrack=void 0,this.audioTrack=void 0,this.id3Track=void 0,this.txtTrack=void 0,this.config=t}resetTimeStamp(){}resetInitSegment(e,t,n,r){const i=this.videoTrack=Ve("video",1),a=this.audioTrack=Ve("audio",1),s=this.txtTrack=Ve("text",1);if(this.id3Track=Ve("id3",1),this.timeOffset=0,!(e!=null&&e.byteLength))return;const l=Qa(e);if(l.video){const{id:d,timescale:u,codec:f}=l.video;i.id=d,i.timescale=s.timescale=u,i.codec=f}if(l.audio){const{id:d,timescale:u,codec:f}=l.audio;a.id=d,a.timescale=u,a.codec=f}s.id=Wa.text,i.sampleDuration=0,i.duration=a.duration=r}resetContiguity(){}static probe(e){return e=e.length>16384?e.subarray(0,16384):e,oe(e,["moof"]).length>0}demux(e,t){this.timeOffset=t;let n=e;const r=this.videoTrack,i=this.txtTrack;if(this.config.progressive){this.remainderData&&(n=gt(this.remainderData,e));const s=qd(n);this.remainderData=s.remainder,r.samples=s.valid||new Uint8Array}else r.samples=n;const a=this.extractID3Track(r,t);return i.samples=ji(t,r),{videoTrack:r,audioTrack:this.audioTrack,id3Track:a,textTrack:this.txtTrack}}flush(){const e=this.timeOffset,t=this.videoTrack,n=this.txtTrack;t.samples=this.remainderData||new Uint8Array,this.remainderData=null;const r=this.extractID3Track(t,this.timeOffset);return n.samples=ji(e,t),{videoTrack:t,audioTrack:Ve(),id3Track:r,textTrack:Ve()}}extractID3Track(e,t){const n=this.id3Track;if(e.samples.length){const r=oe(e.samples,["emsg"]);r&&r.forEach(i=>{const a=Wd(i);if(tu.test(a.schemeIdUri)){const s=ee(a.presentationTime)?a.presentationTime/a.timeScale:t+a.presentationTimeDelta/a.timeScale;let l=a.eventDuration===4294967295?Number.POSITIVE_INFINITY:a.eventDuration/a.timeScale;l<=.001&&(l=Number.POSITIVE_INFINITY);const d=a.payload;n.samples.push({data:d,len:d.byteLength,dts:s,pts:s,type:He.emsg,duration:l})}})}return n}demuxSampleAes(e,t,n){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))}destroy(){}}let Cn=null;const ru=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],iu=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],au=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],su=[0,1,1,4];function ys(o,e,t,n,r){if(t+24>e.length)return;const i=gs(e,t);if(i&&t+i.frameLength<=e.length){const a=i.samplesPerFrame*9e4/i.sampleRate,s=n+r*a,l={unit:e.subarray(t,t+i.frameLength),pts:s,dts:s};return o.config=[],o.channelCount=i.channelCount,o.samplerate=i.sampleRate,o.samples.push(l),{sample:l,length:i.frameLength,missing:0}}}function gs(o,e){const t=o[e+1]>>3&3,n=o[e+1]>>1&3,r=o[e+2]>>4&15,i=o[e+2]>>2&3;if(t!==1&&r!==0&&r!==15&&i!==3){const a=o[e+2]>>1&1,s=o[e+3]>>6,l=t===3?3-n:n===3?3:4,d=ru[l*14+r-1]*1e3,f=iu[(t===3?0:t===2?1:2)*3+i],p=s===3?1:2,A=au[t][n],b=su[n],x=A*8*b,S=Math.floor(A*d/f+a)*b;if(Cn===null){const I=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);Cn=I?parseInt(I[1]):0}return!!Cn&&Cn<=87&&n===2&&d>=224e3&&s===0&&(o[e+3]=o[e+3]|128),{sampleRate:f,channelCount:p,frameLength:S,samplesPerFrame:x}}}function jr(o,e){return o[e]===255&&(o[e+1]&224)===224&&(o[e+1]&6)!==0}function As(o,e){return e+1<o.length&&jr(o,e)}function ou(o,e){return jr(o,e)&&4<=o.length-e}function lu(o,e){if(e+1<o.length&&jr(o,e)){const n=gs(o,e);let r=4;n!=null&&n.frameLength&&(r=n.frameLength);const i=e+r;return i===o.length||As(o,i)}return!1}class ga{constructor(e){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}loadWord(){const e=this.data,t=this.bytesAvailable,n=e.byteLength-t,r=new Uint8Array(4),i=Math.min(4,t);if(i===0)throw new Error("no bytes available");r.set(e.subarray(n,n+i)),this.word=new DataView(r.buffer).getUint32(0),this.bitsAvailable=i*8,this.bytesAvailable-=i}skipBits(e){let t;e=Math.min(e,this.bytesAvailable*8+this.bitsAvailable),this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,t=e>>3,e-=t<<3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)}readBits(e){let t=Math.min(this.bitsAvailable,e);const n=this.word>>>32-t;if(e>32&&R.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0)this.word<<=t;else if(this.bytesAvailable>0)this.loadWord();else throw new Error("no bits available");return t=e-t,t>0&&this.bitsAvailable?n<<t|this.readBits(t):n}skipLZ(){let e;for(e=0;e<this.bitsAvailable;++e)if((this.word&2147483648>>>e)!==0)return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()}skipUEG(){this.skipBits(1+this.skipLZ())}skipEG(){this.skipBits(1+this.skipLZ())}readUEG(){const e=this.skipLZ();return this.readBits(e+1)-1}readEG(){const e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}readBoolean(){return this.readBits(1)===1}readUByte(){return this.readBits(8)}readUShort(){return this.readBits(16)}readUInt(){return this.readBits(32)}skipScalingList(e){let t=8,n=8,r;for(let i=0;i<e;i++)n!==0&&(r=this.readEG(),n=(t+r+256)%256),t=n===0?t:n}readSPS(){let e=0,t=0,n=0,r=0,i,a,s;const l=this.readUByte.bind(this),d=this.readBits.bind(this),u=this.readUEG.bind(this),f=this.readBoolean.bind(this),p=this.skipBits.bind(this),A=this.skipEG.bind(this),b=this.skipUEG.bind(this),x=this.skipScalingList.bind(this);l();const S=l();if(d(5),p(3),l(),b(),S===100||S===110||S===122||S===244||S===44||S===83||S===86||S===118||S===128){const K=u();if(K===3&&p(1),b(),b(),p(1),f())for(a=K!==3?8:12,s=0;s<a;s++)f()&&(s<6?x(16):x(64))}b();const k=u();if(k===0)u();else if(k===1)for(p(1),A(),A(),i=u(),s=0;s<i;s++)A();b(),p(1);const L=u(),I=u(),D=d(1);D===0&&p(1),p(1),f()&&(e=u(),t=u(),n=u(),r=u());let _=[1,1];if(f()&&f())switch(l()){case 1:_=[1,1];break;case 2:_=[12,11];break;case 3:_=[10,11];break;case 4:_=[16,11];break;case 5:_=[40,33];break;case 6:_=[24,11];break;case 7:_=[20,11];break;case 8:_=[32,11];break;case 9:_=[80,33];break;case 10:_=[18,11];break;case 11:_=[15,11];break;case 12:_=[64,33];break;case 13:_=[160,99];break;case 14:_=[4,3];break;case 15:_=[3,2];break;case 16:_=[2,1];break;case 255:{_=[l()<<8|l(),l()<<8|l()];break}}return{width:Math.ceil((L+1)*16-e*2-t*2),height:(2-D)*(I+1)*16-(D?2:4)*(n+r),pixelRatio:_}}readSliceType(){return this.readUByte(),this.readUEG(),this.readUEG()}}class du{constructor(e,t,n){this.keyData=void 0,this.decrypter=void 0,this.keyData=n,this.decrypter=new Yr(t,{removePKCS7Padding:!1})}decryptBuffer(e){return this.decrypter.decrypt(e,this.keyData.key.buffer,this.keyData.iv.buffer)}decryptAacSample(e,t,n){const r=e[t].unit;if(r.length<=16)return;const i=r.subarray(16,r.length-r.length%16),a=i.buffer.slice(i.byteOffset,i.byteOffset+i.length);this.decryptBuffer(a).then(s=>{const l=new Uint8Array(s);r.set(l,16),this.decrypter.isSync()||this.decryptAacSamples(e,t+1,n)})}decryptAacSamples(e,t,n){for(;;t++){if(t>=e.length){n();return}if(!(e[t].unit.length<32)&&(this.decryptAacSample(e,t,n),!this.decrypter.isSync()))return}}getAvcEncryptedData(e){const t=Math.floor((e.length-48)/160)*16+16,n=new Int8Array(t);let r=0;for(let i=32;i<e.length-16;i+=160,r+=16)n.set(e.subarray(i,i+16),r);return n}getAvcDecryptedUnit(e,t){const n=new Uint8Array(t);let r=0;for(let i=32;i<e.length-16;i+=160,r+=16)e.set(n.subarray(r,r+16),i);return e}decryptAvcSample(e,t,n,r,i){const a=Ja(i.data),s=this.getAvcEncryptedData(a);this.decryptBuffer(s.buffer).then(l=>{i.data=this.getAvcDecryptedUnit(a,l),this.decrypter.isSync()||this.decryptAvcSamples(e,t,n+1,r)})}decryptAvcSamples(e,t,n,r){if(e instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;t++,n=0){if(t>=e.length){r();return}const i=e[t].units;for(;!(n>=i.length);n++){const a=i[n];if(!(a.data.length<=48||a.type!==1&&a.type!==5)&&(this.decryptAvcSample(e,t,n,r,a),!this.decrypter.isSync()))return}}}}const De=188;class ot{constructor(e,t,n){this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._duration=0,this._pmtId=-1,this._avcTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.avcSample=null,this.remainderData=null,this.observer=e,this.config=t,this.typeSupported=n}static probe(e){const t=ot.syncOffset(e);return t>0&&R.warn(`MPEG2-TS detected but first sync word found @ offset ${t}`),t!==-1}static syncOffset(e){const t=e.length,n=Math.min(De*5,e.length-De)+1;let r=0;for(;r<n;){let i=!1;for(let a=r;a<t&&e[a]===71;a+=De)if(!i&&Fr(e,a)===0&&(i=!0),i&&a+De>n)return r;r++}return-1}static createTrack(e,t){return{container:e==="video"||e==="audio"?"video/mp2t":void 0,type:e,id:Wa[e],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:e==="audio"?t:void 0}}resetInitSegment(e,t,n,r){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack=ot.createTrack("video"),this._audioTrack=ot.createTrack("audio",r),this._id3Track=ot.createTrack("id3"),this._txtTrack=ot.createTrack("text"),this._audioTrack.segmentCodec="aac",this.aacOverFlow=null,this.avcSample=null,this.remainderData=null,this.audioCodec=t,this.videoCodec=n,this._duration=r}resetTimeStamp(){}resetContiguity(){const{_audioTrack:e,_avcTrack:t,_id3Track:n}=this;e&&(e.pesData=null),t&&(t.pesData=null),n&&(n.pesData=null),this.aacOverFlow=null,this.avcSample=null,this.remainderData=null}demux(e,t,n=!1,r=!1){n||(this.sampleAes=null);let i;const a=this._avcTrack,s=this._audioTrack,l=this._id3Track,d=this._txtTrack;let u=a.pid,f=a.pesData,p=s.pid,A=l.pid,b=s.pesData,x=l.pesData,S=null,k=this.pmtParsed,L=this._pmtId,I=e.length;if(this.remainderData&&(e=gt(this.remainderData,e),I=e.length,this.remainderData=null),I<De&&!r)return this.remainderData=e,{audioTrack:s,videoTrack:a,id3Track:l,textTrack:d};const D=Math.max(0,ot.syncOffset(e));I-=(I-D)%De,I<e.byteLength&&!r&&(this.remainderData=new Uint8Array(e.buffer,I,e.buffer.byteLength-I));let _=0;for(let U=D;U<I;U+=De)if(e[U]===71){const H=!!(e[U+1]&64),z=Fr(e,U),O=(e[U+3]&48)>>4;let J;if(O>1){if(J=U+5+e[U+4],J===U+De)continue}else J=U+4;switch(z){case u:H&&(f&&(i=wt(f))&&this.parseAVCPES(a,d,i,!1),f={data:[],size:0}),f&&(f.data.push(e.subarray(J,U+De)),f.size+=U+De-J);break;case p:if(H){if(b&&(i=wt(b)))switch(s.segmentCodec){case"aac":this.parseAACPES(s,i);break;case"mp3":this.parseMPEGPES(s,i);break}b={data:[],size:0}}b&&(b.data.push(e.subarray(J,U+De)),b.size+=U+De-J);break;case A:H&&(x&&(i=wt(x))&&this.parseID3PES(l,i),x={data:[],size:0}),x&&(x.data.push(e.subarray(J,U+De)),x.size+=U+De-J);break;case 0:H&&(J+=e[J]+1),L=this._pmtId=cu(e,J);break;case L:{H&&(J+=e[J]+1);const j=uu(e,J,this.typeSupported,n);u=j.avc,u>0&&(a.pid=u),p=j.audio,p>0&&(s.pid=p,s.segmentCodec=j.segmentCodec),A=j.id3,A>0&&(l.pid=A),S!==null&&!k&&(R.warn(`MPEG-TS PMT found at ${U} after unknown PID '${S}'. Backtracking to sync byte @${D} to parse all TS packets.`),S=null,U=D-188),k=this.pmtParsed=!0;break}case 17:case 8191:break;default:S=z;break}}else _++;if(_>0){const U=new Error(`Found ${_} TS packet/s that do not start with 0x47`);this.observer.emit(T.ERROR,T.ERROR,{type:te.MEDIA_ERROR,details:M.FRAG_PARSING_ERROR,fatal:!1,error:U,reason:U.message})}a.pesData=f,s.pesData=b,l.pesData=x;const K={audioTrack:s,videoTrack:a,id3Track:l,textTrack:d};return r&&this.extractRemainingSamples(K),K}flush(){const{remainderData:e}=this;this.remainderData=null;let t;return e?t=this.demux(e,-1,!1,!0):t={videoTrack:this._avcTrack,audioTrack:this._audioTrack,id3Track:this._id3Track,textTrack:this._txtTrack},this.extractRemainingSamples(t),this.sampleAes?this.decrypt(t,this.sampleAes):t}extractRemainingSamples(e){const{audioTrack:t,videoTrack:n,id3Track:r,textTrack:i}=e,a=n.pesData,s=t.pesData,l=r.pesData;let d;if(a&&(d=wt(a))?(this.parseAVCPES(n,i,d,!0),n.pesData=null):n.pesData=a,s&&(d=wt(s))){switch(t.segmentCodec){case"aac":this.parseAACPES(t,d);break;case"mp3":this.parseMPEGPES(t,d);break}t.pesData=null}else s!=null&&s.size&&R.log("last AAC PES packet truncated,might overlap between fragments"),t.pesData=s;l&&(d=wt(l))?(this.parseID3PES(r,d),r.pesData=null):r.pesData=l}demuxSampleAes(e,t,n){const r=this.demux(e,n,!0,!this.config.progressive),i=this.sampleAes=new du(this.observer,this.config,t);return this.decrypt(r,i)}decrypt(e,t){return new Promise(n=>{const{audioTrack:r,videoTrack:i}=e;r.samples&&r.segmentCodec==="aac"?t.decryptAacSamples(r.samples,0,()=>{i.samples?t.decryptAvcSamples(i.samples,0,0,()=>{n(e)}):n(e)}):i.samples&&t.decryptAvcSamples(i.samples,0,0,()=>{n(e)})})}destroy(){this._duration=0}parseAVCPES(e,t,n,r){const i=this.parseAVCNALu(e,n.data);let a=this.avcSample,s,l=!1;n.data=null,a&&i.length&&!e.audFound&&(fr(a,e),a=this.avcSample=wn(!1,n.pts,n.dts,"")),i.forEach(d=>{switch(d.type){case 1:{s=!0,a||(a=this.avcSample=wn(!0,n.pts,n.dts,"")),a.frame=!0;const u=d.data;if(l&&u.length>4){const f=new ga(u).readSliceType();(f===2||f===4||f===7||f===9)&&(a.key=!0)}break}case 5:s=!0,a||(a=this.avcSample=wn(!0,n.pts,n.dts,"")),a.key=!0,a.frame=!0;break;case 6:{s=!0,Za(d.data,1,n.pts,t.samples);break}case 7:if(s=!0,l=!0,!e.sps){const u=d.data,p=new ga(u).readSPS();e.width=p.width,e.height=p.height,e.pixelRatio=p.pixelRatio,e.sps=[u],e.duration=this._duration;const A=u.subarray(1,4);let b="avc1.";for(let x=0;x<3;x++){let S=A[x].toString(16);S.length<2&&(S="0"+S),b+=S}e.codec=b}break;case 8:s=!0,e.pps||(e.pps=[d.data]);break;case 9:s=!1,e.audFound=!0,a&&fr(a,e),a=this.avcSample=wn(!1,n.pts,n.dts,"");break;case 12:s=!0;break;default:s=!1,a&&(a.debug+="unknown NAL "+d.type+" ");break}a&&s&&a.units.push(d)}),r&&a&&(fr(a,e),this.avcSample=null)}getLastNalUnit(e){var t;let n=this.avcSample,r;if((!n||n.units.length===0)&&(n=e[e.length-1]),(t=n)!=null&&t.units){const i=n.units;r=i[i.length-1]}return r}parseAVCNALu(e,t){const n=t.byteLength;let r=e.naluState||0;const i=r,a=[];let s=0,l,d,u,f=-1,p=0;for(r===-1&&(f=0,p=t[0]&31,r=0,s=1);s<n;){if(l=t[s++],!r){r=l?0:1;continue}if(r===1){r=l?0:2;continue}if(!l)r=3;else if(l===1){if(f>=0){const A={data:t.subarray(f,s-r-1),type:p};a.push(A)}else{const A=this.getLastNalUnit(e.samples);if(A&&(i&&s<=4-i&&A.state&&(A.data=A.data.subarray(0,A.data.byteLength-i)),d=s-r-1,d>0)){const b=new Uint8Array(A.data.byteLength+d);b.set(A.data,0),b.set(t.subarray(0,d),A.data.byteLength),A.data=b,A.state=0}}s<n?(u=t[s]&31,f=s,p=u,r=0):r=-1}else r=0}if(f>=0&&r>=0){const A={data:t.subarray(f,n),type:p,state:r};a.push(A)}if(a.length===0){const A=this.getLastNalUnit(e.samples);if(A){const b=new Uint8Array(A.data.byteLength+t.byteLength);b.set(A.data,0),b.set(t,A.data.byteLength),A.data=b}}return e.naluState=r,a}parseAACPES(e,t){let n=0;const r=this.aacOverFlow;let i=t.data;if(r){this.aacOverFlow=null;const f=r.missing,p=r.sample.unit.byteLength;if(f===-1){const A=new Uint8Array(p+i.byteLength);A.set(r.sample.unit,0),A.set(i,p),i=A}else{const A=p-f;r.sample.unit.set(i.subarray(0,f),A),e.samples.push(r.sample),n=r.missing}}let a,s;for(a=n,s=i.length;a<s-1&&!Mn(i,a);a++);if(a!==n){let f;const p=a<s-1;p?f=`AAC PES did not start with ADTS header,offset:${a}`:f="No ADTS header found in AAC PES";const A=new Error(f);if(R.warn(`parsing error: ${f}`),this.observer.emit(T.ERROR,T.ERROR,{type:te.MEDIA_ERROR,details:M.FRAG_PARSING_ERROR,fatal:!1,levelRetry:p,error:A,reason:f}),!p)return}ps(e,this.observer,i,a,this.audioCodec);let l;if(t.pts!==void 0)l=t.pts;else if(r){const f=fs(e.samplerate);l=r.sample.pts+f}else{R.warn("[tsdemuxer]: AAC PES unknown PTS");return}let d=0,u;for(;a<s;)if(u=ms(e,i,a,l,d),a+=u.length,u.missing){this.aacOverFlow=u;break}else for(d++;a<s-1&&!Mn(i,a);a++);}parseMPEGPES(e,t){const n=t.data,r=n.length;let i=0,a=0;const s=t.pts;if(s===void 0){R.warn("[tsdemuxer]: MPEG PES unknown PTS");return}for(;a<r;)if(As(n,a)){const l=ys(e,n,a,s,i);if(l)a+=l.length,i++;else break}else a++}parseID3PES(e,t){if(t.pts===void 0){R.warn("[tsdemuxer]: ID3 PES unknown PTS");return}const n=we({},t,{type:this._avcTrack?He.emsg:He.audioId3,duration:Number.POSITIVE_INFINITY});e.samples.push(n)}}function wn(o,e,t,n){return{key:o,frame:!1,pts:e,dts:t,units:[],debug:n,length:0}}function Fr(o,e){return((o[e+1]&31)<<8)+o[e+2]}function cu(o,e){return(o[e+10]&31)<<8|o[e+11]}function uu(o,e,t,n){const r={audio:-1,avc:-1,id3:-1,segmentCodec:"aac"},i=(o[e+1]&15)<<8|o[e+2],a=e+3+i-4,s=(o[e+10]&15)<<8|o[e+11];for(e+=12+s;e<a;){const l=Fr(o,e);switch(o[e]){case 207:if(!n){R.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");break}case 15:r.audio===-1&&(r.audio=l);break;case 21:r.id3===-1&&(r.id3=l);break;case 219:if(!n){R.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");break}case 27:r.avc===-1&&(r.avc=l);break;case 3:case 4:t.mpeg!==!0&&t.mp3!==!0?R.log("MPEG audio found, not supported in this browser"):r.audio===-1&&(r.audio=l,r.segmentCodec="mp3");break;case 36:R.warn("Unsupported HEVC stream type found");break}e+=((o[e+3]&15)<<8|o[e+4])+5}return r}function wt(o){let e=0,t,n,r,i,a;const s=o.data;if(!o||o.size===0)return null;for(;s[0].length<19&&s.length>1;){const d=new Uint8Array(s[0].length+s[1].length);d.set(s[0]),d.set(s[1],s[0].length),s[0]=d,s.splice(1,1)}if(t=s[0],(t[0]<<16)+(t[1]<<8)+t[2]===1){if(n=(t[4]<<8)+t[5],n&&n>o.size-6)return null;const d=t[7];d&192&&(i=(t[9]&14)*536870912+(t[10]&255)*4194304+(t[11]&254)*16384+(t[12]&255)*128+(t[13]&254)/2,d&64?(a=(t[14]&14)*536870912+(t[15]&255)*4194304+(t[16]&254)*16384+(t[17]&255)*128+(t[18]&254)/2,i-a>60*9e4&&(R.warn(`${Math.round((i-a)/9e4)}s delta between PTS and DTS, align them`),i=a)):a=i),r=t[8];let u=r+9;if(o.size<=u)return null;o.size-=u;const f=new Uint8Array(o.size);for(let p=0,A=s.length;p<A;p++){t=s[p];let b=t.byteLength;if(u)if(u>b){u-=b;continue}else t=t.subarray(u),b-=u,u=0;f.set(t,e),e+=b}return n&&(n-=r+3),{data:f,pts:i,dts:a,len:n}}return null}function fr(o,e){if(o.units.length&&o.frame){if(o.pts===void 0){const t=e.samples,n=t.length;if(n){const r=t[n-1];o.pts=r.pts,o.dts=r.dts}else{e.dropped++;return}}e.samples.push(o)}o.debug.length&&R.log(o.pts+"/"+o.dts+":"+o.debug)}class hu extends cs{resetInitSegment(e,t,n,r){super.resetInitSegment(e,t,n,r),this._audioTrack={container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"mp3",samples:[],manifestCodec:t,duration:r,inputTimeScale:9e4,dropped:0}}static probe(e){if(!e)return!1;let n=(_n(e,0)||[]).length;for(let r=e.length;n<r;n++)if(lu(e,n))return R.log("MPEG Audio sync word found !"),!0;return!1}canParse(e,t){return ou(e,t)}appendFrame(e,t,n){if(this.basePTS!==null)return ys(e,t,n,this.basePTS,this.frameIndex)}}class Aa{static getSilentFrame(e,t){switch(e){case"mp4a.40.2":if(t===1)return new Uint8Array([0,200,0,128,35,128]);if(t===2)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(t===3)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(t===4)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(t===5)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(t===6)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(t===1)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===2)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===3)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);break}}}const st=Math.pow(2,32)-1;class P{static init(){P.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};let e;for(e in P.types)P.types.hasOwnProperty(e)&&(P.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);const t=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),n=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);P.HDLR_TYPES={video:t,audio:n};const r=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),i=new Uint8Array([0,0,0,0,0,0,0,0]);P.STTS=P.STSC=P.STCO=i,P.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),P.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),P.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),P.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);const a=new Uint8Array([105,115,111,109]),s=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);P.FTYP=P.box(P.types.ftyp,a,l,a,s),P.DINF=P.box(P.types.dinf,P.box(P.types.dref,r))}static box(e,...t){let n=8,r=t.length;const i=r;for(;r--;)n+=t[r].byteLength;const a=new Uint8Array(n);for(a[0]=n>>24&255,a[1]=n>>16&255,a[2]=n>>8&255,a[3]=n&255,a.set(e,4),r=0,n=8;r<i;r++)a.set(t[r],n),n+=t[r].byteLength;return a}static hdlr(e){return P.box(P.types.hdlr,P.HDLR_TYPES[e])}static mdat(e){return P.box(P.types.mdat,e)}static mdhd(e,t){t*=e;const n=Math.floor(t/(st+1)),r=Math.floor(t%(st+1));return P.box(P.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,n>>24,n>>16&255,n>>8&255,n&255,r>>24,r>>16&255,r>>8&255,r&255,85,196,0,0]))}static mdia(e){return P.box(P.types.mdia,P.mdhd(e.timescale,e.duration),P.hdlr(e.type),P.minf(e))}static mfhd(e){return P.box(P.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,e&255]))}static minf(e){return e.type==="audio"?P.box(P.types.minf,P.box(P.types.smhd,P.SMHD),P.DINF,P.stbl(e)):P.box(P.types.minf,P.box(P.types.vmhd,P.VMHD),P.DINF,P.stbl(e))}static moof(e,t,n){return P.box(P.types.moof,P.mfhd(e),P.traf(n,t))}static moov(e){let t=e.length;const n=[];for(;t--;)n[t]=P.trak(e[t]);return P.box.apply(null,[P.types.moov,P.mvhd(e[0].timescale,e[0].duration)].concat(n).concat(P.mvex(e)))}static mvex(e){let t=e.length;const n=[];for(;t--;)n[t]=P.trex(e[t]);return P.box.apply(null,[P.types.mvex,...n])}static mvhd(e,t){t*=e;const n=Math.floor(t/(st+1)),r=Math.floor(t%(st+1)),i=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,n>>24,n>>16&255,n>>8&255,n&255,r>>24,r>>16&255,r>>8&255,r&255,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return P.box(P.types.mvhd,i)}static sdtp(e){const t=e.samples||[],n=new Uint8Array(4+t.length);let r,i;for(r=0;r<t.length;r++)i=t[r].flags,n[r+4]=i.dependsOn<<4|i.isDependedOn<<2|i.hasRedundancy;return P.box(P.types.sdtp,n)}static stbl(e){return P.box(P.types.stbl,P.stsd(e),P.box(P.types.stts,P.STTS),P.box(P.types.stsc,P.STSC),P.box(P.types.stsz,P.STSZ),P.box(P.types.stco,P.STCO))}static avc1(e){let t=[],n=[],r,i,a;for(r=0;r<e.sps.length;r++)i=e.sps[r],a=i.byteLength,t.push(a>>>8&255),t.push(a&255),t=t.concat(Array.prototype.slice.call(i));for(r=0;r<e.pps.length;r++)i=e.pps[r],a=i.byteLength,n.push(a>>>8&255),n.push(a&255),n=n.concat(Array.prototype.slice.call(i));const s=P.box(P.types.avcC,new Uint8Array([1,t[3],t[4],t[5],255,224|e.sps.length].concat(t).concat([e.pps.length]).concat(n))),l=e.width,d=e.height,u=e.pixelRatio[0],f=e.pixelRatio[1];return P.box(P.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,l&255,d>>8&255,d&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),s,P.box(P.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),P.box(P.types.pasp,new Uint8Array([u>>24,u>>16&255,u>>8&255,u&255,f>>24,f>>16&255,f>>8&255,f&255])))}static esds(e){const t=e.config.length;return new Uint8Array([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([t]).concat(e.config).concat([6,1,2]))}static mp4a(e){const t=e.samplerate;return P.box(P.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,t>>8&255,t&255,0,0]),P.box(P.types.esds,P.esds(e)))}static mp3(e){const t=e.samplerate;return P.box(P.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,t>>8&255,t&255,0,0]))}static stsd(e){return e.type==="audio"?e.segmentCodec==="mp3"&&e.codec==="mp3"?P.box(P.types.stsd,P.STSD,P.mp3(e)):P.box(P.types.stsd,P.STSD,P.mp4a(e)):P.box(P.types.stsd,P.STSD,P.avc1(e))}static tkhd(e){const t=e.id,n=e.duration*e.timescale,r=e.width,i=e.height,a=Math.floor(n/(st+1)),s=Math.floor(n%(st+1));return P.box(P.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,t&255,0,0,0,0,a>>24,a>>16&255,a>>8&255,a&255,s>>24,s>>16&255,s>>8&255,s&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,r>>8&255,r&255,0,0,i>>8&255,i&255,0,0]))}static traf(e,t){const n=P.sdtp(e),r=e.id,i=Math.floor(t/(st+1)),a=Math.floor(t%(st+1));return P.box(P.types.traf,P.box(P.types.tfhd,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,r&255])),P.box(P.types.tfdt,new Uint8Array([1,0,0,0,i>>24,i>>16&255,i>>8&255,i&255,a>>24,a>>16&255,a>>8&255,a&255])),P.trun(e,n.length+16+20+8+16+8+8),n)}static trak(e){return e.duration=e.duration||4294967295,P.box(P.types.trak,P.tkhd(e),P.mdia(e))}static trex(e){const t=e.id;return P.box(P.types.trex,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,t&255,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}static trun(e,t){const n=e.samples||[],r=n.length,i=12+16*r,a=new Uint8Array(i);let s,l,d,u,f,p;for(t+=8+i,a.set([e.type==="video"?1:0,0,15,1,r>>>24&255,r>>>16&255,r>>>8&255,r&255,t>>>24&255,t>>>16&255,t>>>8&255,t&255],0),s=0;s<r;s++)l=n[s],d=l.duration,u=l.size,f=l.flags,p=l.cts,a.set([d>>>24&255,d>>>16&255,d>>>8&255,d&255,u>>>24&255,u>>>16&255,u>>>8&255,u&255,f.isLeading<<2|f.dependsOn,f.isDependedOn<<6|f.hasRedundancy<<4|f.paddingValue<<1|f.isNonSync,f.degradPrio&240<<8,f.degradPrio&15,p>>>24&255,p>>>16&255,p>>>8&255,p&255],12+16*s);return P.box(P.types.trun,a)}static initSegment(e){P.types||P.init();const t=P.moov(e),n=new Uint8Array(P.FTYP.byteLength+t.byteLength);return n.set(P.FTYP),n.set(t,P.FTYP.byteLength),n}}P.types=void 0;P.HDLR_TYPES=void 0;P.STTS=void 0;P.STSC=void 0;P.STCO=void 0;P.STSZ=void 0;P.VMHD=void 0;P.SMHD=void 0;P.STSD=void 0;P.FTYP=void 0;P.DINF=void 0;const bs=9e4;function Qr(o,e,t=1,n=!1){const r=o*e*t;return n?Math.round(r):r}function pu(o,e,t=1,n=!1){return Qr(o,e,1/t,n)}function rn(o,e=!1){return Qr(o,1e3,1/bs,e)}function fu(o,e=1){return Qr(o,bs,1/e)}const mu=10*1e3,ba=1024,yu=1152;let kn=null,mr=null;class yr{constructor(e,t,n,r=""){if(this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=null,this._initDTS=null,this.nextAvcDts=null,this.nextAudioPts=null,this.videoSampleDuration=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.observer=e,this.config=t,this.typeSupported=n,this.ISGenerated=!1,kn===null){const a=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);kn=a?parseInt(a[1]):0}if(mr===null){const i=navigator.userAgent.match(/Safari\/(\d+)/i);mr=i?parseInt(i[1]):0}}destroy(){}resetTimeStamp(e){R.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=e}resetNextTimestamp(){R.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1}resetInitSegment(){R.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1}getVideoStartPts(e){let t=!1;const n=e.reduce((r,i)=>{const a=i.pts-r;return a<-4294967296?(t=!0,$e(r,i.pts)):a>0?r:i.pts},e[0].pts);return t&&R.debug("PTS rollover detected"),n}remux(e,t,n,r,i,a,s,l){let d,u,f,p,A,b,x=i,S=i;const k=e.pid>-1,L=t.pid>-1,I=t.samples.length,D=e.samples.length>0,_=s&&I>0||I>1;if((!k||D)&&(!L||_)||this.ISGenerated||s){this.ISGenerated||(f=this.generateIS(e,t,i,a));const U=this.isVideoContiguous;let H=-1,z;if(_&&(H=gu(t.samples),!U&&this.config.forceKeyFrameOnDiscontinuity))if(b=!0,H>0){R.warn(`[mp4-remuxer]: Dropped ${H} out of ${I} video samples due to a missing keyframe`);const O=this.getVideoStartPts(t.samples);t.samples=t.samples.slice(H),t.dropped+=H,S+=(t.samples[0].pts-O)/t.inputTimeScale,z=S}else H===-1&&(R.warn(`[mp4-remuxer]: No keyframe found out of ${I} video samples`),b=!1);if(this.ISGenerated){if(D&&_){const O=this.getVideoStartPts(t.samples),j=($e(e.samples[0].pts,O)-O)/t.inputTimeScale;x+=Math.max(0,j),S+=Math.max(0,-j)}if(D){if(e.samplerate||(R.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),f=this.generateIS(e,t,i,a)),u=this.remuxAudio(e,x,this.isAudioContiguous,a,L||_||l===ne.AUDIO?S:void 0),_){const O=u?u.endPTS-u.startPTS:0;t.inputTimeScale||(R.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),f=this.generateIS(e,t,i,a)),d=this.remuxVideo(t,S,U,O)}}else _&&(d=this.remuxVideo(t,S,U,0));d&&(d.firstKeyFrame=H,d.independent=H!==-1,d.firstKeyFramePTS=z)}}return this.ISGenerated&&this._initPTS&&this._initDTS&&(n.samples.length&&(A=vs(n,i,this._initPTS,this._initDTS)),r.samples.length&&(p=xs(r,i,this._initPTS))),{audio:u,video:d,initSegment:f,independent:b,text:p,id3:A}}generateIS(e,t,n,r){const i=e.samples,a=t.samples,s=this.typeSupported,l={},d=this._initPTS;let u=!d||r,f="audio/mp4",p,A,b;if(u&&(p=A=1/0),e.config&&i.length){switch(e.timescale=e.samplerate,e.segmentCodec){case"mp3":s.mpeg?(f="audio/mpeg",e.codec=""):s.mp3&&(e.codec="mp3");break}l.audio={id:"audio",container:f,codec:e.codec,initSegment:e.segmentCodec==="mp3"&&s.mpeg?new Uint8Array(0):P.initSegment([e]),metadata:{channelCount:e.channelCount}},u&&(b=e.inputTimeScale,!d||b!==d.timescale?p=A=i[0].pts-Math.round(b*n):u=!1)}if(t.sps&&t.pps&&a.length&&(t.timescale=t.inputTimeScale,l.video={id:"main",container:"video/mp4",codec:t.codec,initSegment:P.initSegment([t]),metadata:{width:t.width,height:t.height}},u))if(b=t.inputTimeScale,!d||b!==d.timescale){const x=this.getVideoStartPts(a),S=Math.round(b*n);A=Math.min(A,$e(a[0].dts,x)-S),p=Math.min(p,x-S)}else u=!1;if(Object.keys(l).length)return this.ISGenerated=!0,u?(this._initPTS={baseTime:p,timescale:b},this._initDTS={baseTime:A,timescale:b}):p=b=void 0,{tracks:l,initPTS:p,timescale:b}}remuxVideo(e,t,n,r){const i=e.inputTimeScale,a=e.samples,s=[],l=a.length,d=this._initPTS;let u=this.nextAvcDts,f=8,p=this.videoSampleDuration,A,b,x=Number.POSITIVE_INFINITY,S=Number.NEGATIVE_INFINITY,k=!1;if(!n||u===null){const X=t*i,G=a[0].pts-$e(a[0].dts,a[0].pts);u=X-G}const L=d.baseTime*i/d.timescale;for(let X=0;X<l;X++){const G=a[X];G.pts=$e(G.pts-L,u),G.dts=$e(G.dts-L,u),G.dts<a[X>0?X-1:X].dts&&(k=!0)}k&&a.sort(function(X,G){const ce=X.dts-G.dts,de=X.pts-G.pts;return ce||de}),A=a[0].dts,b=a[a.length-1].dts;const I=b-A,D=I?Math.round(I/(l-1)):p||e.inputTimeScale/30;if(n){const X=A-u,G=X>D,ce=X<-1;if((G||ce)&&(G?R.warn(`AVC: ${rn(X,!0)} ms (${X}dts) hole between fragments detected, filling it`):R.warn(`AVC: ${rn(-X,!0)} ms (${X}dts) overlapping between fragments detected`),!ce||u>a[0].pts)){A=u;const de=a[0].pts-X;a[0].dts=A,a[0].pts=de,R.log(`Video: First PTS/DTS adjusted: ${rn(de,!0)}/${rn(A,!0)}, delta: ${rn(X,!0)} ms`)}}A=Math.max(0,A);let _=0,K=0;for(let X=0;X<l;X++){const G=a[X],ce=G.units,de=ce.length;let se=0;for(let ve=0;ve<de;ve++)se+=ce[ve].data.length;K+=se,_+=de,G.length=se,G.dts=Math.max(G.dts,A),x=Math.min(G.pts,x),S=Math.max(G.pts,S)}b=a[l-1].dts;const U=K+4*_+8;let H;try{H=new Uint8Array(U)}catch(X){this.observer.emit(T.ERROR,T.ERROR,{type:te.MUX_ERROR,details:M.REMUX_ALLOC_ERROR,fatal:!1,error:X,bytes:U,reason:`fail allocating video mdat ${U}`});return}const z=new DataView(H.buffer);z.setUint32(0,U),H.set(P.types.mdat,4);let O=!1,J=Number.POSITIVE_INFINITY,j=Number.POSITIVE_INFINITY,ae=Number.NEGATIVE_INFINITY,Te=Number.NEGATIVE_INFINITY;for(let X=0;X<l;X++){const G=a[X],ce=G.units;let de=0;for(let Le=0,Ie=ce.length;Le<Ie;Le++){const xe=ce[Le],Me=xe.data,Ye=xe.data.byteLength;z.setUint32(f,Ye),f+=4,H.set(Me,f),f+=Ye,de+=4+Ye}let se;if(X<l-1)p=a[X+1].dts-G.dts,se=a[X+1].pts-G.pts;else{const Le=this.config,Ie=X>0?G.dts-a[X-1].dts:D;if(se=X>0?G.pts-a[X-1].pts:D,Le.stretchShortVideoTrack&&this.nextAudioPts!==null){const xe=Math.floor(Le.maxBufferHole*i),Me=(r?x+r*i:this.nextAudioPts)-G.pts;Me>xe?(p=Me-Ie,p<0?p=Ie:O=!0,R.log(`[mp4-remuxer]: It is approximately ${Me/90} ms to the next segment; using duration ${p/90} ms for the last video frame.`)):p=Ie}else p=Ie}const ve=Math.round(G.pts-G.dts);J=Math.min(J,p),ae=Math.max(ae,p),j=Math.min(j,se),Te=Math.max(Te,se),s.push(new va(G.key,p,de,ve))}if(s.length){if(kn){if(kn<70){const X=s[0].flags;X.dependsOn=2,X.isNonSync=0}}else if(mr&&Te-j<ae-J&&D/ae<.025&&s[0].cts===0){R.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");let X=A;for(let G=0,ce=s.length;G<ce;G++){const de=X+s[G].duration,se=X+s[G].cts;if(G<ce-1){const ve=de+s[G+1].cts;s[G].duration=ve-se}else s[G].duration=G?s[G-1].duration:D;s[G].cts=0,X=de}}}p=O||!p?D:p,this.nextAvcDts=u=b+p,this.videoSampleDuration=p,this.isVideoContiguous=!0;const fe=P.moof(e.sequenceNumber++,A,we({},e,{samples:s})),me="video",ye={data1:fe,data2:H,startPTS:x/i,endPTS:(S+p)/i,startDTS:A/i,endDTS:u/i,type:me,hasAudio:!1,hasVideo:!0,nb:s.length,dropped:e.dropped};return e.samples=[],e.dropped=0,ye}remuxAudio(e,t,n,r,i){const a=e.inputTimeScale,s=e.samplerate?e.samplerate:a,l=a/s,d=e.segmentCodec==="aac"?ba:yu,u=d*l,f=this._initPTS,p=e.segmentCodec==="mp3"&&this.typeSupported.mpeg,A=[],b=i!==void 0;let x=e.samples,S=p?0:8,k=this.nextAudioPts||-1;const L=t*a,I=f.baseTime*a/f.timescale;if(this.isAudioContiguous=n=n||x.length&&k>0&&(r&&Math.abs(L-k)<9e3||Math.abs($e(x[0].pts-I,L)-k)<20*u),x.forEach(function(me){me.pts=$e(me.pts-I,L)}),!n||k<0){if(x=x.filter(me=>me.pts>=0),!x.length)return;i===0?k=0:r&&!b?k=Math.max(0,L):k=x[0].pts}if(e.segmentCodec==="aac"){const me=this.config.maxAudioFramesDrift;for(let ye=0,X=k;ye<x.length;ye++){const G=x[ye],ce=G.pts,de=ce-X,se=Math.abs(1e3*de/a);if(de<=-me*u&&b)ye===0&&(R.warn(`Audio frame @ ${(ce/a).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3*de/a)} ms.`),this.nextAudioPts=k=X=ce);else if(de>=me*u&&se<mu&&b){let ve=Math.round(de/u);X=ce-ve*u,X<0&&(ve--,X+=u),ye===0&&(this.nextAudioPts=k=X),R.warn(`[mp4-remuxer]: Injecting ${ve} audio frame @ ${(X/a).toFixed(3)}s due to ${Math.round(1e3*de/a)} ms gap.`);for(let Le=0;Le<ve;Le++){const Ie=Math.max(X,0);let xe=Aa.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);xe||(R.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),xe=G.unit.subarray()),x.splice(ye,0,{unit:xe,pts:Ie}),X+=u,ye++}}G.pts=X,X+=u}}let D=null,_=null,K,U=0,H=x.length;for(;H--;)U+=x[H].unit.byteLength;for(let me=0,ye=x.length;me<ye;me++){const X=x[me],G=X.unit;let ce=X.pts;if(_!==null){const se=A[me-1];se.duration=Math.round((ce-_)/l)}else if(n&&e.segmentCodec==="aac"&&(ce=k),D=ce,U>0){U+=S;try{K=new Uint8Array(U)}catch(se){this.observer.emit(T.ERROR,T.ERROR,{type:te.MUX_ERROR,details:M.REMUX_ALLOC_ERROR,fatal:!1,error:se,bytes:U,reason:`fail allocating audio mdat ${U}`});return}p||(new DataView(K.buffer).setUint32(0,U),K.set(P.types.mdat,4))}else return;K.set(G,S);const de=G.byteLength;S+=de,A.push(new va(!0,d,de,0)),_=ce}const z=A.length;if(!z)return;const O=A[A.length-1];this.nextAudioPts=k=_+l*O.duration;const J=p?new Uint8Array(0):P.moof(e.sequenceNumber++,D/l,we({},e,{samples:A}));e.samples=[];const j=D/a,ae=k/a,fe={data1:J,data2:K,startPTS:j,endPTS:ae,startDTS:j,endDTS:ae,type:"audio",hasAudio:!0,hasVideo:!1,nb:z};return this.isAudioContiguous=!0,fe}remuxEmptyAudio(e,t,n,r){const i=e.inputTimeScale,a=e.samplerate?e.samplerate:i,s=i/a,l=this.nextAudioPts,d=this._initDTS,u=d.baseTime*9e4/d.timescale,f=(l!==null?l:r.startDTS*i)+u,p=r.endDTS*i+u,A=s*ba,b=Math.ceil((p-f)/A),x=Aa.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);if(R.warn("[mp4-remuxer]: remux empty Audio"),!x){R.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");return}const S=[];for(let k=0;k<b;k++){const L=f+k*A;S.push({unit:x,pts:L,dts:L})}return e.samples=S,this.remuxAudio(e,t,n,!1)}}function $e(o,e){let t;if(e===null)return o;for(e<o?t=-8589934592:t=8589934592;Math.abs(o-e)>4294967296;)o+=t;return o}function gu(o){for(let e=0;e<o.length;e++)if(o[e].key)return e;return-1}function vs(o,e,t,n){const r=o.samples.length;if(!r)return;const i=o.inputTimeScale;for(let s=0;s<r;s++){const l=o.samples[s];l.pts=$e(l.pts-t.baseTime*9e4/t.timescale,e*i)/i,l.dts=$e(l.dts-n.baseTime*9e4/n.timescale,e*i)/i}const a=o.samples;return o.samples=[],{samples:a}}function xs(o,e,t){const n=o.samples.length;if(!n)return;const r=o.inputTimeScale;for(let a=0;a<n;a++){const s=o.samples[a];s.pts=$e(s.pts-t.baseTime*9e4/t.timescale,e*r)/r}o.samples.sort((a,s)=>a.pts-s.pts);const i=o.samples;return o.samples=[],{samples:i}}class va{constructor(e,t,n,r){this.size=void 0,this.duration=void 0,this.cts=void 0,this.flags=void 0,this.duration=t,this.size=n,this.cts=r,this.flags=new Au(e)}}class Au{constructor(e){this.isLeading=0,this.isDependedOn=0,this.hasRedundancy=0,this.degradPrio=0,this.dependsOn=1,this.isNonSync=1,this.dependsOn=e?2:1,this.isNonSync=e?0:1}}class bu{constructor(){this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=null,this.initTracks=void 0,this.lastEndTime=null}destroy(){}resetTimeStamp(e){this.initPTS=e,this.lastEndTime=null}resetNextTimestamp(){this.lastEndTime=null}resetInitSegment(e,t,n,r){this.audioCodec=t,this.videoCodec=n,this.generateInitSegment(Ud(e,r)),this.emitInitSegment=!0}generateInitSegment(e){let{audioCodec:t,videoCodec:n}=this;if(!(e!=null&&e.byteLength)){this.initTracks=void 0,this.initData=void 0;return}const r=this.initData=Qa(e);t||(t=xa(r.audio,pe.AUDIO)),n||(n=xa(r.video,pe.VIDEO));const i={};r.audio&&r.video?i.audiovideo={container:"video/mp4",codec:t+","+n,initSegment:e,id:"main"}:r.audio?i.audio={container:"audio/mp4",codec:t,initSegment:e,id:"audio"}:r.video?i.video={container:"video/mp4",codec:n,initSegment:e,id:"main"}:R.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=i}remux(e,t,n,r,i,a){var s,l;let{initPTS:d,lastEndTime:u}=this;const f={audio:void 0,video:void 0,text:r,id3:n,initSegment:void 0};ee(u)||(u=this.lastEndTime=i||0);const p=t.samples;if(!(p!=null&&p.length))return f;const A={initPTS:void 0,timescale:1};let b=this.initData;if((s=b)!=null&&s.length||(this.generateInitSegment(p),b=this.initData),!((l=b)!=null&&l.length))return R.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),f;this.emitInitSegment&&(A.tracks=this.initTracks,this.emitInitSegment=!1);const x=$d(b,p),S=x===null?i:x;(vu(d,S,i)||A.timescale!==d.timescale&&a)&&(A.initPTS=S-i,this.initPTS=d={baseTime:A.initPTS,timescale:1});const k=Gd(p,b),L=e?S-d.baseTime/d.timescale:u,I=L+k;Hd(b,p,d.baseTime/d.timescale),k>0?this.lastEndTime=I:(R.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());const D=!!b.audio,_=!!b.video;let K="";D&&(K+="audio"),_&&(K+="video");const U={data1:p,startPTS:L,startDTS:L,endPTS:I,endDTS:I,type:K,hasAudio:D,hasVideo:_,nb:1,dropped:0};return f.audio=U.type==="audio"?U:void 0,f.video=U.type!=="audio"?U:void 0,f.initSegment=A,f.id3=vs(n,i,d,d),r.samples.length&&(f.text=xs(r,i,d)),f}}function vu(o,e,t){if(o===null)return!0;const n=e-o.baseTime/o.timescale;return n<0&&Math.abs(n-t)>1}function xa(o,e){const t=o==null?void 0:o.codec;return t&&t.length>4?t:t==="hvc1"||t==="hev1"?"hvc1.1.c.L120.90":t==="av01"?"av01.0.04M.08":t==="avc1"||e===pe.VIDEO?"avc1.42e01e":"mp4a.40.5"}let et;try{et=self.performance.now.bind(self.performance)}catch{R.debug("Unable to use Performance API on this environment"),et=typeof self<"u"&&self.Date.now}const gr=[{demux:nu,remux:bu},{demux:ot,remux:yr},{demux:eu,remux:yr},{demux:hu,remux:yr}];class Ea{constructor(e,t,n,r,i){this.async=!1,this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.vendor=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.observer=e,this.typeSupported=t,this.config=n,this.vendor=r,this.id=i}configure(e){this.transmuxConfig=e,this.decrypter&&this.decrypter.reset()}push(e,t,n,r){const i=n.transmuxing;i.executeStart=et();let a=new Uint8Array(e);const{currentTransmuxState:s,transmuxConfig:l}=this;r&&(this.currentTransmuxState=r);const{contiguous:d,discontinuity:u,trackSwitch:f,accurateTimeOffset:p,timeOffset:A,initSegmentChange:b}=r||s,{audioCodec:x,videoCodec:S,defaultInitPts:k,duration:L,initSegmentData:I}=l,D=xu(a,t);if(D&&D.method==="AES-128"){const H=this.getDecrypter();if(H.isSync()){let z=H.softwareDecrypt(a,D.key.buffer,D.iv.buffer);if(n.part>-1&&(z=H.flush()),!z)return i.executeEnd=et(),Ar(n);a=new Uint8Array(z)}else return this.decryptionPromise=H.webCryptoDecrypt(a,D.key.buffer,D.iv.buffer).then(z=>{const O=this.push(z,null,n);return this.decryptionPromise=null,O}),this.decryptionPromise}const _=this.needsProbing(u,f);if(_){const H=this.configureTransmuxer(a);if(H)return R.warn(`[transmuxer] ${H.message}`),this.observer.emit(T.ERROR,T.ERROR,{type:te.MEDIA_ERROR,details:M.FRAG_PARSING_ERROR,fatal:!1,error:H,reason:H.message}),i.executeEnd=et(),Ar(n)}(u||f||b||_)&&this.resetInitSegment(I,x,S,L,t),(u||b||_)&&this.resetInitialTimestamp(k),d||this.resetContiguity();const K=this.transmux(a,D,A,p,n),U=this.currentTransmuxState;return U.contiguous=!0,U.discontinuity=!1,U.trackSwitch=!1,i.executeEnd=et(),K}flush(e){const t=e.transmuxing;t.executeStart=et();const{decrypter:n,currentTransmuxState:r,decryptionPromise:i}=this;if(i)return i.then(()=>this.flush(e));const a=[],{timeOffset:s}=r;if(n){const f=n.flush();f&&a.push(this.push(f,null,e))}const{demuxer:l,remuxer:d}=this;if(!l||!d)return t.executeEnd=et(),[Ar(e)];const u=l.flush(s);return Dn(u)?u.then(f=>(this.flushRemux(a,f,e),a)):(this.flushRemux(a,u,e),a)}flushRemux(e,t,n){const{audioTrack:r,videoTrack:i,id3Track:a,textTrack:s}=t,{accurateTimeOffset:l,timeOffset:d}=this.currentTransmuxState;R.log(`[transmuxer.ts]: Flushed fragment ${n.sn}${n.part>-1?" p: "+n.part:""} of level ${n.level}`);const u=this.remuxer.remux(r,i,a,s,d,l,!0,this.id);e.push({remuxResult:u,chunkMeta:n}),n.transmuxing.executeEnd=et()}resetInitialTimestamp(e){const{demuxer:t,remuxer:n}=this;!t||!n||(t.resetTimeStamp(e),n.resetTimeStamp(e))}resetContiguity(){const{demuxer:e,remuxer:t}=this;!e||!t||(e.resetContiguity(),t.resetNextTimestamp())}resetInitSegment(e,t,n,r,i){const{demuxer:a,remuxer:s}=this;!a||!s||(a.resetInitSegment(e,t,n,r),s.resetInitSegment(e,t,n,i))}destroy(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)}transmux(e,t,n,r,i){let a;return t&&t.method==="SAMPLE-AES"?a=this.transmuxSampleAes(e,t,n,r,i):a=this.transmuxUnencrypted(e,n,r,i),a}transmuxUnencrypted(e,t,n,r){const{audioTrack:i,videoTrack:a,id3Track:s,textTrack:l}=this.demuxer.demux(e,t,!1,!this.config.progressive);return{remuxResult:this.remuxer.remux(i,a,s,l,t,n,!1,this.id),chunkMeta:r}}transmuxSampleAes(e,t,n,r,i){return this.demuxer.demuxSampleAes(e,t,n).then(a=>({remuxResult:this.remuxer.remux(a.audioTrack,a.videoTrack,a.id3Track,a.textTrack,n,r,!1,this.id),chunkMeta:i}))}configureTransmuxer(e){const{config:t,observer:n,typeSupported:r,vendor:i}=this;let a;for(let f=0,p=gr.length;f<p;f++)if(gr[f].demux.probe(e)){a=gr[f];break}if(!a)return new Error("Failed to find demuxer by probing fragment data");const s=this.demuxer,l=this.remuxer,d=a.remux,u=a.demux;(!l||!(l instanceof d))&&(this.remuxer=new d(n,t,r,i)),(!s||!(s instanceof u))&&(this.demuxer=new u(n,t,r),this.probe=u.probe)}needsProbing(e,t){return!this.demuxer||!this.remuxer||e||t}getDecrypter(){let e=this.decrypter;return e||(e=this.decrypter=new Yr(this.config)),e}}function xu(o,e){let t=null;return o.byteLength>0&&e!=null&&e.key!=null&&e.iv!==null&&e.method!=null&&(t=e),t}const Ar=o=>({remuxResult:{},chunkMeta:o});function Dn(o){return"then"in o&&o.then instanceof Function}class Eu{constructor(e,t,n,r,i){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=e,this.videoCodec=t,this.initSegmentData=n,this.duration=r,this.defaultInitPts=i||null}}class Tu{constructor(e,t,n,r,i,a){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=e,this.contiguous=t,this.accurateTimeOffset=n,this.trackSwitch=r,this.timeOffset=i,this.initSegmentChange=a}}var un={},Su={get exports(){return un},set exports(o){un=o}};(function(o){var e=Object.prototype.hasOwnProperty,t="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(t=!1));function r(l,d,u){this.fn=l,this.context=d,this.once=u||!1}function i(l,d,u,f,p){if(typeof u!="function")throw new TypeError("The listener must be a function");var A=new r(u,f||l,p),b=t?t+d:d;return l._events[b]?l._events[b].fn?l._events[b]=[l._events[b],A]:l._events[b].push(A):(l._events[b]=A,l._eventsCount++),l}function a(l,d){--l._eventsCount===0?l._events=new n:delete l._events[d]}function s(){this._events=new n,this._eventsCount=0}s.prototype.eventNames=function(){var d=[],u,f;if(this._eventsCount===0)return d;for(f in u=this._events)e.call(u,f)&&d.push(t?f.slice(1):f);return Object.getOwnPropertySymbols?d.concat(Object.getOwnPropertySymbols(u)):d},s.prototype.listeners=function(d){var u=t?t+d:d,f=this._events[u];if(!f)return[];if(f.fn)return[f.fn];for(var p=0,A=f.length,b=new Array(A);p<A;p++)b[p]=f[p].fn;return b},s.prototype.listenerCount=function(d){var u=t?t+d:d,f=this._events[u];return f?f.fn?1:f.length:0},s.prototype.emit=function(d,u,f,p,A,b){var x=t?t+d:d;if(!this._events[x])return!1;var S=this._events[x],k=arguments.length,L,I;if(S.fn){switch(S.once&&this.removeListener(d,S.fn,void 0,!0),k){case 1:return S.fn.call(S.context),!0;case 2:return S.fn.call(S.context,u),!0;case 3:return S.fn.call(S.context,u,f),!0;case 4:return S.fn.call(S.context,u,f,p),!0;case 5:return S.fn.call(S.context,u,f,p,A),!0;case 6:return S.fn.call(S.context,u,f,p,A,b),!0}for(I=1,L=new Array(k-1);I<k;I++)L[I-1]=arguments[I];S.fn.apply(S.context,L)}else{var D=S.length,_;for(I=0;I<D;I++)switch(S[I].once&&this.removeListener(d,S[I].fn,void 0,!0),k){case 1:S[I].fn.call(S[I].context);break;case 2:S[I].fn.call(S[I].context,u);break;case 3:S[I].fn.call(S[I].context,u,f);break;case 4:S[I].fn.call(S[I].context,u,f,p);break;default:if(!L)for(_=1,L=new Array(k-1);_<k;_++)L[_-1]=arguments[_];S[I].fn.apply(S[I].context,L)}}return!0},s.prototype.on=function(d,u,f){return i(this,d,u,f,!1)},s.prototype.once=function(d,u,f){return i(this,d,u,f,!0)},s.prototype.removeListener=function(d,u,f,p){var A=t?t+d:d;if(!this._events[A])return this;if(!u)return a(this,A),this;var b=this._events[A];if(b.fn)b.fn===u&&(!p||b.once)&&(!f||b.context===f)&&a(this,A);else{for(var x=0,S=[],k=b.length;x<k;x++)(b[x].fn!==u||p&&!b[x].once||f&&b[x].context!==f)&&S.push(b[x]);S.length?this._events[A]=S.length===1?S[0]:S:a(this,A)}return this},s.prototype.removeAllListeners=function(d){var u;return d?(u=t?t+d:d,this._events[u]&&a(this,u)):(this._events=new n,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,o.exports=s})(Su);const br=Wr()||{isTypeSupported:()=>!1};class Es{constructor(e,t,n,r){this.error=null,this.hls=void 0,this.id=void 0,this.observer=void 0,this.frag=null,this.part=null,this.useWorker=void 0,this.workerContext=null,this.onwmsg=void 0,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0;const i=e.config;this.hls=e,this.id=t,this.useWorker=!!i.enableWorker,this.onTransmuxComplete=n,this.onFlush=r;const a=(d,u)=>{u=u||{},u.frag=this.frag,u.id=this.id,d===T.ERROR&&(this.error=u.error),this.hls.trigger(d,u)};this.observer=new un,this.observer.on(T.FRAG_DECRYPTED,a),this.observer.on(T.ERROR,a);const s={mp4:br.isTypeSupported("video/mp4"),mpeg:br.isTypeSupported("audio/mpeg"),mp3:br.isTypeSupported('audio/mp4; codecs="mp3"')},l=navigator.vendor;if(this.useWorker&&typeof Worker<"u"&&(i.workerPath||Yc())){try{i.workerPath?(R.log(`loading Web Worker ${i.workerPath} for "${t}"`),this.workerContext=Wc(i.workerPath)):(R.log(`injecting Web Worker for "${t}"`),this.workerContext=zc()),this.onwmsg=f=>this.onWorkerMessage(f);const{worker:u}=this.workerContext;u.addEventListener("message",this.onwmsg),u.onerror=f=>{const p=new Error(`${f.message}  (${f.filename}:${f.lineno})`);i.enableWorker=!1,R.warn(`Error in "${t}" Web Worker, fallback to inline`),this.hls.trigger(T.ERROR,{type:te.OTHER_ERROR,details:M.INTERNAL_EXCEPTION,fatal:!1,event:"demuxerWorker",error:p})},u.postMessage({cmd:"init",typeSupported:s,vendor:l,id:t,config:JSON.stringify(i)})}catch(u){R.warn(`Error setting up "${t}" Web Worker, fallback to inline`,u),this.resetWorker(),this.error=null,this.transmuxer=new Ea(this.observer,s,i,l,t)}return}this.transmuxer=new Ea(this.observer,s,i,l,t)}resetWorker(){if(this.workerContext){const{worker:e,objectURL:t}=this.workerContext;t&&self.URL.revokeObjectURL(t),e.removeEventListener("message",this.onwmsg),e.onerror=null,e.terminate(),this.workerContext=null}}destroy(){if(this.workerContext)this.resetWorker(),this.onwmsg=void 0;else{const t=this.transmuxer;t&&(t.destroy(),this.transmuxer=null)}const e=this.observer;e&&e.removeAllListeners(),this.frag=null,this.observer=null,this.hls=null}push(e,t,n,r,i,a,s,l,d,u){var f,p;d.transmuxing.start=self.performance.now();const{transmuxer:A}=this,b=a?a.start:i.start,x=i.decryptdata,S=this.frag,k=!(S&&i.cc===S.cc),L=!(S&&d.level===S.level),I=S?d.sn-S.sn:-1,D=this.part?d.part-this.part.index:-1,_=I===0&&d.id>1&&d.id===(S==null?void 0:S.stats.chunkCount),K=!L&&(I===1||I===0&&(D===1||_&&D<=0)),U=self.performance.now();(L||I||i.stats.parsing.start===0)&&(i.stats.parsing.start=U),a&&(D||!K)&&(a.stats.parsing.start=U);const H=!(S&&((f=i.initSegment)==null?void 0:f.url)===((p=S.initSegment)==null?void 0:p.url)),z=new Tu(k,K,l,L,b,H);if(!K||k||H){R.log(`[transmuxer-interface, ${i.type}]: Starting new transmux session for sn: ${d.sn} p: ${d.part} level: ${d.level} id: ${d.id}
        discontinuity: ${k}
        trackSwitch: ${L}
        contiguous: ${K}
        accurateTimeOffset: ${l}
        timeOffset: ${b}
        initSegmentChange: ${H}`);const O=new Eu(n,r,t,s,u);this.configureTransmuxer(O)}if(this.frag=i,this.part=a,this.workerContext)this.workerContext.worker.postMessage({cmd:"demux",data:e,decryptdata:x,chunkMeta:d,state:z},e instanceof ArrayBuffer?[e]:[]);else if(A){const O=A.push(e,x,d,z);Dn(O)?(A.async=!0,O.then(J=>{this.handleTransmuxComplete(J)}).catch(J=>{this.transmuxerError(J,d,"transmuxer-interface push error")})):(A.async=!1,this.handleTransmuxComplete(O))}}flush(e){e.transmuxing.start=self.performance.now();const{transmuxer:t}=this;if(this.workerContext)this.workerContext.worker.postMessage({cmd:"flush",chunkMeta:e});else if(t){let n=t.flush(e);Dn(n)||t.async?(Dn(n)||(n=Promise.resolve(n)),n.then(i=>{this.handleFlushResult(i,e)}).catch(i=>{this.transmuxerError(i,e,"transmuxer-interface flush error")})):this.handleFlushResult(n,e)}}transmuxerError(e,t,n){!this.hls||(this.error=e,this.hls.trigger(T.ERROR,{type:te.MEDIA_ERROR,details:M.FRAG_PARSING_ERROR,chunkMeta:t,fatal:!1,error:e,err:e,reason:n}))}handleFlushResult(e,t){e.forEach(n=>{this.handleTransmuxComplete(n)}),this.onFlush(t)}onWorkerMessage(e){const t=e.data,n=this.hls;switch(t.event){case"init":{var r;const i=(r=this.workerContext)==null?void 0:r.objectURL;i&&self.URL.revokeObjectURL(i);break}case"transmuxComplete":{this.handleTransmuxComplete(t.data);break}case"flush":{this.onFlush(t.data);break}case"workerLog":R[t.data.logType]&&R[t.data.logType](t.data.message);break;default:{t.data=t.data||{},t.data.frag=this.frag,t.data.id=this.id,n.trigger(t.event,t.data);break}}}configureTransmuxer(e){const{transmuxer:t}=this;this.workerContext?this.workerContext.worker.postMessage({cmd:"configure",config:e}):t&&t.configure(e)}handleTransmuxComplete(e){e.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(e)}}const Cu=250,vr=2,wu=.1,ku=.05;class Lu{constructor(e,t,n,r){this.config=void 0,this.media=null,this.fragmentTracker=void 0,this.hls=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.config=e,this.media=t,this.fragmentTracker=n,this.hls=r}destroy(){this.media=null,this.hls=this.fragmentTracker=null}poll(e,t){const{config:n,media:r,stalled:i}=this;if(r===null)return;const{currentTime:a,seeking:s}=r,l=this.seeking&&!s,d=!this.seeking&&s;if(this.seeking=s,a!==e){if(this.moved=!0,i!==null){if(this.stallReported){const k=self.performance.now()-i;R.warn(`playback not stuck anymore @${a}, after ${Math.round(k)}ms`),this.stallReported=!1}this.stalled=null,this.nudgeRetry=0}return}if(d||l){this.stalled=null;return}if(r.paused&&!s||r.ended||r.playbackRate===0||!ge.getBuffered(r).length)return;const u=ge.bufferInfo(r,a,0),f=u.len>0,p=u.nextStart||0;if(!f&&!p)return;if(s){const k=u.len>vr,L=!p||t&&t.start<=a||p-a>vr&&!this.fragmentTracker.getPartialFragment(a);if(k||L)return;this.moved=!1}if(!this.moved&&this.stalled!==null){var A;const k=Math.max(p,u.start||0)-a,L=this.hls.levels?this.hls.levels[this.hls.currentLevel]:null,D=(L==null||(A=L.details)==null?void 0:A.live)?L.details.targetduration*2:vr,_=this.fragmentTracker.getPartialFragment(a);if(k>0&&(k<=D||_)){this._trySkipBufferHole(_);return}}const b=self.performance.now();if(i===null){this.stalled=b;return}const x=b-i;if(!s&&x>=Cu&&(this._reportStall(u),!this.media))return;const S=ge.bufferInfo(r,a,n.maxBufferHole);this._tryFixBufferStall(S,x)}_tryFixBufferStall(e,t){const{config:n,fragmentTracker:r,media:i}=this;if(i===null)return;const a=i.currentTime,s=r.getPartialFragment(a);s&&(this._trySkipBufferHole(s)||!this.media)||(e.len>n.maxBufferHole||e.nextStart&&e.nextStart-a<n.maxBufferHole)&&t>n.highBufferWatchdogPeriod*1e3&&(R.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())}_reportStall(e){const{hls:t,media:n,stallReported:r}=this;if(!r&&n){this.stallReported=!0;const i=new Error(`Playback stalling at @${n.currentTime} due to low buffer (${JSON.stringify(e)})`);R.warn(i.message),t.trigger(T.ERROR,{type:te.MEDIA_ERROR,details:M.BUFFER_STALLED_ERROR,fatal:!1,error:i,buffer:e.len})}}_trySkipBufferHole(e){const{config:t,hls:n,media:r}=this;if(r===null)return 0;const i=r.currentTime,a=ge.bufferInfo(r,i,0),s=i<a.start?a.start:a.nextStart;if(s){const l=a.len<=t.maxBufferHole,d=a.len>0&&a.len<1&&r.readyState<3,u=s-i;if(u>0&&(l||d)){if(u>t.maxBufferHole){const{fragmentTracker:p}=this;let A=!1;if(i===0){const b=p.getAppendedFrag(0,ne.MAIN);b&&s<b.end&&(A=!0)}if(!A){const b=e||p.getAppendedFrag(i,ne.MAIN);if(b){let x=!1,S=b.end;for(;S<s;){const k=p.getPartialFragment(S);if(k)S+=k.duration;else{x=!0;break}}if(x)return 0}}}const f=Math.max(s+ku,i+wu);if(R.warn(`skipping hole, adjusting currentTime from ${i} to ${f}`),this.moved=!0,this.stalled=null,r.currentTime=f,e&&!e.gap){const p=new Error(`fragment loaded with buffer holes, seeking from ${i} to ${f}`);n.trigger(T.ERROR,{type:te.MEDIA_ERROR,details:M.BUFFER_SEEK_OVER_HOLE,fatal:!1,error:p,reason:p.message,frag:e})}return f}}return 0}_tryNudgeBuffer(){const{config:e,hls:t,media:n,nudgeRetry:r}=this;if(n===null)return;const i=n.currentTime;if(this.nudgeRetry++,r<e.nudgeMaxRetry){const a=i+(r+1)*e.nudgeOffset,s=new Error(`Nudging 'currentTime' from ${i} to ${a}`);R.warn(s.message),n.currentTime=a,t.trigger(T.ERROR,{type:te.MEDIA_ERROR,details:M.BUFFER_NUDGE_ON_STALL,error:s,fatal:!1})}else{const a=new Error(`Playhead still not moving while enough data buffered @${i} after ${e.nudgeMaxRetry} nudges`);R.error(a.message),t.trigger(T.ERROR,{type:te.MEDIA_ERROR,details:M.BUFFER_STALLED_ERROR,error:a,fatal:!0})}}}const Iu=100;class Ru extends zr{constructor(e,t,n){super(e,t,n,"[stream-controller]",ne.MAIN),this.audioCodecSwap=!1,this.gapController=null,this.level=-1,this._forceStartLoad=!1,this.altAudio=!1,this.audioOnly=!1,this.fragPlaying=null,this.onvplaying=null,this.onvseeked=null,this.fragLastKbps=0,this.couldBacktrack=!1,this.backtrackFragment=null,this.audioCodecSwitch=!1,this.videoBuffer=null,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),e.on(T.ERROR,this.onError,this),e.on(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(T.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.on(T.BUFFER_CREATED,this.onBufferCreated,this),e.on(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),e.off(T.ERROR,this.onError,this),e.off(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(T.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.off(T.BUFFER_CREATED,this.onBufferCreated,this),e.off(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this)}onHandlerDestroying(){this._unregisterListeners(),this.onMediaDetaching()}startLoad(e){if(this.levels){const{lastCurrentTime:t,hls:n}=this;if(this.stopLoad(),this.setInterval(Iu),this.level=-1,!this.startFragRequested){let r=n.startLevel;r===-1&&(n.config.testBandwidth&&this.levels.length>1?(r=0,this.bitrateTest=!0):r=n.nextAutoLevel),this.level=n.nextLoadLevel=r,this.loadedmetadata=!1}t>0&&e===-1&&(this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`),e=t),this.state=$.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}else this._forceStartLoad=!0,this.state=$.STOPPED}stopLoad(){this._forceStartLoad=!1,super.stopLoad()}doTick(){switch(this.state){case $.WAITING_LEVEL:{var e;const{levels:n,level:r}=this,i=n==null||(e=n[r])==null?void 0:e.details;if(i&&(!i.live||this.levelLastLoaded===this.level)){if(this.waitForCdnTuneIn(i))break;this.state=$.IDLE;break}break}case $.FRAG_LOADING_WAITING_RETRY:{var t;const n=self.performance.now(),r=this.retryDate;(!r||n>=r||(t=this.media)!=null&&t.seeking)&&(this.resetStartWhenNotLoaded(this.level),this.state=$.IDLE)}break}this.state===$.IDLE&&this.doTickIdle(),this.onTickEnd()}onTickEnd(){super.onTickEnd(),this.checkBuffer(),this.checkFragmentChanged()}doTickIdle(){const{hls:e,levelLastLoaded:t,levels:n,media:r}=this,{config:i,nextLoadLevel:a}=e;if(t===null||!r&&(this.startFragRequested||!i.startFragPrefetch)||this.altAudio&&this.audioOnly||!(n!=null&&n[a]))return;const s=n[a],l=this.getMainFwdBufferInfo();if(l===null)return;const d=this.getLevelDetails();if(d&&this._streamEnded(l,d)){const S={};this.altAudio&&(S.type="video"),this.hls.trigger(T.BUFFER_EOS,S),this.state=$.ENDED;return}e.loadLevel!==a&&e.manualLevel===-1&&this.log(`Adapting to level ${a} from level ${this.level}`),this.level=e.nextLoadLevel=a;const u=s.details;if(!u||this.state===$.WAITING_LEVEL||u.live&&this.levelLastLoaded!==a){this.level=a,this.state=$.WAITING_LEVEL;return}const f=l.len,p=this.getMaxBufferLength(s.maxBitrate);if(f>=p)return;this.backtrackFragment&&this.backtrackFragment.start>l.end&&(this.backtrackFragment=null);const A=this.backtrackFragment?this.backtrackFragment.start:l.end;let b=this.getNextFragment(A,u);if(this.couldBacktrack&&!this.fragPrevious&&b&&b.sn!=="initSegment"&&this.fragmentTracker.getState(b)!==Re.OK){var x;const k=((x=this.backtrackFragment)!=null?x:b).sn-u.startSN,L=u.fragments[k-1];L&&b.cc===L.cc&&(b=L,this.fragmentTracker.removeFragment(L))}else this.backtrackFragment&&l.len&&(this.backtrackFragment=null);if(b&&this.isLoopLoading(b,A)){if(!b.gap){const k=this.audioOnly&&!this.altAudio?pe.AUDIO:pe.VIDEO,L=(k===pe.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;L&&this.afterBufferFlushed(L,k,ne.MAIN)}b=this.getNextFragmentLoopLoading(b,u,l,ne.MAIN,p)}!b||(b.initSegment&&!b.initSegment.data&&!this.bitrateTest&&(b=b.initSegment),this.loadFragment(b,s,A))}loadFragment(e,t,n){const r=this.fragmentTracker.getState(e);this.fragCurrent=e,r===Re.NOT_LOADED?e.sn==="initSegment"?this._loadInitSegment(e,t):this.bitrateTest?(this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`),this._loadBitrateTestFrag(e,t)):(this.startFragRequested=!0,super.loadFragment(e,t,n)):this.clearTrackerIfNeeded(e)}getAppendedFrag(e){const t=this.fragmentTracker.getAppendedFrag(e,ne.MAIN);return t&&"fragment"in t?t.fragment:t}getBufferedFrag(e){return this.fragmentTracker.getBufferedFrag(e,ne.MAIN)}followingBufferedFrag(e){return e?this.getBufferedFrag(e.end+.5):null}immediateLevelSwitch(){this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)}nextLevelSwitch(){const{levels:e,media:t}=this;if(t!=null&&t.readyState){let n;const r=this.getAppendedFrag(t.currentTime);if(r&&r.start>1&&this.flushMainBuffer(0,r.start-1),!t.paused&&e){const a=this.hls.nextLoadLevel,s=e[a],l=this.fragLastKbps;l&&this.fragCurrent?n=this.fragCurrent.duration*s.maxBitrate/(1e3*l)+1:n=0}else n=0;const i=this.getBufferedFrag(t.currentTime+n);if(i){const a=this.followingBufferedFrag(i);if(a){this.abortCurrentFrag();const s=a.maxStartPTS?a.maxStartPTS:a.start,l=a.duration,d=Math.max(i.end,s+Math.min(Math.max(l-this.config.maxFragLookUpTolerance,l*.5),l*.75));this.flushMainBuffer(d,Number.POSITIVE_INFINITY)}}}}abortCurrentFrag(){const e=this.fragCurrent;switch(this.fragCurrent=null,this.backtrackFragment=null,e&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.state){case $.KEY_LOADING:case $.FRAG_LOADING:case $.FRAG_LOADING_WAITING_RETRY:case $.PARSING:case $.PARSED:this.state=$.IDLE;break}this.nextLoadPosition=this.getLoadPosition()}flushMainBuffer(e,t){super.flushMainBuffer(e,t,this.altAudio?"video":null)}onMediaAttached(e,t){super.onMediaAttached(e,t);const n=t.media;this.onvplaying=this.onMediaPlaying.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),n.addEventListener("playing",this.onvplaying),n.addEventListener("seeked",this.onvseeked),this.gapController=new Lu(this.config,n,this.fragmentTracker,this.hls)}onMediaDetaching(){const{media:e}=this;e&&this.onvplaying&&this.onvseeked&&(e.removeEventListener("playing",this.onvplaying),e.removeEventListener("seeked",this.onvseeked),this.onvplaying=this.onvseeked=null,this.videoBuffer=null),this.fragPlaying=null,this.gapController&&(this.gapController.destroy(),this.gapController=null),super.onMediaDetaching()}onMediaPlaying(){this.tick()}onMediaSeeked(){const e=this.media,t=e?e.currentTime:null;ee(t)&&this.log(`Media seeked to ${t.toFixed(3)}`);const n=this.getMainFwdBufferInfo();if(n===null||n.len===0){this.warn(`Main forward buffer length on "seeked" event ${n?n.len:"empty"})`);return}this.tick()}onManifestLoading(){this.log("Trigger BUFFER_RESET"),this.hls.trigger(T.BUFFER_RESET,void 0),this.fragmentTracker.removeAllFragments(),this.couldBacktrack=!1,this.startPosition=this.lastCurrentTime=0,this.fragPlaying=null,this.backtrackFragment=null}onManifestParsed(e,t){let n=!1,r=!1,i;t.levels.forEach(a=>{i=a.audioCodec,i&&(i.indexOf("mp4a.40.2")!==-1&&(n=!0),i.indexOf("mp4a.40.5")!==-1&&(r=!0))}),this.audioCodecSwitch=n&&r&&!qc(),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=t.levels,this.startFragRequested=!1}onLevelLoading(e,t){const{levels:n}=this;if(!n||this.state!==$.IDLE)return;const r=n[t.level];(!r.details||r.details.live&&this.levelLastLoaded!==t.level||this.waitForCdnTuneIn(r.details))&&(this.state=$.WAITING_LEVEL)}onLevelLoaded(e,t){var n;const{levels:r}=this,i=t.level,a=t.details,s=a.totalduration;if(!r){this.warn(`Levels were reset while loading level ${i}`);return}this.log(`Level ${i} loaded [${a.startSN},${a.endSN}], cc [${a.startCC}, ${a.endCC}] duration:${s}`);const l=r[i],d=this.fragCurrent;d&&(this.state===$.FRAG_LOADING||this.state===$.FRAG_LOADING_WAITING_RETRY)&&(d.level!==t.level||d.urlId!==l.urlId)&&d.loader&&this.abortCurrentFrag();let u=0;if(a.live||(n=l.details)!=null&&n.live){if(a.fragments[0]||(a.deltaUpdateFailed=!0),a.deltaUpdateFailed)return;u=this.alignPlaylists(a,l.details)}if(l.details=a,this.levelLastLoaded=i,this.hls.trigger(T.LEVEL_UPDATED,{details:a,level:i}),this.state===$.WAITING_LEVEL){if(this.waitForCdnTuneIn(a))return;this.state=$.IDLE}this.startFragRequested?a.live&&this.synchronizeToLiveEdge(a):this.setStartPosition(a,u),this.tick()}_handleFragmentLoadProgress(e){var t;const{frag:n,part:r,payload:i}=e,{levels:a}=this;if(!a){this.warn(`Levels were reset while fragment load was in progress. Fragment ${n.sn} of level ${n.level} will not be buffered`);return}const s=a[n.level],l=s.details;if(!l){this.warn(`Dropping fragment ${n.sn} of level ${n.level} after level details were reset`),this.fragmentTracker.removeFragment(n);return}const d=s.videoCodec,u=l.PTSKnown||!l.live,f=(t=n.initSegment)==null?void 0:t.data,p=this._getAudioCodec(s),A=this.transmuxer=this.transmuxer||new Es(this.hls,ne.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),b=r?r.index:-1,x=b!==-1,S=new Hr(n.level,n.sn,n.stats.chunkCount,i.byteLength,b,x),k=this.initPTS[n.cc];A.push(i,f,p,d,n,r,l.totalduration,u,S,k)}onAudioTrackSwitching(e,t){const n=this.altAudio;if(!!!t.url){if(this.mediaBuffer!==this.media){this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;const a=this.fragCurrent;a&&(this.log("Switching to main audio track, cancel main fragment load"),a.abortRequests(),this.fragmentTracker.removeFragment(a)),this.resetTransmuxer(),this.resetLoadingState()}else this.audioOnly&&this.resetTransmuxer();const i=this.hls;n&&(i.trigger(T.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:null}),this.fragmentTracker.removeAllFragments()),i.trigger(T.AUDIO_TRACK_SWITCHED,t)}}onAudioTrackSwitched(e,t){const n=t.id,r=!!this.hls.audioTracks[n].url;if(r){const i=this.videoBuffer;i&&this.mediaBuffer!==i&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=i)}this.altAudio=r,this.tick()}onBufferCreated(e,t){const n=t.tracks;let r,i,a=!1;for(const s in n){const l=n[s];if(l.id==="main"){if(i=s,r=l,s==="video"){const d=n[s];d&&(this.videoBuffer=d.buffer)}}else a=!0}a&&r?(this.log(`Alternate track found, use ${i}.buffered to schedule main fragment loading`),this.mediaBuffer=r.buffer):this.mediaBuffer=this.media}onFragBuffered(e,t){const{frag:n,part:r}=t;if(n&&n.type!==ne.MAIN)return;if(this.fragContextChanged(n)){this.warn(`Fragment ${n.sn}${r?" p: "+r.index:""} of level ${n.level} finished buffering, but was aborted. state: ${this.state}`),this.state===$.PARSED&&(this.state=$.IDLE);return}const i=r?r.stats:n.stats;this.fragLastKbps=Math.round(8*i.total/(i.buffering.end-i.loading.first)),n.sn!=="initSegment"&&(this.fragPrevious=n),this.fragBufferedComplete(n,r)}onError(e,t){var n;if(t.fatal){this.state=$.ERROR;return}switch(t.details){case M.FRAG_GAP:case M.FRAG_PARSING_ERROR:case M.FRAG_DECRYPT_ERROR:case M.FRAG_LOAD_ERROR:case M.FRAG_LOAD_TIMEOUT:case M.KEY_LOAD_ERROR:case M.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(ne.MAIN,t);break;case M.LEVEL_LOAD_ERROR:case M.LEVEL_LOAD_TIMEOUT:case M.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===$.WAITING_LEVEL&&((n=t.context)==null?void 0:n.type)===le.LEVEL&&(this.state=$.IDLE);break;case M.BUFFER_FULL_ERROR:if(!t.parent||t.parent!=="main")return;this.reduceLengthAndFlushBuffer(t)&&this.flushMainBuffer(0,Number.POSITIVE_INFINITY);break;case M.INTERNAL_EXCEPTION:this.recoverWorkerError(t);break}}checkBuffer(){const{media:e,gapController:t}=this;if(!(!e||!t||!e.readyState)){if(this.loadedmetadata||!ge.getBuffered(e).length){const n=this.state!==$.IDLE?this.fragCurrent:null;t.poll(this.lastCurrentTime,n)}this.lastCurrentTime=e.currentTime}}onFragLoadEmergencyAborted(){this.state=$.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tickImmediate()}onBufferFlushed(e,{type:t}){if(t!==pe.AUDIO||this.audioOnly&&!this.altAudio){const n=(t===pe.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;this.afterBufferFlushed(n,t,ne.MAIN)}}onLevelsUpdated(e,t){this.levels=t.levels}swapAudioCodec(){this.audioCodecSwap=!this.audioCodecSwap}seekToStartPos(){const{media:e}=this;if(!e)return;const t=e.currentTime;let n=this.startPosition;if(n>=0&&t<n){if(e.seeking){this.log(`could not seek to ${n}, already seeking at ${t}`);return}const r=ge.getBuffered(e),a=(r.length?r.start(0):0)-n;a>0&&(a<this.config.maxBufferHole||a<this.config.maxFragLookUpTolerance)&&(this.log(`adjusting start position by ${a} to match buffer start`),n+=a,this.startPosition=n),this.log(`seek to target start position ${n} from current time ${t}`),e.currentTime=n}}_getAudioCodec(e){let t=this.config.defaultAudioCodec||e.audioCodec;return this.audioCodecSwap&&t&&(this.log("Swapping audio codec"),t.indexOf("mp4a.40.5")!==-1?t="mp4a.40.2":t="mp4a.40.5"),t}_loadBitrateTestFrag(e,t){e.bitrateTest=!0,this._doFragLoad(e,t).then(n=>{const{hls:r}=this;if(!n||this.fragContextChanged(e))return;t.fragmentError=0,this.state=$.IDLE,this.startFragRequested=!1,this.bitrateTest=!1;const i=e.stats;i.parsing.start=i.parsing.end=i.buffering.start=i.buffering.end=self.performance.now(),r.trigger(T.FRAG_LOADED,n),e.bitrateTest=!1})}_handleTransmuxComplete(e){var t;const n="main",{hls:r}=this,{remuxResult:i,chunkMeta:a}=e,s=this.getCurrentContext(a);if(!s){this.resetWhenMissingContext(a);return}const{frag:l,part:d,level:u}=s,{video:f,text:p,id3:A,initSegment:b}=i,{details:x}=u,S=this.altAudio?void 0:i.audio;if(this.fragContextChanged(l)){this.fragmentTracker.removeFragment(l);return}if(this.state=$.PARSING,b){b.tracks&&(this._bufferInitSegment(u,b.tracks,l,a),r.trigger(T.FRAG_PARSING_INIT_SEGMENT,{frag:l,id:n,tracks:b.tracks}));const k=b.initPTS,L=b.timescale;ee(k)&&(this.initPTS[l.cc]={baseTime:k,timescale:L},r.trigger(T.INIT_PTS_FOUND,{frag:l,id:n,initPTS:k,timescale:L}))}if(f&&i.independent!==!1){if(x){const{startPTS:k,endPTS:L,startDTS:I,endDTS:D}=f;if(d)d.elementaryStreams[f.type]={startPTS:k,endPTS:L,startDTS:I,endDTS:D};else if(f.firstKeyFrame&&f.independent&&a.id===1&&(this.couldBacktrack=!0),f.dropped&&f.independent){const _=this.getMainFwdBufferInfo(),K=(_?_.end:this.getLoadPosition())+this.config.maxBufferHole,U=f.firstKeyFramePTS?f.firstKeyFramePTS:k;if(K<U-this.config.maxBufferHole){this.backtrack(l);return}l.setElementaryStreamInfo(f.type,l.start,L,l.start,D,!0)}l.setElementaryStreamInfo(f.type,k,L,I,D),this.backtrackFragment&&(this.backtrackFragment=l),this.bufferFragmentData(f,l,d,a)}}else if(i.independent===!1){this.backtrack(l);return}if(S){const{startPTS:k,endPTS:L,startDTS:I,endDTS:D}=S;d&&(d.elementaryStreams[pe.AUDIO]={startPTS:k,endPTS:L,startDTS:I,endDTS:D}),l.setElementaryStreamInfo(pe.AUDIO,k,L,I,D),this.bufferFragmentData(S,l,d,a)}if(x&&A!=null&&(t=A.samples)!=null&&t.length){const k={id:n,frag:l,details:x,samples:A.samples};r.trigger(T.FRAG_PARSING_METADATA,k)}if(x&&p){const k={id:n,frag:l,details:x,samples:p.samples};r.trigger(T.FRAG_PARSING_USERDATA,k)}}_bufferInitSegment(e,t,n,r){if(this.state!==$.PARSING)return;this.audioOnly=!!t.audio&&!t.video,this.altAudio&&!this.audioOnly&&delete t.audio;const{audio:i,video:a,audiovideo:s}=t;if(i){let l=e.audioCodec;const d=navigator.userAgent.toLowerCase();this.audioCodecSwitch&&(l&&(l.indexOf("mp4a.40.5")!==-1?l="mp4a.40.2":l="mp4a.40.5"),i.metadata.channelCount!==1&&d.indexOf("firefox")===-1&&(l="mp4a.40.5")),d.indexOf("android")!==-1&&i.container!=="audio/mpeg"&&(l="mp4a.40.2",this.log(`Android: force audio codec to ${l}`)),e.audioCodec&&e.audioCodec!==l&&this.log(`Swapping manifest audio codec "${e.audioCodec}" for "${l}"`),i.levelCodec=l,i.id="main",this.log(`Init audio buffer, container:${i.container}, codecs[selected/level/parsed]=[${l||""}/${e.audioCodec||""}/${i.codec}]`)}a&&(a.levelCodec=e.videoCodec,a.id="main",this.log(`Init video buffer, container:${a.container}, codecs[level/parsed]=[${e.videoCodec||""}/${a.codec}]`)),s&&this.log(`Init audiovideo buffer, container:${s.container}, codecs[level/parsed]=[${e.attrs.CODECS||""}/${s.codec}]`),this.hls.trigger(T.BUFFER_CODECS,t),Object.keys(t).forEach(l=>{const u=t[l].initSegment;u!=null&&u.byteLength&&this.hls.trigger(T.BUFFER_APPENDING,{type:l,data:u,frag:n,part:null,chunkMeta:r,parent:n.type})}),this.tick()}getMainFwdBufferInfo(){return this.getFwdBufferInfo(this.mediaBuffer?this.mediaBuffer:this.media,ne.MAIN)}backtrack(e){this.couldBacktrack=!0,this.backtrackFragment=e,this.resetTransmuxer(),this.flushBufferGap(e),this.fragmentTracker.removeFragment(e),this.fragPrevious=null,this.nextLoadPosition=e.start,this.state=$.IDLE}checkFragmentChanged(){const e=this.media;let t=null;if(e&&e.readyState>1&&e.seeking===!1){const n=e.currentTime;if(ge.isBuffered(e,n)?t=this.getAppendedFrag(n):ge.isBuffered(e,n+.1)&&(t=this.getAppendedFrag(n+.1)),t){this.backtrackFragment=null;const r=this.fragPlaying,i=t.level;(!r||t.sn!==r.sn||r.level!==i||t.urlId!==r.urlId)&&(this.fragPlaying=t,this.hls.trigger(T.FRAG_CHANGED,{frag:t}),(!r||r.level!==i)&&this.hls.trigger(T.LEVEL_SWITCHED,{level:i}))}}}get nextLevel(){const e=this.nextBufferedFrag;return e?e.level:-1}get currentFrag(){const e=this.media;return e?this.fragPlaying||this.getAppendedFrag(e.currentTime):null}get currentProgramDateTime(){const e=this.media;if(e){const t=e.currentTime,n=this.currentFrag;if(n&&ee(t)&&ee(n.programDateTime)){const r=n.programDateTime+(t-n.start)*1e3;return new Date(r)}}return null}get currentLevel(){const e=this.currentFrag;return e?e.level:-1}get nextBufferedFrag(){const e=this.currentFrag;return e?this.followingBufferedFrag(e):null}get forceStartLoad(){return this._forceStartLoad}}class kt{constructor(e,t=0,n=0){this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=e,this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=t,this.totalWeight_=n}sample(e,t){const n=Math.pow(this.alpha_,e);this.estimate_=t*(1-n)+n*this.estimate_,this.totalWeight_+=e}getTotalWeight(){return this.totalWeight_}getEstimate(){if(this.alpha_){const e=1-Math.pow(this.alpha_,this.totalWeight_);if(e)return this.estimate_/e}return this.estimate_}}class Du{constructor(e,t,n,r=100){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultTTFB_=void 0,this.ttfb_=void 0,this.defaultEstimate_=n,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new kt(e),this.fast_=new kt(t),this.defaultTTFB_=r,this.ttfb_=new kt(e)}update(e,t){const{slow_:n,fast_:r,ttfb_:i}=this;n.halfLife!==e&&(this.slow_=new kt(e,n.getEstimate(),n.getTotalWeight())),r.halfLife!==t&&(this.fast_=new kt(t,r.getEstimate(),r.getTotalWeight())),i.halfLife!==e&&(this.ttfb_=new kt(e,i.getEstimate(),i.getTotalWeight()))}sample(e,t){e=Math.max(e,this.minDelayMs_);const n=8*t,r=e/1e3,i=n/r;this.fast_.sample(r,i),this.slow_.sample(r,i)}sampleTTFB(e){const t=e/1e3,n=Math.sqrt(2)*Math.exp(-Math.pow(t,2)/2);this.ttfb_.sample(n,Math.max(e,5))}canEstimate(){return this.fast_.getTotalWeight()>=this.minWeight_}getEstimate(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_}getEstimateTTFB(){return this.ttfb_.getTotalWeight()>=this.minWeight_?this.ttfb_.getEstimate():this.defaultTTFB_}destroy(){}}class _u{constructor(e){this.hls=void 0,this.lastLevelLoadSec=0,this.lastLoadedFragLevel=0,this._nextAutoLevel=-1,this.timer=-1,this.onCheck=this._abandonRulesCheck.bind(this),this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.bwEstimator=void 0,this.hls=e;const t=e.config;this.bwEstimator=new Du(t.abrEwmaSlowVoD,t.abrEwmaFastVoD,t.abrEwmaDefaultEstimate),this.registerListeners()}registerListeners(){const{hls:e}=this;e.on(T.FRAG_LOADING,this.onFragLoading,this),e.on(T.FRAG_LOADED,this.onFragLoaded,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this),e.on(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this)}unregisterListeners(){const{hls:e}=this;e.off(T.FRAG_LOADING,this.onFragLoading,this),e.off(T.FRAG_LOADED,this.onFragLoaded,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this),e.off(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this)}destroy(){this.unregisterListeners(),this.clearTimer(),this.hls=this.onCheck=null,this.fragCurrent=this.partCurrent=null}onFragLoading(e,t){var n;const r=t.frag;this.ignoreFragment(r)||(this.fragCurrent=r,this.partCurrent=(n=t.part)!=null?n:null,this.clearTimer(),this.timer=self.setInterval(this.onCheck,100))}onLevelSwitching(e,t){this.clearTimer()}getTimeToLoadFrag(e,t,n,r){const i=e+n/t,a=r?this.lastLevelLoadSec:0;return i+a}onLevelLoaded(e,t){const n=this.hls.config,{total:r,bwEstimate:i}=t.stats;ee(r)&&ee(i)&&(this.lastLevelLoadSec=8*r/i),t.details.live?this.bwEstimator.update(n.abrEwmaSlowLive,n.abrEwmaFastLive):this.bwEstimator.update(n.abrEwmaSlowVoD,n.abrEwmaFastVoD)}_abandonRulesCheck(){const{fragCurrent:e,partCurrent:t,hls:n}=this,{autoLevelEnabled:r,media:i}=n;if(!e||!i)return;const a=performance.now(),s=t?t.stats:e.stats,l=t?t.duration:e.duration,d=a-s.loading.start;if(s.aborted||s.loaded&&s.loaded===s.total||e.level===0){this.clearTimer(),this._nextAutoLevel=-1;return}if(!r||i.paused||!i.playbackRate||!i.readyState)return;const u=n.mainForwardBufferInfo;if(u===null)return;const f=this.bwEstimator.getEstimateTTFB(),p=Math.abs(i.playbackRate);if(d<=Math.max(f,1e3*(l/(p*2))))return;const A=u.len/p;if(A>=2*l/p)return;const b=s.loading.first?s.loading.first-s.loading.start:-1,x=s.loaded&&b>-1,S=this.bwEstimator.getEstimate(),{levels:k,minAutoLevel:L}=n,I=k[e.level],D=s.total||Math.max(s.loaded,Math.round(l*I.maxBitrate/8));let _=d-b;_<1&&x&&(_=Math.min(d,s.loaded*8/S));const K=x?s.loaded*1e3/_:0,U=K?(D-s.loaded)/K:D*8/S+f/1e3;if(U<=A)return;const H=K?K*8:S;let z=Number.POSITIVE_INFINITY,O;for(O=e.level-1;O>L;O--){const J=k[O].maxBitrate;if(z=this.getTimeToLoadFrag(f/1e3,H,l*J,!k[O].details),z<A)break}z>=U||z>l*10||(n.nextLoadLevel=O,x?this.bwEstimator.sample(d-Math.min(f,b),s.loaded):this.bwEstimator.sampleTTFB(d),this.clearTimer(),R.warn(`[abr] Fragment ${e.sn}${t?" part "+t.index:""} of level ${e.level} is loading too slowly;
      Time to underbuffer: ${A.toFixed(3)} s
      Estimated load time for current fragment: ${U.toFixed(3)} s
      Estimated load time for down switch fragment: ${z.toFixed(3)} s
      TTFB estimate: ${b}
      Current BW estimate: ${ee(S)?(S/1024).toFixed(3):"Unknown"} Kb/s
      New BW estimate: ${(this.bwEstimator.getEstimate()/1024).toFixed(3)} Kb/s
      Aborting and switching to level ${O}`),e.loader&&(this.fragCurrent=this.partCurrent=null,e.abortRequests()),n.trigger(T.FRAG_LOAD_EMERGENCY_ABORTED,{frag:e,part:t,stats:s}))}onFragLoaded(e,{frag:t,part:n}){const r=n?n.stats:t.stats;if(t.type===ne.MAIN&&this.bwEstimator.sampleTTFB(r.loading.first-r.loading.start),!this.ignoreFragment(t)){if(this.clearTimer(),this.lastLoadedFragLevel=t.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){const i=n?n.duration:t.duration,a=this.hls.levels[t.level],s=(a.loaded?a.loaded.bytes:0)+r.loaded,l=(a.loaded?a.loaded.duration:0)+i;a.loaded={bytes:s,duration:l},a.realBitrate=Math.round(8*s/l)}if(t.bitrateTest){const i={stats:r,frag:t,part:n,id:t.type};this.onFragBuffered(T.FRAG_BUFFERED,i),t.bitrateTest=!1}}}onFragBuffered(e,t){const{frag:n,part:r}=t,i=r!=null&&r.stats.loaded?r.stats:n.stats;if(i.aborted||this.ignoreFragment(n))return;const a=i.parsing.end-i.loading.start-Math.min(i.loading.first-i.loading.start,this.bwEstimator.getEstimateTTFB());this.bwEstimator.sample(a,i.loaded),i.bwEstimate=this.bwEstimator.getEstimate(),n.bitrateTest?this.bitrateTestDelay=a/1e3:this.bitrateTestDelay=0}ignoreFragment(e){return e.type!==ne.MAIN||e.sn==="initSegment"}clearTimer(){self.clearInterval(this.timer)}get nextAutoLevel(){const e=this._nextAutoLevel,t=this.bwEstimator;if(e!==-1&&!t.canEstimate())return e;let n=this.getNextABRAutoLevel();if(e!==-1){const r=this.hls.levels;if(r.length>Math.max(e,n)&&r[e].loadError<=r[n].loadError)return e}return e!==-1&&(n=Math.min(e,n)),n}getNextABRAutoLevel(){const{fragCurrent:e,partCurrent:t,hls:n}=this,{maxAutoLevel:r,config:i,minAutoLevel:a,media:s}=n,l=t?t.duration:e?e.duration:0,d=s&&s.playbackRate!==0?Math.abs(s.playbackRate):1,u=this.bwEstimator?this.bwEstimator.getEstimate():i.abrEwmaDefaultEstimate,f=n.mainForwardBufferInfo,p=(f?f.len:0)/d;let A=this.findBestLevel(u,a,r,p,i.abrBandWidthFactor,i.abrBandWidthUpFactor);if(A>=0)return A;R.trace(`[abr] ${p?"rebuffering expected":"buffer is empty"}, finding optimal quality level`);let b=l?Math.min(l,i.maxStarvationDelay):i.maxStarvationDelay,x=i.abrBandWidthFactor,S=i.abrBandWidthUpFactor;if(!p){const k=this.bitrateTestDelay;k&&(b=(l?Math.min(l,i.maxLoadingDelay):i.maxLoadingDelay)-k,R.trace(`[abr] bitrate test took ${Math.round(1e3*k)}ms, set first fragment max fetchDuration to ${Math.round(1e3*b)} ms`),x=S=1)}return A=this.findBestLevel(u,a,r,p+b,x,S),Math.max(A,0)}findBestLevel(e,t,n,r,i,a){var s;const{fragCurrent:l,partCurrent:d,lastLoadedFragLevel:u}=this,{levels:f}=this.hls,p=f[u],A=!!(p!=null&&(s=p.details)!=null&&s.live),b=p==null?void 0:p.codecSet,x=d?d.duration:l?l.duration:0,S=this.bwEstimator.getEstimateTTFB()/1e3;let k=t,L=-1;for(let I=n;I>=t;I--){const D=f[I];if(!D||b&&D.codecSet!==b){D&&(k=Math.min(I,k),L=Math.max(I,L));continue}L!==-1&&R.trace(`[abr] Skipped level(s) ${k}-${L} with CODECS:"${f[L].attrs.CODECS}"; not compatible with "${p.attrs.CODECS}"`);const _=D.details,K=(d?_==null?void 0:_.partTarget:_==null?void 0:_.averagetargetduration)||x;let U;I<=u?U=i*e:U=a*e;const H=f[I].maxBitrate,z=this.getTimeToLoadFrag(S,U,H*K,_===void 0);if(R.trace(`[abr] level:${I} adjustedbw-bitrate:${Math.round(U-H)} avgDuration:${K.toFixed(1)} maxFetchDuration:${r.toFixed(1)} fetchDuration:${z.toFixed(1)}`),U>H&&(z===0||!ee(z)||A&&!this.bitrateTestDelay||z<r))return I}return-1}set nextAutoLevel(e){this._nextAutoLevel=e}}class Ts{constructor(){this.chunks=[],this.dataLength=0}push(e){this.chunks.push(e),this.dataLength+=e.length}flush(){const{chunks:e,dataLength:t}=this;let n;if(e.length)e.length===1?n=e[0]:n=Bu(e,t);else return new Uint8Array(0);return this.reset(),n}reset(){this.chunks.length=0,this.dataLength=0}}function Bu(o,e){const t=new Uint8Array(e);let n=0;for(let r=0;r<o.length;r++){const i=o[r];t.set(i,n),n+=i.length}return t}const Ta=100;class Pu extends zr{constructor(e,t,n){super(e,t,n,"[audio-stream-controller]",ne.AUDIO),this.videoBuffer=null,this.videoTrackCC=-1,this.waitingVideoCC=-1,this.bufferedTrack=null,this.switchingTrack=null,this.trackId=-1,this.waitingData=null,this.mainDetails=null,this.bufferFlushed=!1,this.cachedTrackLoadedData=null,this._registerListeners()}onHandlerDestroying(){this._unregisterListeners(),this.mainDetails=null,this.bufferedTrack=null,this.switchingTrack=null}_registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.on(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(T.ERROR,this.onError,this),e.on(T.BUFFER_RESET,this.onBufferReset,this),e.on(T.BUFFER_CREATED,this.onBufferCreated,this),e.on(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.off(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(T.ERROR,this.onError,this),e.off(T.BUFFER_RESET,this.onBufferReset,this),e.off(T.BUFFER_CREATED,this.onBufferCreated,this),e.off(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this)}onInitPtsFound(e,{frag:t,id:n,initPTS:r,timescale:i}){if(n==="main"){const a=t.cc;this.initPTS[t.cc]={baseTime:r,timescale:i},this.log(`InitPTS for cc: ${a} found from main: ${r}`),this.videoTrackCC=a,this.state===$.WAITING_INIT_PTS&&this.tick()}}startLoad(e){if(!this.levels){this.startPosition=e,this.state=$.STOPPED;return}const t=this.lastCurrentTime;this.stopLoad(),this.setInterval(Ta),t>0&&e===-1?(this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`),e=t,this.state=$.IDLE):(this.loadedmetadata=!1,this.state=$.WAITING_TRACK),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}doTick(){switch(this.state){case $.IDLE:this.doTickIdle();break;case $.WAITING_TRACK:{var e;const{levels:n,trackId:r}=this,i=n==null||(e=n[r])==null?void 0:e.details;if(i){if(this.waitForCdnTuneIn(i))break;this.state=$.WAITING_INIT_PTS}break}case $.FRAG_LOADING_WAITING_RETRY:{var t;const n=performance.now(),r=this.retryDate;(!r||n>=r||(t=this.media)!=null&&t.seeking)&&(this.log("RetryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded(this.trackId),this.state=$.IDLE);break}case $.WAITING_INIT_PTS:{const n=this.waitingData;if(n){const{frag:r,part:i,cache:a,complete:s}=n;if(this.initPTS[r.cc]!==void 0){this.waitingData=null,this.waitingVideoCC=-1,this.state=$.FRAG_LOADING;const l=a.flush(),d={frag:r,part:i,payload:l,networkDetails:null};this._handleFragmentLoadProgress(d),s&&super._handleFragmentLoadComplete(d)}else if(this.videoTrackCC!==this.waitingVideoCC)this.log(`Waiting fragment cc (${r.cc}) cancelled because video is at cc ${this.videoTrackCC}`),this.clearWaitingFragment();else{const l=this.getLoadPosition(),d=ge.bufferInfo(this.mediaBuffer,l,this.config.maxBufferHole);Or(d.end,this.config.maxFragLookUpTolerance,r)<0&&(this.log(`Waiting fragment cc (${r.cc}) @ ${r.start} cancelled because another fragment at ${d.end} is needed`),this.clearWaitingFragment())}}else this.state=$.IDLE}}this.onTickEnd()}clearWaitingFragment(){const e=this.waitingData;e&&(this.fragmentTracker.removeFragment(e.frag),this.waitingData=null,this.waitingVideoCC=-1,this.state=$.IDLE)}resetLoadingState(){this.clearWaitingFragment(),super.resetLoadingState()}onTickEnd(){const{media:e}=this;!(e!=null&&e.readyState)||(this.lastCurrentTime=e.currentTime)}doTickIdle(){const{hls:e,levels:t,media:n,trackId:r}=this,i=e.config;if(!(t!=null&&t[r])||!n&&(this.startFragRequested||!i.startFragPrefetch))return;const a=t[r],s=a.details;if(!s||s.live&&this.levelLastLoaded!==r||this.waitForCdnTuneIn(s)){this.state=$.WAITING_TRACK;return}const l=this.mediaBuffer?this.mediaBuffer:this.media;this.bufferFlushed&&l&&(this.bufferFlushed=!1,this.afterBufferFlushed(l,pe.AUDIO,ne.AUDIO));const d=this.getFwdBufferInfo(l,ne.AUDIO);if(d===null)return;const{bufferedTrack:u,switchingTrack:f}=this;if(!f&&this._streamEnded(d,s)){e.trigger(T.BUFFER_EOS,{type:"audio"}),this.state=$.ENDED;return}const p=this.getFwdBufferInfo(this.videoBuffer?this.videoBuffer:this.media,ne.MAIN),A=d.len,b=this.getMaxBufferLength(p==null?void 0:p.len);if(A>=b&&!f)return;const S=s.fragments[0].start;let k=d.end;if(f&&n){const _=this.getLoadPosition();u&&f.attrs!==u.attrs&&(k=_),s.PTSKnown&&_<S&&(d.end>S||d.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),n.currentTime=S+.05)}let L=this.getNextFragment(k,s),I=!1;if(L&&this.isLoopLoading(L,k)&&(I=!!L.gap,L=this.getNextFragmentLoopLoading(L,s,d,ne.MAIN,b)),!L){this.bufferFlushed=!0;return}const D=p&&L.start>p.end+s.targetduration;if(D||!(p!=null&&p.len)&&d.len){const _=this.fragmentTracker.getBufferedFrag(L.start,ne.MAIN);if(_===null||(I||(I=!!_.gap||!!D&&p.len===0),D&&!I||I&&d.nextStart&&d.nextStart<_.end))return}this.loadFragment(L,a,k)}getMaxBufferLength(e){const t=super.getMaxBufferLength();return e?Math.min(Math.max(t,e),this.config.maxMaxBufferLength):t}onMediaDetaching(){this.videoBuffer=null,super.onMediaDetaching()}onAudioTracksUpdated(e,{audioTracks:t}){this.resetTransmuxer(),this.levels=t.map(n=>new dn(n))}onAudioTrackSwitching(e,t){const n=!!t.url;this.trackId=t.id;const{fragCurrent:r}=this;r&&(r.abortRequests(),this.removeUnbufferedFrags(r.start)),this.resetLoadingState(),n?this.setInterval(Ta):this.resetTransmuxer(),n?(this.switchingTrack=t,this.state=$.IDLE):(this.switchingTrack=null,this.bufferedTrack=t,this.state=$.STOPPED),this.tick()}onManifestLoading(){this.mainDetails=null,this.fragmentTracker.removeAllFragments(),this.startPosition=this.lastCurrentTime=0,this.bufferFlushed=!1,this.bufferedTrack=null,this.switchingTrack=null}onLevelLoaded(e,t){this.mainDetails=t.details,this.cachedTrackLoadedData!==null&&(this.hls.trigger(T.AUDIO_TRACK_LOADED,this.cachedTrackLoadedData),this.cachedTrackLoadedData=null)}onAudioTrackLoaded(e,t){var n;if(this.mainDetails==null){this.cachedTrackLoadedData=t;return}const{levels:r}=this,{details:i,id:a}=t;if(!r){this.warn(`Audio tracks were reset while loading level ${a}`);return}this.log(`Track ${a} loaded [${i.startSN},${i.endSN}],duration:${i.totalduration}`);const s=r[a];let l=0;if(i.live||(n=s.details)!=null&&n.live){const d=this.mainDetails;if(i.fragments[0]||(i.deltaUpdateFailed=!0),i.deltaUpdateFailed||!d)return;!s.details&&i.hasProgramDateTime&&d.hasProgramDateTime?(ls(i,d),l=i.fragments[0].start):l=this.alignPlaylists(i,s.details)}s.details=i,this.levelLastLoaded=a,!this.startFragRequested&&(this.mainDetails||!i.live)&&this.setStartPosition(s.details,l),this.state===$.WAITING_TRACK&&!this.waitForCdnTuneIn(i)&&(this.state=$.IDLE),this.tick()}_handleFragmentLoadProgress(e){var t;const{frag:n,part:r,payload:i}=e,{config:a,trackId:s,levels:l}=this;if(!l){this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${n.sn} of level ${n.level} will not be buffered`);return}const d=l[s];if(!d){this.warn("Audio track is undefined on fragment load progress");return}const u=d.details;if(!u){this.warn("Audio track details undefined on fragment load progress"),this.removeUnbufferedFrags(n.start);return}const f=a.defaultAudioCodec||d.audioCodec||"mp4a.40.2";let p=this.transmuxer;p||(p=this.transmuxer=new Es(this.hls,ne.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));const A=this.initPTS[n.cc],b=(t=n.initSegment)==null?void 0:t.data;if(A!==void 0){const S=r?r.index:-1,k=S!==-1,L=new Hr(n.level,n.sn,n.stats.chunkCount,i.byteLength,S,k);p.push(i,b,f,"",n,r,u.totalduration,!1,L,A)}else{this.log(`Unknown video PTS for cc ${n.cc}, waiting for video PTS before demuxing audio frag ${n.sn} of [${u.startSN} ,${u.endSN}],track ${s}`);const{cache:x}=this.waitingData=this.waitingData||{frag:n,part:r,cache:new Ts,complete:!1};x.push(new Uint8Array(i)),this.waitingVideoCC=this.videoTrackCC,this.state=$.WAITING_INIT_PTS}}_handleFragmentLoadComplete(e){if(this.waitingData){this.waitingData.complete=!0;return}super._handleFragmentLoadComplete(e)}onBufferReset(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1}onBufferCreated(e,t){const n=t.tracks.audio;n&&(this.mediaBuffer=n.buffer||null),t.tracks.video&&(this.videoBuffer=t.tracks.video.buffer||null)}onFragBuffered(e,t){const{frag:n,part:r}=t;if(n.type!==ne.AUDIO){if(!this.loadedmetadata&&n.type===ne.MAIN){var i;(i=this.videoBuffer||this.media)!=null&&i.buffered.length&&(this.loadedmetadata=!0)}return}if(this.fragContextChanged(n)){this.warn(`Fragment ${n.sn}${r?" p: "+r.index:""} of level ${n.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack?this.switchingTrack.name:"false"}`);return}if(n.sn!=="initSegment"){this.fragPrevious=n;const a=this.switchingTrack;a&&(this.bufferedTrack=a,this.switchingTrack=null,this.hls.trigger(T.AUDIO_TRACK_SWITCHED,Fe({},a)))}this.fragBufferedComplete(n,r)}onError(e,t){var n;if(t.fatal){this.state=$.ERROR;return}switch(t.details){case M.FRAG_GAP:case M.FRAG_PARSING_ERROR:case M.FRAG_DECRYPT_ERROR:case M.FRAG_LOAD_ERROR:case M.FRAG_LOAD_TIMEOUT:case M.KEY_LOAD_ERROR:case M.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(ne.AUDIO,t);break;case M.AUDIO_TRACK_LOAD_ERROR:case M.AUDIO_TRACK_LOAD_TIMEOUT:case M.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===$.WAITING_TRACK&&((n=t.context)==null?void 0:n.type)===le.AUDIO_TRACK&&(this.state=$.IDLE);break;case M.BUFFER_FULL_ERROR:if(!t.parent||t.parent!=="audio")return;this.reduceLengthAndFlushBuffer(t)&&(this.bufferedTrack=null,super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"));break;case M.INTERNAL_EXCEPTION:this.recoverWorkerError(t);break}}onBufferFlushed(e,{type:t}){t===pe.AUDIO&&(this.bufferFlushed=!0,this.state===$.ENDED&&(this.state=$.IDLE))}_handleTransmuxComplete(e){var t;const n="audio",{hls:r}=this,{remuxResult:i,chunkMeta:a}=e,s=this.getCurrentContext(a);if(!s){this.resetWhenMissingContext(a);return}const{frag:l,part:d,level:u}=s,{details:f}=u,{audio:p,text:A,id3:b,initSegment:x}=i;if(this.fragContextChanged(l)||!f){this.fragmentTracker.removeFragment(l);return}if(this.state=$.PARSING,this.switchingTrack&&p&&this.completeAudioSwitch(this.switchingTrack),x!=null&&x.tracks&&(this._bufferInitSegment(x.tracks,l,a),r.trigger(T.FRAG_PARSING_INIT_SEGMENT,{frag:l,id:n,tracks:x.tracks})),p){const{startPTS:S,endPTS:k,startDTS:L,endDTS:I}=p;d&&(d.elementaryStreams[pe.AUDIO]={startPTS:S,endPTS:k,startDTS:L,endDTS:I}),l.setElementaryStreamInfo(pe.AUDIO,S,k,L,I),this.bufferFragmentData(p,l,d,a)}if(b!=null&&(t=b.samples)!=null&&t.length){const S=we({id:n,frag:l,details:f},b);r.trigger(T.FRAG_PARSING_METADATA,S)}if(A){const S=we({id:n,frag:l,details:f},A);r.trigger(T.FRAG_PARSING_USERDATA,S)}}_bufferInitSegment(e,t,n){if(this.state!==$.PARSING)return;e.video&&delete e.video;const r=e.audio;if(!r)return;r.levelCodec=r.codec,r.id="audio",this.log(`Init audio buffer, container:${r.container}, codecs[parsed]=[${r.codec}]`),this.hls.trigger(T.BUFFER_CODECS,e);const i=r.initSegment;if(i!=null&&i.byteLength){const a={type:"audio",frag:t,part:null,chunkMeta:n,parent:t.type,data:i};this.hls.trigger(T.BUFFER_APPENDING,a)}this.tick()}loadFragment(e,t,n){const r=this.fragmentTracker.getState(e);if(this.fragCurrent=e,this.switchingTrack||r===Re.NOT_LOADED||r===Re.PARTIAL){var i;e.sn==="initSegment"?this._loadInitSegment(e,t):(i=t.details)!=null&&i.live&&!this.initPTS[e.cc]?(this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`),this.state=$.WAITING_INIT_PTS):(this.startFragRequested=!0,super.loadFragment(e,t,n))}else this.clearTrackerIfNeeded(e)}completeAudioSwitch(e){const{hls:t,media:n,bufferedTrack:r}=this,i=r==null?void 0:r.attrs,a=e.attrs;n&&i&&(i.CHANNELS!==a.CHANNELS||i.NAME!==a.NAME||i.LANGUAGE!==a.LANGUAGE)&&(this.log("Switching audio track : flushing all audio"),super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio")),this.bufferedTrack=e,this.switchingTrack=null,t.trigger(T.AUDIO_TRACK_SWITCHED,Fe({},e))}}class Ou extends Kr{constructor(e){super(e,"[audio-track-controller]"),this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.registerListeners()}registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVEL_LOADING,this.onLevelLoading,this),e.off(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(T.ERROR,this.onError,this)}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,super.destroy()}onManifestLoading(){this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.audioTracks||[]}onAudioTrackLoaded(e,t){const{id:n,groupId:r,details:i}=t,a=this.tracksInGroup[n];if(!a||a.groupId!==r){this.warn(`Track with id:${n} and group:${r} not found in active group ${a.groupId}`);return}const s=a.details;a.details=t.details,this.log(`audio-track ${n} "${a.name}" lang:${a.lang} group:${r} loaded [${i.startSN}-${i.endSN}]`),n===this.trackId&&this.playlistLoaded(n,t,s)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!(t!=null&&t.audioGroupIds))return;const n=t.audioGroupIds[t.urlId];if(this.groupId!==n){this.groupId=n||null;const r=this.tracks.filter(a=>!n||a.groupId===n);this.selectDefaultTrack&&!r.some(a=>a.default)&&(this.selectDefaultTrack=!1),this.tracksInGroup=r;const i={audioTracks:r};this.log(`Updating audio tracks, ${r.length} track(s) found in group:${n}`),this.hls.trigger(T.AUDIO_TRACKS_UPDATED,i),this.selectInitialTrack()}else this.shouldReloadPlaylist(this.currentTrack)&&this.setAudioTrack(this.trackId)}onError(e,t){t.fatal||!t.context||t.context.type===le.AUDIO_TRACK&&t.context.id===this.trackId&&t.context.groupId===this.groupId&&(this.requestScheduled=-1,this.checkRetry(t))}get audioTracks(){return this.tracksInGroup}get audioTrack(){return this.trackId}set audioTrack(e){this.selectDefaultTrack=!1,this.setAudioTrack(e)}setAudioTrack(e){const t=this.tracksInGroup;if(e<0||e>=t.length){this.warn("Invalid id passed to audio-track controller");return}this.clearTimer();const n=this.currentTrack;t[this.trackId];const r=t[e],{groupId:i,name:a}=r;if(this.log(`Switching to audio-track ${e} "${a}" lang:${r.lang} group:${i}`),this.trackId=e,this.currentTrack=r,this.selectDefaultTrack=!1,this.hls.trigger(T.AUDIO_TRACK_SWITCHING,Fe({},r)),r.details&&!r.details.live)return;const s=this.switchParams(r.url,n==null?void 0:n.details);this.loadPlaylist(s)}selectInitialTrack(){const e=this.tracksInGroup,t=this.findTrackId(this.currentTrack)|this.findTrackId(null);if(t!==-1)this.setAudioTrack(t);else{const n=new Error(`No track found for running audio group-ID: ${this.groupId} track count: ${e.length}`);this.warn(n.message),this.hls.trigger(T.ERROR,{type:te.MEDIA_ERROR,details:M.AUDIO_TRACK_LOAD_ERROR,fatal:!0,error:n})}}findTrackId(e){const t=this.tracksInGroup;for(let n=0;n<t.length;n++){const r=t[n];if((!this.selectDefaultTrack||r.default)&&(!e||e.attrs["STABLE-RENDITION-ID"]===r.attrs["STABLE-RENDITION-ID"]||e.name===r.name&&e.lang===r.lang))return r.id}return-1}loadPlaylist(e){super.loadPlaylist();const t=this.tracksInGroup[this.trackId];if(this.shouldLoadPlaylist(t)){const n=t.id,r=t.groupId;let i=t.url;if(e)try{i=e.addDirectives(i)}catch(a){this.warn(`Could not construct new URL with HLS Delivery Directives: ${a}`)}this.log(`loading audio-track playlist ${n} "${t.name}" lang:${t.lang} group:${r}`),this.clearTimer(),this.hls.trigger(T.AUDIO_TRACK_LOADING,{url:i,id:n,groupId:r,deliveryDirectives:e||null})}}}function Ss(o,e){if(o.length!==e.length)return!1;for(let t=0;t<o.length;t++)if(!Fu(o[t].attrs,e[t].attrs))return!1;return!0}function Fu(o,e){const t=o["STABLE-RENDITION-ID"];return t?t===e["STABLE-RENDITION-ID"]:!["LANGUAGE","NAME","CHARACTERISTICS","AUTOSELECT","DEFAULT","FORCED"].some(n=>o[n]!==e[n])}const Sa=500;class Mu extends zr{constructor(e,t,n){super(e,t,n,"[subtitle-stream-controller]",ne.SUBTITLE),this.levels=[],this.currentTrackId=-1,this.tracksBuffered=[],this.mainDetails=null,this._registerListeners()}onHandlerDestroying(){this._unregisterListeners(),this.mainDetails=null}_registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.ERROR,this.onError,this),e.on(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(T.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.on(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(T.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.ERROR,this.onError,this),e.off(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(T.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.off(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(T.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this)}startLoad(e){this.stopLoad(),this.state=$.IDLE,this.setInterval(Sa),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}onManifestLoading(){this.mainDetails=null,this.fragmentTracker.removeAllFragments()}onMediaDetaching(){this.tracksBuffered=[],super.onMediaDetaching()}onLevelLoaded(e,t){this.mainDetails=t.details}onSubtitleFragProcessed(e,t){const{frag:n,success:r}=t;if(this.fragPrevious=n,this.state=$.IDLE,!r)return;const i=this.tracksBuffered[this.currentTrackId];if(!i)return;let a;const s=n.start;for(let d=0;d<i.length;d++)if(s>=i[d].start&&s<=i[d].end){a=i[d];break}const l=n.start+n.duration;a?a.end=l:(a={start:s,end:l},i.push(a)),this.fragmentTracker.fragBuffered(n)}onBufferFlushing(e,t){const{startOffset:n,endOffset:r}=t;if(n===0&&r!==Number.POSITIVE_INFINITY){const{currentTrackId:i,levels:a}=this;if(!a.length||!a[i]||!a[i].details)return;const l=a[i].details.targetduration,d=r-l;if(d<=0)return;t.endOffsetSubtitles=Math.max(0,d),this.tracksBuffered.forEach(u=>{for(let f=0;f<u.length;){if(u[f].end<=d){u.shift();continue}else if(u[f].start<d)u[f].start=d;else break;f++}}),this.fragmentTracker.removeFragmentsInRange(n,d,ne.SUBTITLE)}}onFragBuffered(e,t){if(!this.loadedmetadata&&t.frag.type===ne.MAIN){var n;(n=this.media)!=null&&n.buffered.length&&(this.loadedmetadata=!0)}}onError(e,t){const n=t.frag;(n==null?void 0:n.type)===ne.SUBTITLE&&(this.fragCurrent&&this.fragCurrent.abortRequests(),this.state!==$.STOPPED&&(this.state=$.IDLE))}onSubtitleTracksUpdated(e,{subtitleTracks:t}){if(Ss(this.levels,t)){this.levels=t.map(n=>new dn(n));return}this.tracksBuffered=[],this.levels=t.map(n=>{const r=new dn(n);return this.tracksBuffered[r.id]=[],r}),this.fragmentTracker.removeFragmentsInRange(0,Number.POSITIVE_INFINITY,ne.SUBTITLE),this.fragPrevious=null,this.mediaBuffer=null}onSubtitleTrackSwitch(e,t){if(this.currentTrackId=t.id,!this.levels.length||this.currentTrackId===-1){this.clearInterval();return}const n=this.levels[this.currentTrackId];n!=null&&n.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null,n&&this.setInterval(Sa)}onSubtitleTrackLoaded(e,t){var n;const{details:r,id:i}=t,{currentTrackId:a,levels:s}=this;if(!s.length)return;const l=s[a];if(i>=s.length||i!==a||!l)return;this.mediaBuffer=this.mediaBufferTimeRanges;let d=0;if(r.live||(n=l.details)!=null&&n.live){const u=this.mainDetails;if(r.deltaUpdateFailed||!u)return;const f=u.fragments[0];l.details?(d=this.alignPlaylists(r,l.details),d===0&&f&&(d=f.start,Pr(r,d))):r.hasProgramDateTime&&u.hasProgramDateTime?(ls(r,u),d=r.fragments[0].start):f&&(d=f.start,Pr(r,d))}l.details=r,this.levelLastLoaded=i,!this.startFragRequested&&(this.mainDetails||!r.live)&&this.setStartPosition(l.details,d),this.tick(),r.live&&!this.fragCurrent&&this.media&&this.state===$.IDLE&&(cn(null,r.fragments,this.media.currentTime,0)||(this.warn("Subtitle playlist not aligned with playback"),l.details=void 0))}_handleFragmentLoadComplete(e){const{frag:t,payload:n}=e,r=t.decryptdata,i=this.hls;if(!this.fragContextChanged(t)&&n&&n.byteLength>0&&r&&r.key&&r.iv&&r.method==="AES-128"){const a=performance.now();this.decrypter.decrypt(new Uint8Array(n),r.key.buffer,r.iv.buffer).catch(s=>{throw i.trigger(T.ERROR,{type:te.MEDIA_ERROR,details:M.FRAG_DECRYPT_ERROR,fatal:!1,error:s,reason:s.message,frag:t}),s}).then(s=>{const l=performance.now();i.trigger(T.FRAG_DECRYPTED,{frag:t,payload:s,stats:{tstart:a,tdecrypt:l}})}).catch(s=>{this.warn(`${s.name}: ${s.message}`),this.state=$.IDLE})}}doTick(){if(!this.media){this.state=$.IDLE;return}if(this.state===$.IDLE){const{currentTrackId:e,levels:t}=this,n=t[e];if(!t.length||!n||!n.details)return;const r=n.details,i=r.targetduration,{config:a}=this,s=this.getLoadPosition(),l=ge.bufferedInfo(this.tracksBuffered[this.currentTrackId]||[],s-i,a.maxBufferHole),{end:d,len:u}=l,f=this.getFwdBufferInfo(this.media,ne.MAIN),p=this.getMaxBufferLength(f==null?void 0:f.len)+i;if(u>p)return;const A=r.fragments,b=A.length,x=r.edge;let S=null;const k=this.fragPrevious;if(d<x){const{maxFragLookUpTolerance:L}=a;S=cn(k,A,Math.max(A[0].start,d),L),!S&&k&&k.start<A[0].start&&(S=A[0])}else S=A[b-1];if(!S)return;S=this.mapToInitFragWhenRequired(S),this.fragmentTracker.getState(S)===Re.NOT_LOADED&&this.loadFragment(S,n,d)}}getMaxBufferLength(e){const t=super.getMaxBufferLength();return e?Math.max(t,e):t}loadFragment(e,t,n){this.fragCurrent=e,e.sn==="initSegment"?this._loadInitSegment(e,t):(this.startFragRequested=!0,super.loadFragment(e,t,n))}get mediaBufferTimeRanges(){return new Nu(this.tracksBuffered[this.currentTrackId]||[])}}class Nu{constructor(e){this.buffered=void 0;const t=(n,r,i)=>{if(r=r>>>0,r>i-1)throw new DOMException(`Failed to execute '${n}' on 'TimeRanges': The index provided (${r}) is greater than the maximum bound (${i})`);return e[r][n]};this.buffered={get length(){return e.length},end(n){return t("end",n,e.length)},start(n){return t("start",n,e.length)}}}}class Uu extends Kr{constructor(e){super(e,"[subtitle-track-controller]"),this.media=null,this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.selectDefaultTrack=!0,this.queuedDefaultTrack=-1,this.trackChangeListener=()=>this.onTextTracksChanged(),this.asyncPollTrackChange=()=>this.pollTrackChange(0),this.useTextTrackPolling=!1,this.subtitlePollingInterval=-1,this._subtitleDisplay=!0,this.registerListeners()}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.trackChangeListener=this.asyncPollTrackChange=null,super.destroy()}get subtitleDisplay(){return this._subtitleDisplay}set subtitleDisplay(e){this._subtitleDisplay=e,this.trackId>-1&&this.toggleTrackModes(this.trackId)}registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVEL_LOADING,this.onLevelLoading,this),e.off(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(T.ERROR,this.onError,this)}onMediaAttached(e,t){this.media=t.media,this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))}pollTrackChange(e){self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.trackChangeListener,e)}onMediaDetaching(){if(!this.media)return;self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||this.media.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId),xr(this.media.textTracks).forEach(t=>{It(t)}),this.subtitleTrack=-1,this.media=null}onManifestLoading(){this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.subtitleTracks}onSubtitleTrackLoaded(e,t){const{id:n,details:r}=t,{trackId:i}=this,a=this.tracksInGroup[i];if(!a){this.warn(`Invalid subtitle track id ${n}`);return}const s=a.details;a.details=t.details,this.log(`subtitle track ${n} loaded [${r.startSN}-${r.endSN}]`),n===this.trackId&&this.playlistLoaded(n,t,s)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!(t!=null&&t.textGroupIds))return;const n=t.textGroupIds[t.urlId],r=this.tracksInGroup?this.tracksInGroup[this.trackId]:void 0;if(this.groupId!==n){const i=this.tracks.filter(l=>!n||l.groupId===n);this.tracksInGroup=i;const a=this.findTrackId(r==null?void 0:r.name)||this.findTrackId();this.groupId=n||null;const s={subtitleTracks:i};this.log(`Updating subtitle tracks, ${i.length} track(s) found in "${n}" group-id`),this.hls.trigger(T.SUBTITLE_TRACKS_UPDATED,s),a!==-1&&this.setSubtitleTrack(a,r)}else this.shouldReloadPlaylist(r)&&this.setSubtitleTrack(this.trackId,r)}findTrackId(e){const t=this.tracksInGroup;for(let n=0;n<t.length;n++){const r=t[n];if((!this.selectDefaultTrack||r.default)&&(!e||e===r.name))return r.id}return-1}onError(e,t){t.fatal||!t.context||t.context.type===le.SUBTITLE_TRACK&&t.context.id===this.trackId&&t.context.groupId===this.groupId&&this.checkRetry(t)}get subtitleTracks(){return this.tracksInGroup}get subtitleTrack(){return this.trackId}set subtitleTrack(e){this.selectDefaultTrack=!1;const t=this.tracksInGroup?this.tracksInGroup[this.trackId]:void 0;this.setSubtitleTrack(e,t)}loadPlaylist(e){super.loadPlaylist();const t=this.tracksInGroup[this.trackId];if(this.shouldLoadPlaylist(t)){const n=t.id,r=t.groupId;let i=t.url;if(e)try{i=e.addDirectives(i)}catch(a){this.warn(`Could not construct new URL with HLS Delivery Directives: ${a}`)}this.log(`Loading subtitle playlist for id ${n}`),this.hls.trigger(T.SUBTITLE_TRACK_LOADING,{url:i,id:n,groupId:r,deliveryDirectives:e||null})}}toggleTrackModes(e){const{media:t,trackId:n}=this;if(!t)return;const r=xr(t.textTracks),i=r.filter(s=>s.groupId===this.groupId);if(e===-1)[].slice.call(r).forEach(s=>{s.mode="disabled"});else{const s=i[n];s&&(s.mode="disabled")}const a=i[e];a&&(a.mode=this.subtitleDisplay?"showing":"hidden")}setSubtitleTrack(e,t){var n;const r=this.tracksInGroup;if(!this.media){this.queuedDefaultTrack=e;return}if(this.trackId!==e&&this.toggleTrackModes(e),this.trackId===e&&(e===-1||(n=r[e])!=null&&n.details)||e<-1||e>=r.length)return;this.clearTimer();const i=r[e];if(this.log(`Switching to subtitle-track ${e}`+(i?` "${i.name}" lang:${i.lang} group:${i.groupId}`:"")),this.trackId=e,i){const{id:a,groupId:s="",name:l,type:d,url:u}=i;this.hls.trigger(T.SUBTITLE_TRACK_SWITCH,{id:a,groupId:s,name:l,type:d,url:u});const f=this.switchParams(i.url,t==null?void 0:t.details);this.loadPlaylist(f)}else this.hls.trigger(T.SUBTITLE_TRACK_SWITCH,{id:e})}onTextTracksChanged(){if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),!this.media||!this.hls.config.renderTextTracksNatively)return;let e=-1;const t=xr(this.media.textTracks);for(let n=0;n<t.length;n++)if(t[n].mode==="hidden")e=n;else if(t[n].mode==="showing"){e=n;break}this.subtitleTrack!==e&&(this.subtitleTrack=e)}}function xr(o){const e=[];for(let t=0;t<o.length;t++){const n=o[t];(n.kind==="subtitles"||n.kind==="captions")&&n.label&&e.push(o[t])}return e}class $u{constructor(e){this.buffers=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.buffers=e}append(e,t){const n=this.queues[t];n.push(e),n.length===1&&this.buffers[t]&&this.executeNext(t)}insertAbort(e,t){this.queues[t].unshift(e),this.executeNext(t)}appendBlocker(e){let t;const n=new Promise(i=>{t=i}),r={execute:t,onStart:()=>{},onComplete:()=>{},onError:()=>{}};return this.append(r,e),n}executeNext(e){const{buffers:t,queues:n}=this,r=t[e],i=n[e];if(i.length){const a=i[0];try{a.execute()}catch(s){R.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"),a.onError(s),r!=null&&r.updating||(i.shift(),this.executeNext(e))}}}shiftAndExecuteNext(e){this.queues[e].shift(),this.executeNext(e)}current(e){return this.queues[e][0]}}const Ca=Wr(),wa=/([ha]vc.)(?:\.[^.,]+)+/;class Gu{constructor(e){this.details=null,this._objectUrl=null,this.operationQueue=void 0,this.listeners=void 0,this.hls=void 0,this.bufferCodecEventsExpected=0,this._bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.lastMpegAudioChunk=null,this.appendError=0,this.tracks={},this.pendingTracks={},this.sourceBuffer=void 0,this._onMediaSourceOpen=()=>{const{media:t,mediaSource:n}=this;R.log("[buffer-controller]: Media source opened"),t&&(t.removeEventListener("emptied",this._onMediaEmptied),this.updateMediaElementDuration(),this.hls.trigger(T.MEDIA_ATTACHED,{media:t})),n&&n.removeEventListener("sourceopen",this._onMediaSourceOpen),this.checkPendingTracks()},this._onMediaSourceClose=()=>{R.log("[buffer-controller]: Media source closed")},this._onMediaSourceEnded=()=>{R.log("[buffer-controller]: Media source ended")},this._onMediaEmptied=()=>{const{media:t,_objectUrl:n}=this;t&&t.src!==n&&R.error(`Media element src was set while attaching MediaSource (${n} > ${t.src})`)},this.hls=e,this._initSourceBuffer(),this.registerListeners()}hasSourceTypes(){return this.getSourceBufferTypes().length>0||Object.keys(this.pendingTracks).length>0}destroy(){this.unregisterListeners(),this.details=null,this.lastMpegAudioChunk=null}registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.BUFFER_RESET,this.onBufferReset,this),e.on(T.BUFFER_APPENDING,this.onBufferAppending,this),e.on(T.BUFFER_CODECS,this.onBufferCodecs,this),e.on(T.BUFFER_EOS,this.onBufferEos,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(T.FRAG_PARSED,this.onFragParsed,this),e.on(T.FRAG_CHANGED,this.onFragChanged,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.BUFFER_RESET,this.onBufferReset,this),e.off(T.BUFFER_APPENDING,this.onBufferAppending,this),e.off(T.BUFFER_CODECS,this.onBufferCodecs,this),e.off(T.BUFFER_EOS,this.onBufferEos,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(T.FRAG_PARSED,this.onFragParsed,this),e.off(T.FRAG_CHANGED,this.onFragChanged,this)}_initSourceBuffer(){this.sourceBuffer={},this.operationQueue=new $u(this.sourceBuffer),this.listeners={audio:[],video:[],audiovideo:[]},this.lastMpegAudioChunk=null}onManifestParsed(e,t){let n=2;(t.audio&&!t.video||!t.altAudio)&&(n=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=n,this.details=null,R.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`)}onMediaAttaching(e,t){const n=this.media=t.media;if(n&&Ca){const r=this.mediaSource=new Ca;r.addEventListener("sourceopen",this._onMediaSourceOpen),r.addEventListener("sourceended",this._onMediaSourceEnded),r.addEventListener("sourceclose",this._onMediaSourceClose),n.src=self.URL.createObjectURL(r),this._objectUrl=n.src,n.addEventListener("emptied",this._onMediaEmptied)}}onMediaDetaching(){const{media:e,mediaSource:t,_objectUrl:n}=this;if(t){if(R.log("[buffer-controller]: media source detaching"),t.readyState==="open")try{t.endOfStream()}catch(r){R.warn(`[buffer-controller]: onMediaDetaching: ${r.message} while calling endOfStream`)}this.onBufferReset(),t.removeEventListener("sourceopen",this._onMediaSourceOpen),t.removeEventListener("sourceended",this._onMediaSourceEnded),t.removeEventListener("sourceclose",this._onMediaSourceClose),e&&(e.removeEventListener("emptied",this._onMediaEmptied),n&&self.URL.revokeObjectURL(n),e.src===n?(e.removeAttribute("src"),e.load()):R.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={}}this.hls.trigger(T.MEDIA_DETACHED,void 0)}onBufferReset(){this.getSourceBufferTypes().forEach(e=>{const t=this.sourceBuffer[e];try{t&&(this.removeBufferListeners(e),this.mediaSource&&this.mediaSource.removeSourceBuffer(t),this.sourceBuffer[e]=void 0)}catch(n){R.warn(`[buffer-controller]: Failed to reset the ${e} buffer`,n)}}),this._initSourceBuffer()}onBufferCodecs(e,t){const n=this.getSourceBufferTypes().length;Object.keys(t).forEach(r=>{if(n){const i=this.tracks[r];if(i&&typeof i.buffer.changeType=="function"){const{id:a,codec:s,levelCodec:l,container:d,metadata:u}=t[r],f=(i.levelCodec||i.codec).replace(wa,"$1"),p=(l||s).replace(wa,"$1");if(f!==p){const A=`${d};codecs=${l||s}`;this.appendChangeType(r,A),R.log(`[buffer-controller]: switching codec ${f} to ${p}`),this.tracks[r]={buffer:i.buffer,codec:s,container:d,levelCodec:l,metadata:u,id:a}}}}else this.pendingTracks[r]=t[r]}),!n&&(this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,0),this.mediaSource&&this.mediaSource.readyState==="open"&&this.checkPendingTracks())}appendChangeType(e,t){const{operationQueue:n}=this,r={execute:()=>{const i=this.sourceBuffer[e];i&&(R.log(`[buffer-controller]: changing ${e} sourceBuffer type to ${t}`),i.changeType(t)),n.shiftAndExecuteNext(e)},onStart:()=>{},onComplete:()=>{},onError:i=>{R.warn(`[buffer-controller]: Failed to change ${e} SourceBuffer type`,i)}};n.append(r,e)}onBufferAppending(e,t){const{hls:n,operationQueue:r,tracks:i}=this,{data:a,type:s,frag:l,part:d,chunkMeta:u}=t,f=u.buffering[s],p=self.performance.now();f.start=p;const A=l.stats.buffering,b=d?d.stats.buffering:null;A.start===0&&(A.start=p),b&&b.start===0&&(b.start=p);const x=i.audio;let S=!1;s==="audio"&&(x==null?void 0:x.container)==="audio/mpeg"&&(S=!this.lastMpegAudioChunk||u.id===1||this.lastMpegAudioChunk.sn!==u.sn,this.lastMpegAudioChunk=u);const k=l.start,L={execute:()=>{if(f.executeStart=self.performance.now(),S){const I=this.sourceBuffer[s];if(I){const D=k-I.timestampOffset;Math.abs(D)>=.1&&(R.log(`[buffer-controller]: Updating audio SourceBuffer timestampOffset to ${k} (delta: ${D}) sn: ${l.sn})`),I.timestampOffset=k)}}this.appendExecutor(a,s)},onStart:()=>{},onComplete:()=>{const I=self.performance.now();f.executeEnd=f.end=I,A.first===0&&(A.first=I),b&&b.first===0&&(b.first=I);const{sourceBuffer:D}=this,_={};for(const K in D)_[K]=ge.getBuffered(D[K]);this.appendError=0,this.hls.trigger(T.BUFFER_APPENDED,{type:s,frag:l,part:d,chunkMeta:u,parent:l.type,timeRanges:_})},onError:I=>{R.error(`[buffer-controller]: Error encountered while trying to append to the ${s} SourceBuffer`,I);const D={type:te.MEDIA_ERROR,parent:l.type,details:M.BUFFER_APPEND_ERROR,frag:l,part:d,chunkMeta:u,error:I,err:I,fatal:!1};I.code===DOMException.QUOTA_EXCEEDED_ERR?D.details=M.BUFFER_FULL_ERROR:(this.appendError++,D.details=M.BUFFER_APPEND_ERROR,this.appendError>n.config.appendErrorMaxRetry&&(R.error(`[buffer-controller]: Failed ${n.config.appendErrorMaxRetry} times to append segment in sourceBuffer`),D.fatal=!0)),n.trigger(T.ERROR,D)}};r.append(L,s)}onBufferFlushing(e,t){const{operationQueue:n}=this,r=i=>({execute:this.removeExecutor.bind(this,i,t.startOffset,t.endOffset),onStart:()=>{},onComplete:()=>{this.hls.trigger(T.BUFFER_FLUSHED,{type:i})},onError:a=>{R.warn(`[buffer-controller]: Failed to remove from ${i} SourceBuffer`,a)}});t.type?n.append(r(t.type),t.type):this.getSourceBufferTypes().forEach(i=>{n.append(r(i),i)})}onFragParsed(e,t){const{frag:n,part:r}=t,i=[],a=r?r.elementaryStreams:n.elementaryStreams;a[pe.AUDIOVIDEO]?i.push("audiovideo"):(a[pe.AUDIO]&&i.push("audio"),a[pe.VIDEO]&&i.push("video"));const s=()=>{const l=self.performance.now();n.stats.buffering.end=l,r&&(r.stats.buffering.end=l);const d=r?r.stats:n.stats;this.hls.trigger(T.FRAG_BUFFERED,{frag:n,part:r,stats:d,id:n.type})};i.length===0&&R.warn(`Fragments must have at least one ElementaryStreamType set. type: ${n.type} level: ${n.level} sn: ${n.sn}`),this.blockBuffers(s,i)}onFragChanged(e,t){this.flushBackBuffer()}onBufferEos(e,t){this.getSourceBufferTypes().reduce((r,i)=>{const a=this.sourceBuffer[i];return a&&(!t.type||t.type===i)&&(a.ending=!0,a.ended||(a.ended=!0,R.log(`[buffer-controller]: ${i} sourceBuffer now EOS`))),r&&!!(!a||a.ended)},!0)&&(R.log("[buffer-controller]: Queueing mediaSource.endOfStream()"),this.blockBuffers(()=>{this.getSourceBufferTypes().forEach(i=>{const a=this.sourceBuffer[i];a&&(a.ending=!1)});const{mediaSource:r}=this;if(!r||r.readyState!=="open"){r&&R.info(`[buffer-controller]: Could not call mediaSource.endOfStream(). mediaSource.readyState: ${r.readyState}`);return}R.log("[buffer-controller]: Calling mediaSource.endOfStream()"),r.endOfStream()}))}onLevelUpdated(e,{details:t}){!t.fragments.length||(this.details=t,this.getSourceBufferTypes().length?this.blockBuffers(this.updateMediaElementDuration.bind(this)):this.updateMediaElementDuration())}flushBackBuffer(){const{hls:e,details:t,media:n,sourceBuffer:r}=this;if(!n||t===null)return;const i=this.getSourceBufferTypes();if(!i.length)return;const a=t.live&&e.config.liveBackBufferLength!==null?e.config.liveBackBufferLength:e.config.backBufferLength;if(!ee(a)||a<0)return;const s=n.currentTime,l=t.levelTargetDuration,d=Math.max(a,l),u=Math.floor(s/l)*l-d;i.forEach(f=>{const p=r[f];if(p){const A=ge.getBuffered(p);if(A.length>0&&u>A.start(0)){if(e.trigger(T.BACK_BUFFER_REACHED,{bufferEnd:u}),t.live)e.trigger(T.LIVE_BACK_BUFFER_REACHED,{bufferEnd:u});else if(p.ended&&A.end(A.length-1)-s<l*2){R.info(`[buffer-controller]: Cannot flush ${f} back buffer while SourceBuffer is in ended state`);return}e.trigger(T.BUFFER_FLUSHING,{startOffset:0,endOffset:u,type:f})}}})}updateMediaElementDuration(){if(!this.details||!this.media||!this.mediaSource||this.mediaSource.readyState!=="open")return;const{details:e,hls:t,media:n,mediaSource:r}=this,i=e.fragments[0].start+e.totalduration,a=n.duration,s=ee(r.duration)?r.duration:0;e.live&&t.config.liveDurationInfinity?(R.log("[buffer-controller]: Media Source duration is set to Infinity"),r.duration=1/0,this.updateSeekableRange(e)):(i>s&&i>a||!ee(a))&&(R.log(`[buffer-controller]: Updating Media Source duration to ${i.toFixed(3)}`),r.duration=i)}updateSeekableRange(e){const t=this.mediaSource,n=e.fragments;if(n.length&&e.live&&t!=null&&t.setLiveSeekableRange){const i=Math.max(0,n[0].start),a=Math.max(i,i+e.totalduration);t.setLiveSeekableRange(i,a)}}checkPendingTracks(){const{bufferCodecEventsExpected:e,operationQueue:t,pendingTracks:n}=this,r=Object.keys(n).length;if(r&&!e||r===2){this.createSourceBuffers(n),this.pendingTracks={};const i=this.getSourceBufferTypes();if(i.length)this.hls.trigger(T.BUFFER_CREATED,{tracks:this.tracks}),i.forEach(a=>{t.executeNext(a)});else{const a=new Error("could not create source buffer for media codec(s)");this.hls.trigger(T.ERROR,{type:te.MEDIA_ERROR,details:M.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,error:a,reason:a.message})}}}createSourceBuffers(e){const{sourceBuffer:t,mediaSource:n}=this;if(!n)throw Error("createSourceBuffers called when mediaSource was null");for(const r in e)if(!t[r]){const i=e[r];if(!i)throw Error(`source buffer exists for track ${r}, however track does not`);const a=i.levelCodec||i.codec,s=`${i.container};codecs=${a}`;R.log(`[buffer-controller]: creating sourceBuffer(${s})`);try{const l=t[r]=n.addSourceBuffer(s),d=r;this.addBufferListener(d,"updatestart",this._onSBUpdateStart),this.addBufferListener(d,"updateend",this._onSBUpdateEnd),this.addBufferListener(d,"error",this._onSBUpdateError),this.tracks[r]={buffer:l,codec:a,container:i.container,levelCodec:i.levelCodec,metadata:i.metadata,id:i.id}}catch(l){R.error(`[buffer-controller]: error while trying to add sourceBuffer: ${l.message}`),this.hls.trigger(T.ERROR,{type:te.MEDIA_ERROR,details:M.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:l,mimeType:s})}}}_onSBUpdateStart(e){const{operationQueue:t}=this;t.current(e).onStart()}_onSBUpdateEnd(e){const{operationQueue:t}=this;t.current(e).onComplete(),t.shiftAndExecuteNext(e)}_onSBUpdateError(e,t){const n=new Error(`${e} SourceBuffer error`);R.error(`[buffer-controller]: ${n}`,t),this.hls.trigger(T.ERROR,{type:te.MEDIA_ERROR,details:M.BUFFER_APPENDING_ERROR,error:n,fatal:!1});const r=this.operationQueue.current(e);r&&r.onError(t)}removeExecutor(e,t,n){const{media:r,mediaSource:i,operationQueue:a,sourceBuffer:s}=this,l=s[e];if(!r||!i||!l){R.warn(`[buffer-controller]: Attempting to remove from the ${e} SourceBuffer, but it does not exist`),a.shiftAndExecuteNext(e);return}const d=ee(r.duration)?r.duration:1/0,u=ee(i.duration)?i.duration:1/0,f=Math.max(0,t),p=Math.min(n,d,u);p>f&&!l.ending?(l.ended=!1,R.log(`[buffer-controller]: Removing [${f},${p}] from the ${e} SourceBuffer`),l.remove(f,p)):a.shiftAndExecuteNext(e)}appendExecutor(e,t){const{operationQueue:n,sourceBuffer:r}=this,i=r[t];if(!i){R.warn(`[buffer-controller]: Attempting to append to the ${t} SourceBuffer, but it does not exist`),n.shiftAndExecuteNext(t);return}i.ended=!1,i.appendBuffer(e)}blockBuffers(e,t=this.getSourceBufferTypes()){if(!t.length){R.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"),Promise.resolve().then(e);return}const{operationQueue:n}=this,r=t.map(i=>n.appendBlocker(i));Promise.all(r).then(()=>{e(),t.forEach(i=>{const a=this.sourceBuffer[i];a!=null&&a.updating||n.shiftAndExecuteNext(i)})})}getSourceBufferTypes(){return Object.keys(this.sourceBuffer)}addBufferListener(e,t,n){const r=this.sourceBuffer[e];if(!r)return;const i=n.bind(this,e);this.listeners[e].push({event:t,listener:i}),r.addEventListener(t,i)}removeBufferListeners(e){const t=this.sourceBuffer[e];!t||this.listeners[e].forEach(n=>{t.removeEventListener(n.event,n.listener)})}}const ka={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},Cs=function(e){let t=e;return ka.hasOwnProperty(e)&&(t=ka[e]),String.fromCharCode(t)},Ke=15,Ze=100,Ku={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},Hu={17:2,18:4,21:6,22:8,23:10,19:13,20:15},qu={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},Yu={25:2,26:4,29:6,30:8,31:10,27:13,28:15},zu=["white","green","blue","cyan","red","yellow","magenta","black","transparent"];class Wu{constructor(){this.time=null,this.verboseLevel=0}log(e,t){if(this.verboseLevel>=e){const n=typeof t=="function"?t():t;R.log(`${this.time} [${e}] ${n}`)}}}const pt=function(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].toString(16));return t};class ws{constructor(e,t,n,r,i){this.foreground=void 0,this.underline=void 0,this.italics=void 0,this.background=void 0,this.flash=void 0,this.foreground=e||"white",this.underline=t||!1,this.italics=n||!1,this.background=r||"black",this.flash=i||!1}reset(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}setStyles(e){const t=["foreground","underline","italics","background","flash"];for(let n=0;n<t.length;n++){const r=t[n];e.hasOwnProperty(r)&&(this[r]=e[r])}}isDefault(){return this.foreground==="white"&&!this.underline&&!this.italics&&this.background==="black"&&!this.flash}equals(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash}copy(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash}toString(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash}}class Vu{constructor(e,t,n,r,i,a){this.uchar=void 0,this.penState=void 0,this.uchar=e||" ",this.penState=new ws(t,n,r,i,a)}reset(){this.uchar=" ",this.penState.reset()}setChar(e,t){this.uchar=e,this.penState.copy(t)}setPenState(e){this.penState.copy(e)}equals(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)}copy(e){this.uchar=e.uchar,this.penState.copy(e.penState)}isEmpty(){return this.uchar===" "&&this.penState.isDefault()}}class ju{constructor(e){this.chars=void 0,this.pos=void 0,this.currPenState=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chars=[];for(let t=0;t<Ze;t++)this.chars.push(new Vu);this.logger=e,this.pos=0,this.currPenState=new ws}equals(e){let t=!0;for(let n=0;n<Ze;n++)if(!this.chars[n].equals(e.chars[n])){t=!1;break}return t}copy(e){for(let t=0;t<Ze;t++)this.chars[t].copy(e.chars[t])}isEmpty(){let e=!0;for(let t=0;t<Ze;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e}setCursor(e){this.pos!==e&&(this.pos=e),this.pos<0?(this.logger.log(3,"Negative cursor position "+this.pos),this.pos=0):this.pos>Ze&&(this.logger.log(3,"Too large cursor position "+this.pos),this.pos=Ze)}moveCursor(e){const t=this.pos+e;if(e>1)for(let n=this.pos+1;n<t+1;n++)this.chars[n].setPenState(this.currPenState);this.setCursor(t)}backSpace(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)}insertChar(e){e>=144&&this.backSpace();const t=Cs(e);if(this.pos>=Ze){this.logger.log(0,()=>"Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!");return}this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1)}clearFromPos(e){let t;for(t=e;t<Ze;t++)this.chars[t].reset()}clear(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()}clearToEndOfRow(){this.clearFromPos(this.pos)}getTextString(){const e=[];let t=!0;for(let n=0;n<Ze;n++){const r=this.chars[n].uchar;r!==" "&&(t=!1),e.push(r)}return t?"":e.join("")}setPenStyles(e){this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)}}class Er{constructor(e){this.rows=void 0,this.currRow=void 0,this.nrRollUpRows=void 0,this.lastOutputScreen=void 0,this.logger=void 0,this.rows=[];for(let t=0;t<Ke;t++)this.rows.push(new ju(e));this.logger=e,this.currRow=Ke-1,this.nrRollUpRows=null,this.lastOutputScreen=null,this.reset()}reset(){for(let e=0;e<Ke;e++)this.rows[e].clear();this.currRow=Ke-1}equals(e){let t=!0;for(let n=0;n<Ke;n++)if(!this.rows[n].equals(e.rows[n])){t=!1;break}return t}copy(e){for(let t=0;t<Ke;t++)this.rows[t].copy(e.rows[t])}isEmpty(){let e=!0;for(let t=0;t<Ke;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e}backSpace(){this.rows[this.currRow].backSpace()}clearToEndOfRow(){this.rows[this.currRow].clearToEndOfRow()}insertChar(e){this.rows[this.currRow].insertChar(e)}setPen(e){this.rows[this.currRow].setPenStyles(e)}moveCursor(e){this.rows[this.currRow].moveCursor(e)}setCursor(e){this.logger.log(2,"setCursor: "+e),this.rows[this.currRow].setCursor(e)}setPAC(e){this.logger.log(2,()=>"pacData = "+JSON.stringify(e));let t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){for(let s=0;s<Ke;s++)this.rows[s].clear();const i=this.currRow+1-this.nrRollUpRows,a=this.lastOutputScreen;if(a){const s=a.rows[i].cueStartTime,l=this.logger.time;if(s&&l!==null&&s<l)for(let d=0;d<this.nrRollUpRows;d++)this.rows[t-this.nrRollUpRows+d+1].copy(a.rows[i+d])}}this.currRow=t;const n=this.rows[this.currRow];if(e.indent!==null){const i=e.indent,a=Math.max(i-1,0);n.setCursor(e.indent),e.color=n.chars[a].penState.foreground}const r={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(r)}setBkgData(e){this.logger.log(2,()=>"bkgData = "+JSON.stringify(e)),this.backSpace(),this.setPen(e),this.insertChar(32)}setRollUpRows(e){this.nrRollUpRows=e}rollUp(){if(this.nrRollUpRows===null){this.logger.log(3,"roll_up but nrRollUpRows not set yet");return}this.logger.log(1,()=>this.getDisplayText());const e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),this.logger.log(2,"Rolling up")}getDisplayText(e){e=e||!1;const t=[];let n="",r=-1;for(let i=0;i<Ke;i++){const a=this.rows[i].getTextString();a&&(r=i+1,e?t.push("Row "+r+": '"+a+"'"):t.push(a.trim()))}return t.length>0&&(e?n="["+t.join(" | ")+"]":n=t.join(`
`)),n}getTextAndFormat(){return this.rows}}class La{constructor(e,t,n){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=e,this.outputFilter=t,this.mode=null,this.verbose=0,this.displayedMemory=new Er(n),this.nonDisplayedMemory=new Er(n),this.lastOutputScreen=new Er(n),this.currRollUpRow=this.displayedMemory.rows[Ke-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=n}reset(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[Ke-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null}getHandler(){return this.outputFilter}setHandler(e){this.outputFilter=e}setPAC(e){this.writeScreen.setPAC(e)}setBkgData(e){this.writeScreen.setBkgData(e)}setMode(e){e!==this.mode&&(this.mode=e,this.logger.log(2,()=>"MODE="+e),this.mode==="MODE_POP-ON"?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),this.mode!=="MODE_ROLL-UP"&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)}insertChars(e){for(let n=0;n<e.length;n++)this.writeScreen.insertChar(e[n]);const t=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(2,()=>t+": "+this.writeScreen.getDisplayText(!0)),(this.mode==="MODE_PAINT-ON"||this.mode==="MODE_ROLL-UP")&&(this.logger.log(1,()=>"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())}ccRCL(){this.logger.log(2,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")}ccBS(){this.logger.log(2,"BS - BackSpace"),this.mode!=="MODE_TEXT"&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())}ccAOF(){}ccAON(){}ccDER(){this.logger.log(2,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()}ccRU(e){this.logger.log(2,"RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)}ccFON(){this.logger.log(2,"FON - Flash On"),this.writeScreen.setPen({flash:!0})}ccRDC(){this.logger.log(2,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")}ccTR(){this.logger.log(2,"TR"),this.setMode("MODE_TEXT")}ccRTD(){this.logger.log(2,"RTD"),this.setMode("MODE_TEXT")}ccEDM(){this.logger.log(2,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)}ccCR(){this.logger.log(2,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)}ccENM(){this.logger.log(2,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()}ccEOC(){if(this.logger.log(2,"EOC - End Of Caption"),this.mode==="MODE_POP-ON"){const e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,this.logger.log(1,()=>"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)}ccTO(e){this.logger.log(2,"TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)}ccMIDROW(e){const t={flash:!1};if(t.underline=e%2===1,t.italics=e>=46,t.italics)t.foreground="white";else{const n=Math.floor(e/2)-16,r=["white","green","blue","cyan","red","yellow","magenta"];t.foreground=r[n]}this.logger.log(2,"MIDROW: "+JSON.stringify(t)),this.writeScreen.setPen(t)}outputDataUpdate(e=!1){const t=this.logger.time;t!==null&&this.outputFilter&&(this.cueStartTime===null&&!this.displayedMemory.isEmpty()?this.cueStartTime=t:this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen),e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:t),this.lastOutputScreen.copy(this.displayedMemory))}cueSplitAtTime(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))}}class Ia{constructor(e,t,n){this.channels=void 0,this.currentChannel=0,this.cmdHistory=void 0,this.logger=void 0;const r=new Wu;this.channels=[null,new La(e,t,r),new La(e+1,n,r)],this.cmdHistory=Da(),this.logger=r}getHandler(e){return this.channels[e].getHandler()}setHandler(e,t){this.channels[e].setHandler(t)}addData(e,t){let n,r,i,a=!1;this.logger.time=e;for(let s=0;s<t.length;s+=2)if(r=t[s]&127,i=t[s+1]&127,!(r===0&&i===0)){if(this.logger.log(3,"["+pt([t[s],t[s+1]])+"] -> ("+pt([r,i])+")"),n=this.parseCmd(r,i),n||(n=this.parseMidrow(r,i)),n||(n=this.parsePAC(r,i)),n||(n=this.parseBackgroundAttributes(r,i)),!n&&(a=this.parseChars(r,i),a)){const l=this.currentChannel;l&&l>0?this.channels[l].insertChars(a):this.logger.log(2,"No channel found yet. TEXT-MODE?")}!n&&!a&&this.logger.log(2,"Couldn't parse cleaned data "+pt([r,i])+" orig: "+pt([t[s],t[s+1]]))}}parseCmd(e,t){const{cmdHistory:n}=this,r=(e===20||e===28||e===21||e===29)&&t>=32&&t<=47,i=(e===23||e===31)&&t>=33&&t<=35;if(!(r||i))return!1;if(Ra(e,t,n))return Lt(null,null,n),this.logger.log(3,"Repeated command ("+pt([e,t])+") is dropped"),!0;const a=e===20||e===21||e===23?1:2,s=this.channels[a];return e===20||e===21||e===28||e===29?t===32?s.ccRCL():t===33?s.ccBS():t===34?s.ccAOF():t===35?s.ccAON():t===36?s.ccDER():t===37?s.ccRU(2):t===38?s.ccRU(3):t===39?s.ccRU(4):t===40?s.ccFON():t===41?s.ccRDC():t===42?s.ccTR():t===43?s.ccRTD():t===44?s.ccEDM():t===45?s.ccCR():t===46?s.ccENM():t===47&&s.ccEOC():s.ccTO(t-32),Lt(e,t,n),this.currentChannel=a,!0}parseMidrow(e,t){let n=0;if((e===17||e===25)&&t>=32&&t<=47){if(e===17?n=1:n=2,n!==this.currentChannel)return this.logger.log(0,"Mismatch channel in midrow parsing"),!1;const r=this.channels[n];return r?(r.ccMIDROW(t),this.logger.log(3,"MIDROW ("+pt([e,t])+")"),!0):!1}return!1}parsePAC(e,t){let n;const r=this.cmdHistory,i=(e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127,a=(e===16||e===24)&&t>=64&&t<=95;if(!(i||a))return!1;if(Ra(e,t,r))return Lt(null,null,r),!0;const s=e<=23?1:2;t>=64&&t<=95?n=s===1?Ku[e]:qu[e]:n=s===1?Hu[e]:Yu[e];const l=this.channels[s];return l?(l.setPAC(this.interpretPAC(n,t)),Lt(e,t,r),this.currentChannel=s,!0):!1}interpretPAC(e,t){let n;const r={color:null,italics:!1,indent:null,underline:!1,row:e};return t>95?n=t-96:n=t-64,r.underline=(n&1)===1,n<=13?r.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(n/2)]:n<=15?(r.italics=!0,r.color="white"):r.indent=Math.floor((n-16)/2)*4,r}parseChars(e,t){let n,r=null,i=null;if(e>=25?(n=2,i=e-8):(n=1,i=e),i>=17&&i<=19){let a;i===17?a=t+80:i===18?a=t+112:a=t+144,this.logger.log(2,"Special char '"+Cs(a)+"' in channel "+n),r=[a]}else e>=32&&e<=127&&(r=t===0?[e]:[e,t]);if(r){const a=pt(r);this.logger.log(3,"Char codes =  "+a.join(",")),Lt(e,t,this.cmdHistory)}return r}parseBackgroundAttributes(e,t){const n=(e===16||e===24)&&t>=32&&t<=47,r=(e===23||e===31)&&t>=45&&t<=47;if(!(n||r))return!1;let i;const a={};e===16||e===24?(i=Math.floor((t-32)/2),a.background=zu[i],t%2===1&&(a.background=a.background+"_semi")):t===45?a.background="transparent":(a.foreground="black",t===47&&(a.underline=!0));const s=e<=23?1:2;return this.channels[s].setBkgData(a),Lt(e,t,this.cmdHistory),!0}reset(){for(let e=0;e<Object.keys(this.channels).length;e++){const t=this.channels[e];t&&t.reset()}this.cmdHistory=Da()}cueSplitAtTime(e){for(let t=0;t<this.channels.length;t++){const n=this.channels[t];n&&n.cueSplitAtTime(e)}}}function Lt(o,e,t){t.a=o,t.b=e}function Ra(o,e,t){return t.a===o&&t.b===e}function Da(){return{a:null,b:null}}class Ln{constructor(e,t){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=e,this.trackName=t}dispatchCue(){this.startTime!==null&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)}newCue(e,t,n){(this.startTime===null||this.startTime>e)&&(this.startTime=e),this.endTime=t,this.screen=n,this.timelineController.createCaptionsTrack(this.trackName)}reset(){this.cueRanges=[],this.startTime=null}}var Xr=function(){if(typeof self<"u"&&self.VTTCue)return self.VTTCue;const o=["","lr","rl"],e=["start","middle","end","left","right"];function t(s,l){if(typeof l!="string"||!Array.isArray(s))return!1;const d=l.toLowerCase();return~s.indexOf(d)?d:!1}function n(s){return t(o,s)}function r(s){return t(e,s)}function i(s,...l){let d=1;for(;d<arguments.length;d++){const u=arguments[d];for(const f in u)s[f]=u[f]}return s}function a(s,l,d){const u=this,f={enumerable:!0};u.hasBeenReset=!1;let p="",A=!1,b=s,x=l,S=d,k=null,L="",I=!0,D="auto",_="start",K=50,U="middle",H=50,z="middle";Object.defineProperty(u,"id",i({},f,{get:function(){return p},set:function(O){p=""+O}})),Object.defineProperty(u,"pauseOnExit",i({},f,{get:function(){return A},set:function(O){A=!!O}})),Object.defineProperty(u,"startTime",i({},f,{get:function(){return b},set:function(O){if(typeof O!="number")throw new TypeError("Start time must be set to a number.");b=O,this.hasBeenReset=!0}})),Object.defineProperty(u,"endTime",i({},f,{get:function(){return x},set:function(O){if(typeof O!="number")throw new TypeError("End time must be set to a number.");x=O,this.hasBeenReset=!0}})),Object.defineProperty(u,"text",i({},f,{get:function(){return S},set:function(O){S=""+O,this.hasBeenReset=!0}})),Object.defineProperty(u,"region",i({},f,{get:function(){return k},set:function(O){k=O,this.hasBeenReset=!0}})),Object.defineProperty(u,"vertical",i({},f,{get:function(){return L},set:function(O){const J=n(O);if(J===!1)throw new SyntaxError("An invalid or illegal string was specified.");L=J,this.hasBeenReset=!0}})),Object.defineProperty(u,"snapToLines",i({},f,{get:function(){return I},set:function(O){I=!!O,this.hasBeenReset=!0}})),Object.defineProperty(u,"line",i({},f,{get:function(){return D},set:function(O){if(typeof O!="number"&&O!=="auto")throw new SyntaxError("An invalid number or illegal string was specified.");D=O,this.hasBeenReset=!0}})),Object.defineProperty(u,"lineAlign",i({},f,{get:function(){return _},set:function(O){const J=r(O);if(!J)throw new SyntaxError("An invalid or illegal string was specified.");_=J,this.hasBeenReset=!0}})),Object.defineProperty(u,"position",i({},f,{get:function(){return K},set:function(O){if(O<0||O>100)throw new Error("Position must be between 0 and 100.");K=O,this.hasBeenReset=!0}})),Object.defineProperty(u,"positionAlign",i({},f,{get:function(){return U},set:function(O){const J=r(O);if(!J)throw new SyntaxError("An invalid or illegal string was specified.");U=J,this.hasBeenReset=!0}})),Object.defineProperty(u,"size",i({},f,{get:function(){return H},set:function(O){if(O<0||O>100)throw new Error("Size must be between 0 and 100.");H=O,this.hasBeenReset=!0}})),Object.defineProperty(u,"align",i({},f,{get:function(){return z},set:function(O){const J=r(O);if(!J)throw new SyntaxError("An invalid or illegal string was specified.");z=J,this.hasBeenReset=!0}})),u.displayState=void 0}return a.prototype.getCueAsHTML=function(){return self.WebVTT.convertCueToDOMTree(self,this.text)},a}();class Qu{decode(e,t){if(!e)return"";if(typeof e!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}function ks(o){function e(n,r,i,a){return(n|0)*3600+(r|0)*60+(i|0)+parseFloat(a||0)}const t=o.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);return t?parseFloat(t[2])>59?e(t[2],t[3],0,t[4]):e(t[1],t[2],t[3],t[4]):null}class Xu{constructor(){this.values=Object.create(null)}set(e,t){!this.get(e)&&t!==""&&(this.values[e]=t)}get(e,t,n){return n?this.has(e)?this.values[e]:t[n]:this.has(e)?this.values[e]:t}has(e){return e in this.values}alt(e,t,n){for(let r=0;r<n.length;++r)if(t===n[r]){this.set(e,t);break}}integer(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))}percent(e,t){if(/^([\d]{1,3})(\.[\d]*)?%$/.test(t)){const n=parseFloat(t);if(n>=0&&n<=100)return this.set(e,n),!0}return!1}}function Ls(o,e,t,n){const r=n?o.split(n):[o];for(const i in r){if(typeof r[i]!="string")continue;const a=r[i].split(t);if(a.length!==2)continue;const s=a[0],l=a[1];e(s,l)}}const Mr=new Xr(0,0,""),In=Mr.align==="middle"?"middle":"center";function Zu(o,e,t){const n=o;function r(){const s=ks(o);if(s===null)throw new Error("Malformed timestamp: "+n);return o=o.replace(/^[^\sa-zA-Z-]+/,""),s}function i(s,l){const d=new Xu;Ls(s,function(p,A){let b;switch(p){case"region":for(let x=t.length-1;x>=0;x--)if(t[x].id===A){d.set(p,t[x].region);break}break;case"vertical":d.alt(p,A,["rl","lr"]);break;case"line":b=A.split(","),d.integer(p,b[0]),d.percent(p,b[0])&&d.set("snapToLines",!1),d.alt(p,b[0],["auto"]),b.length===2&&d.alt("lineAlign",b[1],["start",In,"end"]);break;case"position":b=A.split(","),d.percent(p,b[0]),b.length===2&&d.alt("positionAlign",b[1],["start",In,"end","line-left","line-right","auto"]);break;case"size":d.percent(p,A);break;case"align":d.alt(p,A,["start",In,"end","left","right"]);break}},/:/,/\s/),l.region=d.get("region",null),l.vertical=d.get("vertical","");let u=d.get("line","auto");u==="auto"&&Mr.line===-1&&(u=-1),l.line=u,l.lineAlign=d.get("lineAlign","start"),l.snapToLines=d.get("snapToLines",!0),l.size=d.get("size",100),l.align=d.get("align",In);let f=d.get("position","auto");f==="auto"&&Mr.position===50&&(f=l.align==="start"||l.align==="left"?0:l.align==="end"||l.align==="right"?100:50),l.position=f}function a(){o=o.replace(/^\s+/,"")}if(a(),e.startTime=r(),a(),o.slice(0,3)!=="-->")throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+n);o=o.slice(3),a(),e.endTime=r(),a(),i(o,e)}function Is(o){return o.replace(/<br(?: \/)?>/gi,`
`)}class Ju{constructor(){this.state="INITIAL",this.buffer="",this.decoder=new Qu,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}parse(e){const t=this;e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));function n(){let i=t.buffer,a=0;for(i=Is(i);a<i.length&&i[a]!=="\r"&&i[a]!==`
`;)++a;const s=i.slice(0,a);return i[a]==="\r"&&++a,i[a]===`
`&&++a,t.buffer=i.slice(a),s}function r(i){Ls(i,function(a,s){},/:/)}try{let i="";if(t.state==="INITIAL"){if(!/\r\n|\n/.test(t.buffer))return this;i=n();const s=i.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!(s!=null&&s[0]))throw new Error("Malformed WebVTT signature.");t.state="HEADER"}let a=!1;for(;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(a?a=!1:i=n(),t.state){case"HEADER":/:/.test(i)?r(i):i||(t.state="ID");continue;case"NOTE":i||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(i)){t.state="NOTE";break}if(!i)continue;if(t.cue=new Xr(0,0,""),t.state="CUE",i.indexOf("-->")===-1){t.cue.id=i;continue}case"CUE":if(!t.cue){t.state="BADCUE";continue}try{Zu(i,t.cue,t.regionList)}catch{t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":{const s=i.indexOf("-->")!==-1;if(!i||s&&(a=!0)){t.oncue&&t.cue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}if(t.cue===null)continue;t.cue.text&&(t.cue.text+=`
`),t.cue.text+=i}continue;case"BADCUE":i||(t.state="ID")}}}catch{t.state==="CUETEXT"&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state=t.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this}flush(){const e=this;try{if((e.cue||e.state==="HEADER")&&(e.buffer+=`

`,e.parse()),e.state==="INITIAL"||e.state==="BADWEBVTT")throw new Error("Malformed WebVTT signature.")}catch(t){e.onparsingerror&&e.onparsingerror(t)}return e.onflush&&e.onflush(),this}}const eh=/\r\n|\n\r|\n|\r/g,Tr=function(e,t,n=0){return e.slice(n,n+t.length)===t},th=function(e){let t=parseInt(e.slice(-3));const n=parseInt(e.slice(-6,-4)),r=parseInt(e.slice(-9,-7)),i=e.length>9?parseInt(e.substring(0,e.indexOf(":"))):0;if(!ee(t)||!ee(n)||!ee(r)||!ee(i))throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);return t+=1e3*n,t+=60*1e3*r,t+=60*60*1e3*i,t},Sr=function(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0).toString()};function Zr(o,e,t){return Sr(o.toString())+Sr(e.toString())+Sr(t)}const nh=function(e,t,n){let r=e[t],i=e[r.prevCC];if(!i||!i.new&&r.new){e.ccOffset=e.presentationOffset=r.start,r.new=!1;return}for(;(a=i)!=null&&a.new;){var a;e.ccOffset+=r.start-i.start,r.new=!1,r=i,i=e[r.prevCC]}e.presentationOffset=n};function rh(o,e,t,n,r,i,a){const s=new Ju,l=je(new Uint8Array(o)).trim().replace(eh,`
`).split(`
`),d=[],u=fu(e.baseTime,e.timescale);let f="00:00.000",p=0,A=0,b,x=!0;s.oncue=function(S){const k=t[n];let L=t.ccOffset;const I=(p-u)/9e4;k!=null&&k.new&&(A!==void 0?L=t.ccOffset=k.start:nh(t,n,I)),I&&(L=I-t.presentationOffset);const D=S.endTime-S.startTime,_=$e((S.startTime+L-A)*9e4,r*9e4)/9e4;S.startTime=Math.max(_,0),S.endTime=Math.max(_+D,0);const K=S.text.trim();S.text=decodeURIComponent(encodeURIComponent(K)),S.id||(S.id=Zr(S.startTime,S.endTime,K)),S.endTime>0&&d.push(S)},s.onparsingerror=function(S){b=S},s.onflush=function(){if(b){a(b);return}i(d)},l.forEach(S=>{if(x)if(Tr(S,"X-TIMESTAMP-MAP=")){x=!1,S.slice(16).split(",").forEach(k=>{Tr(k,"LOCAL:")?f=k.slice(6):Tr(k,"MPEGTS:")&&(p=parseInt(k.slice(7)))});try{A=th(f)/1e3}catch(k){b=k}return}else S===""&&(x=!1);s.parse(S+`
`)}),s.flush()}const Cr="stpp.ttml.im1t",Rs=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,Ds=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,ih={left:"start",center:"center",right:"end",start:"start",end:"end"};function _a(o,e,t,n){const r=oe(new Uint8Array(o),["mdat"]);if(r.length===0){n(new Error("Could not parse IMSC1 mdat"));return}const i=r.map(s=>je(s)),a=pu(e.baseTime,1,e.timescale);try{i.forEach(s=>t(ah(s,a)))}catch(s){n(s)}}function ah(o,e){const r=new DOMParser().parseFromString(o,"text/xml").getElementsByTagName("tt")[0];if(!r)throw new Error("Invalid ttml");const i={frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0},a=Object.keys(i).reduce((f,p)=>(f[p]=r.getAttribute(`ttp:${p}`)||i[p],f),{}),s=r.getAttribute("xml:space")!=="preserve",l=Ba(wr(r,"styling","style")),d=Ba(wr(r,"layout","region")),u=wr(r,"body","[begin]");return[].map.call(u,f=>{const p=_s(f,s);if(!p||!f.hasAttribute("begin"))return null;const A=Lr(f.getAttribute("begin"),a),b=Lr(f.getAttribute("dur"),a);let x=Lr(f.getAttribute("end"),a);if(A===null)throw Pa(f);if(x===null){if(b===null)throw Pa(f);x=A+b}const S=new Xr(A-e,x-e,p);S.id=Zr(S.startTime,S.endTime,S.text);const k=d[f.getAttribute("region")],L=l[f.getAttribute("style")],I=sh(k,L,l),{textAlign:D}=I;if(D){const _=ih[D];_&&(S.lineAlign=_),S.align=D}return we(S,I),S}).filter(f=>f!==null)}function wr(o,e,t){const n=o.getElementsByTagName(e)[0];return n?[].slice.call(n.querySelectorAll(t)):[]}function Ba(o){return o.reduce((e,t)=>{const n=t.getAttribute("xml:id");return n&&(e[n]=t),e},{})}function _s(o,e){return[].slice.call(o.childNodes).reduce((t,n,r)=>{var i;return n.nodeName==="br"&&r?t+`
`:(i=n.childNodes)!=null&&i.length?_s(n,e):e?t+n.textContent.trim().replace(/\s+/g," "):t+n.textContent},"")}function sh(o,e,t){const n="http://www.w3.org/ns/ttml#styling";let r=null;const i=["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"],a=o!=null&&o.hasAttribute("style")?o.getAttribute("style"):null;return a&&t.hasOwnProperty(a)&&(r=t[a]),i.reduce((s,l)=>{const d=kr(e,n,l)||kr(o,n,l)||kr(r,n,l);return d&&(s[l]=d),s},{})}function kr(o,e,t){return o&&o.hasAttributeNS(e,t)?o.getAttributeNS(e,t):null}function Pa(o){return new Error(`Could not parse ttml timestamp ${o}`)}function Lr(o,e){if(!o)return null;let t=ks(o);return t===null&&(Rs.test(o)?t=oh(o,e):Ds.test(o)&&(t=lh(o,e))),t}function oh(o,e){const t=Rs.exec(o),n=(t[4]|0)+(t[5]|0)/e.subFrameRate;return(t[1]|0)*3600+(t[2]|0)*60+(t[3]|0)+n/e.frameRate}function lh(o,e){const t=Ds.exec(o),n=Number(t[1]);switch(t[2]){case"h":return n*3600;case"m":return n*60;case"ms":return n*1e3;case"f":return n/e.frameRate;case"t":return n/e.tickRate}return n}class dh{constructor(e){if(this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.unparsedVttFrags=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=Oa(),this.captionsProperties=void 0,this.hls=e,this.config=e.config,this.Cues=e.config.cueHandler,this.captionsProperties={textTrack1:{label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode},textTrack2:{label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode},textTrack3:{label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode},textTrack4:{label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}},this.config.enableCEA708Captions){const t=new Ln(this,"textTrack1"),n=new Ln(this,"textTrack2"),r=new Ln(this,"textTrack3"),i=new Ln(this,"textTrack4");this.cea608Parser1=new Ia(1,t,n),this.cea608Parser2=new Ia(3,r,i)}e.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(T.FRAG_LOADING,this.onFragLoading,this),e.on(T.FRAG_LOADED,this.onFragLoaded,this),e.on(T.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.on(T.FRAG_DECRYPTED,this.onFragDecrypted,this),e.on(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(T.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this)}destroy(){const{hls:e}=this;e.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(T.FRAG_LOADING,this.onFragLoading,this),e.off(T.FRAG_LOADED,this.onFragLoaded,this),e.off(T.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.off(T.FRAG_DECRYPTED,this.onFragDecrypted,this),e.off(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(T.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=this.cea608Parser1=this.cea608Parser2=null}addCues(e,t,n,r,i){let a=!1;for(let s=i.length;s--;){const l=i[s],d=uh(l[0],l[1],t,n);if(d>=0&&(l[0]=Math.min(l[0],t),l[1]=Math.max(l[1],n),a=!0,d/(n-t)>.5))return}if(a||i.push([t,n]),this.config.renderTextTracksNatively){const s=this.captionsTracks[e];this.Cues.newCue(s,t,n,r)}else{const s=this.Cues.newCue(null,t,n,r);this.hls.trigger(T.CUES_PARSED,{type:"captions",cues:s,track:e})}}onInitPtsFound(e,{frag:t,id:n,initPTS:r,timescale:i}){const{unparsedVttFrags:a}=this;n==="main"&&(this.initPTS[t.cc]={baseTime:r,timescale:i}),a.length&&(this.unparsedVttFrags=[],a.forEach(s=>{this.onFragLoaded(T.FRAG_LOADED,s)}))}getExistingTrack(e){const{media:t}=this;if(t)for(let n=0;n<t.textTracks.length;n++){const r=t.textTracks[n];if(r[e])return r}return null}createCaptionsTrack(e){this.config.renderTextTracksNatively?this.createNativeTrack(e):this.createNonNativeTrack(e)}createNativeTrack(e){if(this.captionsTracks[e])return;const{captionsProperties:t,captionsTracks:n,media:r}=this,{label:i,languageCode:a}=t[e],s=this.getExistingTrack(e);if(s)n[e]=s,It(n[e]),ts(n[e],r);else{const l=this.createTextTrack("captions",i,a);l&&(l[e]=!0,n[e]=l)}}createNonNativeTrack(e){if(this.nonNativeCaptionsTracks[e])return;const t=this.captionsProperties[e];if(!t)return;const n=t.label,r={_id:e,label:n,kind:"captions",default:t.media?!!t.media.default:!1,closedCaptions:t.media};this.nonNativeCaptionsTracks[e]=r,this.hls.trigger(T.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[r]})}createTextTrack(e,t,n){const r=this.media;if(!!r)return r.addTextTrack(e,t,n)}onMediaAttaching(e,t){this.media=t.media,this._cleanTracks()}onMediaDetaching(){const{captionsTracks:e}=this;Object.keys(e).forEach(t=>{It(e[t]),delete e[t]}),this.nonNativeCaptionsTracks={}}onManifestLoading(){this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=Oa(),this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.textTracks=[],this.unparsedVttFrags=this.unparsedVttFrags||[],this.initPTS=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())}_cleanTracks(){const{media:e}=this;if(!e)return;const t=e.textTracks;if(t)for(let n=0;n<t.length;n++)It(t[n])}onSubtitleTracksUpdated(e,t){const n=t.subtitleTracks||[],r=n.some(i=>i.textCodec===Cr);if(this.config.enableWebVTT||r&&this.config.enableIMSC1){if(Ss(this.tracks,n)){this.tracks=n;return}if(this.textTracks=[],this.tracks=n,this.config.renderTextTracksNatively){const a=this.media?this.media.textTracks:null;this.tracks.forEach((s,l)=>{let d;if(a&&l<a.length){let u=null;for(let f=0;f<a.length;f++)if(ch(a[f],s)){u=a[f];break}u&&(d=u)}if(d)It(d);else{const u=this._captionsOrSubtitlesFromCharacteristics(s);d=this.createTextTrack(u,s.name,s.lang),d&&(d.mode="disabled")}d&&(d.groupId=s.groupId,this.textTracks.push(d))})}else if(this.tracks.length){const a=this.tracks.map(s=>({label:s.name,kind:s.type.toLowerCase(),default:s.default,subtitleTrack:s}));this.hls.trigger(T.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:a})}}}_captionsOrSubtitlesFromCharacteristics(e){if(e.attrs.CHARACTERISTICS){const t=/transcribes-spoken-dialog/gi.test(e.attrs.CHARACTERISTICS),n=/describes-music-and-sound/gi.test(e.attrs.CHARACTERISTICS);if(t&&n)return"captions"}return"subtitles"}onManifestLoaded(e,t){this.config.enableCEA708Captions&&t.captions&&t.captions.forEach(n=>{const r=/(?:CC|SERVICE)([1-4])/.exec(n.instreamId);if(!r)return;const i=`textTrack${r[1]}`,a=this.captionsProperties[i];!a||(a.label=n.name,n.lang&&(a.languageCode=n.lang),a.media=n)})}closedCaptionsForLevel(e){const t=this.hls.levels[e.level];return t==null?void 0:t.attrs["CLOSED-CAPTIONS"]}onFragLoading(e,t){const{cea608Parser1:n,cea608Parser2:r,lastSn:i,lastPartIndex:a}=this;if(!(!this.enabled||!(n&&r))&&t.frag.type===ne.MAIN){var s,l;const d=t.frag.sn,u=(s=t==null||(l=t.part)==null?void 0:l.index)!=null?s:-1;d===i+1||d===i&&u===a+1||(n.reset(),r.reset()),this.lastSn=d,this.lastPartIndex=u}}onFragLoaded(e,t){const{frag:n,payload:r}=t,{initPTS:i,unparsedVttFrags:a}=this;if(n.type===ne.SUBTITLE)if(r.byteLength){if(!i[n.cc]){a.push(t),i.length&&this.hls.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:n,error:new Error("Missing initial subtitle PTS")});return}const s=n.decryptdata,l="stats"in t;if(s==null||!s.encrypted||l){const d=this.tracks[n.level],u=this.vttCCs;u[n.cc]||(u[n.cc]={start:n.start,prevCC:this.prevCC,new:!0},this.prevCC=n.cc),d&&d.textCodec===Cr?this._parseIMSC1(n,r):this._parseVTTs(n,r,u)}}else this.hls.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:n,error:new Error("Empty subtitle payload")})}_parseIMSC1(e,t){const n=this.hls;_a(t,this.initPTS[e.cc],r=>{this._appendCues(r,e.level),n.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:e})},r=>{R.log(`Failed to parse IMSC1: ${r}`),n.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e,error:r})})}_parseVTTs(e,t,n){var r;const i=this.hls,a=(r=e.initSegment)!=null&&r.data?gt(e.initSegment.data,new Uint8Array(t)):t;rh(a,this.initPTS[e.cc],n,e.cc,e.start,s=>{this._appendCues(s,e.level),i.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:e})},s=>{this._fallbackToIMSC1(e,t),R.log(`Failed to parse VTT cue: ${s}`),i.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e,error:s})})}_fallbackToIMSC1(e,t){const n=this.tracks[e.level];n.textCodec||_a(t,this.initPTS[e.cc],()=>{n.textCodec=Cr,this._parseIMSC1(e,t)},()=>{n.textCodec="wvtt"})}_appendCues(e,t){const n=this.hls;if(this.config.renderTextTracksNatively){const r=this.textTracks[t];if(!r||r.mode==="disabled")return;e.forEach(i=>ns(r,i))}else{const r=this.tracks[t];if(!r)return;const i=r.default?"default":"subtitles"+t;n.trigger(T.CUES_PARSED,{type:"subtitles",cues:e,track:i})}}onFragDecrypted(e,t){const{frag:n}=t;if(n.type===ne.SUBTITLE){if(!this.initPTS[n.cc]){this.unparsedVttFrags.push(t);return}this.onFragLoaded(T.FRAG_LOADED,t)}}onSubtitleTracksCleared(){this.tracks=[],this.captionsTracks={}}onFragParsingUserdata(e,t){const{cea608Parser1:n,cea608Parser2:r}=this;if(!this.enabled||!(n&&r))return;const{frag:i,samples:a}=t;if(!(i.type===ne.MAIN&&this.closedCaptionsForLevel(i)==="NONE"))for(let s=0;s<a.length;s++){const l=a[s].bytes;if(l){const d=this.extractCea608Data(l);n.addData(a[s].pts,d[0]),r.addData(a[s].pts,d[1])}}}onBufferFlushing(e,{startOffset:t,endOffset:n,endOffsetSubtitles:r,type:i}){const{media:a}=this;if(!(!a||a.currentTime<n)){if(!i||i==="video"){const{captionsTracks:s}=this;Object.keys(s).forEach(l=>Dr(s[l],t,n))}if(this.config.renderTextTracksNatively&&t===0&&r!==void 0){const{textTracks:s}=this;Object.keys(s).forEach(l=>Dr(s[l],t,r))}}}extractCea608Data(e){const t=[[],[]],n=e[0]&31;let r=2;for(let i=0;i<n;i++){const a=e[r++],s=127&e[r++],l=127&e[r++];if(s===0&&l===0)continue;if((4&a)!==0){const u=3&a;(u===0||u===1)&&(t[u].push(s),t[u].push(l))}}return t}}function ch(o,e){return!!o&&o.label===e.name&&!(o.textTrack1||o.textTrack2)}function uh(o,e,t,n){return Math.min(e,n)-Math.max(o,t)}function Oa(){return{ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!0}}}class Jr{constructor(e){this.hls=void 0,this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.clientRect=void 0,this.streamController=void 0,this.hls=e,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}setStreamController(e){this.streamController=e}destroy(){this.unregisterListener(),this.hls.config.capLevelToPlayerSize&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null}registerListeners(){const{hls:e}=this;e.on(T.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.BUFFER_CODECS,this.onBufferCodecs,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this)}unregisterListener(){const{hls:e}=this;e.off(T.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.BUFFER_CODECS,this.onBufferCodecs,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this)}onFpsDropLevelCapping(e,t){const n=this.hls.levels[t.droppedLevel];this.isLevelAllowed(n)&&this.restrictedLevels.push({bitrate:n.bitrate,height:n.height,width:n.width})}onMediaAttaching(e,t){this.media=t.media instanceof HTMLVideoElement?t.media:null,this.clientRect=null}onManifestParsed(e,t){const n=this.hls;this.restrictedLevels=[],this.firstLevel=t.firstLevel,n.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onBufferCodecs(e,t){this.hls.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onMediaDetaching(){this.stopCapping()}detectPlayerSize(){if(this.media&&this.mediaHeight>0&&this.mediaWidth>0){const e=this.hls.levels;if(e.length){const t=this.hls;t.autoLevelCapping=this.getMaxLevel(e.length-1),t.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}}getMaxLevel(e){const t=this.hls.levels;if(!t.length)return-1;const n=t.filter((r,i)=>this.isLevelAllowed(r)&&i<=e);return this.clientRect=null,Jr.getMaxLevelByMediaSize(n,this.mediaWidth,this.mediaHeight)}startCapping(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())}stopCapping(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)}getDimensions(){if(this.clientRect)return this.clientRect;const e=this.media,t={width:0,height:0};if(e){const n=e.getBoundingClientRect();t.width=n.width,t.height=n.height,!t.width&&!t.height&&(t.width=n.right-n.left||e.width||0,t.height=n.bottom-n.top||e.height||0)}return this.clientRect=t,t}get mediaWidth(){return this.getDimensions().width*this.contentScaleFactor}get mediaHeight(){return this.getDimensions().height*this.contentScaleFactor}get contentScaleFactor(){let e=1;if(!this.hls.config.ignoreDevicePixelRatio)try{e=self.devicePixelRatio}catch{}return e}isLevelAllowed(e){return!this.restrictedLevels.some(n=>e.bitrate===n.bitrate&&e.width===n.width&&e.height===n.height)}static getMaxLevelByMediaSize(e,t,n){if(!(e!=null&&e.length))return-1;const r=(a,s)=>s?a.width!==s.width||a.height!==s.height:!0;let i=e.length-1;for(let a=0;a<e.length;a+=1){const s=e[a];if((s.width>=t||s.height>=n)&&r(s,e[a+1])){i=a;break}}return i}}class hh{constructor(e){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=e,this.registerListeners()}setStreamController(e){this.streamController=e}registerListeners(){this.hls.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this)}unregisterListeners(){this.hls.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this)}destroy(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null}onMediaAttaching(e,t){const n=this.hls.config;if(n.capLevelOnFPSDrop){const r=t.media instanceof self.HTMLVideoElement?t.media:null;this.media=r,r&&typeof r.getVideoPlaybackQuality=="function"&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),n.fpsDroppedMonitoringPeriod)}}checkFPS(e,t,n){const r=performance.now();if(t){if(this.lastTime){const i=r-this.lastTime,a=n-this.lastDroppedFrames,s=t-this.lastDecodedFrames,l=1e3*a/i,d=this.hls;if(d.trigger(T.FPS_DROP,{currentDropped:a,currentDecoded:s,totalDroppedFrames:n}),l>0&&a>d.config.fpsDroppedMonitoringThreshold*s){let u=d.currentLevel;R.warn("drop FPS ratio greater than max allowed value for currentLevel: "+u),u>0&&(d.autoLevelCapping===-1||d.autoLevelCapping>=u)&&(u=u-1,d.trigger(T.FPS_DROP_LEVEL_CAPPING,{level:u,droppedLevel:d.currentLevel}),d.autoLevelCapping=u,this.streamController.nextLevelSwitch())}}this.lastTime=r,this.lastDroppedFrames=n,this.lastDecodedFrames=t}}checkFPSInterval(){const e=this.media;if(e)if(this.isVideoPlaybackQualityAvailable){const t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)}}const Rn="[eme]";class Rt{constructor(e){this.hls=void 0,this.config=void 0,this.media=null,this.keyFormatPromise=null,this.keySystemAccessPromises={},this._requestLicenseFailureCount=0,this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},this.setMediaKeysQueue=Rt.CDMCleanupPromise?[Rt.CDMCleanupPromise]:[],this.onMediaEncrypted=this._onMediaEncrypted.bind(this),this.onWaitingForKey=this._onWaitingForKey.bind(this),this.debug=R.debug.bind(R,Rn),this.log=R.log.bind(R,Rn),this.warn=R.warn.bind(R,Rn),this.error=R.error.bind(R,Rn),this.hls=e,this.config=e.config,this.registerListeners()}destroy(){this.unregisterListeners(),this.onMediaDetached();const e=this.config;e.requestMediaKeySystemAccessFunc=null,e.licenseXhrSetup=e.licenseResponseCallback=void 0,e.drmSystems=e.drmSystemOptions={},this.hls=this.onMediaEncrypted=this.onWaitingForKey=this.keyIdToKeySessionPromise=null,this.config=null}registerListeners(){this.hls.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(T.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(T.MANIFEST_LOADED,this.onManifestLoaded,this)}unregisterListeners(){this.hls.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(T.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(T.MANIFEST_LOADED,this.onManifestLoaded,this)}getLicenseServerUrl(e){const{drmSystems:t,widevineLicenseUrl:n}=this.config,r=t[e];if(r)return r.licenseUrl;if(e===be.WIDEVINE&&n)return n;throw new Error(`no license server URL configured for key-system "${e}"`)}getServerCertificateUrl(e){const{drmSystems:t}=this.config,n=t[e];if(n)return n.serverCertificateUrl;this.log(`No Server Certificate in config.drmSystems["${e}"]`)}attemptKeySystemAccess(e){const t=this.hls.levels,n=(a,s,l)=>!!a&&l.indexOf(a)===s,r=t.map(a=>a.audioCodec).filter(n),i=t.map(a=>a.videoCodec).filter(n);return r.length+i.length===0&&i.push("avc1.42e01e"),new Promise((a,s)=>{const l=d=>{const u=d.shift();this.getMediaKeysPromise(u,r,i).then(f=>a({keySystem:u,mediaKeys:f})).catch(f=>{d.length?l(d):f instanceof Ne?s(f):s(new Ne({type:te.KEY_SYSTEM_ERROR,details:M.KEY_SYSTEM_NO_ACCESS,error:f,fatal:!0},f.message))})};l(e)})}requestMediaKeySystemAccess(e,t){const{requestMediaKeySystemAccessFunc:n}=this.config;if(typeof n!="function"){let r=`Configured requestMediaKeySystemAccess is not a function ${n}`;return Ha===null&&self.location.protocol==="http:"&&(r=`navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`),Promise.reject(new Error(r))}return n(e,t)}getMediaKeysPromise(e,t,n){const r=wd(e,t,n,this.config.drmSystemOptions),i=this.keySystemAccessPromises[e];let a=i==null?void 0:i.keySystemAccess;if(!a){this.log(`Requesting encrypted media "${e}" key-system access with config: ${JSON.stringify(r)}`),a=this.requestMediaKeySystemAccess(e,r);const s=this.keySystemAccessPromises[e]={keySystemAccess:a};return a.catch(l=>{this.log(`Failed to obtain access to key-system "${e}": ${l}`)}),a.then(l=>{this.log(`Access for key-system "${l.keySystem}" obtained`);const d=this.fetchServerCertificate(e);return this.log(`Create media-keys for "${e}"`),s.mediaKeys=l.createMediaKeys().then(u=>(this.log(`Media-keys created for "${e}"`),d.then(f=>f?this.setMediaKeysServerCertificate(u,e,f):u))),s.mediaKeys.catch(u=>{this.error(`Failed to create media-keys for "${e}"}: ${u}`)}),s.mediaKeys})}return a.then(()=>i.mediaKeys)}createMediaKeySessionContext({decryptdata:e,keySystem:t,mediaKeys:n}){this.log(`Creating key-system session "${t}" keyId: ${We.hexDump(e.keyId||[])}`);const r=n.createSession(),i={decryptdata:e,keySystem:t,mediaKeys:n,mediaKeysSession:r,keyStatus:"status-pending"};return this.mediaKeySessions.push(i),i}renewKeySession(e){const t=e.decryptdata;if(t.pssh){const n=this.createMediaKeySessionContext(e),r=this.getKeyIdString(t),i="cenc";this.keyIdToKeySessionPromise[r]=this.generateRequestWithPreferredKeySession(n,i,t.pssh,"expired")}else this.warn("Could not renew expired session. Missing pssh initData.");this.removeSession(e)}getKeyIdString(e){if(!e)throw new Error("Could not read keyId of undefined decryptdata");if(e.keyId===null)throw new Error("keyId is null");return We.hexDump(e.keyId)}updateKeySession(e,t){var n;const r=e.mediaKeysSession;return this.log(`Updating key-session "${r.sessionId}" for keyID ${We.hexDump(((n=e.decryptdata)==null?void 0:n.keyId)||[])}
      } (data length: ${t&&t.byteLength})`),r.update(t)}selectKeySystemFormat(e){const t=Object.keys(e.levelkeys||{});return this.keyFormatPromise||(this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`),this.keyFormatPromise=this.getKeyFormatPromise(t)),this.keyFormatPromise}getKeyFormatPromise(e){return new Promise((t,n)=>{const r=ar(this.config),i=e.map(Wi).filter(a=>!!a&&r.indexOf(a)!==-1);return this.getKeySystemSelectionPromise(i).then(({keySystem:a})=>{const s=Vi(a);s?t(s):n(new Error(`Unable to find format for key-system "${a}"`))}).catch(n)})}loadKey(e){const t=e.keyInfo.decryptdata,n=this.getKeyIdString(t),r=`(keyId: ${n} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;this.log(`Starting session for key ${r}`);let i=this.keyIdToKeySessionPromise[n];return i||(i=this.keyIdToKeySessionPromise[n]=this.getKeySystemForKeyPromise(t).then(({keySystem:a,mediaKeys:s})=>(this.throwIfDestroyed(),this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${r}`),this.attemptSetMediaKeys(a,s).then(()=>{this.throwIfDestroyed();const l=this.createMediaKeySessionContext({keySystem:a,mediaKeys:s,decryptdata:t}),d="cenc";return this.generateRequestWithPreferredKeySession(l,d,t.pssh,"playlist-key")}))),i.catch(a=>this.handleError(a))),i}throwIfDestroyed(e="Invalid state"){if(!this.hls)throw new Error("invalid state")}handleError(e){!this.hls||(this.error(e.message),e instanceof Ne?this.hls.trigger(T.ERROR,e.data):this.hls.trigger(T.ERROR,{type:te.KEY_SYSTEM_ERROR,details:M.KEY_SYSTEM_NO_KEYS,error:e,fatal:!0}))}getKeySystemForKeyPromise(e){const t=this.getKeyIdString(e),n=this.keyIdToKeySessionPromise[t];if(!n){const r=Wi(e.keyFormat),i=r?[r]:ar(this.config);return this.attemptKeySystemAccess(i)}return n}getKeySystemSelectionPromise(e){if(e.length||(e=ar(this.config)),e.length===0)throw new Ne({type:te.KEY_SYSTEM_ERROR,details:M.KEY_SYSTEM_NO_CONFIGURED_LICENSE,fatal:!0},`Missing key-system license configuration options ${JSON.stringify({drmSystems:this.config.drmSystems})}`);return this.attemptKeySystemAccess(e)}_onMediaEncrypted(e){const{initDataType:t,initData:n}=e;if(this.debug(`"${e.type}" event: init data type: "${t}"`),n===null)return;let r,i;if(t==="sinf"&&this.config.drmSystems[be.FAIRPLAY]){const u=ke(new Uint8Array(n));try{const f=Ur(JSON.parse(u).sinf),p=Xa(new Uint8Array(f));if(!p)return;r=p.subarray(8,24),i=be.FAIRPLAY}catch{this.warn('Failed to parse sinf "encrypted" event message initData');return}}else{const u=Qd(n);if(u===null)return;u.version===0&&u.systemId===Ka.WIDEVINE&&u.data&&(r=u.data.subarray(8,24)),i=Cd(u.systemId)}if(!i||!r)return;const a=We.hexDump(r),{keyIdToKeySessionPromise:s,mediaKeySessions:l}=this;let d=s[a];for(let u=0;u<l.length;u++){const f=l[u],p=f.decryptdata;if(p.pssh||!p.keyId)continue;const A=We.hexDump(p.keyId);if(a===A||p.uri.replace(/-/g,"").indexOf(a)!==-1){d=s[A],delete s[A],p.pssh=new Uint8Array(n),p.keyId=r,d=s[a]=d.then(()=>this.generateRequestWithPreferredKeySession(f,t,n,"encrypted-event-key-match"));break}}d||(d=s[a]=this.getKeySystemSelectionPromise([i]).then(({keySystem:u,mediaKeys:f})=>{var p;this.throwIfDestroyed();const A=new ln("ISO-23001-7",a,(p=Vi(u))!=null?p:"");return A.pssh=new Uint8Array(n),A.keyId=r,this.attemptSetMediaKeys(u,f).then(()=>{this.throwIfDestroyed();const b=this.createMediaKeySessionContext({decryptdata:A,keySystem:u,mediaKeys:f});return this.generateRequestWithPreferredKeySession(b,t,n,"encrypted-event-no-match")})})),d.catch(u=>this.handleError(u))}_onWaitingForKey(e){this.log(`"${e.type}" event`)}attemptSetMediaKeys(e,t){const n=this.setMediaKeysQueue.slice();this.log(`Setting media-keys for "${e}"`);const r=Promise.all(n).then(()=>{if(!this.media)throw new Error("Attempted to set mediaKeys without media element attached");return this.media.setMediaKeys(t)});return this.setMediaKeysQueue.push(r),r.then(()=>{this.log(`Media-keys set for "${e}"`),n.push(r),this.setMediaKeysQueue=this.setMediaKeysQueue.filter(i=>n.indexOf(i)===-1)})}generateRequestWithPreferredKeySession(e,t,n,r){var i,a;const s=(i=this.config.drmSystems)==null||(a=i[e.keySystem])==null?void 0:a.generateRequest;if(s)try{const p=s.call(this.hls,t,n,e);if(!p)throw new Error("Invalid response from configured generateRequest filter");t=p.initDataType,n=e.decryptdata.pssh=p.initData?new Uint8Array(p.initData):null}catch(p){var l;if(this.warn(p.message),(l=this.hls)!=null&&l.config.debug)throw p}if(n===null)return this.log(`Skipping key-session request for "${r}" (no initData)`),Promise.resolve(e);const d=this.getKeyIdString(e.decryptdata);this.log(`Generating key-session request for "${r}": ${d} (init data type: ${t} length: ${n?n.byteLength:null})`);const u=new un;e.mediaKeysSession.onmessage=p=>{const A=e.mediaKeysSession;if(!A){u.emit("error",new Error("invalid state"));return}const{messageType:b,message:x}=p;this.log(`"${b}" message event for session "${A.sessionId}" message size: ${x.byteLength}`),b==="license-request"||b==="license-renewal"?this.renewLicense(e,x).catch(S=>{this.handleError(S),u.emit("error",S)}):b==="license-release"?e.keySystem===be.FAIRPLAY&&(this.updateKeySession(e,Ga("acknowledged")),this.removeSession(e)):this.warn(`unhandled media key message type "${b}"`)},e.mediaKeysSession.onkeystatuseschange=p=>{if(!e.mediaKeysSession){u.emit("error",new Error("invalid state"));return}this.onKeyStatusChange(e);const b=e.keyStatus;u.emit("keyStatus",b),b==="expired"&&(this.warn(`${e.keySystem} expired for key ${d}`),this.renewKeySession(e))};const f=new Promise((p,A)=>{u.on("error",A),u.on("keyStatus",b=>{b.startsWith("usable")?p():b==="output-restricted"?A(new Ne({type:te.KEY_SYSTEM_ERROR,details:M.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,fatal:!1},"HDCP level output restricted")):b==="internal-error"?A(new Ne({type:te.KEY_SYSTEM_ERROR,details:M.KEY_SYSTEM_STATUS_INTERNAL_ERROR,fatal:!0},`key status changed to "${b}"`)):b==="expired"?A(new Error("key expired while generating request")):this.warn(`unhandled key status change "${b}"`)})});return e.mediaKeysSession.generateRequest(t,n).then(()=>{var p;this.log(`Request generated for key-session "${(p=e.mediaKeysSession)==null?void 0:p.sessionId}" keyId: ${d}`)}).catch(p=>{throw new Ne({type:te.KEY_SYSTEM_ERROR,details:M.KEY_SYSTEM_NO_SESSION,error:p,fatal:!1},`Error generating key-session request: ${p}`)}).then(()=>f).catch(p=>{throw u.removeAllListeners(),this.removeSession(e),p}).then(()=>(u.removeAllListeners(),e))}onKeyStatusChange(e){e.mediaKeysSession.keyStatuses.forEach((t,n)=>{this.log(`key status change "${t}" for keyStatuses keyId: ${We.hexDump("buffer"in n?new Uint8Array(n.buffer,n.byteOffset,n.byteLength):new Uint8Array(n))} session keyId: ${We.hexDump(new Uint8Array(e.decryptdata.keyId||[]))} uri: ${e.decryptdata.uri}`),e.keyStatus=t})}fetchServerCertificate(e){const t=this.config,n=t.loader,r=new n(t),i=this.getServerCertificateUrl(e);return i?(this.log(`Fetching serverCertificate for "${e}"`),new Promise((a,s)=>{const l={responseType:"arraybuffer",url:i},d=t.certLoadPolicy.default,u={loadPolicy:d,timeout:d.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},f={onSuccess:(p,A,b,x)=>{a(p.data)},onError:(p,A,b,x)=>{s(new Ne({type:te.KEY_SYSTEM_ERROR,details:M.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:b,response:Fe({url:l.url,data:void 0},p)},`"${e}" certificate request failed (${i}). Status: ${p.code} (${p.text})`))},onTimeout:(p,A,b)=>{s(new Ne({type:te.KEY_SYSTEM_ERROR,details:M.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:b,response:{url:l.url,data:void 0}},`"${e}" certificate request timed out (${i})`))},onAbort:(p,A,b)=>{s(new Error("aborted"))}};r.load(l,u,f)})):Promise.resolve()}setMediaKeysServerCertificate(e,t,n){return new Promise((r,i)=>{e.setServerCertificate(n).then(a=>{this.log(`setServerCertificate ${a?"success":"not supported by CDM"} (${n==null?void 0:n.byteLength}) on "${t}"`),r(e)}).catch(a=>{i(new Ne({type:te.KEY_SYSTEM_ERROR,details:M.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,error:a,fatal:!0},a.message))})})}renewLicense(e,t){return this.requestLicense(e,new Uint8Array(t)).then(n=>this.updateKeySession(e,new Uint8Array(n)).catch(r=>{throw new Ne({type:te.KEY_SYSTEM_ERROR,details:M.KEY_SYSTEM_SESSION_UPDATE_FAILED,error:r,fatal:!0},r.message)}))}setupLicenseXHR(e,t,n,r){const i=this.config.licenseXhrSetup;return i?Promise.resolve().then(()=>{if(!n.decryptdata)throw new Error("Key removed");return i.call(this.hls,e,t,n,r)}).catch(a=>{if(!n.decryptdata)throw a;return e.open("POST",t,!0),i.call(this.hls,e,t,n,r)}).then(a=>(e.readyState||e.open("POST",t,!0),{xhr:e,licenseChallenge:a||r})):(e.open("POST",t,!0),Promise.resolve({xhr:e,licenseChallenge:r}))}requestLicense(e,t){const n=this.config.keyLoadPolicy.default;return new Promise((r,i)=>{const a=this.getLicenseServerUrl(e.keySystem);this.log(`Sending license request to URL: ${a}`);const s=new XMLHttpRequest;s.responseType="arraybuffer",s.onreadystatechange=()=>{if(!this.hls||!e.mediaKeysSession)return i(new Error("invalid state"));if(s.readyState===4)if(s.status===200){this._requestLicenseFailureCount=0;let l=s.response;this.log(`License received ${l instanceof ArrayBuffer?l.byteLength:l}`);const d=this.config.licenseResponseCallback;if(d)try{l=d.call(this.hls,s,a,e)}catch(u){this.error(u)}r(l)}else{const l=n.errorRetry,d=l?l.maxNumRetry:0;if(this._requestLicenseFailureCount++,this._requestLicenseFailureCount>d||s.status>=400&&s.status<500)i(new Ne({type:te.KEY_SYSTEM_ERROR,details:M.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0,networkDetails:s,response:{url:a,data:void 0,code:s.status,text:s.statusText}},`License Request XHR failed (${a}). Status: ${s.status} (${s.statusText})`));else{const u=d-this._requestLicenseFailureCount+1;this.warn(`Retrying license request, ${u} attempts left`),this.requestLicense(e,t).then(r,i)}}},e.licenseXhr&&e.licenseXhr.readyState!==XMLHttpRequest.DONE&&e.licenseXhr.abort(),e.licenseXhr=s,this.setupLicenseXHR(s,a,e,t).then(({xhr:l,licenseChallenge:d})=>{l.send(d)})})}onMediaAttached(e,t){if(!this.config.emeEnabled)return;const n=t.media;this.media=n,n.addEventListener("encrypted",this.onMediaEncrypted),n.addEventListener("waitingforkey",this.onWaitingForKey)}onMediaDetached(){const e=this.media,t=this.mediaKeySessions;e&&(e.removeEventListener("encrypted",this.onMediaEncrypted),e.removeEventListener("waitingforkey",this.onWaitingForKey),this.media=null),this._requestLicenseFailureCount=0,this.setMediaKeysQueue=[],this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},ln.clearKeyUriToKeyIdMap();const n=t.length;Rt.CDMCleanupPromise=Promise.all(t.map(r=>this.removeSession(r)).concat(e==null?void 0:e.setMediaKeys(null).catch(r=>{this.log(`Could not clear media keys: ${r}. media.src: ${e==null?void 0:e.src}`)}))).then(()=>{n&&(this.log("finished closing key sessions and clearing media keys"),t.length=0)}).catch(r=>{this.log(`Could not close sessions and clear media keys: ${r}. media.src: ${e==null?void 0:e.src}`)})}onManifestLoaded(e,{sessionKeys:t}){if(!(!t||!this.config.emeEnabled)&&!this.keyFormatPromise){const n=t.reduce((r,i)=>(r.indexOf(i.keyFormat)===-1&&r.push(i.keyFormat),r),[]);this.log(`Selecting key-system from session-keys ${n.join(", ")}`),this.keyFormatPromise=this.getKeyFormatPromise(n)}}removeSession(e){const{mediaKeysSession:t,licenseXhr:n}=e;if(t){this.log(`Remove licenses and keys and close session ${t.sessionId}`),t.onmessage=null,t.onkeystatuseschange=null,n&&n.readyState!==XMLHttpRequest.DONE&&n.abort(),e.mediaKeysSession=e.decryptdata=e.licenseXhr=void 0;const r=this.mediaKeySessions.indexOf(e);return r>-1&&this.mediaKeySessions.splice(r,1),t.remove().catch(i=>{this.log(`Could not remove session: ${i}`)}).then(()=>t.close()).catch(i=>{this.log(`Could not close session: ${i}`)})}}}Rt.CDMCleanupPromise=void 0;class Ne extends Error{constructor(e,t){super(t),this.data=void 0,e.error||(e.error=new Error(t)),this.data=e,e.err=e.error}}const ph=1;var _e={MANIFEST:"m",AUDIO:"a",VIDEO:"v",MUXED:"av",INIT:"i",CAPTION:"c",TIMED_TEXT:"tt",KEY:"k",OTHER:"o"};const fh="h";class lt{constructor(e){this.hls=void 0,this.config=void 0,this.media=void 0,this.sid=void 0,this.cid=void 0,this.useHeaders=!1,this.initialized=!1,this.starved=!1,this.buffering=!0,this.audioBuffer=void 0,this.videoBuffer=void 0,this.onWaiting=()=>{this.initialized&&(this.starved=!0),this.buffering=!0},this.onPlaying=()=>{this.initialized||(this.initialized=!0),this.buffering=!1},this.applyPlaylistData=r=>{try{this.apply(r,{ot:_e.MANIFEST,su:!this.initialized})}catch(i){R.warn("Could not generate manifest CMCD data.",i)}},this.applyFragmentData=r=>{try{const i=r.frag,a=this.hls.levels[i.level],s=this.getObjectType(i),l={d:i.duration*1e3,ot:s};(s===_e.VIDEO||s===_e.AUDIO||s==_e.MUXED)&&(l.br=a.bitrate/1e3,l.tb=this.getTopBandwidth(s)/1e3,l.bl=this.getBufferLength(s)),this.apply(r,l)}catch(i){R.warn("Could not generate segment CMCD data.",i)}},this.hls=e;const t=this.config=e.config,{cmcd:n}=t;n!=null&&(t.pLoader=this.createPlaylistLoader(),t.fLoader=this.createFragmentLoader(),this.sid=n.sessionId||lt.uuid(),this.cid=n.contentId,this.useHeaders=n.useHeaders===!0,this.registerListeners())}registerListeners(){const e=this.hls;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHED,this.onMediaDetached,this),e.on(T.BUFFER_CREATED,this.onBufferCreated,this)}unregisterListeners(){const e=this.hls;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHED,this.onMediaDetached,this),e.off(T.BUFFER_CREATED,this.onBufferCreated,this)}destroy(){this.unregisterListeners(),this.onMediaDetached(),this.hls=this.config=this.audioBuffer=this.videoBuffer=null}onMediaAttached(e,t){this.media=t.media,this.media.addEventListener("waiting",this.onWaiting),this.media.addEventListener("playing",this.onPlaying)}onMediaDetached(){!this.media||(this.media.removeEventListener("waiting",this.onWaiting),this.media.removeEventListener("playing",this.onPlaying),this.media=null)}onBufferCreated(e,t){var n,r;this.audioBuffer=(n=t.tracks.audio)==null?void 0:n.buffer,this.videoBuffer=(r=t.tracks.video)==null?void 0:r.buffer}createData(){var e;return{v:ph,sf:fh,sid:this.sid,cid:this.cid,pr:(e=this.media)==null?void 0:e.playbackRate,mtp:this.hls.bandwidthEstimate/1e3}}apply(e,t={}){we(t,this.createData());const n=t.ot===_e.INIT||t.ot===_e.VIDEO||t.ot===_e.MUXED;if(this.starved&&n&&(t.bs=!0,t.su=!0,this.starved=!1),t.su==null&&(t.su=this.buffering),this.useHeaders){const r=lt.toHeaders(t);if(!Object.keys(r).length)return;e.headers||(e.headers={}),we(e.headers,r)}else{const r=lt.toQuery(t);if(!r)return;e.url=lt.appendQueryToUri(e.url,r)}}getObjectType(e){const{type:t}=e;if(t==="subtitle")return _e.TIMED_TEXT;if(e.sn==="initSegment")return _e.INIT;if(t==="audio")return _e.AUDIO;if(t==="main")return this.hls.audioTracks.length?_e.VIDEO:_e.MUXED}getTopBandwidth(e){let t=0,n;const r=this.hls;if(e===_e.AUDIO)n=r.audioTracks;else{const i=r.maxAutoLevel,a=i>-1?i+1:r.levels.length;n=r.levels.slice(0,a)}for(const i of n)i.bitrate>t&&(t=i.bitrate);return t>0?t:NaN}getBufferLength(e){const t=this.hls.media,n=e===_e.AUDIO?this.audioBuffer:this.videoBuffer;return!n||!t?NaN:ge.bufferInfo(n,t.currentTime,this.config.maxBufferHole).len*1e3}createPlaylistLoader(){const{pLoader:e}=this.config,t=this.applyPlaylistData,n=e||this.config.loader;return class{constructor(i){this.loader=void 0,this.loader=new n(i)}get stats(){return this.loader.stats}get context(){return this.loader.context}destroy(){this.loader.destroy()}abort(){this.loader.abort()}load(i,a,s){t(i),this.loader.load(i,a,s)}}}createFragmentLoader(){const{fLoader:e}=this.config,t=this.applyFragmentData,n=e||this.config.loader;return class{constructor(i){this.loader=void 0,this.loader=new n(i)}get stats(){return this.loader.stats}get context(){return this.loader.context}destroy(){this.loader.destroy()}abort(){this.loader.abort()}load(i,a,s){t(i),this.loader.load(i,a,s)}}}static uuid(){const e=URL.createObjectURL(new Blob),t=e.toString();return URL.revokeObjectURL(e),t.slice(t.lastIndexOf("/")+1)}static serialize(e){const t=[],n=d=>!Number.isNaN(d)&&d!=null&&d!==""&&d!==!1,r=d=>Math.round(d),i=d=>r(d/100)*100,s={br:r,d:r,bl:i,dl:i,mtp:i,nor:d=>encodeURIComponent(d),rtp:i,tb:r},l=Object.keys(e||{}).sort();for(const d of l){let u=e[d];if(!n(u)||d==="v"&&u===1||d=="pr"&&u===1)continue;const f=s[d];f&&(u=f(u));const p=typeof u;let A;d==="ot"||d==="sf"||d==="st"?A=`${d}=${u}`:p==="boolean"?A=d:p==="number"?A=`${d}=${u}`:A=`${d}=${JSON.stringify(u)}`,t.push(A)}return t.join(",")}static toHeaders(e){const t=Object.keys(e),n={},r=["Object","Request","Session","Status"],i=[{},{},{},{}],a={br:0,d:0,ot:0,tb:0,bl:1,dl:1,mtp:1,nor:1,nrr:1,su:1,cid:2,pr:2,sf:2,sid:2,st:2,v:2,bs:3,rtp:3};for(const s of t){const l=a[s]!=null?a[s]:1;i[l][s]=e[s]}for(let s=0;s<i.length;s++){const l=lt.serialize(i[s]);l&&(n[`CMCD-${r[s]}`]=l)}return n}static toQuery(e){return`CMCD=${encodeURIComponent(lt.serialize(e))}`}static appendQueryToUri(e,t){if(!t)return e;const n=e.includes("?")?"&":"?";return`${e}${n}${t}`}}const mh=3e5;class yh{constructor(e){this.hls=void 0,this.log=void 0,this.loader=null,this.uri=null,this.pathwayId=".",this.pathwayPriority=null,this.timeToLoad=300,this.reloadTimer=-1,this.updated=0,this.started=!1,this.enabled=!0,this.levels=null,this.audioTracks=null,this.subtitleTracks=null,this.penalizedPathways={},this.hls=e,this.log=R.log.bind(R,"[content-steering]:"),this.registerListeners()}registerListeners(){const e=this.hls;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const e=this.hls;!e||(e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.ERROR,this.onError,this))}startLoad(){if(this.started=!0,self.clearTimeout(this.reloadTimer),this.enabled&&this.uri)if(this.updated){const e=Math.max(this.timeToLoad*1e3-(performance.now()-this.updated),0);this.scheduleRefresh(this.uri,e)}else this.loadSteeringManifest(this.uri)}stopLoad(){this.started=!1,this.loader&&(this.loader.destroy(),this.loader=null),self.clearTimeout(this.reloadTimer)}destroy(){this.unregisterListeners(),this.stopLoad(),this.hls=null,this.levels=this.audioTracks=this.subtitleTracks=null}removeLevel(e){const t=this.levels;t&&(this.levels=t.filter(n=>n!==e))}onManifestLoading(){this.stopLoad(),this.enabled=!0,this.timeToLoad=300,this.updated=0,this.uri=null,this.pathwayId=".",this.levels=this.audioTracks=this.subtitleTracks=null}onManifestLoaded(e,t){const{contentSteering:n}=t;n!==null&&(this.pathwayId=n.pathwayId,this.uri=n.uri,this.started&&this.startLoad())}onManifestParsed(e,t){this.audioTracks=t.audioTracks,this.subtitleTracks=t.subtitleTracks}onError(e,t){const{errorAction:n}=t;if((n==null?void 0:n.action)===Pe.SendAlternateToPenaltyBox&&n.flags===Ue.MoveAllAlternatesMatchingHost){let r=this.pathwayPriority;const i=this.pathwayId;this.penalizedPathways[i]||(this.penalizedPathways[i]=performance.now()),!r&&this.levels&&(r=this.levels.reduce((a,s)=>(a.indexOf(s.pathwayId)===-1&&a.push(s.pathwayId),a),[])),r&&r.length>1&&(this.updatePathwayPriority(r),n.resolved=this.pathwayId!==i)}}filterParsedLevels(e){this.levels=e;let t=this.getLevelsForPathway(this.pathwayId);if(t.length===0){const n=e[0].pathwayId;this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${n}"`),t=this.getLevelsForPathway(n),this.pathwayId=n}return t.length!==e.length?(this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`),t):e}getLevelsForPathway(e){return this.levels===null?[]:this.levels.filter(t=>e===t.pathwayId)}updatePathwayPriority(e){this.pathwayPriority=e;let t;const n=this.penalizedPathways,r=performance.now();Object.keys(n).forEach(i=>{r-n[i]>mh&&delete n[i]});for(let i=0;i<e.length;i++){const a=e[i];if(n[a])continue;if(a===this.pathwayId)return;const s=this.hls.nextLoadLevel,l=this.hls.levels[s];if(t=this.getLevelsForPathway(a),t.length>0){this.log(`Setting Pathway to "${a}"`),this.pathwayId=a,this.hls.trigger(T.LEVELS_UPDATED,{levels:t});const d=this.hls.levels[s];l&&d&&this.levels&&(d.attrs["STABLE-VARIANT-ID"]!==l.attrs["STABLE-VARIANT-ID"]&&d.bitrate!==l.bitrate&&this.log(`Unstable Pathways change from bitrate ${l.bitrate} to ${d.bitrate}`),this.hls.nextLoadLevel=s);break}}}clonePathways(e){const t=this.levels;if(!t)return;const n={},r={};e.forEach(i=>{const{ID:a,"BASE-ID":s,"URI-REPLACEMENT":l}=i;if(t.some(u=>u.pathwayId===a))return;const d=this.getLevelsForPathway(s).map(u=>{const f=we({},u);f.details=void 0,f.url=Bs(u.uri,u.attrs["STABLE-VARIANT-ID"],"PER-VARIANT-URIS",l);const p=new Ae(u.attrs);p["PATHWAY-ID"]=a;const A=p.AUDIO&&`${p.AUDIO}_clone_${a}`,b=p.SUBTITLES&&`${p.SUBTITLES}_clone_${a}`;A&&(n[p.AUDIO]=A,p.AUDIO=A),b&&(r[p.SUBTITLES]=b,p.SUBTITLES=b),f.attrs=p;const x=new dn(f);return Fn(x,"audio",A),Fn(x,"text",b),x});t.push(...d),Fa(this.audioTracks,n,l,a),Fa(this.subtitleTracks,r,l,a)})}loadSteeringManifest(e){const t=this.hls.config,n=t.loader;this.loader&&this.loader.destroy(),this.loader=new n(t);let r;try{r=new self.URL(e)}catch{this.enabled=!1,this.log(`Failed to parse Steering Manifest URI: ${e}`);return}if(r.protocol!=="data:"){const u=(this.hls.bandwidthEstimate||t.abrEwmaDefaultEstimate)|0;r.searchParams.set("_HLS_pathway",this.pathwayId),r.searchParams.set("_HLS_throughput",""+u)}const i={responseType:"json",url:r.href},a=t.steeringManifestLoadPolicy.default,s=a.errorRetry||a.timeoutRetry||{},l={loadPolicy:a,timeout:a.maxLoadTimeMs,maxRetry:s.maxNumRetry||0,retryDelay:s.retryDelayMs||0,maxRetryDelay:s.maxRetryDelayMs||0},d={onSuccess:(u,f,p,A)=>{this.log(`Loaded steering manifest: "${r}"`);const b=u.data;if(b.VERSION!==1){this.log(`Steering VERSION ${b.VERSION} not supported!`);return}this.updated=performance.now(),this.timeToLoad=b.TTL;const{"RELOAD-URI":x,"PATHWAY-CLONES":S,"PATHWAY-PRIORITY":k}=b;if(x)try{this.uri=new self.URL(x,r).href}catch{this.enabled=!1,this.log(`Failed to parse Steering Manifest RELOAD-URI: ${x}`);return}this.scheduleRefresh(this.uri||p.url),S&&this.clonePathways(S),k&&this.updatePathwayPriority(k)},onError:(u,f,p,A)=>{if(this.log(`Error loading steering manifest: ${u.code} ${u.text} (${f.url})`),this.stopLoad(),u.code===410){this.enabled=!1,this.log(`Steering manifest ${f.url} no longer available`);return}let b=this.timeToLoad*1e3;if(u.code===429){const x=this.loader;if(typeof(x==null?void 0:x.getResponseHeader)=="function"){const S=x.getResponseHeader("Retry-After");S&&(b=parseFloat(S)*1e3)}this.log(`Steering manifest ${f.url} rate limited`);return}this.scheduleRefresh(this.uri||f.url,b)},onTimeout:(u,f,p)=>{this.log(`Timeout loading steering manifest (${f.url})`),this.scheduleRefresh(this.uri||f.url)}};this.log(`Requesting steering manifest: ${r}`),this.loader.load(i,l,d)}scheduleRefresh(e,t=this.timeToLoad*1e3){self.clearTimeout(this.reloadTimer),this.reloadTimer=self.setTimeout(()=>{this.loadSteeringManifest(e)},t)}}function Fa(o,e,t,n){!o||Object.keys(e).forEach(r=>{const i=o.filter(a=>a.groupId===r).map(a=>{const s=we({},a);return s.details=void 0,s.attrs=new Ae(s.attrs),s.url=s.attrs.URI=Bs(a.url,a.attrs["STABLE-RENDITION-ID"],"PER-RENDITION-URIS",t),s.groupId=s.attrs["GROUP-ID"]=e[r],s.attrs["PATHWAY-ID"]=n,s});o.push(...i)})}function Bs(o,e,t,n){const{HOST:r,PARAMS:i,[t]:a}=n;let s;e&&(s=a==null?void 0:a[e],s&&(o=s));const l=new self.URL(o);return r&&!s&&(l.host=r),i&&Object.keys(i).sort().forEach(d=>{d&&l.searchParams.set(d,i[d])}),l.href}const gh=/^age:\s*[\d.]+\s*$/im;class Ps{constructor(e){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=void 0,this.loader=null,this.stats=void 0,this.xhrSetup=e&&e.xhrSetup||null,this.stats=new Nn,this.retryDelay=0}destroy(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null}abortInternal(){const e=this.loader;self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),e&&(e.onreadystatechange=null,e.onprogress=null,e.readyState!==4&&(this.stats.aborted=!0,e.abort()))}abort(){var e;this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)}load(e,t,n){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=e,this.config=t,this.callbacks=n,this.loadInternal()}loadInternal(){const{config:e,context:t}=this;if(!e)return;const n=this.loader=new self.XMLHttpRequest,r=this.stats;r.loading.first=0,r.loaded=0;const i=this.xhrSetup;i?Promise.resolve().then(()=>{if(!this.stats.aborted)return i(n,t.url)}).catch(a=>(n.open("GET",t.url,!0),i(n,t.url))).then(()=>{this.stats.aborted||this.openAndSendXhr(n,t,e)}).catch(a=>{this.callbacks.onError({code:n.status,text:a.message},t,n,r)}):this.openAndSendXhr(n,t,e)}openAndSendXhr(e,t,n){e.readyState||e.open("GET",t.url,!0);const r=this.context.headers,{maxTimeToFirstByteMs:i,maxLoadTimeMs:a}=n.loadPolicy;if(r)for(const s in r)e.setRequestHeader(s,r[s]);t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.responseType=t.responseType,self.clearTimeout(this.requestTimeout),n.timeout=i&&ee(i)?i:a,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),n.timeout),e.send()}readystatechange(){const{context:e,loader:t,stats:n}=this;if(!e||!t)return;const r=t.readyState,i=this.config;if(!n.aborted&&r>=2&&(n.loading.first===0&&(n.loading.first=Math.max(self.performance.now(),n.loading.start),i.timeout!==i.loadPolicy.maxLoadTimeMs&&(self.clearTimeout(this.requestTimeout),i.timeout=i.loadPolicy.maxLoadTimeMs,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),i.loadPolicy.maxLoadTimeMs-(n.loading.first-n.loading.start)))),r===4)){self.clearTimeout(this.requestTimeout),t.onreadystatechange=null,t.onprogress=null;const a=t.status,s=t.responseType!=="text";if(a>=200&&a<300&&(s&&t.response||t.responseText!==null)){n.loading.end=Math.max(self.performance.now(),n.loading.first);const l=s?t.response:t.responseText,d=t.responseType==="arraybuffer"?l.byteLength:l.length;if(n.loaded=n.total=d,n.bwEstimate=n.total*8e3/(n.loading.end-n.loading.first),!this.callbacks)return;const u=this.callbacks.onProgress;if(u&&u(n,e,l,t),!this.callbacks)return;const f={url:t.responseURL,data:l,code:a};this.callbacks.onSuccess(f,n,e,t)}else{const l=i.loadPolicy.errorRetry,d=n.retry;On(l,d,!1,a)?this.retry(l):(R.error(`${a} while loading ${e.url}`),this.callbacks.onError({code:a,text:t.statusText},e,t,n))}}}loadtimeout(){var e;const t=(e=this.config)==null?void 0:e.loadPolicy.timeoutRetry,n=this.stats.retry;if(On(t,n,!0))this.retry(t);else{R.warn(`timeout while loading ${this.context.url}`);const r=this.callbacks;r&&(this.abortInternal(),r.onTimeout(this.stats,this.context,this.loader))}}retry(e){const{context:t,stats:n}=this;this.retryDelay=Gr(e,n.retry),n.retry++,R.warn(`${status?"HTTP Status "+status:"Timeout"} while loading ${t.url}, retrying ${n.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay)}loadprogress(e){const t=this.stats;t.loaded=e.loaded,e.lengthComputable&&(t.total=e.total)}getCacheAge(){let e=null;if(this.loader&&gh.test(this.loader.getAllResponseHeaders())){const t=this.loader.getResponseHeader("age");e=t?parseFloat(t):null}return e}getResponseHeader(e){return this.loader&&new RegExp(`^${e}:\\s*[\\d.]+\\s*$`,"im").test(this.loader.getAllResponseHeaders())?this.loader.getResponseHeader(e):null}}function Ah(){if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{return new self.ReadableStream({}),!0}catch{}return!1}const bh=/(\d+)-(\d+)\/(\d+)/;class Ma{constructor(e){this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=void 0,this.response=void 0,this.controller=void 0,this.context=void 0,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=e.fetchSetup||Th,this.controller=new self.AbortController,this.stats=new Nn}destroy(){this.loader=this.callbacks=null,this.abortInternal()}abortInternal(){const e=this.response;e!=null&&e.ok||(this.stats.aborted=!0,this.controller.abort())}abort(){var e;this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)}load(e,t,n){const r=this.stats;if(r.loading.start)throw new Error("Loader can only be used once.");r.loading.start=self.performance.now();const i=vh(e,this.controller.signal),a=n.onProgress,s=e.responseType==="arraybuffer",l=s?"byteLength":"length",{maxTimeToFirstByteMs:d,maxLoadTimeMs:u}=t.loadPolicy;this.context=e,this.config=t,this.callbacks=n,this.request=this.fetchSetup(e,i),self.clearTimeout(this.requestTimeout),t.timeout=d&&ee(d)?d:u,this.requestTimeout=self.setTimeout(()=>{this.abortInternal(),n.onTimeout(r,e,this.response)},t.timeout),self.fetch(this.request).then(f=>{this.response=this.loader=f;const p=Math.max(self.performance.now(),r.loading.start);if(self.clearTimeout(this.requestTimeout),t.timeout=u,this.requestTimeout=self.setTimeout(()=>{this.abortInternal(),n.onTimeout(r,e,this.response)},u-(p-r.loading.start)),!f.ok){const{status:A,statusText:b}=f;throw new Sh(b||"fetch, bad network response",A,f)}return r.loading.first=p,r.total=Eh(f.headers)||r.total,a&&ee(t.highWaterMark)?this.loadProgressively(f,r,e,t.highWaterMark,a):s?f.arrayBuffer():e.responseType==="json"?f.json():f.text()}).then(f=>{const{response:p}=this;self.clearTimeout(this.requestTimeout),r.loading.end=Math.max(self.performance.now(),r.loading.first);const A=f[l];A&&(r.loaded=r.total=A);const b={url:p.url,data:f,code:p.status};a&&!ee(t.highWaterMark)&&a(r,e,f,p),n.onSuccess(b,r,e,p)}).catch(f=>{if(self.clearTimeout(this.requestTimeout),r.aborted)return;const p=f&&f.code||0,A=f?f.message:null;n.onError({code:p,text:A},e,f?f.details:null,r)})}getCacheAge(){let e=null;if(this.response){const t=this.response.headers.get("age");e=t?parseFloat(t):null}return e}getResponseHeader(e){return this.response?this.response.headers.get(e):null}loadProgressively(e,t,n,r=0,i){const a=new Ts,s=e.body.getReader(),l=()=>s.read().then(d=>{if(d.done)return a.dataLength&&i(t,n,a.flush(),e),Promise.resolve(new ArrayBuffer(0));const u=d.value,f=u.length;return t.loaded+=f,f<r||a.dataLength?(a.push(u),a.dataLength>=r&&i(t,n,a.flush(),e)):i(t,n,u,e),l()}).catch(()=>Promise.reject());return l()}}function vh(o,e){const t={method:"GET",mode:"cors",credentials:"same-origin",signal:e,headers:new self.Headers(we({},o.headers))};return o.rangeEnd&&t.headers.set("Range","bytes="+o.rangeStart+"-"+String(o.rangeEnd-1)),t}function xh(o){const e=bh.exec(o);if(e)return parseInt(e[2])-parseInt(e[1])+1}function Eh(o){const e=o.get("Content-Range");if(e){const n=xh(e);if(ee(n))return n}const t=o.get("Content-Length");if(t)return parseInt(t)}function Th(o,e){return new self.Request(o.url,e)}class Sh extends Error{constructor(e,t,n){super(e),this.code=void 0,this.details=void 0,this.code=t,this.details=n}}const Ch=/\s/,wh={newCue(o,e,t,n){const r=[];let i,a,s,l,d;const u=self.VTTCue||self.TextTrackCue;for(let p=0;p<n.rows.length;p++)if(i=n.rows[p],s=!0,l=0,d="",!i.isEmpty()){var f;for(let x=0;x<i.chars.length;x++)Ch.test(i.chars[x].uchar)&&s?l++:(d+=i.chars[x].uchar,s=!1);i.cueStartTime=e,e===t&&(t+=1e-4),l>=16?l--:l++;const A=Is(d.trim()),b=Zr(e,t,A);o!=null&&(f=o.cues)!=null&&f.getCueById(b)||(a=new u(e,t,A),a.id=b,a.line=p+1,a.align="left",a.position=10+Math.min(80,Math.floor(l*8/32)*10),r.push(a))}return o&&r.length&&(r.sort((p,A)=>p.line==="auto"||A.line==="auto"?0:p.line>8&&A.line>8?A.line-p.line:p.line-A.line),r.forEach(p=>ns(o,p))),r}},kh={maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:null,errorRetry:null},Lh=Fe(Fe({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,ignoreDevicePixelRatio:!1,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:1/0,maxBufferSize:60*1e3*1e3,maxBufferHole:.1,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,workerPath:null,enableSoftwareAES:!0,startLevel:void 0,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:Ps,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:_u,bufferController:Gu,capLevelController:Jr,errorController:Sc,fpsController:hh,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystems:{},drmSystemOptions:{},requestMediaKeySystemAccessFunc:Ha,testBandwidth:!0,progressive:!1,lowLatencyMode:!0,cmcd:void 0,enableDateRangeMetadataCues:!0,enableEmsgMetadataCues:!0,enableID3MetadataCues:!0,certLoadPolicy:{default:kh},keyLoadPolicy:{default:{maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"},errorRetry:{maxNumRetry:8,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"}}},manifestLoadPolicy:{default:{maxTimeToFirstByteMs:1/0,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},playlistLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:2,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},fragLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:12e4,timeoutRetry:{maxNumRetry:4,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:6,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},steeringManifestLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3},Ih()),{},{subtitleStreamController:Mu,subtitleTrackController:Uu,timelineController:dh,audioStreamController:Pu,audioTrackController:Ou,emeController:Rt,cmcdController:lt,contentSteeringController:yh});function Ih(){return{cueHandler:wh,enableWebVTT:!0,enableIMSC1:!0,enableCEA708Captions:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}}function Rh(o,e){if((e.liveSyncDurationCount||e.liveMaxLatencyDurationCount)&&(e.liveSyncDuration||e.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");if(e.liveMaxLatencyDurationCount!==void 0&&(e.liveSyncDurationCount===void 0||e.liveMaxLatencyDurationCount<=e.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');if(e.liveMaxLatencyDuration!==void 0&&(e.liveSyncDuration===void 0||e.liveMaxLatencyDuration<=e.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');const t=Nr(o),n=["manifest","level","frag"],r=["TimeOut","MaxRetry","RetryDelay","MaxRetryTimeout"];return n.forEach(i=>{const a=`${i==="level"?"playlist":i}LoadPolicy`,s=e[a]===void 0,l=[];r.forEach(d=>{const u=`${i}Loading${d}`,f=e[u];if(f!==void 0&&s){l.push(u);const p=t[a].default;switch(e[a]={default:p},d){case"TimeOut":p.maxLoadTimeMs=f,p.maxTimeToFirstByteMs=f;break;case"MaxRetry":p.errorRetry.maxNumRetry=f,p.timeoutRetry.maxNumRetry=f;break;case"RetryDelay":p.errorRetry.retryDelayMs=f,p.timeoutRetry.retryDelayMs=f;break;case"MaxRetryTimeout":p.errorRetry.maxRetryDelayMs=f,p.timeoutRetry.maxRetryDelayMs=f;break}}}),l.length&&R.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${a}": ${JSON.stringify(e[a])}`)}),Fe(Fe({},t),e)}function Nr(o){return o&&typeof o=="object"?Array.isArray(o)?o.map(Nr):Object.keys(o).reduce((e,t)=>(e[t]=Nr(o[t]),e),{}):o}function Dh(o){const e=o.loader;e!==Ma&&e!==Ps?(R.log("[config]: Custom loader detected, cannot enable progressive streaming"),o.progressive=!1):Ah()&&(o.loader=Ma,o.progressive=!0,o.enableSoftwareAES=!0,R.log("[config]: Progressive streaming enabled, using FetchLoader"))}class mt{static get version(){return"1.4.0"}static isSupported(){return Hc()}static get Events(){return T}static get ErrorTypes(){return te}static get ErrorDetails(){return M}static get DefaultConfig(){return mt.defaultConfig?mt.defaultConfig:Lh}static set DefaultConfig(e){mt.defaultConfig=e}constructor(e={}){this.config=void 0,this.userConfig=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this._emitter=new un,this._autoLevelCapping=void 0,this._maxHdcpLevel=null,this.abrController=void 0,this.bufferController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.emeController=void 0,this.cmcdController=void 0,this._media=null,this.url=null,md(e.debug||!1,"Hls instance");const t=this.config=Rh(mt.DefaultConfig,e);this.userConfig=e,this._autoLevelCapping=-1,t.progressive&&Dh(t);const{abrController:n,bufferController:r,capLevelController:i,errorController:a,fpsController:s}=t,l=new a(this),d=this.abrController=new n(this),u=this.bufferController=new r(this),f=this.capLevelController=new i(this),p=new s(this),A=new ac(this),b=new cc(this),x=t.contentSteeringController,S=x?new x(this):null,k=this.levelController=new wc(this,S),L=new kc(this),I=new Ic(this.config),D=this.streamController=new Ru(this,L,I);f.setStreamController(D),p.setStreamController(D);const _=[A,k,D];S&&_.splice(1,0,S),this.networkControllers=_;const K=[d,u,f,p,b,L];this.audioTrackController=this.createController(t.audioTrackController,_);const U=t.audioStreamController;U&&_.push(new U(this,L,I)),this.subtitleTrackController=this.createController(t.subtitleTrackController,_);const H=t.subtitleStreamController;H&&_.push(new H(this,L,I)),this.createController(t.timelineController,K),I.emeController=this.emeController=this.createController(t.emeController,K),this.cmcdController=this.createController(t.cmcdController,K),this.latencyController=this.createController(uc,K),this.coreComponents=K,_.push(l);const z=l.onErrorOut;typeof z=="function"&&this.on(T.ERROR,z,l)}createController(e,t){if(e){const n=new e(this);return t&&t.push(n),n}return null}on(e,t,n=this){this._emitter.on(e,t,n)}once(e,t,n=this){this._emitter.once(e,t,n)}removeAllListeners(e){this._emitter.removeAllListeners(e)}off(e,t,n=this,r){this._emitter.off(e,t,n,r)}listeners(e){return this._emitter.listeners(e)}emit(e,t,n){return this._emitter.emit(e,t,n)}trigger(e,t){if(this.config.debug)return this.emit(e,e,t);try{return this.emit(e,e,t)}catch(n){R.error("An internal error happened while handling event "+e+'. Error message: "'+n.message+'". Here is a stacktrace:',n),this.trigger(T.ERROR,{type:te.OTHER_ERROR,details:M.INTERNAL_EXCEPTION,fatal:!1,event:e,error:n})}return!1}listenerCount(e){return this._emitter.listenerCount(e)}destroy(){R.log("destroy"),this.trigger(T.DESTROYING,void 0),this.detachMedia(),this.removeAllListeners(),this._autoLevelCapping=-1,this.url=null,this.networkControllers.forEach(t=>t.destroy()),this.networkControllers.length=0,this.coreComponents.forEach(t=>t.destroy()),this.coreComponents.length=0;const e=this.config;e.xhrSetup=e.fetchSetup=void 0,this.userConfig=null}attachMedia(e){R.log("attachMedia"),this._media=e,this.trigger(T.MEDIA_ATTACHING,{media:e})}detachMedia(){R.log("detachMedia"),this.trigger(T.MEDIA_DETACHING,void 0),this._media=null}loadSource(e){this.stopLoad();const t=this.media,n=this.url,r=this.url=on.buildAbsoluteURL(self.location.href,e,{alwaysNormalize:!0});R.log(`loadSource:${r}`),t&&n&&n!==r&&this.bufferController.hasSourceTypes()&&(this.detachMedia(),this.attachMedia(t)),this.trigger(T.MANIFEST_LOADING,{url:e})}startLoad(e=-1){R.log(`startLoad(${e})`),this.networkControllers.forEach(t=>{t.startLoad(e)})}stopLoad(){R.log("stopLoad"),this.networkControllers.forEach(e=>{e.stopLoad()})}swapAudioCodec(){R.log("swapAudioCodec"),this.streamController.swapAudioCodec()}recoverMediaError(){R.log("recoverMediaError");const e=this._media;this.detachMedia(),e&&this.attachMedia(e)}removeLevel(e,t=0){this.levelController.removeLevel(e,t)}get levels(){const e=this.levelController.levels;return e||[]}get currentLevel(){return this.streamController.currentLevel}set currentLevel(e){R.log(`set currentLevel:${e}`),this.loadLevel=e,this.abrController.clearTimer(),this.streamController.immediateLevelSwitch()}get nextLevel(){return this.streamController.nextLevel}set nextLevel(e){R.log(`set nextLevel:${e}`),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}get loadLevel(){return this.levelController.level}set loadLevel(e){R.log(`set loadLevel:${e}`),this.levelController.manualLevel=e}get nextLoadLevel(){return this.levelController.nextLoadLevel}set nextLoadLevel(e){this.levelController.nextLoadLevel=e}get firstLevel(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)}set firstLevel(e){R.log(`set firstLevel:${e}`),this.levelController.firstLevel=e}get startLevel(){return this.levelController.startLevel}set startLevel(e){R.log(`set startLevel:${e}`),e!==-1&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e}get capLevelToPlayerSize(){return this.config.capLevelToPlayerSize}set capLevelToPlayerSize(e){const t=!!e;t!==this.config.capLevelToPlayerSize&&(t?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=t)}get autoLevelCapping(){return this._autoLevelCapping}get bandwidthEstimate(){const{bwEstimator:e}=this.abrController;return e?e.getEstimate():NaN}get ttfbEstimate(){const{bwEstimator:e}=this.abrController;return e?e.getEstimateTTFB():NaN}set autoLevelCapping(e){this._autoLevelCapping!==e&&(R.log(`set autoLevelCapping:${e}`),this._autoLevelCapping=e)}get maxHdcpLevel(){return this._maxHdcpLevel}set maxHdcpLevel(e){Br.indexOf(e)>-1&&(this._maxHdcpLevel=e)}get autoLevelEnabled(){return this.levelController.manualLevel===-1}get manualLevel(){return this.levelController.manualLevel}get minAutoLevel(){const{levels:e,config:{minAutoBitrate:t}}=this;if(!e)return 0;const n=e.length;for(let r=0;r<n;r++)if(e[r].maxBitrate>=t)return r;return 0}get maxAutoLevel(){const{levels:e,autoLevelCapping:t,maxHdcpLevel:n}=this;let r;if(t===-1&&e&&e.length?r=e.length-1:r=t,n)for(let i=r;i--;){const a=e[i].attrs["HDCP-LEVEL"];if(a&&a<=n)return i}return r}get nextAutoLevel(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)}set nextAutoLevel(e){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,e)}get playingDate(){return this.streamController.currentProgramDateTime}get mainForwardBufferInfo(){return this.streamController.getMainFwdBufferInfo()}get audioTracks(){const e=this.audioTrackController;return e?e.audioTracks:[]}get audioTrack(){const e=this.audioTrackController;return e?e.audioTrack:-1}set audioTrack(e){const t=this.audioTrackController;t&&(t.audioTrack=e)}get subtitleTracks(){const e=this.subtitleTrackController;return e?e.subtitleTracks:[]}get subtitleTrack(){const e=this.subtitleTrackController;return e?e.subtitleTrack:-1}get media(){return this._media}set subtitleTrack(e){const t=this.subtitleTrackController;t&&(t.subtitleTrack=e)}get subtitleDisplay(){const e=this.subtitleTrackController;return e?e.subtitleDisplay:!1}set subtitleDisplay(e){const t=this.subtitleTrackController;t&&(t.subtitleDisplay=e)}get lowLatencyMode(){return this.config.lowLatencyMode}set lowLatencyMode(e){this.config.lowLatencyMode=e}get liveSyncPosition(){return this.latencyController.liveSyncPosition}get latency(){return this.latencyController.latency}get maxLatency(){return this.latencyController.maxLatency}get targetLatency(){return this.latencyController.targetLatency}get drift(){return this.latencyController.drift}get forceStartLoad(){return this.streamController.forceStartLoad}}mt.defaultConfig=void 0;function _h(o){const e=[],t=o.split("#");for(let n=0;n<t.length;n++){const i=t[n].split("$");e.push({id:n+1,name:i[0],url:i[1]})}return e}const Bh=["show"],Ph=["show"],Oh={key:0,class:"director"},Fh={key:1,class:"actor"},Mh={class:"play_source_tab"},Nh=["onClick"],Uh={class:"episode"},$h={class:"player_list"},Gh=["onClick"],Kh=jl({__name:"video",setup(o){const e=Jl(),t=td(),n=St(!1),r=St(null),i=St();let a,s;const l=St([]),d=St([]),u=St(e.params.id),f=Ql(()=>isNaN(Number(e.params.num))?0:Number(e.params.num)-1);function p(b){a=b,console.log(a),t.push({name:"video-num",params:{id:u.value,num:b}})}function A(b){s=b.name,l.value=_h(b.urls)}return tr(()=>{nd(rd+"/"+u.value,{},b=>{i.value=b;const S=b.url.split(";"),k=[];for(let L=0;L<S.length;L++){const I=/\((.*?)\)/,D=S[L].match(I),_=S[L].replace(I,"");console.log(D),k.push({name:D==null?void 0:D[1],urls:_})}d.value=k,A(d.value[0]),n.value=!0})}),tr(()=>{p(f.value+1)}),Xl(()=>{tr(()=>{if(l.value.length!=0){if(l.value.length<=f.value){p(1);return}new ld({container:r.value,video:{url:l.value[f.value].url,type:"customHls",customType:{customHls:function(b,x){const S=new mt;S.loadSource(b.src),S.attachMedia(b)}}}})}})}),(b,x)=>{const S=id,k=sd,L=od,I=ed;return Xe(),Zl(I,{cols:"10","item-responsive":"",responsive:"screen"},{default:ut(()=>[nn(S,{span:"0 m:2 l:2"}),nn(S,{span:"10 m:6 l:6"},{default:ut(()=>[nn(L,{show:!n.value},{default:ut(()=>[ht("div",{class:nr(["player-box",n.value?"":"player-box-not-ready"])},[ht("div",{class:"play",ref_key:"player",ref:r,show:!n.value},null,8,Bh),ht("div",{class:"play-info",show:!n.value},null,8,Ph)],2),ht("div",null,[nn(k,null,{header:ut(()=>{var D;return[Ki(Ct((D=i.value)==null?void 0:D.name),1)]}),footer:ut(()=>[ht("div",Mh,[(Xe(!0),it(rr,null,Hi(d.value,D=>(Xe(),it("a",{class:nr({play_group_active:qi(s)==D.name}),onClick:_=>A(D)},"\u7EBF\u8DEF\uFF1A"+Ct(D.name),11,Nh))),256))])]),action:ut(()=>[ht("div",Uh,[ht("ul",$h,[(Xe(!0),it(rr,null,Hi(l.value,D=>(Xe(),it("li",{onClick:_=>p(D.id)},[D.url!=""?(Xe(),it("div",{key:0,class:nr({visited:qi(f)+1==D.id})},Ct(D.name),3)):xn("",!0)],8,Gh))),256))])])]),default:ut(()=>{var D,_,K,U,H,z;return[((D=i.value)==null?void 0:D.director)!=""?(Xe(),it("div",Oh," \u5BFC\u6F14\uFF1A"+Ct((_=i.value)==null?void 0:_.director),1)):xn("",!0),((K=i.value)==null?void 0:K.actor)!=""?(Xe(),it("div",Fh," \u4E3B\u6F14\uFF1A"+Ct((U=i.value)==null?void 0:U.actor),1)):xn("",!0),((H=i.value)==null?void 0:H.description)!=""?(Xe(),it(rr,{key:2},[Ki(" \u7B80\u4ECB\uFF1A"+Ct((z=i.value)==null?void 0:z.description),1)],64)):xn("",!0)]}),_:1})])]),_:1},8,["show"])]),_:1}),nn(S,{span:"0 m:2 l:2"})]),_:1})}}});const Qh=ad(Kh,[["__scopeId","data-v-3672396d"]]);export{Qh as default};
