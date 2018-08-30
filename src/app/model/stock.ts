export class Stock {
    id: number;
    user_id: number;
    wet_product_id: number;
    dry_product_id: number;
    dry_product_sub_id: number;
    product: string;
    tank_code: string;
    opening_inventory: number;
    closing_inventory: number;
    stock_sold: number;
    stock_received: number;
    stock_date: Date;
}
