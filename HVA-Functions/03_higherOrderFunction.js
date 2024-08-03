function higherOrderFunction(num, callback ) {
  callback(num);
}

higherOrderFunction(2, function(callback){
  console.log(callback);
})