 function fetchIssues() {
var issues=JSON.parse(localStorage.getItem('issues'));
var issuesList = document.getElementById('issuesList');

issuesList.innerHTML='';
for (var i=0;i < issues.length; i++){
    var id= issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity; 
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;

    issuesList.innerHTML == '<div class="well">' +
}
 }
