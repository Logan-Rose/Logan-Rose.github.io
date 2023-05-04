import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-live-resume',
  templateUrl: './live-resume.component.html',
  styleUrls: ['./live-resume.component.scss'],
})
export class LiveResumeComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LiveResumeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    console.log('new Modal');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  skills = [
    `I have gained significant experience working with Angular at both of my COOP placements. I first learned the framework and became acquanited with the basic principles while working at The Privy Council Office. Working at Vectorsolv I developed a more indepth understanding of how angular works, and how to build beautiful web apps (like this one!) using it`,
    `NestJs is a Node framework heavily influenced by Angular's architecture, I used this framework while working at vectorsolv. I also used NodeJs for the back end of my cryptocurrency trading bot`,
    `I have been using TypeScript for work, school, and side projects for the past year, and I have been dealing with far fewer type errors, imagine that!`,
    `I have used Python for schoolwork and a variety of side projects. In my second year of school, I built a sorting algorithm visualizer using python, and the first iteration of my cryptocurrency trading bot was built with python`,
    `My first Love! While it has been a while since I have written much code in Java, it was the first language I learned back in high school. Over my university studies I have used Java for several school projects`,
    `I used C# for back end development while working at The Privy Council Office`,
    `Node seems to be the water I have been swimming in for some time now, I used node while working at vectorsolv, and I have used it in many of my side projects`,
    `I used RxJs to build responsive user interfaces and handle HTTP requests at Vectorsolv. I am also using RxJs for these same purposes in my cryptocurrency trading bot`,
    `I first used PostgreSQL in a databases course. The final project for this course was an AirBnB clone website. I also used PostGreSQL while working at Vectorsolv`,
    `I became very familiar with TypeORM (for better or for worse) while working  at Vectorsolv.`,
    `After first learning how to use firebase for a project in my second year, I decided to use it for the database functionality of my debate partner assignment program`,
    `I have worked on dockerized projects at both of my COOP placements. In my spare time I have been familiarizing myself with creating new docker containers and building projects in them`,
    `I have built REST APIs for internal use, and have used public facing REST APIs in work and independant Projects. While working at The Privy Council Office, I developed a social media monitoring feature that interacted with various social media APIs. My cryptocurrency trading bot executes trades using the Binance API`,
    `I have used Git for version management in work, school, and personal projects. Over the years I have worked hard to come skilled at coding collaboratively, handling conflicts, and committing often!`,
    `My team used SCRUM methodology while working at Vectorsolv, and I loved it! I find that breaking my work up into digestable chunks makes tackling big, challenging task that much easier!`,
  ];
  openDialog(skillIndex: number) {
    // const tmp = this.dialog.open(DialogComponent, {
    //   width: '500px',
    //   panelClass: 'dialog',
    //   data: { text: this.skills[skillIndex] },
    // });
  }
}
