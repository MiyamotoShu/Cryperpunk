function doGet() {
  var html=HtmlService.createHtmlOutputFromFile("index")
  var check=html.evaluate();
  var show =check.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return show;
}

function addDate(rowDate) {
  var currentDate = new Date();
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var ws=ss.getSheetByName("1");

  ws.appendRow([currentDate, rowDate.name, rowDate.email, rowDate.comments]);
}