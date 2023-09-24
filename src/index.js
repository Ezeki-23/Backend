import app from './app.js'
import {connectDB} from './db.js'

connectDB(); 

const cors = require('cors');    
app.use(cors({credentials: true, origin: 'https://ezekiel-dev.netlify.app/'}));

app.listen(3000)
console.log('Server on port', 3000)
