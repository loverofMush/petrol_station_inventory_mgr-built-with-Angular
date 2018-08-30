export class Sale {
    id: number;
    user_id: number;
    wet_product_id: number;
    station_id: number;
    selling_price: number;
    sales_attendant: string;
    opening_metre: number;
    closing_metre: number;
    pump_code: string;
    litres_sold: number;
    cash_amt: number;
    date_sold: Date;
}

export class DrySale {
    id: number;
    user_id: number;
    dry_product_id: number;
    dry_product_sub_id: number;
    station_id: number;
    dry_product: string;
    selling_price: number;
    sales_attendant: string;
    dry_code: string;
    quantity_sold: number;
    cash_amt: number;
    date_sold: Date;
}