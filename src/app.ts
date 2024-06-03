import {Server} from "./presentation/server";
import {MongoDB} from "./data/database";

(async()=>{
    main();
})();


async function main (){

    //connect database
    await MongoDB.connection();

    //run server
    const server = new Server();
    server.start();
}