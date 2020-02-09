/// <reference path="../../typings/index.d.ts"/>
/// <reference path="../../typings/htmlimp.d.ts"/>
import { WidgetInterface } from "@interfaces/widgetInterface";
import { ApiPageInterface } from "@interfaces/apiPageInterface";
import { ApiWidgetInterface } from "@interfaces/apiWidgetInterface";

//import * as $ from "jquery";
//import templateString from "./assets/template.html";
import "./assets/widget.less";

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

  private templateString: string;

  private $: any;

  public async init(container: HTMLElement) {
    this.container = container;
    this.templateString = (
      await import(/* webpackChunkName: "template" */ "./assets/template.html")
    ).default;
    return await new Promise(resolve => {
      System.import("jquery").then(($: any) => {
        this.$ = $;
        resolve();
      });
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
    this.$(this.container).html(this.templateString);
  }

  public resize() {}

  public dispose() {}
}
