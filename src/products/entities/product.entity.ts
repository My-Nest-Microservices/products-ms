export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public stock?: number,
    public description?: string,
  ) {}
}
