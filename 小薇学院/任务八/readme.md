# 任务八：响应式网格（栅格化）布局
[点我前往任务地址](http://ife.baidu.com/course/detail/id/104)

## 任务目的
*	使用 HTML 与 CSS 实现类似 [BootStrap 的响应式](http://v4-alpha.getbootstrap.com/layout/grid/) 12 栏网格布局，根据屏幕宽度，元素占的栏数不同。

## 任务描述
*	需要实现如 [效果图](http://7xrp04.com1.z0.glb.clouddn.com/task_1_8_1.png) 所示，调整浏览器宽度查看响应式效果，效果图中的红色的文字是说明，不需要写在 HTML 中。

## 任务注意事项
*	网格布局的作用在于更有效地控制元素在网页中所占比例的大小。比如，博客中有一个留言板模块，在比较大的屏幕上，我们希望它占了右边 25% 的宽度，在手机等比较小的屏幕上，我们希望它占 100% 的宽度，出现在博客文章下方。网格布局是一种实现这一需求的办法，它的好处是，把所有的宽度分为固定栏数（常用 12 栏），从而更高效的控制元素宽度。而这功能，我们使用 HTML 和 CSS 就能实现了。
*	以 BootStrap 的网格系统为例，DOM 元素类名形如 <code>col-md-4</code>；其中 <code>col</code> 是“列” column 的缩写；<code>md</code> 是 medium 的缩写，适用于应屏幕宽度大于 768px 的场景；<code>4</code> 是占四栏的意思。因此，<code>col-md-4</code> 的意思是，在屏幕宽度大于 768px 时，该元素占四栏。

[点我预览](http://htmlpreview.github.io/?https://github.com/RAAMENN/ife2017/blob/master/%E5%B0%8F%E8%96%87%E5%AD%A6%E9%99%A2/%E4%BB%BB%E5%8A%A1%E5%85%AB/%E4%BB%BB%E5%8A%A1%E5%85%AB.html)