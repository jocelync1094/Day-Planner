var timeArray = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]

// creating the basic framework for my planner
function makeThePlanner () {
    var tableDiv = $("<table>");
    for (var i = 0; i<timeArray.length ; i++){
    var hourRow = $("<tr>")
    var timeColumn = $("<td>" + timeArray[i] + "</td>");
    var eventColumn = $("<td>");
    var saveColumn = $("<td>")
    
    //my event details
    var formDiv = $("<form>");
    formDiv.addClass("form-group")
    formDiv.attr("id",[i]);
    var userInputArea = $("<textarea>");
    userInputArea.addClass("form-control");
    userInputArea.attr("id","exampleFormControlTextarea1");
    userInputArea.attr("rows","3");
    formDiv.append(userInputArea);
    eventColumn.append(formDiv);
    
    //save detail
    var saveBtn = $("<button>" + "Save" + "</button>");
    saveBtn.attr("data-index",[i]);
    saveColumn.append(saveBtn);

    hourRow.append(timeColumn);
    hourRow.append(eventColumn);
    hourRow.append(saveColumn);
    tableDiv.append(hourRow);
    }
    $(".container").append(tableDiv);
}
makeThePlanner();

// saving the input in local storage
$("button").on("click",function(){
    rowSelected = $(this).attr("data-index");
    console.log(rowSelected);
    localStorage.setItem("rowChosen",rowSelected);
    var formSelected = $("form#"+ rowSelected);
    console.log(formSelected);
    var InputArea = formSelected.children().val();
    console.log(InputArea);
    var localKey = "text" + rowSelected;
    localStorage.setItem(localKey,InputArea);   
})


//after clicking save the event is displayed
function displaySavedEvent(){
for (var i=0; i<timeArray.length;i++)
{
var key = "text"+[i];
var storedEvents = localStorage.getItem(key);
    console.log(storedEvents);
    $("form#"+ [i]).children().text(storedEvents);
}
}

displaySavedEvent();



