import { Component, OnInit } from '@angular/core';
import {ICategory, IProduct} from '../shared/models/models';
import {ProviderService} from '../shared/services/provider.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public categories: ICategory[] = [];
  public loading = false;

  public products: IProduct[] = [];

  public logged: boolean = false;
  public login: any = '';
  public password: any = '';

  constructor(private provider: ProviderService) {
  }

  ngOnInit() {
    this.provider.getCategories().then(res => {
      this.categories = res;
      setTimeout(() => {
        this.loading = true;
      }, 2000);
    });
  }

  getProducts(category: ICategory) {
    this.provider.getProducts(category).then(res => {
      this.products = res;
    });
  }

  auth(){
      if (this.login !== '' && this.password !== ''){
        this.provider.auth(this.login, this.password).then(res=>{
          localStorage.setItem('token', res.token);
          this.logged = true;
          this.provider.getCategories().then(res => {
          this.categories = res;
          setTimeout(() => {
            this.loading = true;
          }, 2000);
          });
        })
      }
    }

    logout(){
      this.provider.logout().then(res=>{
        localStorage.clear()
        this.logged = false
      })
  }
}
