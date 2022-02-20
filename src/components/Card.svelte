<script lang="ts">
  import NoteBody from "./CardBody.svelte";
  import NoteHeader from "./CardHeader.svelte";
  import NoteTitle from "./CardTitle.svelte";
  import type { Note } from "../domains/Note";
  export let note: Note;
  export let onDelete: () => void;
  export let onUpdate: (note: Note) => void;

  import { onMount } from "svelte";
  onMount(() => {
    document.getElementById(note.id + "-title").innerText = "";
    document.getElementById(note.id + "-body").innerText = "";
  });
</script>

<div class="tc-note">
  <NoteHeader {onDelete} />
  <NoteTitle {note} {onUpdate} />
  <NoteBody {note} {onUpdate} />
</div>

<style>
  .tc-note {
    background-color: #f0c806;
    border-radius: 8px;
    width: 280px;
    margin: 0 10px 20px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.5s;
    cursor: pointer;
    font-family: "Caveat", cursive;
  }
  div:hover {
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  }
</style>
