      // Event listener for all button elements
      $("#giffy").on("click", "button", function () {
        // In this case, the "this" keyword refers to the button that was clicked
        var person = $(this).attr("data-person");
        console.log()

        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=byFNur3jQd9teof1Gw7Izdcr1XjKIBov&q=" + person + 
        "&limit=10&offset=0&rating=G&lang=en"

        // Performing our AJAX GET request
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) { 
            console.log(response.data)
          for (let i = 0; i < response.data.length; i ++) {
              
          
            var imgLink = response.data[i].images.original.url
            console.log(imgLink)
            var imgTag = $("<img>")
            imgTag.attr("src", imgLink)
            imgTag.attr("class", "imgGif")
            
            $("#gifs-appear-here").append(imgTag)

          }

        })
    })

    $("#add-button").on("click", function(event)  {
      console.log("hello");
      event.preventDefault();
      // take text that's in the text box and create new button with that text as it's value. 
      //The new button should be listed after all the other buttons. 

      var text = $("#inputText").val().trim();
      var newBtn = $("button").text(text);
      // var newBtn = $("button").val(text);
      $("#giffy").append(newBtn);
      console.log(moment().format('LLLL'));
      console.log(newBtn)
    })
    

// create ajax for the movie button that is being clicked

// creat div to hold the cartoon

// rating data goes here
