/* Python Quest: cuentas con código institucional y PIN. */
const SPREADSHEET_ID = "1T1cw9YJvcIP6C_lIoklbGIlO1DPOScbqWNslsJ4Y69Q";
const USERS_SHEET = "Usuarios";
const PROGRESS_SHEET = "Progreso";
const SESSION_SECONDS = 21600;

function doGet() {
  return HtmlService.createTemplateFromFile("Index").evaluate()
    .setTitle("Python Quest");
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}

function setupPythonQuest() {
  getUsersSheet();
  getProgressSheet();
  return "Python Quest conectado correctamente a la hoja de cálculo.";
}

function registerStudent(data) {
  const code = normalizeCode(data.code);
  const name = String(data.name || "").trim();
  const pin = String(data.pin || "");
  if (!name || !/^\d{6}$/.test(pin)) throw new Error("Usa tu nombre y un PIN de 6 dígitos.");
  const users = getUsersSheet();
  if (findUserRow(users, code)) throw new Error("Ese código ya tiene una cuenta. Inicia sesión o pide un reinicio de PIN.");
  const salt = Utilities.getUuid();
  users.appendRow([code, name, hashPin(pin, salt), salt, "ACTIVO", new Date()]);
  const session = startSession({ id: code, name: name });

return JSON.stringify({
  token: session.token,
  user: session.user,
  state: null
});
}

function loginStudent(codeValue, pinValue) {
  const code = normalizeCode(codeValue);
  const pin = String(pinValue || "");
  const users = getUsersSheet();
  const rowNumber = findUserRow(users, code);
  if (!rowNumber) throw new Error("Código o PIN incorrecto.");
  const row = users.getRange(rowNumber, 1, 1, 5).getValues()[0];
  if (row[4] !== "ACTIVO" || hashPin(pin, row[3]) !== row[2]) throw new Error("Código o PIN incorrecto.");
  const user = { id: row[0], name: row[1] };
  const session = startSession(user);

return JSON.stringify({
  token: session.token,
  user: session.user,
  state: getProgress(user.id)
});
}

function saveProgress(sessionToken, state) {
  const user = requireSession(sessionToken);
  const sheet = getProgressSheet();
  const row = findProgressRow(sheet, user.id);
  const record = [new Date(), user.id, user.name, Number(state.xp) || 0,
    (state.unlockedLevels || []).join(", "), (state.completedLevels || []).join(", "),
    (state.completedChallenges || []).join(", "), JSON.stringify(state.attempts || {})];
  if (row) sheet.getRange(row, 1, 1, record.length).setValues([record]);
  else sheet.appendRow(record);
  return { ok: true };
}

function startSession(user) {
  const token = Utilities.getUuid() + Utilities.getUuid();
  CacheService.getScriptCache().put("session:" + token, JSON.stringify(user), SESSION_SECONDS);
  return { token: token, user: user };
}

function requireSession(token) {
  const value = CacheService.getScriptCache().get("session:" + token);
  if (!value) throw new Error("Tu sesión expiró. Inicia sesión nuevamente.");
  return JSON.parse(value);
}

function getProgress(code) {
  const sheet = getProgressSheet();
  const rowNumber = findProgressRow(sheet, code);
  if (!rowNumber) return null;
  const row = sheet.getRange(rowNumber, 1, 1, 8).getValues()[0];
  return { xp: Number(row[3]) || 0, unlockedLevels: split(row[4], true), completedLevels: split(row[5], true), completedChallenges: split(row[6]), attempts: row[7] ? JSON.parse(row[7]) : {} };
}

function getUsersSheet() {
  return getSheet(USERS_SHEET, ["Código", "Nombre", "Hash PIN", "Salt", "Estado", "Creado"]);
}

function getProgressSheet() {
  return getSheet(PROGRESS_SHEET, ["Actualizado", "Código", "Estudiante", "XP", "Niveles desbloqueados", "Niveles completados", "Retos completados", "Intentos (JSON)"]);
}

function getSheet(name, headers) {
  const book = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = book.getSheetByName(name) || book.insertSheet(name);
  if (!sheet.getLastRow()) { sheet.appendRow(headers); sheet.setFrozenRows(1); }
  return sheet;
}

function findUserRow(sheet, code) { return findRow(sheet, 1, code); }
function findProgressRow(sheet, code) { return findRow(sheet, 2, code); }
function findRow(sheet, column, value) {
  const last = sheet.getLastRow();

  if (last < 2) {
    return null;
  }

  const expected = String(value).trim().toUpperCase();

  const values = sheet
    .getRange(2, column, last - 1, 1)
    .getValues()
    .flat();

  const index = values.findIndex(item =>
    String(item).trim().toUpperCase() === expected
  );

  return index < 0 ? null : index + 2;
}

function normalizeCode(value) {
  const code = String(value || "").trim().toUpperCase();
  if (!/^[A-Z0-9.-]{3,40}$/.test(code)) throw new Error("Escribe un código estudiantil válido.");
  return code;
}

function hashPin(pin, salt) {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, salt + pin, Utilities.Charset.UTF_8);
  return Utilities.base64Encode(bytes);
}

function split(value, numeric) {
  const values = value ? String(value).split(", ").filter(Boolean) : [];
  return numeric ? values.map(Number) : values;
}


function onOpen() {
    SpreadsheetApp.getUi()
        .createMenu('Python Quest')
        .addItem('Restablecer PIN de estudiante', 'resetearPinEstudiante')
        .addToUi();
}
 
function resetearPinEstudiante() {
    const CODIGO_A_RESETEAR = "123456789"; // <-- cambia este valor antes de ejecutar
 
    const code = normalizeCode(CODIGO_A_RESETEAR);
    const users = getUsersSheet();
    const data = users.getDataRange().getValues();
 
    const rowIndex = data.findIndex(
        (row, i) => i > 0 && String(row[0]) === code
    );
 
    if (rowIndex === -1) {
        Logger.log("No se encontró ningún estudiante con el código " + code);
        return;
    }
 
    const nombre = data[rowIndex][1];
    const nuevoPin = String(Math.floor(100000 + Math.random() * 900000));
    const salt = Utilities.getUuid();
    const hash = hashPin(nuevoPin, salt);
 
    users.getRange(rowIndex + 1, 3).setValue(hash);
    users.getRange(rowIndex + 1, 4).setValue(salt);
 
    Logger.log(`Nuevo PIN para ${nombre} (${code}): ${nuevoPin}`);
}
