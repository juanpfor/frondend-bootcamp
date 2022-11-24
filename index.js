const express = require('express')
const app = express()

const PORT = 8000

app.listen(err => {
  if (err) {
    console.log(`eror de seculize `);
  }  else{
    console.log(`server in runiig in port ${PORT}`);

  }
})
