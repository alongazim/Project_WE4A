export class Vendor{
    constructor (
        public nameVendor:string,
        public surnameVendor:string,
        public address:string,
        public email:string,
        public password:string,
        public usernameVendor:string,
        public brandName:string
        ){
            this.nameVendor=nameVendor,
            this. surnameVendor=surnameVendor,
            this.address=address,
            this.email=email,
            this.password=password,
            this.usernameVendor=usernameVendor,
            this.brandName=brandName
        }
}
