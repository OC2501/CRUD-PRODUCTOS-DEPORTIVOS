import { ProductEntity } from "../entities/product.entity";
export class ProductMaper{
static fromEntity(object:{[key:string]:any}):ProductEntity{

    const{id,name,description,price,img,category}=object;
    if (!name) throw Error('error');
    if (!price) throw Error('error');
    return new ProductEntity(id,name,price,img,category, description);

}

}