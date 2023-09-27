import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import customersLogin from "@/libs/frontend/fetchCustomers";
import { ICustomers } from "@/interfaces/frontend/customers";
import { Credentials } from "@/types/frontend/customers";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Email: ",
                    type: "email",
                    placeholder: "Email"
                },
                password: {
                    label: "Password: ",
                    type: "password",
                    placeholder: "Password"
                }
            },
            async authorize(credentials: Credentials | undefined) {
                const customers = await customersLogin();
                
                const matchingCustomer = customers.find((customer: ICustomers) => {
                    return credentials?.email === customer.email && credentials?.password === customer.password;
                });
            
                if (matchingCustomer) {
                    return matchingCustomer; // Return the matching customer
                } else {
                    return null; // Return null if no matching customer is found
                }
            }
        })
    ]
}