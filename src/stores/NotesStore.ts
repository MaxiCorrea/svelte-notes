import { writable } from "svelte/store";
import { Note } from "../domains/Note";
import { v4 as uuidv4 } from "uuid";

interface INoteStore {
  loading: boolean;
  notes: Note[];
}

function createStore() {
  const state: INoteStore = {
    loading: false,
    notes: [],
  };
  const { subscribe, update } = writable(state);

  const replaceAndGet = (notes: Note[], note: Note) => {
    for (let i = 0; i < notes.length; ++i)
      if (notes[i].id === note.id) notes[i] = note;
    return notes;
  };

  return {
    subscribe,
    loading: () => {
      update((state) => {
        state.loading = false;
        state.notes = [];
        return state;
      });
    },
    success: (notes: Note[]) => {
      update((state) => {
        state.loading = false;
        state.notes = notes;
        return state;
      });
    },
    addNewNote: () => {
      update((state) => {
        state.loading = false;
       state.notes = [...state.notes, Note.createNewEmpty(uuidv4())];
        return state;
      });
    },
    deleteNote: (note: Note) => {
      update((state) => {
        state.loading = false;
        state.notes = state.notes.filter((n) => n.id !== note.id);
        return state;
      });
    },
    updateNote: (note: Note) => {
      update((state) => {
        state.loading = false;
        state.notes = replaceAndGet(state.notes, note);
        return state;
      });
    },    
  };
}

export const store = createStore();
