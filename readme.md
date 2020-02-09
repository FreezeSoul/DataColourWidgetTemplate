
# 小部件开发说明

> 平台采用了插件化/模块化的方式对小部件进行管理，对于小部件的开发提供了整套的开发模板及方案，开发语言可采用typescript或javascript。下面对于小部件的开发进行详细的说明。

## 模块化介绍

> 平台对于小部件的加载采用了模块化的方式，加载器使用的是SystemJs，小部件默认编译输出为umd模块，当然对于其他格式，如amd，umd，system模块SystemJs都是支持加载的，如果你想直接加载es模块，也可以试一下：）。
> 
> SystemJs的使用请参照官网([https://github.com/systemjs/systemjs](https://github.com/systemjs/systemjs))

## 目录结构介绍

小部件目录的结构如下:

``` 
widgets
├── widget
│   ├── assets
│   │   └── widget.png
│   ├── bootstrap.js
│   ├── manifest.json
│   └── property.json
└── widgets.json
```

> widgets：小部件的根目录
> 
> widgets.json: 小部件的注册配置文件
> 
> widget：小部件目录，根据不同的部件，名称会不同
> 
> manifest.json：小部件的清单描述文件
> 
> property.json：小部件的属性描述文件
> 
> bootstrap.js：小部件的入口文件，名称可自定义
> 
> assets：小部件的资源目录

## widgets.json文件说明

```json
{
  "name": "配置文件",
  "version": "0.1.0",
  "description": "指标控件配置",
  "author": "FreezeSoul<freezesoul@gmail.com>",
  "widgets": [{ "group": "通用控件", "tag": "普通控件", "path": "widget", "enable": true }]
}
```

> widgets.json为平台小部件的注册配置文件，结构如上面代码所示。
> 
> 新增加的部件需要添加在widgets集合内，其中group标识了部件所属的组，tag可给部件定义一个标签，path指定了小部件的目录，enable为是否启用。

## manifest.json文件说明

```json
{
  "id": "widget",
  "name": "测试控件",
  "icon": "assets/widget.png",
  "author": "FreezeSoul<freezesoul@gmail.com>",
  "version": "0.1.0",
  "description": "测试控件描述",
  "bootstrap": "bootstrap.js"
}
```

> manifest.json为小部件的清单描述文件，结构如上面的代码所示。
> 
> id为小部件唯一标识，请确保其在所有部件的唯一性，可根据部件业务意义命名，避免重复，一旦定义不可更改。name为小部件的名称。icon为小部件的图标文件，目录相对小部件目录。version为小部件的版本号，更新小部件后需要更新此版本号。description为小部件的描述说明。bootstrap为小部件的启动入口文件，需要指定。

## property.json文件说明

```json
[
  {
    "name": "属性设置",
    "type": "properties",
    "children": [
      {
        "name": "基本",
        "type": "group",
        "children": [
          {
            "name": "文本测试",
            "type": "text",
            "default": "文本默认值",
            "link": "test.text",
            "tooltip": "文本测试提示"
          },
          {
            "name": "多行文本测试",
            "type": "textarea",
            "default": "多行文本默认值",
            "link": "test.textarea",
            "tooltip": "多行文本测试提示"
          },
          {
            "name": "数值测试",
            "type": "number",
            "default": 0,
            "link": "test.number",
            "tooltip": "数值测试提示"
          },
          {
            "name": "布尔值测试",
            "type": "boolean",
            "default": false,
            "link": "test.boolean",
            "tooltip": "布尔值测试提示"
          },
          {
            "name": "颜色测试",
            "type": "color",
            "default": "#FFFFFF",
            "link": "test.color",
            "tooltip": "颜色测试提示"
          },
          {
            "name": "颜色多值测试",
            "type": "colors",
            "default": [
              "#FE8463",
              "#9BCA63",
              "#FAD860",
              "#60C0DD",
              "#0084C6",
              "#D7504B",
              "#C6E579",
              "#26C0C0",
              "#F0805A",
              "#F4E001",
              "#B5C334"
            ],
            "link": "test.colors",
            "tooltip": "颜色多值测试提示"
          },
          {
            "name": "资源测试",
            "type": "resource",
            "default": "",
            "link": "test.resource",
            "extension": ["png", "jpg", "gif", "bmp"],
            "tooltip": "资源测试提示"
          },
          {
            "name": "多值测试",
            "type": "multiple",
            "default": [0, 0, "0", "0"],
            "link": "test.multiple",
            "tooltip": "多值测试提示"
          },
          {
            "name": "单选框测试",
            "type": "radio",
            "data": [
              {
                "value": "value1",
                "text": "条目一"
              },
              {
                "value": "value2",
                "text": "条目二"
              },
              {
                "value": "value3",
                "text": "条目三"
              }
            ],
            "default": "value1",
            "link": "test.radio",
            "tooltip": "单选框测试提示"
          },
          {
            "name": "复选框测试",
            "type": "check",
            "data": [
              {
                "value": "value1",
                "text": "条目一"
              },
              {
                "value": "value2",
                "text": "条目二"
              },
              {
                "value": "value3",
                "text": "条目三"
              }
            ],
            "default": ["value1"],
            "link": "test.check",
            "tooltip": "复选框测试提示"
          },
          {
            "name": "下拉测试",
            "type": "select",
            "data": [
              {
                "value": "value1",
                "text": "条目一"
              },
              {
                "value": "value2",
                "text": "条目二"
              },
              {
                "value": "value3",
                "text": "条目三"
              }
            ],
            "default": "value1",
            "link": "test.select",
            "tooltip": "数值测试提示"
          },
          {
            "name": "数组设置",
            "type": "array",
            "link": "test.array",
            "tooltip": "多值测试提示",
            "readonly": false,
            "children": [
              {
                "name": "文本测试",
                "type": "text",
                "default": "文本默认值",
                "link": "text",
                "tooltip": "文本测试提示"
              },
              {
                "name": "数值测试",
                "type": "number",
                "default": 0,
                "link": "number",
                "tooltip": "数值测试提示"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "数据绑定",
    "type": "bindings",
    "children": [
      {
        "name": "序列绑定名称",
        "type": "seriesBinding",
        "tooltip": "序列绑定提示"
      },
      {
        "name": "文本绑定名称",
        "type": "textBinding",
        "tooltip": "文本绑定提示"
      },
      {
        "name": "列表绑定名称",
        "type": "listBinding",
        "tooltip": "列表绑定提示"
      }
    ]
  },
  {
    "name": "交互事件",
    "type": "events",
    "children": [
      {
        "name": "事件名称",
        "tooltip": "事件名称提示"
      }
    ]
  },
  {
    "name": "导入配置",
    "type": "imports",
    "children": [
      "path/property1.json",
      "path/property2.json"
    ]
  }
]
```

> property.json为小部件的属性描述文件，这里描述了小部件的属性配置信息，数据绑定信息，交互事件信息。这些信息都与场景配置中的属性边栏、数据边栏、配置对象功能、生命周期与交互事件功能相关，配置前请先了解到这些功能的基本使用方式。
> 
> 根结构为一个集合内容，目前支持四种类型的子对象，每种类型一项配置，分别用type进行了标识，type=properties 为属性配置信息， type=bindings为数据绑定信息，type=events为交互事件信息，type=imports为导入的外部配置。
> 
> 属性配置信息最终会作为场景配置中小部件的属性编辑器的配置元数据，它描述了小部件属性配置功能与配置对象的映射关系，属性边栏即根据这些元数据而动态产生的配置界面。配置对象是小部件的配置描述信息，是一个json形式的对象，小部件通过此对象进行渲染，详情可以在后面的开发说明中了解到。
> 
> 数据绑定信息是小部件数据绑定功能的元数据，目前支持三种绑定协议。一般一个小部件只与一个数据集产生绑定关系，也或没有绑定关系，所以bindings对象的children集合也可以空对象或根本没有bindings类型的对象。
> 
> 交互事件信息定义了小部件支持的交互事件，在使用中需要结合事件触发与配置的执行脚本联合产生作用。如果小部件没有事件行为，同样events对象的children集合可以为空或根本没有events类型的对象。
>
> 导入外部配置目的是为了抽取公用部分的配置，只支持单层导入，但可导入多项，导入的配置中支持上面三种类型，导入后的配置会简单合并其children项，导入相对目录为widgets目录。注：导入的配置中不可再有imports的属性，以避免循环导入。


## 属性配置表

属性配置即：type=properties 下的children 目前支持如下类型：

| 类型（type）|示例|说明|
| --------- | -------- | -------- |
| group| { "name": "基本", "type": "group", "children": []}| 分组类型属性设置类型，在场景编辑器属性边栏中以一个折叠面板包裹其子对象，可以设置或不设置link，也可以嵌套group，但不建议过多。|
| text| {"name":"文本测试","type":"text","default":"文本默认值","link":"test.text","tooltip":"文本测试提示"}| 文本类型属性设置类型。|
| textarea| {"name":"多行文本测试","type":"textarea","default":"多行文本默认值","link":"test.textarea","tooltip":"多行文本测试提示"} | 多行文本类型属性设置类型。|
| number| {"name":"数值测试","type":"number","default":0,"link":"test.number","tooltip":"数值测试提示"}| 多行文本类型属性设置类型。|
|boolean|{"name":"布尔值测试","type":"boolean","default":false,"link":"test.boolean","tooltip":"布尔值测试提示"}|布尔值类型属性设置类型。|
|color|{"name":"颜色测试","type":"color","default":"#FFFFFF","link":"test.color","tooltip":"颜色测试提示"}|颜色类型属性设置类型。|
|colors|{"name":"颜色多值测试","type":"colors","default":["#FE8463","#9BCA63"],"link":"test.colors","tooltip":"颜色多值测试提示"}|颜色多值类型属性设置类型。|
|resource|{"name":"资源测试","type":"resource","default":"","link":"test.resource","tooltip":"资源测试提示","extension": ["png"]}|资源类型属性设置类型，extension指定扩展名，不设置/默认为图片资源。|
|multiple|{"name":"多值测试","type":"multiple","default":[0,0,"0","0"],"link":"test.multiple","tooltip":"多值测试提示"}|多值类型属性设置类型，其中多值中内容是字符类型的，编辑器会使用文本输入模式，数值类型会使用数字输入模式。|
|radio|{"name":"单选框测试","type":"radio","data":[{"value":"value1","text":"条目一"},{"value":"value2","text":"条目二"}],"default":"value1","link":"test.radio","tooltip":"单选框测试提示"}|单选框类型属性设置类型，data为选择数据。|
|check|{"name":"复选框测试","type":"check","data":[{"value":"value1","text":"条目一"},{"value":"value2","text":"条目二"}],"default":["value1"],"link":"test.check","tooltip":"复选框测试提示"}|复选框类型属性设置类型，data为选择数据，返回值为集合。|
|select|{"name":"下拉测试","type":"select","data":[{"value":"value1","text":"条目一"},{"value":"value2","text":"条目二"}],"default":"value1","link":"test.select","tooltip":"数值测试提示"}|下拉类型属性设置类型，data为选择数据。|
|array|{"name":"数组设置","type":"array","link":"test.array","tooltip":"多值测试提示","readonly": false,"children":[{"name":"文本测试","type":"text","default":"文本默认值","link":"test.text","tooltip":"文本测试提示"}]}|数组类型属性设置类型，在场景编辑器属性边栏中会以一个可以动态创建子集合的标签页形式。内部可以包含其他类型的属性配置，也可以包含group分组类型。readonly指定是否只读，只读没有添加、删除支持|

>*注：
>
> 1. link是连接配置对象和属性输入内容的连接描述，通过字符串的方式描述了与配置对象的关系，以"."分割。除了group的link可选，其他类型的link都是必需设置的。
>
> 2. 简单情况，如link = “test.text”的文本类型属性输入内容abc后，对应赋值后的属性配置对象为{test:{text:“abc”}}。
>
> 3. 对于嵌套情况link是支持连接的，如group上存在一个link=“test.group”，children内部存在一个text类型的属性描述，其link=“test.text”，设置值为abc后，得到一个配置对象为{test:{group:{test:{text:"abc"}}}}。
>
> 4. 重点说明一下array类型的属性描述，array是一个可以动态创建的数组类型，对应的配置对象为数组，如：{test:[]}，内部支持上面同样的逻辑，代码对应了上面示例property.json转换后的配置对象。*

```json
{
  "test": {
    "text": "文本测试",
    "number": 0,
    "textarea": "多行文本默认值",
    "color": "#FFFFFF",
    "colors": [
      "#FE8463",
      "#9BCA63",
      "#FAD860",
      "#60C0DD",
      "#0084C6",
      "#D7504B",
      "#C6E579",
      "#26C0C0",
      "#F0805A",
      "#F4E001",
      "#B5C334"
    ],
    "resource": "/resource/datacolour/043c70ba66c743199363ed5cd48c4eeb.png",
    "multiple": [
      0,
      0,
      "0",
      "0"
    ],
    "radio": "value1",
    "check": [
      "value1"
    ],
    "select": "value1",
    "array": [
      {
        "text": "文本默认值1",
        "number": 0
      },
      {
        "text": "文本默认值2",
        "number": 0
      }
    ]
  }
}
```

## 绑定配置表

绑定配置即：type=bindings 下的children 目前支持如下类型：

| 类型（type）|示例|说明|
| --------- | -------- | -------- |
|seriesBinding|{"name":"序列绑定","type":"seriesBinding","tooltip":"序列绑定提示"}|序列绑定设置类型，用于支持存在category和values这种二维绑定上。|
|textBinding|{"name":"文本绑定","type":"textBinding","tooltip":"文本绑定提示"}|文本绑定设置类型，用于绑定单个文本字段的绑定上。|
|listBinding|{"name":"列表绑定","type":"listBinding","tooltip":"列表绑定提示"}|列表绑定设置类型，用于绑定整个二维表格的数据上。|

## 交互事件配置

交互事件配置即：type=events ，主要作用是配置交互事件的，如小部件内部有一个点击事件，点击触发的逻辑需要将来结合书写脚本来灵活定制，可以在children中定义其交互事件：{"name":"点击事件","tooltip":"点击小部件触发"}。在小部件内部进行触发，详情见下面的开发说明。

## 开发说明

小部件的开发可以采用typescript与javascript，但建议采用typescript的方式，下面以typescript的开发为例进行说明。

平台提供了小部件的开发模板，通过模板可以打包、测试、发布小部件。

小部件需要按如下目录进行组织结构

```
├── assets
│   └── widget.png
├── manifest.json
├── property.json
└── widget.ts
```

其他文件都已进行了说明，下面重点说明widget.ts的开发

### 1. WidgetInterface接口

此接口小部件需要实现，其中pageApi和widgetApi是系统赋值，无需实现，代码中可直接调用。

```typescript
export interface WidgetInterface {
  //页面API对象，系统赋值
  pageApi?: ApiPageInterface;

  //小部件API对象，系统赋值
  widgetApi?: ApiWidgetInterface;

  //初始化
  init(container: HTMLElement);

  //设置参数
  setOption(option: {});

  //获取参数
  getOption();

  //设置数据
  setData(data: Array<{ datasetId; data }>);

  //渲染
  render();

  //缩放
  resize();

  //销毁
  dispose();
}
```

### 2. ApiPageInterface接口

页面api接口，小部件代码中可调用对应的方法

```typescript
/**
 * @description 页面API代理类接口
 * @author FreezeSoul
 * @date 2019-12-20
 * @export
 * @interface ApiPageInterface
 */
export interface ApiPageInterface {
  /**
   * @description 是否编辑模式
   * @memberof ApiPageInterface
   */
  isEditMode(): boolean;

  /**
   * @description 获取内核根目录
   * @returns {string}
   * @memberof ApiPageInterface
   */
  getCorePath(): string;

  /**
   * @description 获取场景路径
   * @param stageId
   * @param variables
   * @returns {string}
   * @memberof ApiPageInterface
   */
  getStagePath(stageId: string, variables?: Array<{ name: string; value: string }>): string;

  /**
   * @description 获取小部件根目录
   * @returns {string}
   * @memberof ApiPageInterface
   */
  getWidgetsPath(): string;

  /**
   * @description 获取小部件API对象集合
   * @returns {Array<ApiWidgetInterface>}
   * @memberof ApiPageInterface
   */
  getApiWidgets(): Array<ApiWidgetInterface>;

  /**
   * @description 根据ID获取小部件API对象
   * @returns {ApiWidgetInterface}
   * @memberof ApiPageInterface
   */
  getApiWidgetById(id: string): ApiWidgetInterface;

  /**
   * @description 根据ClassName获取小部件API对象
   * @returns {ApiWidgetInterface}
   * @memberof ApiPageInterface
   */
  getApiWidgetsByClassName(className: string): Array<ApiWidgetInterface>;

  /**
   * @description 根据GroupName获取小部件API对象
   * @returns {ApiWidgetInterface}
   * @memberof ApiPageInterface
   */
  getApiWidgetsByGroupName(groupName: string): Array<ApiWidgetInterface>;

  /**
   * @description 跳转场景
   * @param stageId
   * @param variables
   * @memberof ApiPageInterface
   */
  navigateStage(stageId: string, variables?: Array<{ name: string; value: string }>);

  /**
   * @description 设置变量
   * @param variables
   * @memberof ApiPageInterface
   */
  setVariables(variables?: Array<{ name: string; value: string }>);

  /**
   * @description 获取缓存数据
   * @param datasetId
   * @memberof ApiPageInterface
   */
  getDataById(
    datasetId: string
  ): {
    datasetId: string;
    datasetName: string;
    data: Array<any>;
    success: boolean;
  };

  /**
   * @description 获取缓存数据
   * @param datasetName
   * @memberof ApiPageInterface
   */
  getDataByName(
    datasetName: string
  ): {
    datasetId: string;
    datasetName: string;
    data: Array<any>;
    success: boolean;
  };

  /**
   * @description 获取页面数据集信息
   * @memberof ApiPageInterface
   */
  getDatsetsInfo(): Array<string>;

  /**
   * @description 触发绑定事件
   * @param widget
   * @param eventName
   * @param $event
   * @memberof ApiPageInterface
   */
  emitEvent(widget: ApiWidgetInterface, eventName: string, $event: any);

  /**
   * @description 订阅推送数据集
   * @param {string} datasetId
   * @param {string} constant
   * @memberof ApiPageInterface
   */
  subscribePushData(
    datasetId: string,
    constant: string,
    callback: (data: {
      datasetId: string;
      datasetName: string;
      data: Array<any>;
      success: boolean;
    }) => void
  );

  /**
   * @description 检测插件存在
   * @param {string} name
   * @memberof ApiPageInterface
   */
  existPlugin(name: string): boolean;
  
  /**
   * @description 注册个插件
   * @param {string} name
   * @param {*} plugin
   * @memberof ApiPageInterface
   */
  registerPlugin(name: string, plugin: any);

  /**
   * @description 取消注册插件
   * @param {string} name
   * @memberof ApiPageInterface
   */
  unRegisterPlugin(name: string);

  /**
   * @description 获取一个插件
   * @param {string} name
   * @returns
   * @memberof ApiPageInterface
   */
  retrievePlugin(name: string);
}
```

### 3. ApiWidgetInterface接口

小部件api接口，小部件代码中可调用对应的方法

```typescript
/**
 * @description 小部件API代理类接口
 * @author FreezeSoul
 * @date 2019-12-20
 * @export
 * @interface ApiWidgetInterface
 */
export interface ApiWidgetInterface {
  /**
   * @description 获取小部件ID
   * @returns {string}
   * @memberof ApiWidgetInterface
   */
  getId(): string;

  /**
   * @description 显示小部件
   * @memberof ApiWidgetInterface
   */
  showWidget();

  /**
   * @description 隐藏小部件
   * @memberof ApiWidgetInterface
   */
  hideWidget();

  /**
   * @description 获取页面对象
   * @returns {ApiPageInterface}
   * @memberof ApiWidgetInterface
   */
  getApiPage(): ApiPageInterface;

  /**
   * @description 获取小部件对象
   * @returns {WidgetInterface}
   * @memberof ApiWidgetInterface
   */
  getWidget(): WidgetInterface;

  /**
   * @description 获取小部件目录
   * @returns {string}
   * @memberof ApiWidgetInterface
   */
  getWidgetPath(): string;

  /**
   * @description 获取小部件的事件配置信息
   * @returns {*}
   * @memberof ApiWidgetInterface
   */
  getEventsInfo(): Array<{ name: string; script: string }>;

  /**
   * @description 获取小部件的绑定配置信息
   * @returns {*}
   * @memberof ApiWidgetInterface
   */
  getBindingsInfo(): Array<{
    property: string;
    dataset: string;
    schema: string;
    binding: { text?: string; list?: Array<string>; category?: string; value?: Array<string> };
  }>;

  /**
   * @description 触发绑定事件
   * @param widget
   * @param eventName
   * @param $event
   * @memberof ApiWidgetInterface
   */
  emitEvent(eventName: string, $event: any);
}
```

### 4. 示例代码

widget.ts为小部件核心代码，建议文件名称按默认，基本代码结构如下

注1：代码中的需要定义默认的部件配置信息(见下变量_option)，通过接口setOption与getOption与平台传递，在渲染时部件可根据存储的配置内容进行动态的渲染。

注2: pageApi与widgetApi分别为平台暴露api接口，在部件代码中以及部件生命周期(this即widgetApi)与页面生命周期(this即pageApi)中均可访问。

注3：setData为数据推送上来后平台调用的接口方法，会传递上来一组数据集合(Array类型)，对于部件绑定了多个数据集会凑齐其所有数据后传递给部件，请确认推送频率一致。

注4：api中的emitEvent方法作为触发事件的平台接口，对于配置了交互事件执行的脚本后，部件内部需要在事件逻辑中调用此方法触发配置的脚本执行，参数通过$event传递。

注5：部件开发中依赖其他脚本组件需要通过System.import进行导入，目前平台已经默认导入jQuery、lodash等常用依赖库至全局上下文(即window下),可通过$、_直接访问。

注6：init支持异步操作，TS下可以使用async函数，JS下可以返回Promise对象，一般可作为异步资源加载，比如依赖库等

#### typescript模板代码

```typescript
import { WidgetInterface } from "@interfaces/widgetInterface";

import "./assets/widget.less";

export default class WidgetSiample implements WidgetInterface {
  pageApi: ApiPageInterface;

  widgetApi: ApiWidgetInterface;
  
  //option为小部件的配置对象，描述了小部件的配置信息，小部件通过此对象进行渲染，在场景配置过程中，属性设置后会写入到link对应的属性对象上的值。
  _option: any = {
    version: "1.0",
    test: { text: "文本测试" },
    func1: function(abc: string) {
      console.log(abc);
    }
  };

  container: HTMLElement;

  constructor() {}

  private templateString: string;

  public async init(container: HTMLElement) {
    this.container = container;
    this.templateString = (
      await import(/* webpackChunkName: "template" */ "./assets/template.html")
    ).default;
  }

  public setOption(option: any) {
    this._option = _.cloneDeep(option);
  }

  public getOption() {
    return _.cloneDeep(this._option);
  }

  public setData(data: any) {
      console.log("数据打包上来了")
      console.log(data)
  }

  public render() {
    $(this.container).html(this.templateString);
    $(this.container).find(".text-class").html(this._option.test.text);
  }

  public resize() {}

  public dispose() {}
}
```

#### javascript模板代码

```javascript
(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory(root));
	} else if (typeof exports === 'object') {
		module.exports = factory(root);
	} else {
		root.Widget = factory(root);
	}
})(typeof global !== "undefined" ? global: this.window || this.global,
function(root) {
	'use strict';

	class Widget {

		constructor() {}

		init(container) {
			this.container = container;
			let _this = this;
			return new Promise(function(resolve){
				System.import("abc").then(function($){
					resolve();
				});
			});
		}

		setOption(option) {
			this._option = _.cloneDeep(option);
		}

		getOption() {
			return _.cloneDeep(this._option);
		}

		setData(data) {
			console.log("数据打包上来了");
			console.log(data);
		}

		render() {
			$(this.container).html("<span style='color:#fff;'>javascript 小部件 测试</span>");
		}

		resize() {}

		dispose() {}
	}

	return function(){return {default:Widget}};
});
```

### 5. 生命周期

注：部件在初始化后，平台会将场景编辑时设置的参数返还给部件，调用setOption，在这时数据集推送数据如果已经抵达页面，平台会先调用setData给部件设置数据，再调用部件render，如数据未抵达，则会直接调用render，等待后面新一轮数据推送上来，再调用部件setData以及render,并且以此重复调用。对于设置了多个数据集绑定的部件，平台会等待多个数据集凑齐后，统一进行setData操作，请留意。

```
                +-------------------------------+
                |       Widget constructor      |
                +---------------+---------------+
                                |
                                v
                +---------------+---------------+
                |         Widget init           |
                +---------------+---------------+
                                |
                                v
                +---------------+---------------+
                |        Widget setOption       |
                +---------------+---------------+
                                |
               +---------------------------------+
               |                ^                |
               |                |                v
               |                |   +------------+-----------+
               |                |   |      Widget setData    |
               v                |   +------------+-----------+
    +----------+----------+     |                |
    |    Widget render    |     |                |
    +----------+----------+     |                v
               |                |     +----------+----------+
               |                |     |    Widget render    |
               |                |     +----------+----------+
               |                |                |
               |                |                |
               +---------------------------------+
                                |
                                v
                +---------------+---------------+
                |        Widget dispose         |
                +-------------------------------+
```

### 6. 开发与调试

在TS模板与JS模板开发场景下，可以通过配置nginx来集成开发环境，配置如下

```
server {
	listen 9999 default_server;
	listen [::]:9999 default_server;

	location / {
        proxy_pass http://测试服务器IP:PORT;
    }

	location ~ ^/core/widgets/(.*)$ {
		proxy_pass http://127.0.0.1:8088/widgets/$1;
	}
}
```

#### TS模板下的启动调试

通过--name可指定小部件名称或使用默认，默认为widget。指定名称后需要在widgets.json里进行相应配置。

注：name对应小部件的目录名称，以及脚本的模块名称，请针对具体情况进行设置。

```shell
npm run start-widget
npm run start-widget -- --name=部件名称
```

启动浏览器，打开地址测试地址 http://127.0.0.1:9999

```shell
/opt/google/chrome/chrome --disable-web-security --user-data-dir=/tmp/chrome_tmp
```

#### TS模板下的编译发布

```shell
npm run build-widget:pro -- --name=部件名称
```

注：命令中的--name与调试模式作用一致。

#### JS模板下的启动调试

```shell
http-server -p 8088
```
