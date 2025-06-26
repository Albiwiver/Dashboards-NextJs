export type Order = {
  _id: string;
  transactionId: string;
  createdAt: string;
  total: number;
  status: "COMPLETED" | "CANCELED";
  customer: string;
  shippingAddress: {
    city: string;
  };
};

export type Customer = {
  _id: string;
  name: string;
  avatar: string;
};

export interface OrderProps {
  order: Order;
  customer?: Customer;
}

export type OrderDetail = {
  _id: string;
  transactionId: string;
  user: string;
  status: "COMPLETED" | "CANCELED";
  customer: {
    _id: string;
    name: string;
    email: string;
    phone: string;
  };
  items: {
    product: {
      _id: string;
      name: string;
      sku: string;
      price: number;
      imageUrl: string;
    };
    quantity: number;
    unitPrice: number;
  }[];
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  note: string;
  createdAt: string;
  updatedAt: string;
};

export type OrderCustomer = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  updatedAt: string;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
};
