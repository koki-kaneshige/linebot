function getLastRow(sheet, A) {
  const columnBVals = sheet.getRange(A +":"+ A).getValues();
  const LastRow = columnBVals.filter(String).length;
  return LastRow;
}
