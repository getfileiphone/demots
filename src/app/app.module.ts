import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import {  IgxCategoryChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCoreModule, IgxFinancialChartModule, IgxFinancialPriceSeriesModule, IgxLegendModule, IgxMoneyFlowIndexIndicatorModule, IgxNumberAbbreviatorModule, IgxNumericXAxisModule, IgxNumericYAxisModule } from "igniteui-angular-charts";
import { FinancialDataService } from "./FinancialDataService";
import { IgxCalendarModule, IgxDatePickerModule } from 'igniteui-angular';
import { defineCustomElements } from 'igniteui-dockmanager/loader';
defineCustomElements();
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxFinancialChartModule,
    IgxLegendModule,
    IgxNumberAbbreviatorModule,
    IgxNumericXAxisModule,
    IgxNumericYAxisModule,
    IgxMoneyFlowIndexIndicatorModule,
    IgxLegendModule,
    IgxCalendarModule,
    IgxDatePickerModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxFinancialPriceSeriesModule,
    IgxCategoryChartCoreModule
],
  providers: [FinancialDataService],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
