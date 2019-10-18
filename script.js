// // creating the basic framework for my planner
// function makeThePlanner (time) {
//     var hourRow = $("<tr>")
//     var timeColumn = $("<td>" + time + "</td>");
//     var eventColumn = $("<td>");
//     var saveColumn = $("<td>")
    
//     //my event details
//     var formDiv = $("<div>");
//     formDiv.addClass("form-group");
//     var userInputArea = $("<textarea>");
//     userInputArea.addClass("form-control");
//     userInputArea.attr("id","exampleFormControlTextarea1");
//     userInputArea.attr("rows","3");
//     formDiv.append(userInputArea);
//     eventColumn.append(formDiv);
//     //save detail
//     var saveBtn = $("<button>" + "Save" + "</button>");
//     saveColumn.append(saveBtn);

//     hourRow.append(timeColumn);
//     hourRow.append(eventColumn);
//     hourRow.append(saveColumn);
//     $(".container").append(hourRow);
// }

// var timeArray = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]

// for (var i =0;i<timeArray.length;i++){
//     makeThePlanner(timeArray[i]);
// }

// creating groups indexed by rows
$("button").on("click",function(){
    classSelected = $(this).attr("class");
    console.log(classSelected);
    localStorage.setItem("rowChosen",classSelected);
    var eventSelected = $("textarea."+ classSelected);
    var InputArea = eventSelected.val();
    localStorage.setItem("text",InputArea);
      
})

function displaySavedEvent(classSelected){
var storedEvent = localStorage.getItem("text");
var rowDisplayed = localStorage.getItem("rowChosen")
    console.log(storedEvent);
    console.log(rowDisplayed);
    $("textarea."+ rowDisplayed).text(storedEvent);
}

displaySavedEvent();


  

