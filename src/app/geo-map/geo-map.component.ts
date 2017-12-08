import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.css']
})
export class GeoMapComponent implements OnInit {

  options = {};

  constructor() { }

  ngOnInit() {
    this.options = {
      globe: {

        displacementTexture: 'assets/iron-rusted4.jpg',
        displacementScale: 0.08,
        displacementQuality: 'high',
        silent: true,

        shading: 'realistic',


        realisticMaterial: {
          detailTexture: '../assets/earth.jpg',
          roughness: '../assets/iron-rusted4/iron-rusted4-normal.jpg',
          normalTexture: '../assets/iron-rusted4/iron-rusted4.jpg'
        },

        postEffect: {
          enable: true,
          SSAO: {
            enable: true,
            radius: 20,
            quality: 'high',
            intensity: 1.8
          }
        },
        temporalSuperSampling: {
          enable: true
        },
        light: {
          ambient: {
            intensity: 0
          },
          main: {
            intensity: 2,
            shadow: true,
            shadowQuality: 'high'
          },
          ambientCubemap: {
            texture: '../assets/lake.hdr',
            exposure: 2,
            diffuseIntensity: 0.1,
            specularIntensity: 1
          }
        },
        viewControl: {
          autoRotate: false
        }
      },
      series: []
    };
  }

}
