import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[resizer]'
})
export class NgxResizerDirective implements OnInit {
  height: number = 300;
  width:number = 300;
  oldY = 300;
  oldX = 300;
  grabber = false;

  constructor(private el: ElementRef) { }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    if (!this.grabber) {
      return;
    }

    this.resizer(event.clientY - this.oldY, event.clientX - this.oldX);
    this.oldY = event.clientY;
    this.oldX = event.clientX;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.grabber = false;
  }

  resizer(offsetY: number, clientX:number) {
    this.height += offsetY;
    this.width += clientX;
    //this.el.nativeElement.parentNode.style.height = this.height + "px";
    this.el.nativeElement.parentNode.style.width = this.width + "px";
  }

  @HostListener('mousedown', ['$event']) onResize(event: MouseEvent, resizer?: Function) {
    this.grabber = true;
    this.oldY = event.clientY;
    this.oldX = event.clientX;
    event.preventDefault();
  }

  ngOnInit() {
    this.height = parseInt(this.el.nativeElement.parentNode.offsetHeight);
    this.width = parseInt(this.el.nativeElement.parentNode.offsetWidth);
  }

}