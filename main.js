// For more information, see https://crawlee.dev/
import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';
import { router } from './routes.js';
import express from "express";
const app=express();
var port=process.env.PORT || 7800;
app.listen(port,()=>{
    console.log("server connected");
});
app.get('/',(req,res)=>{
    res.send("welcome to render");
});
const startUrls = ['https://crawlee.dev'];

const crawler = new PlaywrightCrawler({
    // proxyConfiguration: new ProxyConfiguration({ proxyUrls: ['...'] }),
    requestHandler: router,
});

await crawler.run(startUrls);
