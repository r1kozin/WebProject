import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProviderService} from '../../shared/services/provider.service';
import {ICategory} from '../../shared/models/models';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public output = '';
  public stringArray: string[] = [];
  public categories: ICategory[] = [];
  public loading = false;

  constructor(private provider: ProviderService) { }

   ngOnInit() {
    this.provider.getCategories().then(res => {
      this.categories = res;
      setTimeout(() => {
        this.loading = true;
      }, 2000);
    });
  }

}
