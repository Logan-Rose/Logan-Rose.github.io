import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { contributions } from '../graphql/graphql.queries';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-github-contributions',
  templateUrl: './github-contributions.component.html',
  styleUrls: ['./github-contributions.component.scss'],
})
export class GithubContributionsComponent implements OnInit {
  contributions$: Observable<any> | undefined;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.contributions$ = this.apollo
      .watchQuery({
        query: contributions,
        variables: {
          userName: 'logan-rose',
        },
      })
      .valueChanges.pipe(
        map((x: any) => {
          const calendar =
            x.data.user.contributionsCollection.contributionCalendar;
          let initialValue: any[] = [];
          console.log(calendar.weeks);
          return {
            totalContributions: calendar.totalContributions,
          };
        }),
        tap((x: any) => {
          console.log(x);
        })
      );
  }
}
