// REFACTOR:
// In order to get this to work with my DB (no problem with JSON SERVER)
// had to change all equality operators from
// strict equality (===)
// to
// abstract equality (==)
// WHY? 
// Ergo, get compile warning (not error, per se): "Expected '===' and instead saw '=='  eqeqeq"
// REFACTOR AGAIN to keep strict equality?

export const findFolder = (folders=[], folderId) =>
  folders.find(folder => folder.id == folderId)

export const findNote = (notes=[], noteId) =>
  notes.find(note => note.id == noteId)

export const getNotesForFolder = (notes=[], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(note => note.folderId == folderId)
)

export const countNotesForFolder = (notes=[], folderId) =>
  notes.filter(note => note.folderId == folderId).length
