/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './pageSizeView';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from 'ng2-translate/src/translate.service';
import * as import11 from '../../providers/page';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import19 from '@angular/core/src/linker/query_list';
import * as import20 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import22 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import23 from '../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import24 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import25 from '../../node_modules/ionic-angular/components/grid/grid.ngfactory';
import * as import26 from './components/sizeView.ngfactory';
import * as import27 from 'ng2-translate/src/translate.pipe';
import * as import28 from 'ionic-angular/config/config';
import * as import29 from '@angular/core/src/linker/element_ref';
import * as import30 from 'ionic-angular/navigation/view-controller';
import * as import31 from 'ionic-angular/components/app/app';
import * as import32 from 'ionic-angular/components/menu/menu-controller';
import * as import33 from 'ionic-angular/components/toolbar/toolbar';
import * as import34 from 'ionic-angular/util/keyboard';
import * as import35 from '@angular/core/src/zone/ng_zone';
import * as import36 from 'ionic-angular/components/tabs/tabs';
import * as import37 from 'ionic-angular/components/alert/alert';
import * as import38 from '../../db/component';
import * as import39 from '../../providers/size';
import * as import40 from '../../providers/ga';
import * as import41 from 'ionic-angular/components/icon/icon';
import * as import42 from 'ionic-angular/components/button/button';
import * as import43 from 'ionic-angular/components/menu/menu-toggle';
import * as import44 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import45 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import46 from 'ionic-angular/components/navbar/navbar';
import * as import47 from './components/sizeView';
import * as import48 from 'ionic-angular/components/grid/grid';
import * as import49 from '@angular/forms/src/directives/ng_form';
import * as import50 from '@angular/forms/src/directives/control_container';
import * as import51 from '@angular/forms/src/directives/ng_control_status';
import * as import52 from 'ionic-angular/components/content/content';
export var Wrapper_PageSizeView = (function () {
    function Wrapper_PageSizeView(p0, p1, p2, p3) {
        this.changed = false;
        this.context = new import0.PageSizeView(p0, p1, p2, p3);
    }
    Wrapper_PageSizeView.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_PageSizeView;
}());
var renderType_PageSizeView_Host = null;
var _View_PageSizeView_Host0 = (function (_super) {
    __extends(_View_PageSizeView_Host0, _super);
    function _View_PageSizeView_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PageSizeView_Host0, renderType_PageSizeView_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PageSizeView_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-pageSizeView', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_PageSizeView0(this.viewUtils, this.injector(0), this._appEl_0);
        this._PageSizeView_0_4 = new Wrapper_PageSizeView(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.NavParams), this.parentInjector.get(import10.TranslateService), this.parentInjector.get(import11.PageProvider));
        this._appEl_0.initComponent(this._PageSizeView_0_4.context, [], compView_0);
        compView_0.create(this._PageSizeView_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_PageSizeView_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.PageSizeView) && (0 === requestNodeIndex))) {
            return this._PageSizeView_0_4.context;
        }
        return notFoundResult;
    };
    _View_PageSizeView_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._PageSizeView_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_PageSizeView_Host0;
}(import1.AppView));
function viewFactory_PageSizeView_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PageSizeView_Host === null)) {
        (renderType_PageSizeView_Host = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, [], {}));
    }
    return new _View_PageSizeView_Host0(viewUtils, parentInjector, declarationEl);
}
export var PageSizeViewNgFactory = new import13.ComponentFactory('page-pageSizeView', viewFactory_PageSizeView_Host0, import0.PageSizeView);
var styles_PageSizeView = [];
var renderType_PageSizeView = null;
var _View_PageSizeView0 = (function (_super) {
    __extends(_View_PageSizeView0, _super);
    function _View_PageSizeView0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PageSizeView0, renderType_PageSizeView, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PageSizeView0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import14.Wrapper_Header(this.parentInjector.get(import28.Config), new import29.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import30.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import15.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import15.Wrapper_Navbar(this.parentInjector.get(import31.App), this.parentInjector.get(import30.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import28.Config), new import29.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_4, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_4, 'menuToggle', '');
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import16.viewFactory_Button0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Button_4_4 = new import16.Wrapper_Button('', '', this.parentInjector.get(import28.Config), new import29.ElementRef(this._el_4), this.renderer);
        this._MenuToggle_4_5 = new import17.Wrapper_MenuToggle(this.parentInjector.get(import32.MenuController), new import29.ElementRef(this._el_4), this.parentInjector.get(import30.ViewController, null), this._Navbar_2_4.context);
        this._ToolbarItem_4_6 = new import18.Wrapper_ToolbarItem(this.parentInjector.get(import28.Config), new import29.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import33.Toolbar, null), this._Navbar_2_4.context);
        this._query_Button_4_0 = new import19.QueryList();
        this._appEl_4.initComponent(this._Button_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_6, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_6, 'role', 'img');
        this._Icon_6_3 = new import20.Wrapper_Icon(this.parentInjector.get(import28.Config), new import29.ElementRef(this._el_6), this.renderer);
        this._text_7 = this.renderer.createText(null, '\n    ', null);
        compView_4.create(this._Button_4_4.context, [[].concat([
                this._text_5,
                this._el_6,
                this._text_7
            ])], null);
        this._text_8 = this.renderer.createText(null, '\n    ', null);
        this._el_9 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_9 = new import3.AppElement(9, 2, this, this._el_9);
        var compView_9 = import21.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(9), this._appEl_9);
        this._ToolbarTitle_9_4 = new import21.Wrapper_ToolbarTitle(this.parentInjector.get(import28.Config), new import29.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import33.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_9.initComponent(this._ToolbarTitle_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '', null);
        compView_9.create(this._ToolbarTitle_9_4.context, [[].concat([this._text_10])], null);
        this._text_11 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4.context, [
            [].concat([this._el_4]),
            [],
            [],
            [].concat([
                this._text_3,
                this._text_8,
                this._el_9,
                this._text_11
            ])
        ], null);
        this._text_12 = this.renderer.createText(this._el_0, '\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_14 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_14 = new import3.AppElement(14, null, this, this._el_14);
        var compView_14 = import22.viewFactory_Content0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Content_14_4 = new import22.Wrapper_Content(this.parentInjector.get(import28.Config), new import29.ElementRef(this._el_14), this.renderer, this.parentInjector.get(import31.App), this.parentInjector.get(import34.Keyboard), this.parentInjector.get(import35.NgZone), this.parentInjector.get(import30.ViewController, null), this.parentInjector.get(import36.Tabs, null));
        this._appEl_14.initComponent(this._Content_14_4.context, [], compView_14);
        this._text_15 = this.renderer.createText(null, '\n  ', null);
        this._el_16 = this.renderer.createElement(null, 'form', null);
        this._NgForm_16_3 = new import23.Wrapper_NgForm(null, null);
        this._ControlContainer_16_4 = this._NgForm_16_3.context;
        this._NgControlStatusGroup_16_5 = new import24.Wrapper_NgControlStatusGroup(this._ControlContainer_16_4);
        this._text_17 = this.renderer.createText(this._el_16, '\n    ', null);
        this._el_18 = this.renderer.createElement(this._el_16, 'ion-grid', null);
        this._Grid_18_3 = new import25.Wrapper_Grid();
        this._text_19 = this.renderer.createText(this._el_18, '\n      ', null);
        this._el_20 = this.renderer.createElement(this._el_18, 'size-view', null);
        this._appEl_20 = new import3.AppElement(20, 18, this, this._el_20);
        var compView_20 = import26.viewFactory_SizeView0(this.viewUtils, this.injector(20), this._appEl_20);
        this._SizeView_20_4 = new import26.Wrapper_SizeView(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.NavParams), this.parentInjector.get(import37.AlertController), this.parentInjector.get(import10.TranslateService), this.parentInjector.get(import38.WhatsSizeDatabase), this.parentInjector.get(import39.SizeProvider), this.parentInjector.get(import11.PageProvider), this.parentInjector.get(import40.GoogleAnalyticsProvider));
        this._appEl_20.initComponent(this._SizeView_20_4.context, [], compView_20);
        compView_20.create(this._SizeView_20_4.context, [], null);
        this._text_21 = this.renderer.createText(this._el_18, '\n      ', null);
        this._el_22 = this.renderer.createElement(this._el_18, 'ion-row', null);
        this._Row_22_3 = new import25.Wrapper_Row();
        this._text_23 = this.renderer.createText(this._el_22, '\n        ', null);
        this._el_24 = this.renderer.createElement(this._el_22, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_24, 'width-100', '');
        this._Col_24_3 = new import25.Wrapper_Col();
        this._text_25 = this.renderer.createText(this._el_24, '\n          ', null);
        this._el_26 = this.renderer.createElement(this._el_24, 'button', null);
        this.renderer.setElementAttribute(this._el_26, 'block', '');
        this.renderer.setElementAttribute(this._el_26, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_26, 'icon-left', '');
        this.renderer.setElementAttribute(this._el_26, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_26, 'type', 'button');
        this._appEl_26 = new import3.AppElement(26, 24, this, this._el_26);
        var compView_26 = import16.viewFactory_Button0(this.viewUtils, this.injector(26), this._appEl_26);
        this._Button_26_4 = new import16.Wrapper_Button(null, '', this.parentInjector.get(import28.Config), new import29.ElementRef(this._el_26), this.renderer);
        this._appEl_26.initComponent(this._Button_26_4.context, [], compView_26);
        this._text_27 = this.renderer.createText(null, '\n            ', null);
        this._el_28 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_28, 'name', 'return-left');
        this.renderer.setElementAttribute(this._el_28, 'role', 'img');
        this._Icon_28_3 = new import20.Wrapper_Icon(this.parentInjector.get(import28.Config), new import29.ElementRef(this._el_28), this.renderer);
        this._text_29 = this.renderer.createText(null, '', null);
        compView_26.create(this._Button_26_4.context, [[].concat([
                this._text_27,
                this._el_28,
                this._text_29
            ])], null);
        this._text_30 = this.renderer.createText(this._el_24, '\n        ', null);
        this._text_31 = this.renderer.createText(this._el_22, '\n      ', null);
        this._text_32 = this.renderer.createText(this._el_18, '\n    ', null);
        this._text_33 = this.renderer.createText(this._el_16, '\n  ', null);
        this._text_34 = this.renderer.createText(null, '\n', null);
        compView_14.create(this._Content_14_4.context, [
            [],
            [].concat([
                this._text_15,
                this._el_16,
                this._text_34
            ]),
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_4, 'click', this.eventHandler(this._handle_click_4_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._pipe_translate_0 = new import27.TranslatePipe(this.parentInjector.get(import10.TranslateService), this.ref);
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_16, 'submit', this.eventHandler(this._handle_submit_16_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_16, 'reset', this.eventHandler(this._handle_reset_16_1.bind(this)));
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_20, 'entityChange', this.eventHandler(this._handle_entityChange_20_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_26, 'click', this.eventHandler(this._handle_click_26_0.bind(this)));
        this._expr_23 = import7.UNINITIALIZED;
        this._pipe_translate_1 = new import27.TranslatePipe(this.parentInjector.get(import10.TranslateService), this.ref);
        this._expr_24 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ], []);
        return null;
    };
    _View_PageSizeView0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import41.Icon) && (6 === requestNodeIndex))) {
            return this._Icon_6_3.context;
        }
        if (((token === import42.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Button_4_4.context;
        }
        if (((token === import43.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._MenuToggle_4_5.context;
        }
        if (((token === import44.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarItem_4_6.context;
        }
        if (((token === import45.ToolbarTitle) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._ToolbarTitle_9_4.context;
        }
        if (((token === import46.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import33.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Header_0_3.context;
        }
        if (((token === import47.SizeView) && (20 === requestNodeIndex))) {
            return this._SizeView_20_4.context;
        }
        if (((token === import41.Icon) && (28 === requestNodeIndex))) {
            return this._Icon_28_3.context;
        }
        if (((token === import42.Button) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._Button_26_4.context;
        }
        if (((token === import48.Col) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._Col_24_3.context;
        }
        if (((token === import48.Row) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._Row_22_3.context;
        }
        if (((token === import48.Grid) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._Grid_18_3.context;
        }
        if (((token === import49.NgForm) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._NgForm_16_3.context;
        }
        if (((token === import50.ControlContainer) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._ControlContainer_16_4;
        }
        if (((token === import51.NgControlStatusGroup) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._NgControlStatusGroup_16_5.context;
        }
        if (((token === import52.Content) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._Content_14_4.context;
        }
        return notFoundResult;
    };
    _View_PageSizeView0.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import7.ValueUnwrapper();
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._Button_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        var currVal_3 = '';
        this._MenuToggle_4_5.check_menuToggle(currVal_3, throwOnChange, false);
        this._MenuToggle_4_5.detectChangesInternal(this, this._el_4, throwOnChange);
        this._ToolbarItem_4_6.detectChangesInternal(this, this._el_4, throwOnChange);
        var currVal_5 = 'menu';
        this._Icon_6_3.check_name(currVal_5, throwOnChange, false);
        this._Icon_6_3.detectChangesInternal(this, this._el_6, throwOnChange);
        if (this._ToolbarTitle_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        if (this._Content_14_4.detectChangesInternal(this, this._el_14, throwOnChange)) {
            this._appEl_14.componentView.markAsCheckOnce();
        }
        this._NgForm_16_3.detectChangesInternal(this, this._el_16, throwOnChange);
        this._NgControlStatusGroup_16_5.detectChangesInternal(this, this._el_16, throwOnChange);
        this._Grid_18_3.detectChangesInternal(this, this._el_18, throwOnChange);
        var currVal_18 = this.context.model.entity;
        this._SizeView_20_4.check_entity(currVal_18, throwOnChange, false);
        this._SizeView_20_4.detectChangesInternal(this, this._el_20, throwOnChange);
        this._Row_22_3.detectChangesInternal(this, this._el_22, throwOnChange);
        this._Col_24_3.detectChangesInternal(this, this._el_24, throwOnChange);
        var currVal_20 = '';
        this._Button_26_4.check_block(currVal_20, throwOnChange, false);
        var currVal_21 = 'danger';
        this._Button_26_4.check_color(currVal_21, throwOnChange, false);
        if (this._Button_26_4.detectChangesInternal(this, this._el_26, throwOnChange)) {
            this._appEl_26.componentView.markAsCheckOnce();
        }
        var currVal_22 = 'return-left';
        this._Icon_28_3.check_name(currVal_22, throwOnChange, false);
        this._Icon_28_3.detectChangesInternal(this, this._el_28, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_4_0.dirty) {
                this._query_Button_4_0.reset([this._Button_4_4.context]);
                this._ToolbarItem_4_6.context._buttons = this._query_Button_4_0;
                this._query_Button_4_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_4_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_26_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_4 = this._MenuToggle_4_5.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_4, 'hidden', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = this._Icon_6_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_6, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        valUnwrapper.reset();
        var currVal_7 = import4.interpolate(1, '', valUnwrapper.unwrap(this._pipe_translate_0.transform('SIZEVIEW.TITLE')), '');
        if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange, this._expr_7, currVal_7))) {
            this.renderer.setText(this._text_10, currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._Content_14_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_14, 'statusbar-padding', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_11 = this._NgControlStatusGroup_16_5.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_16, 'ng-untouched', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = this._NgControlStatusGroup_16_5.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_16, 'ng-touched', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = this._NgControlStatusGroup_16_5.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_16, 'ng-pristine', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this._NgControlStatusGroup_16_5.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_16, 'ng-dirty', currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_15 = this._NgControlStatusGroup_16_5.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_16, 'ng-valid', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this._NgControlStatusGroup_16_5.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_16, 'ng-invalid', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_23 = this._Icon_28_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementClass(this._el_28, 'hide', currVal_23);
            this._expr_23 = currVal_23;
        }
        valUnwrapper.reset();
        var currVal_24 = import4.interpolate(1, '\n            ', valUnwrapper.unwrap(this._pipe_translate_1.transform('SIZEVIEW.BUTTONS.BACK')), '\n          ');
        if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange, this._expr_24, currVal_24))) {
            this.renderer.setText(this._text_29, currVal_24);
            this._expr_24 = currVal_24;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_PageSizeView0.prototype.destroyInternal = function () {
        this._Icon_6_3.context.ngOnDestroy();
        this._Icon_28_3.context.ngOnDestroy();
        this._Content_14_4.context.ngOnDestroy();
        this._pipe_translate_0.ngOnDestroy();
        this._pipe_translate_1.ngOnDestroy();
    };
    _View_PageSizeView0.prototype._handle_click_4_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_4_5.context.toggle() !== false);
        return (true && pd_0);
    };
    _View_PageSizeView0.prototype._handle_submit_16_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._NgForm_16_3.context.onSubmit($event) !== false);
        return (true && pd_0);
    };
    _View_PageSizeView0.prototype._handle_reset_16_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._NgForm_16_3.context.onReset() !== false);
        return (true && pd_0);
    };
    _View_PageSizeView0.prototype._handle_entityChange_20_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.model.entity = $event) !== false);
        return (true && pd_0);
    };
    _View_PageSizeView0.prototype._handle_click_26_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.goHome() !== false);
        return (true && pd_0);
    };
    return _View_PageSizeView0;
}(import1.AppView));
export function viewFactory_PageSizeView0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PageSizeView === null)) {
        (renderType_PageSizeView = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, styles_PageSizeView, {}));
    }
    return new _View_PageSizeView0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=pageSizeView.ngfactory.js.map