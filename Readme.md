# 分子可视化

## 背景

根据公司新药部门对蛋白质3D模型展示及观测的研发需求，结合后续定制化的功能开发，同时，为了兼容[已有的分子可视化工具](https://bitbucket.org/xtalpi/struct-view/src/master/)的调用方式，现针对开源的分子可视化工具[NGL](https://github.com/arose/ngl)进行移植及功能的扩展，简化其中文件读写、网络请求、解压缩等功能，同时扩展晶体分子的展胞、氢键扩展等功能。

## 调用示例

### 示例代码

```javascript
//方式一：使用文件路径的方式
fetch('./test/data/test.cif')
.then(res => {
    res.text().then(data => {
        const scene = new XtalView.Scene('view')
        const structure = XtalView.parse(data, 'cif', '2vts-docking')
        scene.add(structure)
        window.addEventListener('resize', () => {
            scene.resize()
        }, false)
    })
})

//方式二：使用文件内容的方式，文本内容为data
const scene = new XtalView.Scene('view')
const structure = XtalView.parse(data, 文件类型|文件后缀, 结构名称)
scene.add(structure)
window.addEventListener('resize', () => {
    scene.resize()
}, false)


```

### 效果预览

![](../docs/imgs/demo.png)

## 执行流程说明

![](../docs/imgs/flow.png)

## TODO

* 蛋白功能clipCenter、clipNear功能
* 距离测量跨分子测量

* 问题的快速定位
* 单元测试及自动化测试接口测试
* shader编程
* pdb文件的解析
* 高精度浮点数运算处理
* 轻量使用时离屏渲染
* Shader的复用
* debug模式
* 物体旋转平移操作
* 性能检测
* 日志系统
* 文档说明
* spline样条插值
* 鼠标右键平移及拖拽操作
* 鼠标左键旋转及点击操作
