import{_ as s,c as n,o as a,d as o}from"./app.7bbfc18a.js";const i=JSON.parse('{"title":"434. 字符串中的单词数","description":"","frontmatter":{},"headers":[],"relativePath":"problems/434.字符串中的单词数.md"}'),l={name:"problems/434.字符串中的单词数.md"},p=o(`<h1 id="_434-字符串中的单词数" tabindex="-1">434. 字符串中的单词数 <a class="header-anchor" href="#_434-字符串中的单词数" aria-hidden="true">#</a></h1><p>统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。<br> 请注意，你可以假定字符串里不包括任何不可打印的字符。</p><p>示例:<br> 输入: &quot;Hello, my name is John&quot;<br> 输出: 5<br> 解释: 这里的单词是指连续的不是空格的字符，所以 &quot;H ello,&quot; 算作 1 个单词。</p><p>来源：力扣（LeetCode）<br> 链接：<a href="https://leetcode.cn/problems/number-of-segments-in-a-string" target="_blank" rel="noreferrer">https://leetcode.cn/problems/number-of-segments-in-a-string</a></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">s</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> countSegments </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trim</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">Boolean</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">countSegments</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, my name is John</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">countSegments</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Of all the gin joints in all the towns in all the world,   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">countSegments</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">, , , ,        a, eaefa</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">countSegments</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span></code></pre></div>`,5),e=[p];function t(c,r,y,D,F,A){return a(),n("div",null,e)}const _=s(l,[["render",t]]);export{i as __pageData,_ as default};
