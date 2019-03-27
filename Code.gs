/*
 * API for TurzoBot
 */

var turzoBotSheet = "1nQG27jGfE7vlcezMyHUBK5zfwHe4e5O1JfvAP54l2_M";

function doGet(e) {
  // get parameter to understand what to return. To be used in a future version
  var input = e.parameter.input;
  var sheet = SpreadsheetApp.openById(turzoBotSheet).getSheets()[0];
  
  // get the rows from the sheet
  var numRows = sheet.getMaxRows();
  var dataRange = sheet.getRange(2, 1, numRows-1 , 3);
  var dataSet = dataRange.getValues();
  
  Logger.log("Found: " + dataSet.length + " values");
  
  // get just the column of counters, which we'll use to make sure we're getting the least-used quotes
  var theNumbers = dataSet.map(function(x) {
    if (isNaN(x[1])) {
      return 99999;
    } else {
      return x[1];
    }
  });
  
  // reduce the dataset down to the least-used quotes
  var leastUsedNum = Math.min.apply(Math,theNumbers);
  var leastUsed = dataSet.filter(function(x) {
    if (x[1]===leastUsedNum) {return x;}
  });
  
  Logger.log("Found " + leastUsed.length + " values used " + leastUsedNum + " times");
  
  // determine the value to get randomly, based on the subset
  var rowToGet = Math.floor(Math.random()*leastUsed.length);
  Logger.log("Getting value " + rowToGet + " of the subset")
  // get the value
  
  
  var botText = leastUsed[rowToGet][0];
  var botTextCounter = leastUsed[rowToGet][1];
  var botTextIndex = leastUsed[rowToGet][2];
  
  // find right row
  function getRowToUpdate () {
    for (var i in dataSet) {
      if(dataSet[i][2]===botTextIndex) {
        return Number(i);
      }
    }
  }
  var rowToUpdate = getRowToUpdate();
  Logger.log("Row to update " + (rowToUpdate + 2) + " for code " + botTextIndex);
  
  sheet.getRange(rowToUpdate+2,2).setValue(botTextCounter+1);
  
  // get total
  var counterVal = theNumbers.reduce(getSum);
  
  // return the content
  var returner = {
    'input': input,
    'botText': botText,
    'counter': counterVal
  };

  var myJSON = JSON.stringify(returner);
  logLine(botText);
  return ContentService.createTextOutput(myJSON).setMimeType(ContentService.MimeType.JSON);
}

function logLine(text) {
  // get the sheet; it's always the second sheet
  var sheet = SpreadsheetApp.openById(turzoBotSheet).getSheets()[1];
  
  // figure out date right now
  var nowDate = Utilities.formatDate(new Date(), "GMT", "dd/MM/yyyy HH:mm:ss");
  
  // find last row
  var lastRow = sheet.getLastRow() + 1;
  
  // update date
  sheet.getRange('A'+lastRow).setValue(nowDate);
  
  // log line
  sheet.getRange('B'+lastRow).setValue(text);
}

function doPost(e) {
  return true;
}

function getSum(total, num) {
    return Number(total) + Number(num);
}
