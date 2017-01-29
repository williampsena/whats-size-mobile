/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/platform/platform';
import * as import9 from 'ng2-translate/src/translate.service';
import * as import10 from '../db/component';
import * as import11 from 'ionic-cache/src/cache.service';
import * as import12 from '../providers/ga';
import * as import13 from '@angular/core/src/metadata/view';
import * as import14 from '@angular/core/src/linker/component_factory';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '../node_modules/ionic-angular/components/menu/menu.ngfactory';
import * as import17 from '../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import18 from '../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import19 from '../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import20 from '../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import21 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import22 from '../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import23 from 'ionic-angular/components/menu/menu-controller';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from 'ionic-angular/config/config';
import * as import26 from 'ionic-angular/util/keyboard';
import * as import27 from '@angular/core/src/zone/ng_zone';
import * as import28 from 'ionic-angular/gestures/gesture-controller';
import * as import29 from 'ionic-angular/navigation/view-controller';
import * as import30 from 'ionic-angular/components/navbar/navbar';
import * as import31 from 'ionic-angular/components/app/app';
import * as import32 from 'ionic-angular/components/tabs/tabs';
import * as import33 from '@angular/core/src/linker/template_ref';
import * as import34 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import35 from 'ionic-angular/navigation/nav-controller-base';
import * as import36 from '@angular/core/src/linker/component_factory_resolver';
import * as import37 from 'ionic-angular/transitions/transition-controller';
import * as import38 from 'ionic-angular/navigation/deep-linker';
import * as import39 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import40 from 'ionic-angular/components/toolbar/toolbar';
import * as import41 from '@angular/common/src/directives/ng_for';
import * as import42 from 'ionic-angular/components/list/list';
import * as import43 from 'ionic-angular/components/content/content';
import * as import44 from 'ionic-angular/components/menu/menu';
import * as import45 from 'ionic-angular/components/nav/nav';
import * as import46 from '../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import47 from '../node_modules/ionic-angular/components/menu/menu-close.ngfactory';
import * as import48 from 'ng2-translate/src/translate.pipe';
import * as import49 from 'ionic-angular/util/form';
import * as import50 from 'ionic-angular/components/item/item';
import * as import51 from 'ionic-angular/components/menu/menu-close';
export class Wrapper_WhatsSizeApp {
  context:import0.WhatsSizeApp;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any) {
    this.changed = false;
    this.context = new import0.WhatsSizeApp(p0,p1,p2,p3,p4);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_WhatsSizeApp_Host:import2.RenderComponentType = (null as any);
class _View_WhatsSizeApp_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _WhatsSizeApp_0_4:Wrapper_WhatsSizeApp;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_WhatsSizeApp_Host0,renderType_WhatsSizeApp_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_WhatsSizeApp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._WhatsSizeApp_0_4 = new Wrapper_WhatsSizeApp(this.parentInjector.get(import8.Platform),this.parentInjector.get(import9.TranslateService),this.parentInjector.get(import10.WhatsSizeDatabase),this.parentInjector.get(import11.CacheService),this.parentInjector.get(import12.GoogleAnalyticsProvider));
    this._appEl_0.initComponent(this._WhatsSizeApp_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._WhatsSizeApp_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.WhatsSizeApp) && (0 === requestNodeIndex))) { return this._WhatsSizeApp_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._WhatsSizeApp_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_WhatsSizeApp_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_WhatsSizeApp_Host === (null as any))) { (renderType_WhatsSizeApp_Host = viewUtils.createRenderComponentType('',0,import13.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_WhatsSizeApp_Host0(viewUtils,parentInjector,declarationEl);
}
export const WhatsSizeAppNgFactory:import14.ComponentFactory<import0.WhatsSizeApp> = new import14.ComponentFactory<import0.WhatsSizeApp>('ng-component',viewFactory_WhatsSizeApp_Host0,import0.WhatsSizeApp);
const styles_WhatsSizeApp:any[] = ([] as any[]);
var renderType_WhatsSizeApp:import2.RenderComponentType = (null as any);
class _View_WhatsSizeApp0 extends import1.AppView<import0.WhatsSizeApp> {
  _viewQuery_Nav_0:import15.QueryList<any>;
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Menu_0_4:import16.Wrapper_Menu;
  _query_Content_0_0:import15.QueryList<any>;
  _text_1:any;
  _el_2:any;
  _Header_2_3:import17.Wrapper_Header;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _Toolbar_4_4:import17.Wrapper_Toolbar;
  _text_5:any;
  _el_6:any;
  /*private*/ _appEl_6:import3.AppElement;
  _ToolbarTitle_6_4:import18.Wrapper_ToolbarTitle;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  /*private*/ _appEl_11:import3.AppElement;
  _Content_11_4:import19.Wrapper_Content;
  _text_12:any;
  _el_13:any;
  _List_13_3:import20.Wrapper_List;
  _text_14:any;
  _anchor_15:any;
  /*private*/ _appEl_15:import3.AppElement;
  _TemplateRef_15_5:any;
  _NgFor_15_6:import21.Wrapper_NgFor;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  /*private*/ _appEl_21:import3.AppElement;
  _Nav_21_4:import22.Wrapper_Nav;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_WhatsSizeApp0,renderType_WhatsSizeApp,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._viewQuery_Nav_0 = new import15.QueryList<any>();
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-menu',(null as any));
    this.renderer.setElementAttribute(this._el_0,'role','navigation');
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import16.viewFactory_Menu0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Menu_0_4 = new import16.Wrapper_Menu(this.parentInjector.get(import23.MenuController),new import24.ElementRef(this._el_0),this.parentInjector.get(import25.Config),this.parentInjector.get(import8.Platform),this.renderer,this.parentInjector.get(import26.Keyboard),this.parentInjector.get(import27.NgZone),this.parentInjector.get(import28.GestureController));
    this._query_Content_0_0 = new import15.QueryList<any>();
    this._appEl_0.initComponent(this._Menu_0_4.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'ion-header',(null as any));
    this._Header_2_3 = new import17.Wrapper_Header(this.parentInjector.get(import25.Config),new import24.ElementRef(this._el_2),this.renderer,this.parentInjector.get(import29.ViewController,(null as any)));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'ion-toolbar',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','toolbar');
    this.renderer.setElementAttribute(this._el_4,'color','primary');
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import17.viewFactory_Toolbar0(this.viewUtils,this.injector(4),this._appEl_4);
    this._Toolbar_4_4 = new import17.Wrapper_Toolbar(this.parentInjector.get(import29.ViewController,(null as any)),this.parentInjector.get(import25.Config),new import24.ElementRef(this._el_4),this.renderer);
    this._appEl_4.initComponent(this._Toolbar_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_6 = new import3.AppElement(6,4,this,this._el_6);
    var compView_6:any = import18.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(6),this._appEl_6);
    this._ToolbarTitle_6_4 = new import18.Wrapper_ToolbarTitle(this.parentInjector.get(import25.Config),new import24.ElementRef(this._el_6),this.renderer,this._Toolbar_4_4.context,this.parentInjector.get(import30.Navbar,(null as any)));
    this._appEl_6.initComponent(this._ToolbarTitle_6_4.context,([] as any[]),compView_6);
    this._text_7 = this.renderer.createText((null as any),'Whats Size',(null as any));
    compView_6.create(this._ToolbarTitle_6_4.context,[([] as any[]).concat([this._text_7])],(null as any));
    this._text_8 = this.renderer.createText((null as any),'\n    ',(null as any));
    compView_4.create(this._Toolbar_4_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_5,
        this._el_6,
        this._text_8
      ]
      )
    ]
    ,(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_10 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'ion-content',(null as any));
    this._appEl_11 = new import3.AppElement(11,0,this,this._el_11);
    var compView_11:any = import19.viewFactory_Content0(this.viewUtils,this.injector(11),this._appEl_11);
    this._Content_11_4 = new import19.Wrapper_Content(this.parentInjector.get(import25.Config),new import24.ElementRef(this._el_11),this.renderer,this.parentInjector.get(import31.App),this.parentInjector.get(import26.Keyboard),this.parentInjector.get(import27.NgZone),this.parentInjector.get(import29.ViewController,(null as any)),this.parentInjector.get(import32.Tabs,(null as any)));
    this._appEl_11.initComponent(this._Content_11_4.context,([] as any[]),compView_11);
    this._text_12 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_13 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_13_3 = new import20.Wrapper_List(this.parentInjector.get(import25.Config),new import24.ElementRef(this._el_13),this.renderer,this.parentInjector.get(import28.GestureController));
    this._text_14 = this.renderer.createText(this._el_13,'\n      ',(null as any));
    this._anchor_15 = this.renderer.createTemplateAnchor(this._el_13,(null as any));
    this._appEl_15 = new import3.AppElement(15,13,this,this._anchor_15);
    this._TemplateRef_15_5 = new import33.TemplateRef_(this._appEl_15,viewFactory_WhatsSizeApp1);
    this._NgFor_15_6 = new import21.Wrapper_NgFor(this._appEl_15.vcRef,this._TemplateRef_15_5,this.parentInjector.get(import34.IterableDiffers),this.ref);
    this._text_16 = this.renderer.createText(this._el_13,'\n    ',(null as any));
    this._text_17 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_11.create(this._Content_11_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_12,
        this._el_13,
        this._text_17
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_18 = this.renderer.createText((null as any),'\n\n',(null as any));
    this._query_Content_0_0.reset([this._Content_11_4.context]);
    this._Menu_0_4.context.menuContent = this._query_Content_0_0.first;
      compView_0.create(this._Menu_0_4.context,[([] as any[]).concat([
        this._text_1,
        this._el_2,
        this._text_10,
        this._el_11,
        this._text_18
      ]
    )],(null as any));
    this._text_19 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._text_20 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_21 = this.renderer.createElement(parentRenderNode,'ion-nav',(null as any));
    this.renderer.setElementAttribute(this._el_21,'color','secondary');
    this.renderer.setElementAttribute(this._el_21,'swipeBackEnabled','false');
    this._appEl_21 = new import3.AppElement(21,(null as any),this,this._el_21);
    var compView_21:any = import22.viewFactory_Nav0(this.viewUtils,this.injector(21),this._appEl_21);
    this._Nav_21_4 = new import22.Wrapper_Nav(this.parentInjector.get(import29.ViewController,(null as any)),this.parentInjector.get(import35.NavControllerBase,(null as any)),this.parentInjector.get(import31.App),this.parentInjector.get(import25.Config),this.parentInjector.get(import26.Keyboard),new import24.ElementRef(this._el_21),this.parentInjector.get(import27.NgZone),this.renderer,this.parentInjector.get(import36.ComponentFactoryResolver),this.parentInjector.get(import28.GestureController),this.parentInjector.get(import37.TransitionController),this.parentInjector.get(import38.DeepLinker,(null as any)));
    this._appEl_21.initComponent(this._Nav_21_4.context,([] as any[]),compView_21);
    compView_21.create(this._Nav_21_4.context,([] as any[]),(null as any));
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._viewQuery_Nav_0.reset([this._Nav_21_4.context]);
    this.context.nav = this._viewQuery_Nav_0.first;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._anchor_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._text_19,
      this._text_20,
      this._el_21
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import39.ToolbarTitle) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._ToolbarTitle_6_4.context; }
    if (((token === import40.Toolbar) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._Toolbar_4_4.context; }
    if (((token === import40.Header) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._Header_2_3.context; }
    if (((token === import33.TemplateRef) && (15 === requestNodeIndex))) { return this._TemplateRef_15_5; }
    if (((token === import41.NgFor) && (15 === requestNodeIndex))) { return this._NgFor_15_6.context; }
    if (((token === import42.List) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._List_13_3.context; }
    if (((token === import43.Content) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._Content_11_4.context; }
    if (((token === import44.Menu) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._Menu_0_4.context; }
    if (((token === import45.Nav) && (21 === requestNodeIndex))) { return this._Nav_21_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this._Nav_21_4.context;
    this._Menu_0_4.check_content(currVal_0,throwOnChange,false);
    if (this._Menu_0_4.detectChangesInternal(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    this._Header_2_3.detectChangesInternal(this,this._el_2,throwOnChange);
    const currVal_1:any = 'primary';
    this._Toolbar_4_4.check_color(currVal_1,throwOnChange,false);
    if (this._Toolbar_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    if (this._ToolbarTitle_6_4.detectChangesInternal(this,this._el_6,throwOnChange)) { this._appEl_6.componentView.markAsCheckOnce(); }
    if (this._Content_11_4.detectChangesInternal(this,this._el_11,throwOnChange)) { this._appEl_11.componentView.markAsCheckOnce(); }
    this._List_13_3.detectChangesInternal(this,this._el_13,throwOnChange);
    const currVal_4:any = this.context.pages;
    this._NgFor_15_6.check_ngForOf(currVal_4,throwOnChange,false);
    this._NgFor_15_6.detectChangesInternal(this,this._anchor_15,throwOnChange);
    const currVal_5:any = this.context.rootPage;
    this._Nav_21_4.check_root(currVal_5,throwOnChange,false);
    const currVal_6:any = 'false';
    this._Nav_21_4.check_swipeBackEnabled(currVal_6,throwOnChange,false);
    this._Nav_21_4.detectChangesInternal(this,this._el_21,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = this._Toolbar_4_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_4,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this._Content_11_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_11,'statusbar-padding',currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Nav_21_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_11_4.context.ngOnDestroy();
    this._Menu_0_4.context.ngOnDestroy();
  }
}
export function viewFactory_WhatsSizeApp0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.WhatsSizeApp> {
  if ((renderType_WhatsSizeApp === (null as any))) { (renderType_WhatsSizeApp = viewUtils.createRenderComponentType('',0,import13.ViewEncapsulation.None,styles_WhatsSizeApp,{})); }
  return new _View_WhatsSizeApp0(viewUtils,parentInjector,declarationEl);
}
class _View_WhatsSizeApp1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Item_0_4:import46.Wrapper_Item;
  _ItemContent_0_5:import46.Wrapper_ItemContent;
  _MenuClose_0_6:import47.Wrapper_MenuClose;
  _query_Label_0_0:import15.QueryList<any>;
  _query_Button_0_1:import15.QueryList<any>;
  _query_Icon_0_2:import15.QueryList<any>;
  _text_1:any;
  _pipe_translate_0:import48.TranslatePipe;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_WhatsSizeApp1,renderType_WhatsSizeApp,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','item item-block');
    this.renderer.setElementAttribute(this._el_0,'ion-item','');
    this.renderer.setElementAttribute(this._el_0,'menuClose','');
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import46.viewFactory_Item0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Item_0_4 = new import46.Wrapper_Item(this.parent.parentInjector.get(import49.Form),this.parent.parentInjector.get(import25.Config),new import24.ElementRef(this._el_0),this.renderer);
    this._ItemContent_0_5 = new import46.Wrapper_ItemContent();
    this._MenuClose_0_6 = new import47.Wrapper_MenuClose(this.parent.parentInjector.get(import23.MenuController));
    this._query_Label_0_0 = new import15.QueryList<any>();
    this._query_Button_0_1 = new import15.QueryList<any>();
    this._query_Icon_0_2 = new import15.QueryList<any>();
    this._appEl_0.initComponent(this._Item_0_4.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'',(null as any));
    this._query_Label_0_0.reset(([] as any[]));
    this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
    compView_0.create(this._Item_0_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([this._text_1]),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._pipe_translate_0 = new import48.TranslatePipe(this.parentInjector.get(import9.TranslateService),this.parent.ref);
    this._expr_3 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import50.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._Item_0_4.context; }
    if (((token === import50.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._ItemContent_0_5.context; }
    if (((token === import51.MenuClose) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MenuClose_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import7.ValueUnwrapper();
    if (this._Item_0_4.detectChangesInternal(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    this._ItemContent_0_5.detectChangesInternal(this,this._el_0,throwOnChange);
    const currVal_2:any = '';
    this._MenuClose_0_6.check_menuClose(currVal_2,throwOnChange,false);
    this._MenuClose_0_6.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_0_1.dirty) {
        this._query_Button_0_1.reset(([] as any[]));
        this._Item_0_4.context._buttons = this._query_Button_0_1;
        this._query_Button_0_1.notifyOnChanges();
      }
      if (this._query_Icon_0_2.dirty) {
        this._query_Icon_0_2.reset(([] as any[]));
        this._Item_0_4.context._icons = this._query_Icon_0_2;
        this._query_Icon_0_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_0_4.context.ngAfterContentInit(); }
    }
    valUnwrapper.reset();
    const currVal_3:any = import4.interpolate(1,'\n        ',valUnwrapper.unwrap(this._pipe_translate_0.transform(this.context.$implicit.title)),'\n      ');
    if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange,this._expr_3,currVal_3))) {
      this.renderer.setText(this._text_1,currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._pipe_translate_0.ngOnDestroy();
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.openPage(this.context.$implicit)) !== false);
    const pd_1:any = ((<any>this._MenuClose_0_6.context.close()) !== false);
    return ((true && pd_0) && pd_1);
  }
}
function viewFactory_WhatsSizeApp1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_WhatsSizeApp1(viewUtils,parentInjector,declarationEl);
}