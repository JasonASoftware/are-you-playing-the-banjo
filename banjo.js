function areYouPlayingBanjo(name) {
  //the first letter is the first array which is zero and to lower case it with having r has the true argument  
  if( name[0].toLowerCase() === 'r'){
    //adding name and your string to combine it to make the sentence(make sure to add a space on the string  
    return name + ' plays banjo'
    }else{
      return name + ' does not play banjo'
    }
}
