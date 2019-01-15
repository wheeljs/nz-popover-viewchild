import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NzPopoverDirective } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  title = 'nz-popover-viewchild';

  @ViewChild(NzPopoverDirective)
  popover: NzPopoverDirective;

  ngAfterViewInit(): void {
    console.log(this.popover);
  }
}
