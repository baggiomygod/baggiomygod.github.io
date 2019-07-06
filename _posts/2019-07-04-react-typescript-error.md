---
layout:     post
title:      react bug
subtitle:   
date:       2019-7-04
author:     wengfan
header-img: img/post-bg-re-vs-ng2.jpg
catalog: true
tags:
    - react
    - 笔记
---
升级了react react-dom到16.8.0后
yarn add @types/react @types/react-dom

yarn dev 报一下错误：

解决： 因为@types/react-dom/node_modules/@types/react和node_modules/@types/react的版本不一致。
yarn  add @types/react@16.8.23 下载@types/react-dom依赖的@types/react版本即可
```
    ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2935,13):
TS2717: Subsequent property declarations must have the same type.  Property 'th' must be of type 'DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>', but here has type 'DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2936,13):
TS2717: Subsequent property declarations must have the same type.  Property 'thead' must be of type 'DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>', but here has type 'DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2937,13):
TS2717: Subsequent property declarations must have the same type.  Property 'time' must be of type 'DetailedHTMLProps<TimeHTMLAttributes<HTMLElement>, HTMLElement>', but here has type 'DetailedHTMLProps<TimeHTMLAttributes<HTMLElement>, HTMLElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2938,13):
TS2717: Subsequent property declarations must have the same type.  Property 'title' must be of type 'DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>', but here has type 'DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2939,13):
TS2717: Subsequent property declarations must have the same type.  Property 'tr' must be of type 'DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>', but here has type 'DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2940,13):
TS2717: Subsequent property declarations must have the same type.  Property 'track' must be of type 'DetailedHTMLProps<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>', but here has type 'DetailedHTMLProps<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2941,13):
TS2717: Subsequent property declarations must have the same type.  Property 'u' must be of type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>', but here has type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2942,13):
TS2717: Subsequent property declarations must have the same type.  Property 'ul' must be of type 'DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>', but here has type 'DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2943,13):
TS2717: Subsequent property declarations must have the same type.  Property '"var"' must be of type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>', but here has type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2944,13):
TS2717: Subsequent property declarations must have the same type.  Property 'video' must be of type 'DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>', but here has type 'DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2945,13):
TS2717: Subsequent property declarations must have the same type.  Property 'wbr' must be of type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>', but here has type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2946,13):
TS2717: Subsequent property declarations must have the same type.  Property 'webview' must be of type 'DetailedHTMLProps<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>', but here has type 'DetailedHTMLProps<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2949,13):
TS2717: Subsequent property declarations must have the same type.  Property 'svg' must be of type 'SVGProps<SVGSVGElement>', but here has type 'SVGProps<SVGSVGElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2951,13):
TS2717: Subsequent property declarations must have the same type.  Property 'animate' must be of type 'SVGProps<SVGElement>', but here has type 'SVGProps<SVGElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2952,13):
TS2717: Subsequent property declarations must have the same type.  Property 'animateMotion' must be of type 'SVGProps<SVGElement>', but here has type 'SVGProps<SVGElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2953,13):
TS2717: Subsequent property declarations must have the same type.  Property 'animateTransform' must be of type 'SVGProps<SVGElement>', but here has type 'SVGProps<SVGElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2954,13):
TS2717: Subsequent property declarations must have the same type.  Property 'circle' must be of type 'SVGProps<SVGCircleElement>', but here has type 'SVGProps<SVGCircleElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2955,13):
TS2717: Subsequent property declarations must have the same type.  Property 'clipPath' must be of type 'SVGProps<SVGClipPathElement>', but here has type 'SVGProps<SVGClipPathElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2956,13):
TS2717: Subsequent property declarations must have the same type.  Property 'defs' must be of type 'SVGProps<SVGDefsElement>', but here has type 'SVGProps<SVGDefsElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2957,13):
TS2717: Subsequent property declarations must have the same type.  Property 'desc' must be of type 'SVGProps<SVGDescElement>', but here has type 'SVGProps<SVGDescElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2958,13):
TS2717: Subsequent property declarations must have the same type.  Property 'ellipse' must be of type 'SVGProps<SVGEllipseElement>', but here has type 'SVGProps<SVGEllipseElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2959,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feBlend' must be of type 'SVGProps<SVGFEBlendElement>', but here has type 'SVGProps<SVGFEBlendElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2960,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feColorMatrix' must be of type 'SVGProps<SVGFEColorMatrixElement>', but here has type 'SVGProps<SVGFEColorMatrixElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2961,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feComponentTransfer' must be of type 'SVGProps<SVGFEComponentTransferElement>', but here has type 'SVGProps<SVGFEComponentTransferElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2962,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feComposite' must be of type 'SVGProps<SVGFECompositeElement>', but here has type 'SVGProps<SVGFECompositeElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2963,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feConvolveMatrix' must be of type 'SVGProps<SVGFEConvolveMatrixElement>', but here has type 'SVGProps<SVGFEConvolveMatrixElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2964,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feDiffuseLighting' must be of type 'SVGProps<SVGFEDiffuseLightingElement>', but here has type 'SVGProps<SVGFEDiffuseLightingElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2965,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feDisplacementMap' must be of type 'SVGProps<SVGFEDisplacementMapElement>', but here has type 'SVGProps<SVGFEDisplacementMapElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2966,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feDistantLight' must be of type 'SVGProps<SVGFEDistantLightElement>', but here has type 'SVGProps<SVGFEDistantLightElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2968,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feFlood' must be of type 'SVGProps<SVGFEFloodElement>', but here has type 'SVGProps<SVGFEFloodElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2969,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feFuncA' must be of type 'SVGProps<SVGFEFuncAElement>', but here has type 'SVGProps<SVGFEFuncAElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2970,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feFuncB' must be of type 'SVGProps<SVGFEFuncBElement>', but here has type 'SVGProps<SVGFEFuncBElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2971,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feFuncG' must be of type 'SVGProps<SVGFEFuncGElement>', but here has type 'SVGProps<SVGFEFuncGElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2972,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feFuncR' must be of type 'SVGProps<SVGFEFuncRElement>', but here has type 'SVGProps<SVGFEFuncRElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2973,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feGaussianBlur' must be of type 'SVGProps<SVGFEGaussianBlurElement>', but here has type 'SVGProps<SVGFEGaussianBlurElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2974,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feImage' must be of type 'SVGProps<SVGFEImageElement>', but here has type 'SVGProps<SVGFEImageElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2975,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feMerge' must be of type 'SVGProps<SVGFEMergeElement>', but here has type 'SVGProps<SVGFEMergeElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2976,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feMergeNode' must be of type 'SVGProps<SVGFEMergeNodeElement>', but here has type 'SVGProps<SVGFEMergeNodeElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2977,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feMorphology' must be of type 'SVGProps<SVGFEMorphologyElement>', but here has type 'SVGProps<SVGFEMorphologyElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2978,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feOffset' must be of type 'SVGProps<SVGFEOffsetElement>', but here has type 'SVGProps<SVGFEOffsetElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2979,13):
TS2717: Subsequent property declarations must have the same type.  Property 'fePointLight' must be of type 'SVGProps<SVGFEPointLightElement>', but here has type 'SVGProps<SVGFEPointLightElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2980,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feSpecularLighting' must be of type 'SVGProps<SVGFESpecularLightingElement>', but here has type 'SVGProps<SVGFESpecularLightingElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2981,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feSpotLight' must be of type 'SVGProps<SVGFESpotLightElement>', but here has type 'SVGProps<SVGFESpotLightElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2982,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feTile' must be of type 'SVGProps<SVGFETileElement>', but here has type 'SVGProps<SVGFETileElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2983,13):
TS2717: Subsequent property declarations must have the same type.  Property 'feTurbulence' must be of type 'SVGProps<SVGFETurbulenceElement>', but here has type 'SVGProps<SVGFETurbulenceElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2984,13):
TS2717: Subsequent property declarations must have the same type.  Property 'filter' must be of type 'SVGProps<SVGFilterElement>', but here has type 'SVGProps<SVGFilterElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2985,13):
TS2717: Subsequent property declarations must have the same type.  Property 'foreignObject' must be of type 'SVGProps<SVGForeignObjectElement>', but here has type 'SVGProps<SVGForeignObjectElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2986,13):
TS2717: Subsequent property declarations must have the same type.  Property 'g' must be of type 'SVGProps<SVGGElement>', but here has type 'SVGProps<SVGGElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2987,13):
TS2717: Subsequent property declarations must have the same type.  Property 'image' must be of type 'SVGProps<SVGImageElement>', but here has type 'SVGProps<SVGImageElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2988,13):
TS2717: Subsequent property declarations must have the same type.  Property 'line' must be of type 'SVGProps<SVGLineElement>', but here has type 'SVGProps<SVGLineElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2989,13):
TS2717: Subsequent property declarations must have the same type.  Property 'linearGradient' must be of type 'SVGProps<SVGLinearGradientElement>', but here has type 'SVGProps<SVGLinearGradientElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2990,13):
TS2717: Subsequent property declarations must have the same type.  Property 'marker' must be of type 'SVGProps<SVGMarkerElement>', but here has type 'SVGProps<SVGMarkerElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2991,13):
TS2717: Subsequent property declarations must have the same type.  Property 'mask' must be of type 'SVGProps<SVGMaskElement>', but here has type 'SVGProps<SVGMaskElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2992,13):
TS2717: Subsequent property declarations must have the same type.  Property 'metadata' must be of type 'SVGProps<SVGMetadataElement>', but here has type 'SVGProps<SVGMetadataElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2993,13):
TS2717: Subsequent property declarations must have the same type.  Property 'mpath' must be of type 'SVGProps<SVGElement>', but here has type 'SVGProps<SVGElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2994,13):
TS2717: Subsequent property declarations must have the same type.  Property 'path' must be of type 'SVGProps<SVGPathElement>', but here has type 'SVGProps<SVGPathElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2995,13):
TS2717: Subsequent property declarations must have the same type.  Property 'pattern' must be of type 'SVGProps<SVGPatternElement>', but here has type 'SVGProps<SVGPatternElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2996,13):
TS2717: Subsequent property declarations must have the same type.  Property 'polygon' must be of type 'SVGProps<SVGPolygonElement>', but here has type 'SVGProps<SVGPolygonElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2997,13):
TS2717: Subsequent property declarations must have the same type.  Property 'polyline' must be of type 'SVGProps<SVGPolylineElement>', but here has type 'SVGProps<SVGPolylineElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2998,13):
TS2717: Subsequent property declarations must have the same type.  Property 'radialGradient' must be of type 'SVGProps<SVGRadialGradientElement>', but here has type 'SVGProps<SVGRadialGradientElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(2999,13):
TS2717: Subsequent property declarations must have the same type.  Property 'rect' must be of type 'SVGProps<SVGRectElement>', but here has type 'SVGProps<SVGRectElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(3000,13):
TS2717: Subsequent property declarations must have the same type.  Property 'stop' must be of type 'SVGProps<SVGStopElement>', but here has type 'SVGProps<SVGStopElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(3001,13):
TS2717: Subsequent property declarations must have the same type.  Property 'switch' must be of type 'SVGProps<SVGSwitchElement>', but here has type 'SVGProps<SVGSwitchElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(3002,13):
TS2717: Subsequent property declarations must have the same type.  Property 'symbol' must be of type 'SVGProps<SVGSymbolElement>', but here has type 'SVGProps<SVGSymbolElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(3003,13):
TS2717: Subsequent property declarations must have the same type.  Property 'text' must be of type 'SVGProps<SVGTextElement>', but here has type 'SVGProps<SVGTextElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(3004,13):
TS2717: Subsequent property declarations must have the same type.  Property 'textPath' must be of type 'SVGProps<SVGTextPathElement>', but here has type 'SVGProps<SVGTextPathElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(3005,13):
TS2717: Subsequent property declarations must have the same type.  Property 'tspan' must be of type 'SVGProps<SVGTSpanElement>', but here has type 'SVGProps<SVGTSpanElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(3006,13):
TS2717: Subsequent property declarations must have the same type.  Property 'use' must be of type 'SVGProps<SVGUseElement>', but here has type 'SVGProps<SVGUseElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts(3007,13):
TS2717: Subsequent property declarations must have the same type.  Property 'view' must be of type 'SVGProps<SVGViewElement>', but here has type 'SVGProps<SVGViewElement>'.

ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react/index.d.ts
ERROR in /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/fui-apps/webapp-react/node_modules/@types/react/index.d.ts(2684,14):
TS2300: Duplicate identifier 'LibraryManagedAttributes'.
```