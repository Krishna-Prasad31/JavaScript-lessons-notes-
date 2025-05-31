function walkDog() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
         const dogWalked = true;

    if(dogWalked) {
      resolve("you walked the dog 🐕‍🦺")
    }
    else{
      reject("you didnt walk the dog")
    }
  } , 1500)
  })
}

function cleanKitchen() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;

  if(kitchenCleaned) {
    resolve("you cleaned the kitchen 🧹")
  }
  else{
    reject("you didnt clean the kitchen")
  }

  } , 2500)
  })
}

function takeOutTrash() {

  return new Promise((resolve, reject) => {
     setTimeout(() => {

      const tookOutTrash = false;

      if(tookOutTrash) {
        resolve("you took out the trash 🗑️")
      }
      else{
        reject("you didnt take out the trash")
      }
  } , 500)
  })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("you have completed all the chores")})
         .catch(error => console.error(error))