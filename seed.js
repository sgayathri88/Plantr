const {db, Plot, Gardener, Vegetable} = require('./model');

db.sync({force: true})
  .then(() => {
    console.log("Database synced!");
    return Vegetable.create({name: 'carrot', color: 'orange', planted_on: Date.now()})
  })
  .catch(err => {
    console.log("Something went wrong.");
    console.log(err);
  })
  .finally(() => {
    db.close()
  })

  // async function init() {
  //   await db.sync({force: true});
  //   await Vegetable.create({name: 'broccoli', color: 'green', planted_on: Date.now()});
  //   db.close()
  // }

// init()
