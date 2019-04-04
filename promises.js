function getFavByID(id) {
   return new Promise((resolve,reject) => {
      let favorites = [{id:1, name:'Favorite 1'},{id:2, name: 'Favorite 2'}];
      setTimeout(() =>{
         resolve(favorites);
      },2000);
      
   });
}

function getFavByGender(gender) {
   
   return new Promise((resolve,reject) => {
      let favorites = [{id:10, name:'Favorite 10'},{id:20, name: 'Favorite 20'},{id:30, name: 'Favorite 30'}]; 
      setTimeout(() =>{
         resolve(favorites);
      },2000);
   });
}

function getFavoritesToThePromise(U,N) {
   
   let favorites = [];
   return new Promise((resolve,reject) => {
      getFavByID().then(favID => {
         getFavByGender().then(favGend => {
            favorites = [...favID,...favGend];
            console.log('favorites',favorites,favorites.length)
            if(N < favorites.length) {
               resolve(favorites) ;
            }
            else {
               reject('no cumple');
            }
         });
      });
   })
   

}

function getFavorites(U,N) {

   return new Promise((resolve,reject) => {

      getFavoritesToThePromise(U,N)
         .then(res => {
            resolve(res);
      }).catch(err => {
            reject(err);
      })
   })
}

getFavorites('',2).then(res => {
   console.log(res);
}).catch( err => {
   console.log(err);
})
