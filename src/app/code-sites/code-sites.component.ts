import { Component, OnInit } from '@angular/core';
import { CodeSite } from './code-site';
import { SITES } from './codeSiteList';
@Component({
  selector: 'app-code-sites',
  templateUrl: './code-sites.component.html',
  styleUrls: ['./code-sites.component.css'],
})
export class CodeSitesComponent implements OnInit {
  sites = SITES;

  constructor() {}

  ngOnInit(): void {}
}
