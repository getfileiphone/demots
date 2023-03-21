import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { FinancialDataService } from "./FinancialDataService";
import {
  ChartSeriesEventArgs,
  HighlightingMode,
  IgxCategoryChartComponent,
  IgxCategoryDateTimeXAxisComponent,
  IgxChartSeriesEventArgs,
  IgxDataChartComponent,
  IgxFinancialChartComponent,
  IgxTimeAxisLabelFormatComponent,
  LegendHighlightingMode,
  SeriesHighlightingMode,
} from "igniteui-angular-charts";
import { defineCustomElements } from "igniteui-dockmanager/loader";
import {
  changei18n,
  IgxDatePickerComponent,
  IgxMonthPickerComponent,
} from "igniteui-angular";
import { registerLocaleData } from "@angular/common";
import localeJA from "@angular/common/locales/ja";
import {
  IgxResourceStringsBG,
  IgxResourceStringsCS,
  IgxResourceStringsDA,
  IgxResourceStringsDE,
  IgxResourceStringsES,
  IgxResourceStringsFR,
  IgxResourceStringsHU,
  IgxResourceStringsIT,
  IgxResourceStringsJA,
  IgxResourceStringsKO,
  IgxResourceStringsNB,
  IgxResourceStringsNL,
  IgxResourceStringsPL,
  IgxResourceStringsPT,
  IgxResourceStringsRO,
  IgxResourceStringsSV,
  IgxResourceStringsTR,
  IgxResourceStringsZHHANS,
} from "igniteui-angular-i18n";
import {
  IgcDockManagerPaneType,
  IgcSplitPaneOrientation,
  IgcDockManagerLayout,
  IgcDockManagerComponent,
  IgcContentPane,
} from "igniteui-dockmanager";
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FinancialDataService],
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  @ViewChild("volumntooltip", { static: false })
  volumntooltip: TemplateRef<object>;
  @ViewChild("tooltip1", { static: false })
  tooltip1: TemplateRef<object>;
  @ViewChild("chart", { static: false })
  chart: IgxCategoryChartComponent;
  @ViewChild("picker", { static: false })
  monthPicker: IgxMonthPickerComponent;
  @ViewChild("datepicker", { static: false })
  dateppicker: IgxDatePickerComponent;
  @ViewChild("xAxisShared", { static: false })
  xAxisShared: IgxCategoryDateTimeXAxisComponent;
  @ViewChild("chartDT", { static: false })
  chartDT: IgxDataChartComponent;
  doc: IgcDockManagerComponent;
  public date = new Date(2021, 6, 12, 7, 30, 0);
  public data: any[];
  dataCategory: any[] = [
    {
      Date: new Date("2022/08/12"),
      D0: 10,
    },
    {
      Date: new Date("2022/08/14"),
      D0: 17,
    },
    {
      Date: new Date("2022/08/16"),
      D0: 14,
      D1: 17,
      D2: 14,
    },
  ];
  toolgle = false;
  ngOnInit(): void {}
  brushes: any = ["#c4c4c4", "#c4c4c4", "#8FBC8F"];
}
