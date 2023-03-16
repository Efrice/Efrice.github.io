import{_ as s,c as n,o as a,d as l}from"./app.7bbfc18a.js";const D=JSON.parse('{"title":"292. Nim 游戏","description":"","frontmatter":{},"headers":[],"relativePath":"problems/292.Nim游戏.md"}'),p={name:"problems/292.Nim游戏.md"},o=l(`<h1 id="_292-nim-游戏" tabindex="-1">292. Nim 游戏 <a class="header-anchor" href="#_292-nim-游戏" aria-hidden="true">#</a></h1><p>你和你的朋友，两个人一起玩  Nim 游戏：</p><p>桌子上有一堆石头。<br> 你们轮流进行自己的回合，  你作为先手  。<br> 每一回合，轮到的人拿掉  1 - 3 块石头。<br> 拿掉最后一块石头的人就是获胜者。<br> 假设你们每一步都是最优解。请编写一个函数，来判断你是否可以在给定石头数量为 n 的情况下赢得游戏。如果可以赢，返回 true；否则，返回 false 。</p><p>示例 1：<br> 输入：n = 4<br> 输出：false<br> 解释：以下是可能的结果:</p><ol><li>移除 1 颗石头。你的朋友移走了 3 块石头，包括最后一块。你的朋友赢了。</li><li>移除 2 个石子。你的朋友移走 2 块石头，包括最后一块。你的朋友赢了。</li><li>你移走 3 颗石子。你的朋友移走了最后一块石头。你的朋友赢了。 在所有结果中，你的朋友是赢家。</li></ol><p>示例 2：<br> 输入：n = 1<br> 输出：true</p><p>示例 3：<br> 输入：n = 2<br> 输出：true</p><p>提示：<br> 1 &lt;= n &lt;= 231 - 1</p><p>来源：力扣（LeetCode）<br> 链接：<a href="https://leetcode.cn/problems/nim-game" target="_blank" rel="noreferrer">https://leetcode.cn/problems/nim-game</a></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">n</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> canWinNim </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">canWinNim</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">canWinNim</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">canWinNim</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span></code></pre></div>`,10),e=[o];function r(t,c,y,F,i,C){return a(),n("div",null,e)}const _=s(p,[["render",r]]);export{D as __pageData,_ as default};
