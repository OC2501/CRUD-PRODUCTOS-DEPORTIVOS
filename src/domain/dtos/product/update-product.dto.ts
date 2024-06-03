export class UpdateProductDto{
    constructor(
        public name:string,
        public description?:string,
        public price?: number
    ){}
  
    static update(object:{[key:string]:any}):[string?, UpdateProductDto?]{
        const {name, description, price} = object
        if (!name) return ['name is required ',undefined]
        if (!price) return ['price is required ',undefined]
        if (isNaN(+price)) return ['price must be a number ',undefined]
        if (+price < 0) return ['price must be greater than 0 ',undefined]
        return [undefined, new UpdateProductDto(name, description, +price)]
    }
  }