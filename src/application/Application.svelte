<script lang="ts">
  import NotesPage from "../pages/NotesPage.svelte";
  import { onMount } from "svelte";
  import { NotesService } from "../services/NotesService";
  import { store } from "../stores/NotesStore";

  onMount(async () => {
    store.loading();
    NotesService.getNotes().then((response) => {
      store.success(response);
    });
  });
</script>

<NotesPage />
