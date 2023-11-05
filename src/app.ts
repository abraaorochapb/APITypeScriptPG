import { router } from "./Routes/Routes";
const app = require("express");
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(router);

export { app };
