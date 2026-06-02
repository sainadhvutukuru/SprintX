function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const formType = data.formType;
    const sheet = SpreadsheetApp.getActiveSpreadsheet();

    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'No active spreadsheet found. Make sure the script is bound to a Google Sheet.' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    let targetSheet;

    if (formType === 'Startup Form') {
      targetSheet = sheet.getSheetByName('Startups');
    } else if (formType === 'Mentor Form') {
      targetSheet = sheet.getSheetByName('Mentors');
    } else if (formType === 'Investor Form') {
      targetSheet = sheet.getSheetByName('Investors');
    }

    if (!targetSheet) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: 'Sheet tab not found. Make sure the sheet has tabs named: "Startups", "Mentors", "Investors"'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const timestamp = new Date();
    let rowData;

    if (formType === 'Startup Form') {
      rowData = [
        timestamp,
        data.fullName || '',
        data.email || '',
        data.startupName || '',
        data.stage || '',
        data.sector || '',
        data.otherSector || '',
        data.city || '',
        data.description || '',
      ];
    } else if (formType === 'Mentor Form') {
      rowData = [
        timestamp,
        data.fullName || '',
        data.email || '',
        data.roleOrg || '',
        data.expertise || '',
        data.otherExpertise || '',
        data.linkedin || '',
        data.contribution || '',
      ];
    } else if (formType === 'Investor Form') {
      rowData = [
        timestamp,
        data.fullName || '',
        data.email || '',
        data.orgName || '',
        data.investorType || '',
        data.otherInvestorType || '',
        data.sectors || '',
        data.anything || '',
      ];
    }

    targetSheet.appendRow(rowData);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const info = {
    status: 'running',
    message: 'SprintX Form Handler',
    sheetFound: !!sheet,
    sheetName: sheet ? sheet.getName() : null,
    tabs: sheet ? sheet.getSheets().map(function(s) { return s.getName(); }) : [],
  };
  return ContentService
    .createTextOutput(JSON.stringify(info))
    .setMimeType(ContentService.MimeType.JSON);
}

function setupSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!sheet) {
    Logger.log('ERROR: No active spreadsheet. Open this script from within a Google Sheet.');
    return;
  }

  var tabs = {
    Startups: ['Timestamp', 'Full Name', 'Email', 'Startup Name', 'Stage', 'Sector', 'Other Sector', 'City', 'Description'],
    Mentors: ['Timestamp', 'Full Name', 'Email', 'Role/Org', 'Expertise', 'Other Expertise', 'LinkedIn', 'Contribution'],
    Investors: ['Timestamp', 'Full Name', 'Email', 'Org Name', 'Investor Type', 'Other Investor Type', 'Sectors of Interest', 'Anything Else'],
  };

  for (var tabName in tabs) {
    var tab = sheet.getSheetByName(tabName);
    if (!tab) {
      tab = sheet.insertSheet(tabName);
      Logger.log('Created tab: ' + tabName);
    }
    var headerRow = tabs[tabName];
    tab.getRange(1, 1, 1, headerRow.length).setValues([headerRow]);
    tab.setFrozenRows(1);
    Logger.log('Set up tab: ' + tabName);
  }

  Logger.log('Setup complete! Tabs are ready.');
}
