import { Request, Response } from "express";
import { ProductService} from "../services/product.service";
import { CreateProductDto } from "../../domain/dtos/product/create-product.dto";
import { UpdateProductDto } from "../../domain/dtos/product/update-product.dto";
import { Validators } from "../../config/validator";
import { PaginationDto } from "../../domain/dtos/product/pagination.dto";
export class ProductController{
    constructor(private readonly productService: ProductService) {}
    create = (req: Request, res: Response) => {
      const [error, createProduct] = CreateProductDto.create(req.body);
      if (error) return res.status(400).json({ error });
      this.productService.create(createProduct!)
      .then(product => res.json(product))
      .catch(error => res.status(500).json(error));
    };

          
  update = (req:Request, res:Response) => {
    const id = req.params.id
    if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
    const [error, updateProductDto] = UpdateProductDto.update(req.body)
    if(error) return res.status(400).json({error})
    this.productService.update(updateProductDto!, id!)
    .then(product => res.json(product))
    .catch(error => res.status(500).json(error))
    };
          
  delete = (req:Request, res:Response) => {
    const id = req.params.id
    if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
    this.productService.delete(id!)
    .then(product => res.json(product))
    .catch(error => res.status(500).json(error))
  }

  findAll = (req: Request, res: Response) => {
    const [error, paginationDto]=  PaginationDto.paginate(req.query);
    if(error) return res.status(400).json({error})
    this.productService.findAll(paginationDto!)
    .then(product => res.json(product))
    .catch(error=> res.status(500).json)
  };

  findOne = (req: Request, res: Response) => {
  const id = req.params.id
  if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
    this.productService.findOne(id!)
    .then(product => res.json(product))
    .catch(error => res.status(500).json(error))  
  };
}