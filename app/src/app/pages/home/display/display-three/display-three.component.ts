import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-three',
  templateUrl: './display-three.component.html',
  styleUrls: ['./display-three.component.css']
})
export class DisplayThreeComponent implements OnInit {

  constructor() { }
  index: number = 0;

  img1:string = '../../../../../assets/art/shiv.png';
  img2:string = '../../../../../assets/art/hand.png';
  img3:string = '../../../../../assets/art/girl.png';
  img4:string = '../../../../../assets/art/aron.png';
  img5:string = '../../../../../assets/art/granddad.png';
  img6:string = '../../../../../assets/art/unicorn.png';

  


  images: string[] = [this.img1, this.img2, this.img3,
                      this.img4, this.img5, this.img6]

  ngOnInit(): void {
  }

  imageChange(i: number){
    this.index = i;
    console.log(i);
  }

}
