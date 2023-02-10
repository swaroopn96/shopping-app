import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // Class property and open class we are binding here
  //@HostBinding('class.open') isOpen = false;
  //   @HostListener('click') toggleOpen() {
  //     this.isOpen = !this.isOpen;
  //   }

  //Using listener to the document to close the dropdown if clicked anywhere outside
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;

    // console.log(event.target);
    // console.log(this.elRef.nativeElement);
  }
  constructor(private elRef: ElementRef) {}
}
