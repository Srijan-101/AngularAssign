import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector : '[appDropdown]'
})
export class DropDownDirective{
   @Input() appDropDownMenu: HTMLElement;
   isOpen:boolean = false;
   
   constructor(private el:ElementRef,private renderer:Renderer2){}

   @HostListener('click') toggleOpen(eventData:Event){
       this.isOpen = !this.isOpen

       if(this.appDropDownMenu && !this.isOpen){
          this.renderer.addClass(this.appDropDownMenu,'show');
       }
       if(this.appDropDownMenu && this.isOpen){
         this.renderer.removeClass(this.appDropDownMenu,'show');
       }
   }

}