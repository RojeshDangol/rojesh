import { Component, Input, OnInit, OnDestroy, Renderer2, ViewChild, ElementRef, ViewEncapsulation, Directive, AfterViewInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
// import { animations } from './home-animations';
import { animations } from '../../services/animation/animate';
import { cityAnimations } from '../../services/animation/city-animation';
import { ballAnimations } from '../../services/animation/ball-animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
                './home-city.css',
                './ball.css',
                // '../../app.component.css'
              ],
  animations: [
          animations.animeTrigger1,
          animations.animeTrigger2,
          ballAnimations.ballAnimate1,
          ballAnimations.ballAnimate2,
          ballAnimations.ballAnimate3,
          ballAnimations.ballAnimate4,
          ballAnimations.displayAnimate,
          animations.drawSvg,
          cityAnimations.controlCityBox,
          cityAnimations.controlCityLine,
          cityAnimations.controlCityCircle,
          cityAnimations.verticalAnimationMoon,
          cityAnimations.verticalAnimation,
          cityAnimations.verticalAnimation1,
          cityAnimations.verticalAnimation2,
          cityAnimations.verticalAnimation3,
          cityAnimations.verticalAnimation4,
          cityAnimations.verticalAnimation5,
          cityAnimations.bridgeAnimation

        ],
        // encapsulation: ViewEncapsulation.None
  })
export class HomeComponent implements OnInit{

  constructor(private spinner: NgxSpinnerService,
              private route: Router,
              private render: Renderer2) { }
 
  
//  @ViewChild('dispOne', { static: false })
//   one!: ElementRef;


  ngAfterViewInit(){
    // const oneElement = this.render.createElement('div');
    // this.render.addClass(oneElement, 'className');
    // this.render.appendChild(this.one.nativeElement, oneElement);
}

  

  ngOnInit(): void {
    this.currentText(this.input);
  }
  //animate city

  ballState1: boolean = true;
  ballState2: boolean = true;
  ballState3: boolean = false;
  ballState4: boolean = true;
  displayState1: boolean = true;
  displayState2: boolean = true;
  displayState3: boolean = false;
  displayState4: boolean = true;
  
  currentState: boolean = true;
 

  //animation of right-bottom icons

  pos: boolean = true;
  pos1: boolean = true;
  pathPos: boolean = true;

  selected = false

  input: number= 0;


  // Text display animation

  text: string = "";


  currentText(input: number){
    switch(input){

      case 1:  
        this.text = "ball1";
        break;
      case 2: 
        this.text = "ball2";
        break;
      case 3:  
        this.text = "ball3";
        break;
      case 4:
        this.text = "ball4";
        break;
      default:
        this.text = "ball1";
      break
    }
  }
  //3d
 

  // @Input()
  // public scale: [x: number, y: number, z: number] = [0, 0, 0];
  @Input()
  public rotation: [x: number, y: number, z: number] = [0, 0, 0];
  @Input()
  public position: [x: number, y: number, z: number] = [0, -3, 0];

  public onBeforeRender() {
    // this.scale = [ this.scale[0] + .01, this.scale[0] + .01, this.scale[0] + .01]
    // this.rotation = [ 0, this.rotation[1] + 0.01, 0];
  }

  routeToProfile(){
    // this.selected = !this.selected;
    // this.route.navigateByUrl("/profile");
  }
  focus(){
    // this.selected = !this.selected;
  }
  noFocus(){
    // this.selected = !this.selected;
  }


  ngOnDestroy(){
    // ( < HTMLCanvasElement > document.getElementById('canvas')).remove();
    this.render.removeClass(document.body, 'light');
  
  }



}
