var currentHour = new Date().getHours();



$(".saveBtn").on("click", function() {
    var comment = $(this).closest("div").children(".textarea");
    var saveId = $(comment).attr("id");
    var text = $(comment).text().trim();
    console.log("saving " + saveId)
    localStorage.setItem(saveId, JSON.stringify(text));

})


$(".schedule").on("blur", "textarea", function() {
    // get current 2 of textarea
    var text = $(this).val();
    $(this).text(text);
    
    

   
});

//load tasks by looping through all text area containers
var loadTasks = function() {
    $(".textarea").each( function() {
    var loadId = $(this).attr("id");
    $(this).text(JSON.parse(localStorage.getItem(loadId)));
    
    //get time of each event
    var dataTime = $(this).data("time");
    
    //add class for color coding
    if (parseInt(dataTime) <parseInt(currentHour)) {
        $(this).addClass("past");
    }

    if (parseInt(dataTime) === parseInt(currentHour)) {
        $(this).addClass("present");
    }

    if (parseInt(dataTime) > parseInt(currentHour)) {
        $(this).addClass("future");
    }
    
    })
    



    

}

//check if after current time






loadTasks();

