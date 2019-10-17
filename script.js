function makeThePlanner (time) {
    var hourRow = $("<tr>")
    var timeColumn = $("<td>" + time + "</td>");
    var eventColumn = $("<td>");
    var saveColumn = $("<td>")
    var formDiv = $("<div>");
    formDiv.addClass("form-group");
    var userInputArea = $("<textarea>");
    userInputArea.addClass("form-control");
    userInputArea.attr("id","exampleFormControlTextarea1");
    userInputArea.attr("rows","3");
    formDiv.append(userInputArea);
    eventColumn.append(formDiv);

    var saveBtn = $("<button>" + "Save" + "</button>");
    saveColumn.append(saveBtn);
    hourRow.append(timeColumn);
    hourRow.append(eventColumn);
    hourRow.append(saveColumn);
    $(".container").append(hourRow);
}

makeThePlanner("9AM");
makeThePlanner("10AM");
makeThePlanner("11AM");
makeThePlanner("12AM");
makeThePlanner("1PM");
makeThePlanner("2PM");
makeThePlanner("3PM");
makeThePlanner("4PM");
makeThePlanner("5PM");


