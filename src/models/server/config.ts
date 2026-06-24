import { Avatars, Client, Databases, Storage, Users } from "node-appwrite";

// Comment out your custom env import for now to see if it's the problem
// import env from "@/app/env";

let client = new Client();

client
    .setEndpoint(String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)) 
    .setProject(String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID))   
    .setKey(String(process.env.APPWRITE_API_KEY));                    

const databases = new Databases(client);
const users = new Users(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

export { client, databases, users, avatars, storage };