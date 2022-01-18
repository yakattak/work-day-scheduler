
// get current day, current time, current hour
var currentHour = new Date().getHours();

var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

//when save button is clicked save item
$(".saveBtn").on("click", function() {
    //find parent div of saveBtn then find the text area inside
    var comment = $(this).closest("div").children(".textarea");
    var saveId = $(comment).attr("id");
    var text = $(comment).text().trim();
    //console.log("saving " + saveId)

    //save by ID of text area
    localStorage.setItem(saveId, JSON.stringify(text));

})

//when text area is no longer the focus change the text value to new input
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
    };

    if (parseInt(dataTime) === parseInt(currentHour)) {
        $(this).addClass("present");
    };

    if (parseInt(dataTime) > parseInt(currentHour)) {
        $(this).addClass("future");
    };
    
    });
    
   

}

loadTasks();

