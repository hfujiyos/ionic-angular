import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private alertController: AlertController) {}

  async onButtonClick() {
    const alert = await this.alertController.create({
      header: '詳細を見る',
      message: '現在のページには詳細情報がありません。',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
