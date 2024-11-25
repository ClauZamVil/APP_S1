import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.page.html',
  styleUrls: ['./dogs.page.scss'],
})
export class DogsPage implements OnInit {
  dogImage: string = ''; // Inicializa con una cadena vacía

  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.loadRandomDogImage(); // Cargar imagen aleatoria
  }

  loadRandomDogImage() {
    this.dogService.getRandomDogImage().subscribe(data => {
      this.dogImage = data.message; // Almacena la URL de la imagen
    }, error => {
      console.error('Error fetching dog image:', error); // Manejo de errores
    });
  }

  loadNewDogImage() {
    this.loadRandomDogImage(); // Carga una nueva imagen
  }
}