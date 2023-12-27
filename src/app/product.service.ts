import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/classes/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ProductArray! : Product[];

  constructor() { }

  getKeyboards() {

    this.ProductArray = []
    this.ProductArray.push(new Product(1, 'Mechanical Gaming Keyboard', 'RGB backlit mechanical gaming keyboard with customizable keys', 129.99, 'BrandK', 'Keyboard', 'VendorK', 20, 'mechanical_keyboard.jpg'));
    this.ProductArray.push(new Product(2, 'Wireless Bluetooth Keyboard', 'Slim and portable wireless Bluetooth keyboard for tablets and smartphones', 49.99, 'BrandL', 'Keyboard', 'VendorL', 30, 'wireless_keyboard.jpg'));
    this.ProductArray.push(new Product(3, 'Compact Mechanical Keyboard', 'Compact and ergonomic mechanical keyboard for office use', 79.99, 'BrandM', 'Keyboard', 'VendorM', 25, 'compact_mechanical_keyboard.jpg'));
    this.ProductArray.push(new Product(4, 'Backlit Gaming Keypad', 'Programmable backlit gaming keypad for MMO and MOBA games', 69.99, 'BrandN', 'Keyboard', 'VendorN', 15, 'gaming_keypad.jpg'));

    return this.ProductArray;
  }

  getKeyboardById(id: number): Product | undefined {
    return this.ProductArray.find(el => {
      return el.id_product === id;
    });
  }

  getLaptops() {
    this.ProductArray = []
    this.ProductArray.push(new Product(5, 'Gaming Laptop', 'High-performance gaming laptop with dedicated graphics', 1499.99, 'BrandX', 'Laptop', 'VendorX', 10, 'gaming_laptop.jpg'));
    this.ProductArray.push(new Product(6, 'Business Ultrabook', 'Slim and lightweight ultrabook for professional use', 1099.99, 'BrandY', 'Laptop', 'VendorY', 15, 'ultrabook.jpg'));
    this.ProductArray.push(new Product(7, 'Convertible 2-in-1 Laptop', 'Convertible laptop with touch screen for versatile use', 899.99, 'BrandZ', 'Laptop', 'VendorZ', 20, 'convertible_laptop.jpg'));
    this.ProductArray.push(new Product(8, 'Student Chromebook', 'Affordable and lightweight Chromebook for students', 499.99, 'BrandW', 'Laptop', 'VendorW', 25, 'chromebook.jpg'));

    return this.ProductArray;
  }
}
