import { db } from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createVoteCollection from "./vote.collection";
import createQuestionCollection from "./question.collection";
import { databases } from "./config";

export default async function getOrCreateDB() {
    try {
        await databases.get(db);
        console.log("database connected");
    } catch (error) {
        try {
            await databases.create(db, db);
            console.log("database created");
               
            // Create collections only if the database itself had to be built fresh
            await Promise.all([
                createQuestionCollection(),
                createAnswerCollection(),
                createCommentCollection(),
                createVoteCollection(),  
            ]);
            console.log("collections created");
            console.log("database connected");
        } catch (dbError) {
            console.log("Error creating databases or collection ", dbError);
        } 
    }

    return databases;
}