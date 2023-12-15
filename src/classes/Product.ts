export class Product {

    public image!:string

    constructor(
        public id_product: number,
        public name_product: string,
        public description: string,
        public price: number,
        public brand: string,
        public category: string,
        public vendor: string,
        public stock_qty: number,
        image: string
    ){
        this.id_product = id_product;
        this.name_product = name_product;
        this.description = description;
        this.price = price;
        this.brand = brand;
        this.category = category;
        this.vendor = vendor;
        this.stock_qty = stock_qty;
        this.image = "./assets/image/"+ image;
    }
}