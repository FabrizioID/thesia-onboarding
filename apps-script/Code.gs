const SHEET_NAMES = {
  responses: "responses",
  profiles: "profiles",
  catalog: "catalog",
};

const ADMIN_KEY = "thesia-admin-demo";

function doGet(e) {
  const action = (e.parameter.action || "").trim();

  if (action === "health") {
    return jsonResponse({
      ok: true,
      service: "thesia-onboarding",
      sheets: SHEET_NAMES,
    });
  }

  if (action === "listProfiles") {
    guardAdmin(e.parameter.adminKey);
    return jsonResponse({
      ok: true,
      records: listProfileRecords_(),
    });
  }

  return jsonResponse({
    ok: false,
    error: "Unsupported GET action",
  });
}

function doPost(e) {
  const payload = JSON.parse(e.postData.contents || "{}");
  const action = (payload.action || "").trim();

  if (action === "submitProfile") {
    guardAdmin(payload.adminKey);
    const record = payload.payload || {};
    appendRecord_(record);
    return jsonResponse({
      ok: true,
      id: record.id,
    });
  }

  return jsonResponse({
    ok: false,
    error: "Unsupported POST action",
  });
}

function appendRecord_(record) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const responsesSheet = getOrCreateSheet_(spreadsheet, SHEET_NAMES.responses, getResponseHeaders_());
  const profilesSheet = getOrCreateSheet_(spreadsheet, SHEET_NAMES.profiles, getProfileHeaders_());

  responsesSheet.appendRow([
    record.id || "",
    record.createdAt || new Date().toISOString(),
    record.session || "",
    record.student?.fullName || "",
    record.student?.email || "",
    record.student?.career || "",
    record.student?.cycle || "",
    record.student?.institution || "",
    safeJson_(record.answers),
  ]);

  profilesSheet.appendRow([
    record.id || "",
    record.createdAt || new Date().toISOString(),
    record.session || "",
    record.student?.fullName || "",
    record.student?.email || "",
    record.profile?.primaryCluster || "",
    record.profile?.secondaryCluster || "",
    record.profile?.methodologyLevel || "",
    record.profile?.methodologyScore || "",
    record.profile?.recommendedLine || "",
    safeJson_(record.profile?.scores || []),
    safeJson_(record.profile?.strengths || []),
    safeJson_(record.profile?.risks || []),
    safeJson_(record.profile?.themes || []),
    record.profile?.summary || "",
    safeJson_(record),
  ]);
}

function listProfileRecords_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const profilesSheet = getOrCreateSheet_(spreadsheet, SHEET_NAMES.profiles, getProfileHeaders_());
  const values = profilesSheet.getDataRange().getValues();

  if (values.length <= 1) {
    return [];
  }

  return values.slice(1).map(function (row) {
    return {
      id: row[0],
      createdAt: row[1],
      session: row[2],
      student: {
        fullName: row[3],
        email: row[4],
        career: "",
        cycle: "",
        institution: "",
      },
      profile: {
        primaryCluster: row[5],
        secondaryCluster: row[6],
        methodologyLevel: row[7],
        methodologyScore: Number(row[8] || 0),
        recommendedLine: row[9],
        scores: parseJson_(row[10], []),
        strengths: parseJson_(row[11], []),
        risks: parseJson_(row[12], []),
        themes: parseJson_(row[13], []),
        summary: row[14],
      },
      raw: parseJson_(row[15], {}),
    };
  }).map(mergeRawStudentData_);
}

function mergeRawStudentData_(record) {
  const raw = record.raw || {};
  const rawStudent = raw.student || {};
  record.student.career = rawStudent.career || "";
  record.student.cycle = rawStudent.cycle || "";
  record.student.institution = rawStudent.institution || "";
  record.answers = raw.answers || {};
  return record;
}

function guardAdmin(adminKey) {
  if ((adminKey || "").trim() !== ADMIN_KEY) {
    throw new Error("Unauthorized");
  }
}

function getOrCreateSheet_(spreadsheet, name, headers) {
  let sheet = spreadsheet.getSheetByName(name);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(name);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  }

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function getResponseHeaders_() {
  return [
    "id",
    "createdAt",
    "session",
    "fullName",
    "email",
    "career",
    "cycle",
    "institution",
    "answersJson",
  ];
}

function getProfileHeaders_() {
  return [
    "id",
    "createdAt",
    "session",
    "fullName",
    "email",
    "primaryCluster",
    "secondaryCluster",
    "methodologyLevel",
    "methodologyScore",
    "recommendedLine",
    "scoresJson",
    "strengthsJson",
    "risksJson",
    "themesJson",
    "summary",
    "rawRecordJson",
  ];
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function safeJson_(value) {
  return JSON.stringify(value || "");
}

function parseJson_(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}
