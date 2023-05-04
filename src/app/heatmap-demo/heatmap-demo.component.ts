import { Component, ViewChild, OnInit } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexGrid,
} from 'ng-apexcharts';
import { Apollo } from 'apollo-angular';
import { contributions } from '../graphql/graphql.queries';
import {
  Observable,
  combineLatest,
  combineLatestAll,
  map,
  merge,
  tap,
} from 'rxjs';

export type ChartOptions = {
  series: any;
  chart: any;
  dataLabels: any;
  fill: any;
  colors: any;
  title: any;
  xaxis: any;
  grid: any;
  plotOptions: ApexPlotOptions;
};

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

@Component({
  selector: 'app-heatmap-demo',
  templateUrl: './heatmap-demo.component.html',
  styleUrls: ['./heatmap-demo.component.scss'],
})
export class HeatmapDemoComponent {
  @ViewChild('chart') chart!: ChartComponent;
  contributions$: Observable<any> | undefined;
  chartOptions: any;
  professionalAccount$: Observable<any>;
  personalAccount$: Observable<any>;
  constructor(private apollo: Apollo) {
    this.personalAccount$ = this.getContributionChartData('logan-rose');
    this.professionalAccount$ = this.getContributionChartData('lrose-coveo');

    this.contributions$ = combineLatest([
      this.personalAccount$,
      this.professionalAccount$,
    ]).pipe(
      map(([x, y]) => {
        let combinedEntries = [];
        for (let i = x.seriesEntries.length - 1; i >= 0; i--) {
          let entriesforDayOfWeek = [];
          for (let j = 0; j < x.seriesEntries[i].data.length; j++) {
            entriesforDayOfWeek.push(
              y.seriesEntries[i].data[j] + x.seriesEntries[i].data[j]
            );
          }
          console.log(entriesforDayOfWeek);
          combinedEntries.push({
            name: DAYS[i],
            data: entriesforDayOfWeek,
          });
        }
        console.log(combinedEntries);
        return {
          chart: x.chart,
          colors: x.colors,
          dataLabels: x.dataLabels,
          seriesEntries: combinedEntries,
          totalContributions: x.totalContributions + y.totalContributions,
          xAxis: x.xAxis,
        };
      })
    );
    this.contributions$.subscribe((x) => {
      console.log('hello');
    });
  }

  getContributionChartData(userName: string) {
    return this.apollo
      .watchQuery({
        query: contributions,
        variables: {
          userName: userName,
        },
      })
      .valueChanges.pipe(
        map((x: any) => {
          const calendar =
            x.data.user.contributionsCollection.contributionCalendar;
          let initialValue: any[] = [];
          console.log(calendar.weeks);
          const weekStarts = calendar.weeks.map((x: any) => {
            return x.contributionDays.map((y: any) => {
              return y.date;
            })[0];
          });
          console.log(calendar.weeks);
          let seriesEntries = [];
          for (let i = 6; i >= 0; i--) {
            seriesEntries.push({
              name: DAYS[i],
              data: calendar.weeks.map((x: any) => {
                return (
                  x.contributionDays.map((y: any) => {
                    return y.contributionCount;
                  })[i] ?? 0
                );
              }),
            });
          }
          return {
            totalContributions: calendar.totalContributions,
            xAxis: { type: 'category', categories: weekStarts },
            seriesEntries: seriesEntries,
            colors: ['#008FFB'],
            chart: {
              height: 225,
              width: '350%',
              type: 'heatmap',
            },
            dataLabels: {
              enabled: false,
            },
          };
        }),
        tap((x: any) => {
          console.log(x);
        })
      );
  }
}
