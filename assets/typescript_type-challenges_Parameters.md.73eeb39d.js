import{_ as s,c as a,o as n,b as p}from"./app.d3722236.js";const i=JSON.parse('{"title":"\u5B9E\u73B0\u5185\u7F6E\u7684 Parameters \u7C7B\u578B\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u4F7F\u7528\u5B83","description":"","frontmatter":{},"headers":[],"relativePath":"typescript/type-challenges/Parameters.md"}'),l={name:"typescript/type-challenges/Parameters.md"},o=p(`<h1 id="\u5B9E\u73B0\u5185\u7F6E\u7684-parameters-\u7C7B\u578B\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u4F7F\u7528\u5B83" tabindex="-1">\u5B9E\u73B0\u5185\u7F6E\u7684 Parameters \u7C7B\u578B\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u4F7F\u7528\u5B83 <a class="header-anchor" href="#\u5B9E\u73B0\u5185\u7F6E\u7684-parameters-\u7C7B\u578B\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u4F7F\u7528\u5B83" aria-hidden="true">#</a></h1><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyParameters</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">infer</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">P</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">P</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">never</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arg1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arg2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FunctionParamsType</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyParameters</span><span style="color:#89DDFF;">&lt;typeof</span><span style="color:#A6ACCD;"> foo</span><span style="color:#89DDFF;">&gt;;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [arg1: string, arg2: number]</span></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function t(r,c,y,C,A,D){return n(),a("div",null,e)}var B=s(l,[["render",t]]);export{i as __pageData,B as default};
