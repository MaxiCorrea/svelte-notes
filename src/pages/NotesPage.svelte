<script>
  import { store } from "../stores/NotesStore";
  import Wrapper from "../components/Wrapper.svelte";
  import Card from "../components/Card.svelte";
  import Cards from "../components/Cards.svelte";
  import NewCard from "../components/NewCard.svelte";
</script>

{#if $store.loading}
  <div>loading....</div>
{:else}
  <Wrapper>
    <NewCard
      onNewNote={() => {
        store.addNewNote();
      }}
    />
    <Cards>
      {#each $store.notes as note}
        <Card
          {note}
          onDelete={() => {
            store.deleteNote(note);
          }}
          onUpdate={(note) => {
            store.updateNote(note);
          }}
        />
      {/each}
    </Cards>
  </Wrapper>
{/if}
