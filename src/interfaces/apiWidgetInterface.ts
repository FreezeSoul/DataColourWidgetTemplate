import { WidgetInterface } from "@interfaces/widgetInterface";
import { ApiPageInterface } from "@interfaces/apiPageInterface";

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
   * @description 获取部件HTMLDOM对象
   * @returns {HTMLElement}
   * @memberof ApiWidgetInterface
   */
  getElement(): HTMLElement;

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
   * @description 获取aliasName
   * @returns {string}
   * @memberof ApiWidgetInterface
   */
  getAliasName(): string;

  /**
   * @description 获取groupname
   * @returns {string}
   * @memberof ApiWidgetInterface
   */
  getGroupName(): string;

  /**
   * @description 获取classname
   * @returns {string}
   * @memberof ApiWidgetInterface
   */
  getClassName(): string;

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
   * @description 根据绑定名称获取缓存数据
   * @param bindingName
   * @memberof ApiWidgetInterface
   */
  getDataByBinding(
    bindingName: string
  ): {
    datasetId: string;
    datasetName: string;
    data: Array<any>;
    success: boolean;
  };

  /**
   * @description 触发绑定事件
   * @param widget
   * @param eventName
   * @param $event
   * @memberof ApiWidgetInterface
   */
  emitEvent(eventName: string, $event: any);
}
