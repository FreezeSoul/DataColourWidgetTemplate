import { WidgetInterface } from "@interfaces/widgetInterface";
import { ApiPageInterface } from "@interfaces/apiPageInterface";
import { ApiWidgetInterface } from "@interfaces/apiWidgetInterface";

//import * as a from "module";
import "./assets/widget.less";
import templateString from "./assets/template.html";

export default class WidgetSimple implements WidgetInterface {
  pageApi: ApiPageInterface;
  widgetApi: ApiWidgetInterface;

  _option: any = {
    version: "1.0",
    test: { text: "文本测试" },
    func1: function(abc: string) {
      console.log(abc);
    },
    func2: (abc: string) => {
      console.log(abc);
    }
  };

  container: HTMLElement;

  constructor() {}

  //private amdModule: any;

  public async init(container: HTMLElement) {
    this.container = container;
    return await new Promise<void>(resolve => {
      /*System.import("amdModule").then((amdModule: any) => {
        this.amdModule = amdModule;
        resolve();
      });*/
      resolve();
    });
  }

  public setOption(option: any) {
    this._option = _.cloneDeep(option);
  }

  public getOption() {
    return _.cloneDeep(this._option);
  }

  public setData(data: any) {
    console.log("数据打包上来了");
    console.log(data);
  }

  public render() {
    $(this.container).html(templateString);
  }

  public resize() {}

  public dispose() {}
}
