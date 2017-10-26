$( document ).ready(function() {          // EVERYTHING goes IN HERE
    var topics = ['guitar', 'books', 'dogs', 'iphone', 'robots'];
    console.log( "ready!" );
    console.log("hello");

   // var button = $("<button></button>")
   // $("#button-container").append(button);

  for (var i = 0; i < topics.length; i++) {  // iterating through topics array
    var button = $("<button data-name=" + topics[i] + ">" + topics[i] + "</button>")  // writing a button then appending that to HTML with value from array, written as text
    $("#button-container").append(button);  // appending that button to the button container div that is, button container
                // need to add contain IDs
  };

        // ERROR #2:
  // $("button").on("click", function() {

  //  // comment out: var gifButton = $(this).attr()  // why We need attribute?

  //   var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=guitar"
                            
  //   $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   }).done(function(response) {
  //       console.log(response)

  //       var imageUrl = response.data.image_original_url;
  //       var guitarImg = $("<img>");

  //       // Setting the guitarImage src attribute to imageUrl
  //       guitarImg.attr("src", imageUrl);
  //       guitarImg.attr("alt", "guitar image");
  //       // Prepending the guitarImage to the images div
  //       $("#images").prepend(guitarImage);
  //     });


    // });
$("button").on("click", function(event) {
      event.preventDefault()
      var type = $(this).data("name")
      // console.log(gif)
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";
      // var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + gif
      $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(results) {
      var gifArray = results.data
      console.log(gifArray)
      // console.log(response.data[0].images.fixed_height.url)
      var animalDiv = $("<div >");
    for (var i = 0; i < gifArray.length; i++) {
       var rating = gifArray[i].rating;

       var p = $("<p>").text("Rating: " + rating);

       var animated = gifArray[i].images.fixed_height.url;
        var still = gifArray[i].images.fixed_height_still.url;

       var animalImage = $("<img>");                   // setting an animalImage variable and using jQuery to append an img tag to page
        animalImage.attr("src", still);                // making animal image src. still is the property of src. 
        animalImage.attr("data-still", still);         // grabbing data still and putting it in quotation marks
        animalImage.attr("data-animate", animated);    // grabbing data-animate on giphy and making it animated.
        animalImage.attr("data-state", "still");      //  data-state on attribute with a "still" property
        animalImage.addClass("animal-image");         //  animal image - adding class animal-image 

       animalDiv.append(p);                           // animal Image 
        animalDiv.append(animalImage);

       $("#images").prepend(animalDiv);               // grabbing imaga/
        
     }
        
  $(document).on("click", ".animal-image", function() {

        var state = $(this).attr("data-state");

   if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
    else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

      
      });
    });

  });
                              
        // what does q do: string Search query term or phrase
        // what does rating do: filters result by specified rating
        // what does limit do: the maximum number of records to return

/*
 // Use this query URL: https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=guitar
      */ 




























 //commented out ')'    commented out '}'

