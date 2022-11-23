import{_ as s,c as l,o as n,b as e}from"./app.856a2391.js";const y=JSON.parse('{"title":"\u51C6\u5907\u9636\u6BB5","description":"","frontmatter":{"title":"\u51C6\u5907\u9636\u6BB5"},"headers":[{"level":2,"title":"\u76EE\u5F55","slug":"\u76EE\u5F55","link":"#\u76EE\u5F55","children":[]},{"level":2,"title":"\u51C6\u5907","slug":"\u51C6\u5907","link":"#\u51C6\u5907","children":[]},{"level":2,"title":"\u901A\u8FC7 rollup \u6784\u5EFA\u7248\u672C","slug":"\u901A\u8FC7-rollup-\u6784\u5EFA\u7248\u672C","link":"#\u901A\u8FC7-rollup-\u6784\u5EFA\u7248\u672C","children":[]}],"relativePath":"vue2/index.md"}'),a={name:"vue2/index.md"},o=e(`<h2 id="\u76EE\u5F55" tabindex="-1">\u76EE\u5F55 <a class="header-anchor" href="#\u76EE\u5F55" aria-hidden="true">#</a></h2><p><strong>\u5165\u53E3\u6587\u4EF6\u521D\u59CB\u5316</strong></p><ul><li><a href="/vue2/\u6784\u9020\u51FD\u6570.html">Vue \u6784\u9020\u51FD\u6570</a></li><li><a href="/vue2/initMixin.html">initMixin \u51FD\u6570</a></li><li><a href="/vue2/stateMixin.html">stateMixin \u51FD\u6570</a></li><li><a href="/vue2/eventsMixin.html">eventsMixin \u51FD\u6570</a></li><li><a href="/vue2/lifecycleMixin.html">lifecycleMixin \u51FD\u6570</a></li><li><a href="/vue2/renderMixin.html">renderMixin \u51FD\u6570</a></li><li><a href="/vue2/initGlobalAPI.html">initGlobalAPI \u51FD\u6570</a></li></ul><p><strong>\u54CD\u5E94\u5F0F\u539F\u7406</strong></p><ul><li><a href="/vue2/\u4ECB\u7ECD.html">\u6838\u5FC3\u601D\u60F3</a></li><li><a href="/vue2/props\u5904\u7406.html">props \u5904\u7406</a></li></ul><h2 id="\u51C6\u5907" tabindex="-1">\u51C6\u5907 <a class="header-anchor" href="#\u51C6\u5907" aria-hidden="true">#</a></h2><ul><li><p>Vue \u6E90\u7801\u7248\u672C 2.7.8</p></li><li><p>\u589E\u52A0 map \u6587\u4EF6\u65B9\u4FBF\u65AD\u70B9 \u5728 package.json --scripts --- dev \u914D\u7F6E\u6539\u6210\u5982\u4E0B\u53EF\u4EE5\u81EA\u52A8\u751F\u6210.map \u6587\u4EF6</p><ul><li>&quot;dev&quot;: &quot;rollup -w -c scripts/config.js --sourcemap --environment TARGET:full-dev&quot;, \u589E\u52A0--sourcemap</li></ul></li><li><p>2.7.8 \u5DF2\u7528\u4E86 ts \u8FDB\u884C\u7C7B\u578B\u5224\u65AD\uFF0Cflow \u5DF2\u7ECF\u4E0D\u5728 vue2.0 \u4F7F\u7528\u4E86</p></li><li><p>\u4E3B\u8981\u5206\u6790\u76EE\u5F55</p></li></ul><p><img src="https://raw.githubusercontent.com/aymfx/pic/mian/img/image-20220827102128861.png" alt="image-20220827102128861"></p><h2 id="\u901A\u8FC7-rollup-\u6784\u5EFA\u7248\u672C" tabindex="-1">\u901A\u8FC7 rollup \u6784\u5EFA\u7248\u672C <a class="header-anchor" href="#\u901A\u8FC7-rollup-\u6784\u5EFA\u7248\u672C" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rollup -w -c scripts/config.js --sourcemap --environment TARGET:full-dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dev:cjs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rollup -w -c scripts/config.js --environment TARGET:runtime-cjs-dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dev:esm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rollup -w -c scripts/config.js --environment TARGET:runtime-esm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dev:ssr</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rollup -w -c scripts/config.js --environment TARGET:server-renderer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dev:compiler</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rollup -w -c scripts/config.js --environment TARGET:compiler </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,10),p=[o];function t(r,i,c,u,D,d){return n(),l("div",null,p)}const m=s(a,[["render",t]]);export{y as __pageData,m as default};
