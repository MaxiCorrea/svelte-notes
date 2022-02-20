<script lang="ts">
  import { Note } from "../domains/Note";
  export let note: Note;
  export let onUpdate: (note: Note) => void;
</script>

<div
  class="tc-note-title"
  contenteditable="true"
  id={note.id + "-title"}
  on:input={(e) => {
    let elem = document.getElementById(note.id + "-title");
    onUpdate(new Note({ ...note, title: elem.innerText.trim() }));
  }}
>
  {note.title}
</div>

<style>
  .tc-note-title {
    font-size: 24px;
    padding: 10px 16px;
    font-weight: bold;
    outline: 0;
  }
</style>
