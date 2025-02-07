export interface Product{
    _id: string;
    productName: string;
    _type: "product";
    image?:{
        asset:{
            url?:string;
            _ref: string;
            _type:"image";
        }
    };
    price:number;
    description:string;
}