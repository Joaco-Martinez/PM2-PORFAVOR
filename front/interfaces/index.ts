
export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
}

export interface ICategory {
    id: number;
    name: string;
    products: IProduct[]
}   

enum eOrderStatus {
    PENDING = "pending",
    APPROVED = "approved",
    REJECTED = "rejected",
}


export interface IOrder {
    id: number;
    status: eOrderStatus;
    date: Date;
    userId: string;
    products: IProduct[];
}



export interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role:   string;
    orders: IOrder[];
}