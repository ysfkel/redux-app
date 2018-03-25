export interface ProductBase {
    createdOn: Date;
    description: string;
    duration: number;
    lastUpdated: Date;
    price: number;
    productID: string;
    productType:string;
    productName: string;
    selected: boolean;
    quantity: number;
    selectedRoles: Array<string>;
    status: boolean;
    totalPrice: number;
    usage: number;
    vertical: string;
    verticalID: string;
}

export interface BadgeProduct extends ProductBase {
    badgeUrl: string;
}

export type Product = ProductBase | BadgeProduct ; 

export interface PackageProduct extends ProductBase {
     childProducts: Array<Product>
     startDate: Date;
     endDate: Date;
}