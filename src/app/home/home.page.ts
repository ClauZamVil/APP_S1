import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   // Array de productos (drones)
   productos = [
    { nombre: 'Juguete Peluche perro ', precio: 2990, enStock: true },
    { nombre: 'Arenero Plástico Gato', precio: 39990, enStock: false },
    { nombre: 'Juguete pelota Perro', precio: 3990, enStock: true },
    { nombre: 'Cama Iglu Gatito', precio: 24990, enStock: false },
    { nombre: 'Casa plástica perro', precio: 45990, enStock: true }
  ];

  constructor(private route: ActivatedRoute, private alertController: AlertController, private menu: MenuController) {}
  email: string = '';
  password: string = '';

  bienvenidos: string='Bienvenid@';

  ngOnInit() {
    this.menu.close("mainMenu");
    // Obtener los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.password = params['password'];
  
    });
  }

  // Método para mostrar alerta sobre el stock del producto
  async mostrarAlerta(producto:any) {
    const alert = await this.alertController.create({
      header: 'Estado del Producto',
      message: producto.enStock ? 'El producto está en stock' : 'El producto no está en stock',
      buttons: ['OK']
    });

    await alert.present();
  }

  openWhatsApp() {
    const phoneNumber = "1234567890"; // Reemplaza con el número de WhatsApp
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank'); // Abre WhatsApp en una nueva pestaña o app
  }

}