import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-header',
  templateUrl: './component-header.component.html',
  styleUrls: ['./component-header.component.css']
})
export class ComponentHeaderComponent implements OnInit {
  @Input() name: string;

  constructor() {
  }

  ngOnInit() {
  }

}
