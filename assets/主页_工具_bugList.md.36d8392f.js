import{_ as e,c as a,o,b as t}from"./app.f64fe08f.js";const m=JSON.parse('{"title":"bug \u6E05\u5355","description":"","frontmatter":{"title":"bug \u6E05\u5355","date":"2020-10-21T00:00:00.000Z","group":"\u5DE5\u5177"},"headers":[{"level":2,"title":"91 \u7248\u672C \u4E4B\u540E\u7684\u8C37\u6B4C\u6D4F\u89C8\u5668\u4E0D\u80FD\u5E26 cookie \u4E86","slug":"_91-\u7248\u672C-\u4E4B\u540E\u7684\u8C37\u6B4C\u6D4F\u89C8\u5668\u4E0D\u80FD\u5E26-cookie-\u4E86","link":"#_91-\u7248\u672C-\u4E4B\u540E\u7684\u8C37\u6B4C\u6D4F\u89C8\u5668\u4E0D\u80FD\u5E26-cookie-\u4E86","children":[]},{"level":2,"title":"electron\u80FD\u591F\u542F\u52A8\u7F51\u9875\u4F46\u662F\u4E0D\u80FD\u542F\u52A8\u684C\u9762\u7AEF\u7684\u539F\u56E0","slug":"electron\u80FD\u591F\u542F\u52A8\u7F51\u9875\u4F46\u662F\u4E0D\u80FD\u542F\u52A8\u684C\u9762\u7AEF\u7684\u539F\u56E0","link":"#electron\u80FD\u591F\u542F\u52A8\u7F51\u9875\u4F46\u662F\u4E0D\u80FD\u542F\u52A8\u684C\u9762\u7AEF\u7684\u539F\u56E0","children":[]},{"level":2,"title":"\u51FA\u73B0\u4E0D\u80FD\u521B\u5EFA\u76EE\u5F55\u7684\u95EE\u9898","slug":"\u51FA\u73B0\u4E0D\u80FD\u521B\u5EFA\u76EE\u5F55\u7684\u95EE\u9898","link":"#\u51FA\u73B0\u4E0D\u80FD\u521B\u5EFA\u76EE\u5F55\u7684\u95EE\u9898","children":[]}],"relativePath":"\u4E3B\u9875/\u5DE5\u5177/bugList.md"}'),i={name:"\u4E3B\u9875/\u5DE5\u5177/bugList.md"},s=t(`<h2 id="_91-\u7248\u672C-\u4E4B\u540E\u7684\u8C37\u6B4C\u6D4F\u89C8\u5668\u4E0D\u80FD\u5E26-cookie-\u4E86" tabindex="-1">91 \u7248\u672C \u4E4B\u540E\u7684\u8C37\u6B4C\u6D4F\u89C8\u5668\u4E0D\u80FD\u5E26 cookie \u4E86 <a class="header-anchor" href="#_91-\u7248\u672C-\u4E4B\u540E\u7684\u8C37\u6B4C\u6D4F\u89C8\u5668\u4E0D\u80FD\u5E26-cookie-\u4E86" aria-hidden="true">#</a></h2><p>#! &gt; \u539F\u56E0\u662F Chrome 80 \u7248\u672C\u540E\u5F53\u670D\u52A1\u7AEF\u672A\u6307\u5B9A HTTP \u54CD\u5E94\u5934\u7684 SameSite \u5C5E\u6027\u65F6\uFF0CChrome \u9ED8\u8BA4\u7684 SameSite \u7B56\u7565\u4E3A Lax\uFF0C\u8BE5\u7B56\u7565\u4E2D\u5F53\u5411\u8DE8\u57DF\u57DF\u540D\u53D1\u9001 POST \u8BF7\u6C42\u65F6\u65E0\u6CD5\u643A\u5E26 Cookie\u3002</p><p><code>\u7B2C\u4E00\u79CD91\u4E4B\u524D\u7684\u65B9\u5F0F</code> Chrome \u4E2D\u8BBF\u95EE\u5730\u5740 chrome://flags/#same-site-by-default-cookies\uFF0C\u5C06 SameSite by default cookies \u8BBE\u7F6E\u4E3A Disabled \u540E\u91CD\u542F\u6D4F\u89C8\u5668\u518D\u8FD0\u884C\u9879\u76EE\u5373\u53EF\u89E3\u51B3\u3002\u8BE5\u8BBE\u7F6E\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u5C06\u672A\u6307\u5B9A SameSite \u5C5E\u6027\u7684\u8BF7\u6C42\u770B\u505A SameSite=Lax \u6765\u5904\u7406\u3002</p><p><code>91\u5305\u62EC91\u4E4B\u540E\uFF0C\u53EF\u80FD\u6CA1\u4E86SameSite by default cookies\uFF0C\u6211\u4EEC\u641C\u7D22\u8FD9\u4E2ASameSite</code> \u6211\u4EEC\u53EF\u4EE5\u5C06\u641C\u5230\u7684\u4E24\u4E2A\u7F6E\u4E3A disabled \u4EB2\u6D4B\u53EF\u884C</p><h2 id="electron\u80FD\u591F\u542F\u52A8\u7F51\u9875\u4F46\u662F\u4E0D\u80FD\u542F\u52A8\u684C\u9762\u7AEF\u7684\u539F\u56E0" tabindex="-1">electron\u80FD\u591F\u542F\u52A8\u7F51\u9875\u4F46\u662F\u4E0D\u80FD\u542F\u52A8\u684C\u9762\u7AEF\u7684\u539F\u56E0 <a class="header-anchor" href="#electron\u80FD\u591F\u542F\u52A8\u7F51\u9875\u4F46\u662F\u4E0D\u80FD\u542F\u52A8\u684C\u9762\u7AEF\u7684\u539F\u56E0" aria-hidden="true">#</a></h2><ul><li>vue-cli \u4F1A\u68C0\u6D4B yarn.lock \u5F53yarn\u6CA1\u6709\u88AB\u5B89\u88C5\u7684\u8BDD \u5219\u4E0D\u4F1A\u7EE7\u7EED\u5F80\u4E0B\u8D70</li><li>npm i -g yarn \u5B89\u88C5yarn\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898</li></ul><h2 id="\u51FA\u73B0\u4E0D\u80FD\u521B\u5EFA\u76EE\u5F55\u7684\u95EE\u9898" tabindex="-1">\u51FA\u73B0\u4E0D\u80FD\u521B\u5EFA\u76EE\u5F55\u7684\u95EE\u9898 <a class="header-anchor" href="#\u51FA\u73B0\u4E0D\u80FD\u521B\u5EFA\u76EE\u5F55\u7684\u95EE\u9898" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo chown -R $USER /Library/Caches/Homebrew/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),l=[s];function c(n,r,d,h,p,_){return o(),a("div",null,l)}const S=e(i,[["render",c]]);export{m as __pageData,S as default};
