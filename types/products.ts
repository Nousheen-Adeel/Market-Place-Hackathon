export interface Product{
    _id: string;
    productName: string;
    _type: "product";
    inventory: number
    image?:{
        asset:{
            url?:string;
            _ref: string;
            _type:"image";
        }
    };
    price:number;
    description:string;
    slug:{
        current:string;
        _type:"slug";
    };
}