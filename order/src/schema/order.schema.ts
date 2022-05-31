export interface CreateOrder {
  customerId: string;
  amount: string;
  productId: string;
  orderStatus?: string;
}
