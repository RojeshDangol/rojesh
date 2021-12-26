import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  //url for images
  angular= '../../../assets/logos/angular.svg';
  node= '../../../assets/logos/node.svg';
  express= '../../../assets/logos/express.svg';
  mongo='../../../assets/logos/mongo.svg';
  docker='../../../assets/logos/docker.svg';
  azure='../../../assets/logos/azure.svg';

  ngOnInit(): void {
  }

  name: string = "Rojesh Dangol";
  intro: string = "Web developer based in Pittsburgh, PA.";
  tools:string[] = [this.angular, this.mongo, this.express, 
                    this.node, this.docker, this.azure];
  projects: {title: string, description: string}[] = [{title: "Project name", description: "Projects descriptrion"}]
  contact:{phone: string, email: string}[] = [{phone: '412-689-3520',
                        email: 'rozsx1@gmail.com'}]

}
