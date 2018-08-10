
  $("#start").on("click", function(){
        // Step 1. set timer and dender that to timeRemainingBanner
        // 2. populate questions, answer opions and show done button
        // 3. if the timer runs out or done button is clicked
                //3a collect answers and validate
                //3b populate correct answers, incorrect answers and unanswered questions
        // 4. if user clicks reload repeat from Step 1.
  });
  
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  function bubbleSort(array) {
    var swapped;
    do {
      swapped = false;
      for(var i = 0; i < array.length; i++) {
        if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
          swap(array, i, i + 1);
          swapped = true;
        }
      }
    } while(swapped);
    console.log(array)
    $("#result").html(array);
  }