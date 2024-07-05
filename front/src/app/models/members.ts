import { Contact } from "./contact";

export interface Members{
    id: number;
    last_name: string;
    first_name: string;
    email: string;
    phone: string;
    address: string;
    postal_code: string;
    city: string;
    status: string;
    birthday: Date;
    contact? : Contact
}