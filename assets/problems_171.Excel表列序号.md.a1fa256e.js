import{_ as s,c as n,o as a,d as l}from"./app.8cbbe70d.js";const i=JSON.parse('{"title":"171. Excel 表列序号","description":"","frontmatter":{},"headers":[],"relativePath":"problems/171.Excel表列序号.md"}'),p={name:"problems/171.Excel表列序号.md"},o=l(`<h1 id="_171-excel-表列序号" tabindex="-1">171. Excel 表列序号 <a class="header-anchor" href="#_171-excel-表列序号" aria-hidden="true">#</a></h1><p>给你一个字符串  columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号  。<br> 例如：<br> A -&gt; 1<br> B -&gt; 2<br> C -&gt; 3<br> ...<br> Z -&gt; 26<br> AA -&gt; 27<br> AB -&gt; 28<br> ...</p><p>示例 1:<br> 输入: columnTitle = &quot;A&quot;<br> 输出: 1</p><p>示例  2:<br> 输入: columnTitle = &quot;AB&quot;<br> 输出: 28</p><p>示例  3:<br> 输入: columnTitle = &quot;ZY&quot;<br> 输出: 701</p><p>提示：<br> 1 &lt;= columnTitle.length &lt;= 7<br> columnTitle 仅由大写英文组成<br> columnTitle 在范围 [&quot;A&quot;, &quot;FXSHRXW&quot;] 内</p><ul><li>来源：力扣（LeetCode）</li><li>链接：<a href="https://leetcode.cn/problems/excel-sheet-column-number" target="_blank" rel="noreferrer">https://leetcode.cn/problems/excel-sheet-column-number</a></li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">columnTitle</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> titleToNumber </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">columnTitle</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">words</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    A</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    B</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    C</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    D</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    E</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    F</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    G</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    H</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    I</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    J</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    K</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    L</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    M</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">13</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    N</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">14</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    O</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    P</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    Q</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">17</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    R</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    S</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">19</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    T</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    U</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">21</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    V</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">22</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    W</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">23</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    X</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">24</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    Y</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">25</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    Z</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">26</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">columnTitle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reverse</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">words</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pow</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">26</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">titleToNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">titleToNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">26</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">titleToNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">AB</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">28</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">titleToNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">AZ</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">52</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">titleToNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ZY</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">701</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">titleToNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">AJHX</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">24568</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">titleToNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">FXSHRXW</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2147483647</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function t(c,r,F,y,D,C){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{i as __pageData,u as default};
