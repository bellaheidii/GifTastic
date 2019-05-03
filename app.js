      // Event listener for all button elements
      $("button").on("click", function () {
        // In this case, the "this" keyword refers to the button that was clicked
        var person = $(this).attr("data-person");
        console.log()

        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=byFNur3jQd9teof1Gw7Izdcr1XjKIBov&q=" + person + 
        "&limit=3&offset=0&rating=G&lang=en"

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
// create ajax for the movie button that is being clicked

// creat div to hold the cartoon

// rating data goes here
