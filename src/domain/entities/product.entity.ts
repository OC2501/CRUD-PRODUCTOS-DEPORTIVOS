export class ProductEntity{
    constructor(
            public id:string,
            public name:string,
            public price: number,
            public img?: string,
            public category?: string,
            public description?:string,
    ){}
}