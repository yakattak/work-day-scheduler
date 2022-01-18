workTask = [];

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

    //ignore all items that don't exist or are null
    if (JSON.parse(localStorage.getItem(loadId))) {
        console.log("yes");
        $(this).text(JSON.parse(localStorage.getItem(loadId)));
    };
    
    

    })

}

