// REFACTOR:
// In order to get this to work with my DB (no problem with JSON SERVER)
// had to convert certain ids to integers via parseInt

export const findFolder = (folders=[], folderId) =>
  folders.find(folder => folder.id === parseInt(folderId))

export const findNote = (notes=[], noteId) =>
  notes.find(note => note.id === parseInt(noteId))

export const getNotesForFolder = (notes=[], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(note => note.folderId === parseInt(folderId))
)

export const countNotesForFolder = (notes=[], folderId) =>
  notes.filter(note => note.folderId === parseInt(folderId)).length
