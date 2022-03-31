const connect = require("./configs/db");
const app = require("./index");
const port = process.env.PORT || 313;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening at port ${port}`);
  } catch ({ message }) {
    console.log(message);
  }
});
