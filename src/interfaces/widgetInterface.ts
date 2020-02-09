import { ApiPageInterface } from "@interfaces/apiPageInterface";
import { ApiWidgetInterface } from "@interfaces/apiWidgetInterface";

/**
 * @description 小部件接口定义
 * @author FreezeSoul
 * @date 2019-12-03
 * @export
 * @interface WidgetInterface
 */
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
