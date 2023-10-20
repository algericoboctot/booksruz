import type { NextAuthOptions } from "next-auth";
import { compare } from 'bcrypt';
import CredentialsProvider from "next-auth/providers/credentials";
import customersLogin from "@/libs/frontend/fetchCustomers";
import { ICustomers } from "@/interfaces/frontend/customers";
import { Credentials } from "@/types/frontend/customers";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Login Credentials",
            credentials: {
                email: {
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
                if (credentials?.password) { // Check if password is not undefined
                    const customers = await customersLogin();

                    const matchingCustomer = customers.find((customer: ICustomers) => {
                        return credentials?.email === customer.email;
                    });

                    if (matchingCustomer) {
                        const passwordMatch = await compare(credentials.password, matchingCustomer.password); // Use credentials.password here

                        if (passwordMatch) {
                            return matchingCustomer;
                        }
                    }
                }

                return null;
            }
        })
    ]
}