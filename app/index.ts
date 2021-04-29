import app from '../config/express'
import { PORT } from "../config/env/production";

app.listen(PORT, () => {
    return console.log(`server is listening on ${PORT}`)
})