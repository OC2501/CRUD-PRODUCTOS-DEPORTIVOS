import { CreateProductDto } from "../../domain/dtos/product/create-product.dto";
import { UpdateProductDto } from "../../domain/dtos/product/update-product.dto"
import { ProductEntity } from "../../domain/entities/product.entity";
import { ProductMaper } from "../../domain/mapers/product.mapers";
import { ProductModel } from "../../data/models/product.model";
import { PaginationDto } from "../../domain/dtos/product/pagination.dto";

interface FindAllProducts{
    offset:number, 
    limit:number, 
    page:number, 
    total:number, 
    products: ProductEntity[],
  }
  
  export class ProductService {
    async create(createProductDto: CreateProductDto): Promise< ProductEntity> {
      const {name}= createProductDto;
      try {
        const exist = await ProductModel.findOne({ name });
        if (exist) throw Error("error");
        const product = await ProductModel.create(createProductDto);
        if (!product) throw Error("error");
        await product.save();
        return ProductMaper.fromEntity(product);
      } catch (error) {
          throw error;
      }
  }
  
  async update(updateProductDto:UpdateProductDto, id:string):Promise<ProductEntity>{
    try {
        const product = await ProductModel.findByIdAndUpdate(id, {...updateProductDto});
        if(!product) throw Error('Error')
        await product.save();
        return ProductMaper.fromEntity(product);
  
    } catch (error) {
        throw error; 
    }
  }
  
   
  async delete(id:string):Promise<ProductEntity>{
    try {
        const product = await ProductModel.findByIdAndDelete({_id:id});
        if(!product) throw Error('Error')
        return ProductMaper.fromEntity(product);
  
    } catch (error) {
        throw error; 
    }
  }
  async findOne(id:string):Promise<ProductEntity>{
    try {
        const product = await ProductModel.findById({_id:id});
        if(!product) throw Error('Error')
        return ProductMaper.fromEntity(product);
  
    } catch (error) {
        throw error; 
    }
  }
    async findAll(paginationDto:PaginationDto):Promise<FindAllProducts> {
      const { offset, limit } = paginationDto
      try{
  
        const products = await ProductModel.find({})
        .skip(offset)
        .limit(limit)
        const total = await ProductModel.find({}).countDocuments();
  
          
        const mappedProducts = products.map(ProductMaper.fromEntity);
        
        return {
          offset,
          limit,
          page: offset / limit + 1,
          total,
          products: mappedProducts
        };
  
      }catch(error){
        throw error;
      }
      }
    }