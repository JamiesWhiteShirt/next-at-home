import path from "path";
import express from "express";
import ssr from "./lib/ssr";
import ParcelBundler from "parcel-bundler";

const bundler = new ParcelBundler(path.join(process.cwd(), "src", "client.tsx"), {
  publicUrl: "/assets"
});
const app = express();

app.use(bundler.middleware());

app.get("/*", ssr);

const port = process.env.PORT || 1234;
app.listen(port, () => {
  console.info(`Listening on port ${port}...`);
});
