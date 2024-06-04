import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/api/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: any[] = [];
  media: any[] = [];
  heritageSites: any[] = [];
  mappings: any[] = [];

  constructor(private main: MainService) { }

  ngOnInit(): void {
    // Fetch articles
    this.main.getArticlesList().subscribe((res: any) => {
      this.articles = res;
    });

    // Fetch media
    this.main.getMediaList().subscribe((res: any) => {
      this.media = res;
    });

    // Fetch heritage sites
    this.main.getSiteList().subscribe((res: any) => {
      this.heritageSites = res;
    });

    // Fetch mappings
    this.main.getMappingList().subscribe((res: any) => {
      this.mappings = res;
    });
  }
}
