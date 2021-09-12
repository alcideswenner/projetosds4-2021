import { Seller } from "./sellers"

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
}

export type SalePage = {
    content?: Sale[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    number: number;
    size?: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}

export type  SaleSUM= {
    sellerName:string,
    sum: number
}

export type  SaleSucess= {
    sellerName:string,
    visited: number,
    deals: number
}