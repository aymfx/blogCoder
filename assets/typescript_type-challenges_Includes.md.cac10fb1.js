import{_ as s,c as a,o as n,b as l}from"./app.f64fe08f.js";const i=JSON.parse('{"title":"Includes","description":"","frontmatter":{"title":"Includes","date":"2020-10-13T00:00:00.000Z","group":"type-challenges"},"headers":[],"relativePath":"typescript/type-challenges/Includes.md"}'),p={name:"typescript/type-challenges/Includes.md"},o=l(`<h1 id="\u5728\u7C7B\u578B\u7CFB\u7EDF\u91CC\u5B9E\u73B0-javascript-\u7684-array-includes-\u65B9\u6CD5-\u8FD9\u4E2A\u7C7B\u578B\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570-\u8FD4\u56DE\u7684\u7C7B\u578B\u8981\u4E48\u662F-true-\u8981\u4E48\u662F-false\u3002" tabindex="-1">\u5728\u7C7B\u578B\u7CFB\u7EDF\u91CC\u5B9E\u73B0 JavaScript \u7684 Array.includes \u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u7C7B\u578B\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u8FD4\u56DE\u7684\u7C7B\u578B\u8981\u4E48\u662F true \u8981\u4E48\u662F false\u3002 <a class="header-anchor" href="#\u5728\u7C7B\u578B\u7CFB\u7EDF\u91CC\u5B9E\u73B0-javascript-\u7684-array-includes-\u65B9\u6CD5-\u8FD9\u4E2A\u7C7B\u578B\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570-\u8FD4\u56DE\u7684\u7C7B\u578B\u8981\u4E48\u662F-true-\u8981\u4E48\u662F-false\u3002" aria-hidden="true">#</a></h1><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Includes</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">isPillarMen</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Includes</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Kars</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Esidisi</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Wamuu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Santana</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Dio</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// expected to be \`false\`</span></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function t(c,r,y,D,C,F){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
