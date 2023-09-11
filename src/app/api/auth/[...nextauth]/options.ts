import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";
import customersLogin from "@/libs/frontend/fetchCustomers";
import { ICustomers } from "@/interfaces/frontend/customers";

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username: ",
                    type: "text",
                    placeholder: "Username"
                },
                password: {
                    label: "Password: ",
                    type: "password",
                    placeholder: "Password"
                }
            },
            async authorize(credentials: Record<"username" | "password", string> | undefined) {
                const customers = await customersLogin();
                
                const matchingCustomer = customers.find((customer: ICustomers) => {
                    return credentials?.username === customer.username && credentials?.password === customer.password;
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