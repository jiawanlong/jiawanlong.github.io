/* by jiawanlong*/
var identification = {
    name: "Leaflet"
};
var exampleConfig = {
    "base": {
        name: "1、入门",
        name_en: "base",
        content: {
            "map": {
                name: "1.1、入门",
                name_en: "base",
                content: [
                    {
                        name: "1.1.1、入门",
                        name_en: "1.1.1、入门",
                        thumbnail: "1.1.1、入门.png",
                        fileName: "1.1.1、入门"
                    },
                    {
                        name: "1.1.2、辅助线",
                        name_en: "1.1.2、辅助线",
                        thumbnail: "1.1.2、辅助线.png",
                        fileName: "1.1.2、辅助线"
                    },
                    {
                        name: "1.1.3、光线",
                        name_en: "1.1.3、光线",
                        thumbnail: "1.1.3、光线.png",
                        fileName: "1.1.3、光线"
                    },
                    {
                        name: "1.1.4、相机控件",
                        name_en: "1.1.4、相机控件",
                        thumbnail: "1.1.4、相机控件.png",
                        fileName: "1.1.4、相机控件"
                    },
                    {
                        name: "1.1.5、动画",
                        name_en: "1.1.5、动画",
                        thumbnail: "1.1.5、动画.png",
                        fileName: "1.1.5、动画"
                    },
                    {
                        name: "1.1.6、全屏",
                        name_en: "1.1.6、全屏",
                        thumbnail: "1.1.6、全屏.png",
                        fileName: "1.1.6、全屏"
                    },
                    {
                        name: "1.1.7、帧率",
                        name_en: "1.1.7、帧率",
                        thumbnail: "1.1.7、帧率.png",
                        fileName: "1.1.7、帧率"
                    },
                    {
                        name: "1.1.8、阵列模型",
                        name_en: "1.1.8、阵列模型",
                        thumbnail: "1.1.8、阵列模型.png",
                        fileName: "1.1.8、阵列模型"
                    },
                    {
                        name: "1.1.9、几何体",
                        name_en: "1.1.9、几何体",
                        thumbnail: "1.1.9、几何体.png",
                        fileName: "1.1.9、几何体"
                    },
                ]
            },
        }
    },

    "iPortal": {
        name: "2、几何体BufferGeometry",
        name_en: "2、几何体BufferGeometry",
        content: {
            "map": {
                name: "2.1、几何体BufferGeometry",
                name_en: "2.1、几何体BufferGeometry",
                content: [
                    {
                        name: "2.1.1、点、线",
                        name_en: "2.1.1、点、线",
                        thumbnail: "2.1.1、点、线.png",
                        fileName: "2.1.1、点、线"
                    },
                    {
                        name: "2.1.2、网格",
                        name_en: "2.1.2、网格",
                        thumbnail: "2.1.2、网格.png",
                        fileName: "2.1.2、网格"
                    },
                    {
                        name: "2.1.3、索引",
                        name_en: "2.1.3、索引",
                        thumbnail: "2.1.3、索引.png",
                        fileName: "2.1.3、索引"
                    },
                    {
                        name: "2.1.4、旋转、缩放、平移几何体",
                        name_en: "2.1.4、旋转、缩放、平移几何体",
                        thumbnail: "2.1.4、旋转、缩放、平移几何体.png",
                        fileName: "2.1.4、旋转、缩放、平移几何体"
                    },
                    {
                        name: "2.1.5、自带几何体顶点",
                        name_en: "2.1.5、自带几何体顶点",
                        thumbnail: "2.1.5、自带几何体顶点.png",
                        fileName: "2.1.5、自带几何体顶点"
                    },
                    {
                        name: "2.1.6、顶点颜色",
                        name_en: "2.1.6、顶点颜色",
                        thumbnail: "2.1.6、顶点颜色.png",
                        fileName: "2.1.6、顶点颜色"
                    },
                ]
            },
            
        }
    },
};


/**
 *key值：为exampleConfig配置的key值或者fileName值
 *      （为中间节点时是key值，叶结点是fileName值）
 *value值：fontawesome字体icon名
 *不分层
 */
var sideBarIconConfig = {
    "base": "fa-server",
    "iPortal": "fa-desktop",
    "Online": "fa-cloud",
    "iManager": "fa-group",
    "Elasticsearch": "fa-tasks",
    "plot": "fa-edit",
    "dynamicPlot": "fa-pencil",
    "control": "fa-sliders",
    "components": "fa-window-restore",
    "clientSpatialAnalyst": "fa-object-group",
    "viz": "fa-map",
    "OGC": "fa-globe",
    "mapping": "fa-send"
};

/**
 *key值：为exampleConfig配置的key值
 *value值：fontawesome字体icon名
 *与sideBarIconConfig的区别：sideBarIconConfig包括侧边栏所有层级目录的图标，exampleIconConfig仅包括一级标题的图标
 */
var exampleIconConfig = {
    "base": "fa-server",
    "iPortal": "fa-desktop",
    "Online": "fa-cloud",
    "iManager": "fa-group",
    "Elasticsearch": "fa-tasks",
    "plot": "fa-edit",
    "dynamicPlot": "fa-pencil",
    "control": "fa-sliders",
    "components": "fa-window-restore",
    "clientSpatialAnalyst": "fa-object-group",
    "viz": "fa-map",
    "OGC": "fa-globe",
    "mapping": "fa-send"
};
window.leafletExampleConfig = exampleConfig;
