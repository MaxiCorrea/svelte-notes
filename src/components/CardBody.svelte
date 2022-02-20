<script lang="ts">
  import { INote, Note } from "../domains/Note";
  export let note: INote;
  export let onUpdate: (note: INote) => void;
</script>

<div
  class="tc-note-body"
  contenteditable="true"
  id={note.id + "-body"}
  on:input={(e) => {
    let elem = document.getElementById(note.id + "-body");
    onUpdate(new Note({ ...note, body: elem.innerText.trim() }));
  }}
>
  {note.body}
</div>

<style>
  .tc-note-body {
    font-size: 20px;
    padding: 10px 16px 16px;
    outline: 0;
  }
</style>
