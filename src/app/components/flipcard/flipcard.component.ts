import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'flipcard',
	templateUrl: './flipcard.component.html',
	styleUrls: ['./flipcard.component.css']
})
export class FlipcardComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() rotation: string;
	@Input() eventaction: string;
	@Input() frontcolor: string;
	@Input() frontbgcolor: string;
	@Input() backcolor: string;
	@Input() backbgcolor: string;
	@Input() width: string;
	@Input() height: string;

    @ViewChild('flipcard') el: ElementRef;

    constructor() { }

    ngOnInit() {

        var main = this.el.nativeElement;
        var element = document.querySelector('.container__sub');

        main.style.width = this.width + "px";
        main.style.height = this.height + "px";

        main.children[0].children[0].style.background = this.frontbgcolor;
        main.children[0].children[0].style.color = this.frontcolor;

        main.children[0].children[1].style.background = this.backbgcolor;
        main.children[0].children[1].style.color = this.backcolor;

        if(this.rotation == "vertical"){

            if(this.eventaction == "hover"){

                main.addEventListener('mouseover', function () {

                    element.classList.toggle('flip__vertical');
                    main.children[0].children[0].style.transform = "rotateX(180deg)";

                });

            } else if(this.eventaction == "click"){

                main.addEventListener('click', function () {

                    element.classList.toggle('flip__vertical');
                    main.children[0].children[0].style.transform = "rotateX(180deg)";

                });

            }

        } else if (this.rotation == "horizontal"){

            if(this.eventaction == "hover"){

                main.addEventListener('mouseover', function () {

                    element.classList.toggle('flip__horizontal');
                    main.children[0].children[0].style.transform = "rotateY(-180deg)";

                });

            } else if(this.eventaction == "click"){

                main.addEventListener('click', function () {

                    element.classList.toggle('flip__horizontal');
                    main.children[0].children[0].style.transform = "rotateY(-180deg)";

                });

            }

        }

    }

}
