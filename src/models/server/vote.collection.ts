import {Permission} from "node-appwrite";
import {voteCollection, db} from "../name";
import {databases} from "./config";

export default async function createVoteCollection() {
   //creating Collections
    await databases.createCollection( db, voteCollection, voteCollection,[
        Permission.create('users'),
        Permission.read('any'),
        Permission.read('users'),
        Permission.update('users'),
        Permission.delete('users'),
    ]);
    console.log("vote collection created")
    //Creating Attributes
    await Promise.all([
        databases.createEnumAttribute(db, voteCollection, "type", ["answer","question"], true),
        databases.createStringAttribute(db, voteCollection, "typeId", 50, true),
        databases.createEnumAttribute(db, voteCollection, "voteStatus", ["upvoted", "downvoted"], true),
        databases.createStringAttribute(db, voteCollection, "voteById", 50, true),
    ]);
    console.log("vote Attributescreated")

}