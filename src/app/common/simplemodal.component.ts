import { Component, Input, ViewChild, ElementRef, Inject, OnInit } from '@angular/core';
import { title } from 'process';
import { JQUERY_TOKEN } from './jquery.service';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'simple-modal' ,
    template: `
    <div id="{{elementId}}" #modalcontainer class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">{{title}}</h4>
            <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
          </div>
          <div class="modal-body" (click)="closeModal()">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
    `,
    styles: [`
      .modal-body { height: 250px; overflow-y: scroll; }
    `]
  })
  export class SimpleModalComponent implements OnInit {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    @ViewChild('modalcontainer') containerEl: ElementRef;
    constructor(@Inject(JQUERY_TOKEN) private $: any) {
    }
    // tslint:disable-next-line:typedef
    ngOnInit(){
    }
    // tslint:disable-next-line:typedef
    closeModal() {
      if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
        this.$(this.containerEl.nativeElement).modal('hide');
      }
    }
  }

