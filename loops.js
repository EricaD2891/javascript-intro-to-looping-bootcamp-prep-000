var LoopOne= []
function forLoop(LoopOne){
   
  for (let i = 0; i < 25; i++) {
    if( i==1) {
      return("I am 1 strange loop.") 
    }
    else {return (`I am ${i} strange loops.`)}
}
  

}  
 let countdown=100
  function whileLoop(countdown){
   while (countdown > 0){
     console.log(--countdown)
     return ('done')
   }
  }                                          
  function doWhileLoop(array){
    function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue())
  }