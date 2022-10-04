import{_ as s,c as a,o as n,b as p}from"./app.d3722236.js";const i=JSON.parse('{"title":"\u5728\u7C7B\u578B\u7CFB\u7EDF\u91CC\u5B9E\u73B0 JavaScript \u5185\u7F6E\u7684 Array.concat \u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u7C7B\u578B\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u8FD4\u56DE\u7684\u65B0\u6570\u7EC4\u7C7B\u578B\u5E94\u8BE5\u6309\u7167\u8F93\u5165\u53C2\u6570\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u5408\u5E76\u4E3A\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u3002","description":"","frontmatter":{},"headers":[],"relativePath":"typescript/type-challenges/Concat.md"}'),o={name:"typescript/type-challenges/Concat.md"},l=p(`<h1 id="\u5728\u7C7B\u578B\u7CFB\u7EDF\u91CC\u5B9E\u73B0-javascript-\u5185\u7F6E\u7684-array-concat-\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u7C7B\u578B\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u8FD4\u56DE\u7684\u65B0\u6570\u7EC4\u7C7B\u578B\u5E94\u8BE5\u6309\u7167\u8F93\u5165\u53C2\u6570\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u5408\u5E76\u4E3A\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u3002" tabindex="-1">\u5728\u7C7B\u578B\u7CFB\u7EDF\u91CC\u5B9E\u73B0 JavaScript \u5185\u7F6E\u7684 Array.concat \u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u7C7B\u578B\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u8FD4\u56DE\u7684\u65B0\u6570\u7EC4\u7C7B\u578B\u5E94\u8BE5\u6309\u7167\u8F93\u5165\u53C2\u6570\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u5408\u5E76\u4E3A\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u3002 <a class="header-anchor" href="#\u5728\u7C7B\u578B\u7CFB\u7EDF\u91CC\u5B9E\u73B0-javascript-\u5185\u7F6E\u7684-array-concat-\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u7C7B\u578B\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u8FD4\u56DE\u7684\u65B0\u6570\u7EC4\u7C7B\u578B\u5E94\u8BE5\u6309\u7167\u8F93\u5165\u53C2\u6570\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u5408\u5E76\u4E3A\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u3002" aria-hidden="true">#</a></h1><p>\u4F8B\u5982\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Concat</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#FFCB6B;">U</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Result</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Concat</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">&gt;;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// expected to be [1, 2]</span></span>
<span class="line"></span></code></pre></div>`,3),t=[l];function e(c,r,C,y,A,D){return n(),a("div",null,t)}var _=s(o,[["render",e]]);export{i as __pageData,_ as default};
