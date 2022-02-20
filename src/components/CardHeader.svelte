<script lang="ts">
  export let onDelete: () => void;
</script>

<div class="tc-note-header">
  <span
    class="tc-note-close "
    on:click={() => {
      onDelete();
    }}
  >
    <i class="fas fa-times" />
  </span>
</div>

<style>
  .tc-note-header {
    display: flex;
    justify-content: flex-end;
    padding: 10px 16px 0;
  }
  .tc-note-close {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    line-height: 24px;
    text-align: center;
    transition: all 0.3s;
  }
  i:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  i:focus {
    box-shadow: inset 2px 3px 0px rgba(0, 0, 0, 0.8);
  }
</style>
