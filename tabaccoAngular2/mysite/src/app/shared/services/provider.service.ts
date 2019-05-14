import {EventEmitter, Injectable} from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import {ICategory, IProduct, IAuth} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  public sendMessage = new EventEmitter<string>();

  constructor(http: HttpClient) {
    super(http);
  }

  getCategories(): Promise<ICategory[]> {
    return this.get('http://localhost:8000/api/categories/', {});
  }

  getProducts(category: ICategory): Promise<IProduct[]> {
    return this.get('http://localhost:8000/api/categories/' + category.id + '/products/', {});
  }

  auth(username: any, password: any): Promise<IAuth>{
    return this.post('http://127.0.0.1:8000/api/login/', {
      username: username,
      password: password
    })
  }

  logout(): Promise<any>{
    return this.post('http://127.0.0.1:8000/api/logout/', {

    })}

}