import {Directive, ElementRef, Input, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: "[lazyLoad]"
})
export default class LazyLoadDirective
{
  @Input()
  lazyLoad: string;

  constructor(private elementRef: ElementRef) {

    // console.info("----> ", elementRef.nativeElement);

  }

  @HostListener('mouseenter')
  onMouseOver(event: any)
  {
    // console.log("Hi", this.lazyLoad);
  }

  ngOnInit()
  {

    setTimeout(() => {

      this.loadImage();

    }, 2500);

  }

  loadImage()
  {
    let image = document.createElement("img");
    image.src = this.lazyLoad;
    // image.style.width = "1px";
    // image.style.height = "1px";

    image.addEventListener("load", event => {

      this.elementRef.nativeElement.style.backgroundImage = `url(${this.lazyLoad})`;

    }, false);
  }



}
