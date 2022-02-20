<script lang="ts">
  export let onNewNote: () => void;
</script>

<button
  class="new-note-btn"
  on:click={() => {
    onNewNote();
  }}
>
  New Note
</button>

<style>
  .new-note-btn {
    width: 200px;
    display: block;
    margin: 0 auto 20px;
    background-color: #ffffff;
    padding: 10px 32px;
    border: 1px solid #e0e0e0;
    font-size: 26px;
    outline: 0;
    transition: all 0.3s;
    cursor: pointer;
    font-family: "Caveat", cursive;
  }
  button:hover {
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
  }
  button:active {
    position: relative;
    top: 1px;
  }
</style>
