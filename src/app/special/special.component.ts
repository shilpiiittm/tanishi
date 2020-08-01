import { Component, OnInit, Input,Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SpecialComponent implements OnInit {
  @Input() isSpecial: boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isSpecial = !this.isSpecial;
    this.change.emit({ newValue: this.isSpecial});

}}
