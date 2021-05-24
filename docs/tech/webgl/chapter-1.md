# 第一章 WebGL概述

## WebGL介绍
### 什么是WebGL  
关于WebGL，网上有很多文章和教程。这里摘录了[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API)中的一部分文档对WebGL进行一个基本的介绍：  
> WebGL（Web图形库）是一个JavaScript API，可在任何兼容的Web浏览器中渲染高性能的交互式3D和2D图形，而无需使用插件。WebGL通过引入一个与OpenGL ES 2.0非常一致的API来做到这一点，该API可以在HTML5 [\<canvas\>](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)元素中使用。 这种一致性使API可以利用用户设备提供的硬件图形加速。  
[WebGL 2.0](https://www.khronos.org/registry/webgl/specs/latest/2.0/) API引入了对大部分的OpenGL ES 3.0功能集的支持; 它是通过WebGL2RenderingContext界面提供的。  

WebGL是一种较为低级的API接口，其以OpenGL为基础。OpenGL中的着色器(shader)语言GLSL自成一套编程环境。结果就导致简单的事情在WebGL中需要较多的代码去实现。开发者需要去加载(load)，编译(compile)，链接(link)着色器，并且在着色器中设置变量，对变换的图形执行矩阵运算。
在WebGL程序的开发中，开发者需要掌握以下的知识：  
* 着色器语言(GLSL)的编写  
* 矩阵的运算与变换
* 计算机图形中：顶点、法线、颜色和纹理的基本概念  

大多数现代设备都包含两个芯片：

* CPU（中央处理单元），运行主要应用程序逻辑的通用芯片。
* GPU（图形处理单元），专门用于快速处理图像渲染的芯片。

一般来讲，CPU上的应用程序逻辑都会构建一个渲染指令列表，然后将这些指令发送到GPU上快速执行，因此两者都与渲染有关。从广义上讲，CPU的设计是为了有效地运行串行指令（一个接一个地运行指令），这是应用程序代码所特有的，而GPU的目标是有效地运行并行指令，在渲染中这种并行方式很常见（例如，以相同的方式填充区域中的所有像素）。

CPU也可以自己渲染图形，但由于这种芯片不是专门为渲染图形而设计的，因此通常速度很慢，所以我们还是应该尽可能使用GPU。在CPU上绘制图像称为软件渲染，在GPU上绘制图像称为硬件加速。

### WebGL的优势  
由于WebGL以OpenGL，并且集成进了主流的浏览器之中，因而其具备以下优势：
* API接口与那些被广为接受的3D图形接口标准保持了较高的相似性
* 跨浏览器和跨平台的兼容性  
* 和浏览器的上下文环境紧密的结合,包括不同层级元素的混合、和其他html元素的交互、使用标准的html的事件机制
* 在浏览器环境下可以实现3D图形的硬件加速
* 提供了一个脚本运行的环境，使3D原型的调试变得简单——无需编译和连接才能看到图形并进行调试  

### WebGL的兼容性  
<iframe frameborder=0 height=600 width=100%  src="https://caniuse.com/webgl"></iframe>

## WebGL发展  

在个人计算机上使用最广泛的两种三维图形渲染技术是Direct3D和OpenGL。  
Direct3D是微软DirectX技术的一部分，主要运用在Windows平台；OpenGL由于其免费和开放的特性，广泛的在多个平台上使用。Windows对于WebGL也提供了很好的支持。  

![webgl-opengl关系](../../imgs/webgl/webgl.png)  

### WebGL和OpenGL的关系
OpenGL最初由[SGI](https://en.wikipedia.org/wiki/Silicon_Graphics_International)公司开发。WebGL即根植于OpenGL，由OpenGL的一个特殊版本OpenGL ES发展而来。OpenGL ES剔除了OpenGL中许多陈旧无用的旧特性，使得它在足够轻量的同时，也保持足够的渲染能力。    
OpenGL ES 2003~2004年被提出，其广泛的应用于嵌入式设备、智能手机、家用游戏机等设备上。在2007年(ES 2.0)和2012年(ES 3.0)OpenGL ES进行了两次升级。而WebGL就是基于OpenGL ES 2.0派生而来的。OpenGL在2.0版本中支持了一项非常重要的特性，即可编程着色器方法(Programable Shader Function)。该特性被OpenGL ES继承，并成为WebGL的核心内容。  

### WebGL起源
WebGL起源于Mozilla员工弗拉基米尔·弗基西维奇一项称为Canvas 3D的实验项目。2006年，弗基西维奇首次展示了Canvas 3D的原型。2007年底在Firefox和Opera被实现。  
在2009年初，非营利技术联盟Khronos Group引导了WebGL的工作组，最初的工作成员包括Apple、Google、Mozilla、Opera等。2011年3月发布WebGL 1.0规范。  
WebGL 2规范的发展始于2013年，并于2017年1月完成。该规范基于OpenGL ES 3.0。首度实现在Firefox 51、Chrome 56和Opera 43中。  

### WebGL的未来  
![vulkan](../../imgs/webgl/vulkan.png)  

OpenGL是跨平台底层高性能图形技术，这项技术非常古老。最初于1990年代初期开发。对于计算机来说，这已经属于老古董了！实际上，现代GPU的工作方式与当时截然不同，但是OpenGL的许多核心概念并未改变。因此，应用程序使用OpenGL的方式基本上与90年代大同小异，而图形驱动程序（应用程序和硬件之间的软件）会将其转换为可以在GPU上运行的东西。

随着GPU变得越来越复杂和强大，最终图形驱动程序不得不肩负很多非常复杂的工作。这会加剧图形驱动程序出现故障的概率，而且在许多情况下还会变慢，因为它们必须即时进行所有的工作。类似的命运也降临在DirectX身上，尽管可能程度要轻一些，因为微软有能力在整个DirectX的生命周期中进行重大升级。在之后的数十年里，OpenGL的向后兼容性让人尤为头疼。

遇到无法克服的困难，我们只能寻找替代方案。于是，OpenGL背后的团队Khronos于2016年提出了全新的、完全重新设计的现代图形API：Vulkan。这个API更加接近底层、更快、更简单，而且更适合现代硬件。然而，这也意味着应用程序为了支持这个API，必须完全重写所有图形处理代码。这种技术上的根本性转变需要花费数年的时间才能完成，所以至今我们仍然能在很多地方看见OpenGL。  

尽管Vulkan的设计目标是成为能在所有系统上运行的标准API，但作为长期的标准，苹果提出了适用于iOS和macOS的Metal，微软也提出了针对Windows和Xbox的DirectX 12。两者的出发点与Vulkan差不多：抛掉所有的历史包袱，设计一个新的底层API更加接近现代硬件的工作方式。  

与OpenGL不同，Vulkan遇到了麻烦，由于苹果的问题未能真正实现跨平台。尽管有第三方库，但iOS和macOS仅支持Metal，而Vulkan没有得到苹果官方支持。此外，就连Vulkan本身也不是特别适合Web：它太底层，甚至涉及GPU内存分配器之类的细节，以致于3A游戏引擎无法发挥最大的性能。并非Vulkan的所有功能都适用于Web平台，安全性也是浏览器中更为重要的关注点。

因此，解决办法是专为Web设计全新的API，不仅能够满足浏览器的使用和安全，而且还能在Vulkan、Metal和DirectX 12任何一个之上实现。这就是WebGPU，而且它似乎是唯一真正的跨平台现代底层图形API。虽然仍在开发中，但所有主流的浏览器供应商都在使用（包括苹果），而且都在试验实现。

WebGPU是GPU硬件（显卡）向Web（浏览器）开放的低级应用程序接口（API），包括图形和计算两方面的接口。WebGL是OpenGL ES低级3D图形API的Web版本。WebGPU和WebGL两者都是对GPU功能的抽象，都是为了提供操作GPU的接口。  
区别主要在于：
* WebGPU是基于Vulkan、Metal和Direct3D 12
* WebGL基于OpenGL  
WebGPU的引擎较新，设计上更好的反映了GPU硬件技术这些年新的发展，能提供更好的性能，支持多线程，采用了偏面向对象的编程风格。  
我们可以把WebGPU看成是下一代WebGL，从技术先进性上看是可以替代WebGL的，不过这将会是一个相对漫长的过程。


## 参考资料
[WebGL 1.0 官网](https://www.khronos.org/registry/webgl/specs/latest/1.0/)  
[WebGL维基百科](https://zh.wikipedia.org/wiki/WebGL)  
[WebGL wiki](https://www.khronos.org/webgl/wiki/)  
[OpenGL学习书籍](http://opengles-book.com/)  
[OpenGL教程](https://www.opengl.org/sdk/docs/tutorials/)  
[OpenGL光线和多边形教程](http://www.falloutsoftware.com/tutorials/gl/gl8.htm)  
[奇舞周刊WebGL入门](https://blog.csdn.net/qiwoo_weekly/article/details/102693931)  
[奇舞周刊WebGL渲染流程](https://blog.csdn.net/qiwoo_weekly/article/details/105548735)  
[WebGPU](https://juejin.cn/post/6844903489756364808)

