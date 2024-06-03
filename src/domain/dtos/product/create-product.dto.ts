export class CreateProductDto {

    constructor(
        public name: string,
        public price: number,
        public img?: string,
        public category?:string,
        public description?: string,
       

    ) {}
    static create (object:{[key:string]:any}):[string?,CreateProductDto?]{

const{name, price, img, category, description}=object;

if(!name) return ['name is required ',undefined];
if(!price) return ['price is required ',undefined];
if(isNaN(+price)) return ['price must be a number ',undefined];
if(+price<0) return ['price must be greater than 0 ',undefined];



return[undefined,new CreateProductDto(name,+price,img,category,description)]; 

    }
}