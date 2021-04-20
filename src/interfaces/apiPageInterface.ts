import { ApiWidgetInterface } from "@interfaces/apiWidgetInterface";

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
   * @description 获取系统信息对象
   * @returns {Object}
   * @memberof ApiPageInterface
   */
  getSysInfo(): { accessToken: string; stageId: string; tenantId: string; variables: any; isEdit: boolean; version: string };

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
   * @description 根据别名获取小部件API对象
   * @returns {ApiWidgetInterface}
   * @memberof ApiPageInterface
   */
  getApiWidgetByAliasName(aliasName: string): ApiWidgetInterface;

  /**
   * @description 根据ClassName获取小部件API对象
   * @returns {Array<ApiWidgetInterface>}
   * @memberof ApiPageInterface
   */
  getApiWidgetsByClassName(className: string): Array<ApiWidgetInterface>;

  /**
   * @description 根据GroupName获取小部件API对象
   * @returns {Array<ApiWidgetInterface>}
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
   * @description 设置变量
   * @returns {Array<{ name: string; value: string }>}
   * @memberof ApiPageInterface
   */
  getVariables(): Array<{ name: string; value: string }>;

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
  subscribePushData(datasetId: string, constant: string, callback: (data: { datasetId: string; datasetName: string; data: Array<any>; success: boolean }) => void);

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
