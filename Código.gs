//*menu
function onOpen(e) {
  var startingsheet = SpreadsheetApp.getActiveSpreadsheet();
  SpreadsheetApp.getUi().createMenu("MI MENÚ")
  .addItem('MOSTRAR BARRA LATERAL', 'showMySideBar')
  .addToUi();
}

//*Barra lateral
function showMySideBar(){
  var html = HtmlService.createHtmlOutputFromFile('barraLateral')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setTitle("Hola!")
      .setWidth(300);
  SpreadsheetApp.getUi()
      .showSidebar(html);
}

// funcion que trae datos del formulario
function pegarEnCelda(argumento1,argumento2){
  Browser.msgBox(argumento1);
  Browser.msgBox(argumento2);
}