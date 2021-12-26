import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { animations } from '../../../services/animation/animate';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
  animations: [
    animations.faceAnimate,
      

    trigger('path',[
        state('initial',
          style({'stroke-dashoffset': "122"})
      ),
        state('final',
          style({'stroke-dashoffset': "0"})
        ),
        transition('initial => final' ,[ animate('2s')
        ]),
        transition('final => initial' ,[ animate('2s')]),
      ]),
  ]
})
export class ThreeComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas')
  private canvasRef: ElementRef ={} as ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop();
  }
  //face draw
  pos: boolean = true;
  show1:boolean = false;
  pathPos: boolean = true;




  //3D
  width: number = window.innerWidth;
  height: number = window.innerHeight;


  //3d properties
  @Input() public rotationSpeedX: number = 0.01;
  @Input() public rotationSpeedY: number = 0.01;

  @Input() public size: number = 200;
  @Input() public texture: string = "";

  //stage properties
  @Input() public cameraZ: number = 300;
  @Input() fieldOfView: number = 1;
  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippping: number = 1000;


  //helper properties
  private camera!: THREE.PerspectiveCamera;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private loader = new THREE.TextureLoader();
  private geometry = new THREE.BoxGeometry(1, 1, 1);
  // private ringGeometry = new THREE.RingGeometry(10,10);
  // private nameGeometry = new THREE.TextGeometry();


  private material = new THREE.MeshBasicMaterial(
    {color: new THREE.Color(0x87CEEB)
    }
  )
  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);

  private light: THREE.Light = new THREE.PointLight(0xff0000, 1, 10);

  private renderer!: THREE.WebGL1Renderer;

  private scene!: THREE.Scene;

  private createScene(){
    console.log("scene")
    
    //scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xFFFFFF);
    this.scene.add(this.cube);
    this.scene.add(this.light);

    //camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippping
    )
    this.camera.position.z = this.cameraZ;
  }

  private getAspectRatio(){
    return this.width / this.height;
  }

  //animateCube
  private animateCube(){
    this.cube.rotation.x += this.rotationSpeedX;
    this.cube.rotation.y += this.rotationSpeedY;
  }

  private startRenderingLoop(){
    //Renderer
    this.renderer = new THREE.WebGL1Renderer({canvas: this.canvas});
    this.renderer.setPixelRatio(devicePixelRatio);
    // this.renderer.setSize(this.canvas.width, this.canvas.height);
    this.renderer.setSize(this.width, this.height);

    let component: ThreeComponent = this;
    (
      function render(){
        requestAnimationFrame(render);
        component.animateCube();
        component.renderer.render(component.scene, component.camera);
      }()
    );
  }


  ngOnInit(): void {
    
    
  }

}