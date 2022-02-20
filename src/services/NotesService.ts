import type { INote } from "../domains/Note";

export class NotesService {
  static async getNotes(): Promise<INote[]> {
    let notes: INote[] = [];
    return notes;
  }
}
