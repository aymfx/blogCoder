import{_ as s,c as a,o as n,b as p}from"./app.f64fe08f.js";const B=JSON.parse('{"title":"IF","description":"","frontmatter":{"title":"IF","date":"2020-10-12T00:00:00.000Z","group":"type-challenges"},"headers":[],"relativePath":"typescript/type-challenges/If.md"}'),l={name:"typescript/type-challenges/If.md"},o=p(`<h1 id="\u5B9E\u73B0\u4E00\u4E2A-if-\u7C7B\u578B-\u5B83\u63A5\u6536\u4E00\u4E2A\u6761\u4EF6\u7C7B\u578B-c-\u4E00\u4E2A\u5224\u65AD\u4E3A\u771F\u65F6\u7684\u8FD4\u56DE\u7C7B\u578B-t-\u4EE5\u53CA\u4E00\u4E2A\u5224\u65AD\u4E3A\u5047\u65F6\u7684\u8FD4\u56DE\u7C7B\u578B-f\u3002-c-\u53EA\u80FD\u662F-true-\u6216\u8005-false-t-\u548C-f-\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B" tabindex="-1">\u5B9E\u73B0\u4E00\u4E2A IF \u7C7B\u578B\uFF0C\u5B83\u63A5\u6536\u4E00\u4E2A\u6761\u4EF6\u7C7B\u578B C \uFF0C\u4E00\u4E2A\u5224\u65AD\u4E3A\u771F\u65F6\u7684\u8FD4\u56DE\u7C7B\u578B T \uFF0C\u4EE5\u53CA\u4E00\u4E2A\u5224\u65AD\u4E3A\u5047\u65F6\u7684\u8FD4\u56DE\u7C7B\u578B F\u3002 C \u53EA\u80FD\u662F true \u6216\u8005 false\uFF0C T \u548C F \u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B <a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A-if-\u7C7B\u578B-\u5B83\u63A5\u6536\u4E00\u4E2A\u6761\u4EF6\u7C7B\u578B-c-\u4E00\u4E2A\u5224\u65AD\u4E3A\u771F\u65F6\u7684\u8FD4\u56DE\u7C7B\u578B-t-\u4EE5\u53CA\u4E00\u4E2A\u5224\u65AD\u4E3A\u5047\u65F6\u7684\u8FD4\u56DE\u7C7B\u578B-f\u3002-c-\u53EA\u80FD\u662F-true-\u6216\u8005-false-t-\u548C-f-\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B" aria-hidden="true">#</a></h1><p>\u4F8B\u5982\uFF1A</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">If</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">C</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">F</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">F</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">A</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">If</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// expected to be &#39;a&#39;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">B</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">If</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// expected to be &#39;b&#39;</span></span>
<span class="line"></span></code></pre></div>`,3),e=[o];function t(c,r,y,F,D,C){return n(),a("div",null,e)}const i=s(l,[["render",t]]);export{B as __pageData,i as default};
