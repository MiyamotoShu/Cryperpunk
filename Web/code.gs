function doGet() {
  var template = HtmlService.createTemplateFromFile('index.html');
  var html = template.evaluate();
  return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function addDate(rowDate) {
  var currentDate = new Date();
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var ws=ss.getSheetByName("1");

  ws.appendRow([currentDate, rowDate.name, rowDate.email, rowDate.comments]);
}