// export -> Permite que otro archivo pueda utilizar esa variable
export type Sizes='S'|'M'|'L'|'XL';

export type Product={
  name:string,
  createdAt: Date,
  stock:number,
  size?:Sizes
};
