import axios from "axios";
import { IProduct } from "../../interfaces";

const axiosApiBack = axios.create({ baseURL: "http://localhost:3002" });

export const getProductsService = async ():Promise<IProduct[]> => {
   try {
       const response = await axiosApiBack.get("/products");

    if(!response?.data) throw new Error('Error al obtener los productos');

       return response.data;
   } catch {
    throw new Error('Error al obtener los productos');
   }
};

export const getProductsById = async (id: number):Promise<IProduct|null> => {
  try {
      const response = await axiosApiBack.get("/products/" + id);

   if(!response?.data) {
    return null;
   }

      return response.data;
  } catch (e) {
   throw new Error('Error al obtener el producto ' + e);
  }
};