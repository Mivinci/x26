<script>
  import Detail from "./Detail.svelte";
  import Provider from "./provider";

  const promise = Provider.local();

  // a bitmap magic
  let bm = 0;

  function select(i) {
    bm ^= 1 << i;
  }
</script>

<div class="w-max">
  {#await promise}
    Comming...
  {:then r}
    <header class="flex justify-between px-5 py-4">
      <div class="text-2xl font-bold text-gray-800">{r.settings.title}</div>
      <div class="inline-grid grid-cols-3 gap-2 text-center text-xs text-white">
        {#each Object.keys(r.settings.legend) as k}
          <div class="rounded-lg w-8 h-8 flex flex-col justify-center shadow-md bg-{k}-400">
            {r.settings.legend[k]}
          </div>
        {/each}
      </div>
    </header>
    <main
      class="relative rounded-xl p-5 inline-grid grid-cols-{r.settings.column} gap-5 text-center font-medium text-white bg-white sm:bg-gray-100"
    >
      {#each r.settings.mask as k, i}
        <div
          class:open={bm & (1 << (i + 1))}
          class="hover:scale-110 hover:shadow-xl 
            pad pad-{r.projects[k] ? r.projects[k].shape : 'normal'} 
            bg-{r.projects[k] ? r.projects[k].status : 'gray'}-{r.projects[k] ? '400' : '200'}"
          on:click={() => select(i + 1)}
        >
          {#if r.projects[k] && bm & (1 << (i + 1))}
            <Detail detail={r.projects[k]} />
          {:else}
            {k}
          {/if}
        </div>
      {/each}
    </main>
    <footer class="my-3 text-center text-gray-600">{r.settings.slogon}</footer>
  {:catch e}
    {e}
  {/await}
</div>

<style windi:preflights:global windi:safelist>
  .pad {
    @apply flex flex-col justify-center rounded-xl cursor-pointer shadow-md transition duration-300 transform select-none;
  }
  .pad-large {
    @apply col-span-2 row-span-2 text-xl;
  }
  .pad-horizon {
    @apply col-span-2;
  }
  .pad-vertical {
    @apply row-span-2;
  }
  .pad-normal {
    @apply w-12 h-12;
  }

  .open {
    @apply absolute w-full h-full z-10 text-lg transform-none;
  }
  
  :global(*) {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  :global(body) {
    height: 100vh;
    @apply flex flex-col justify-center items-center;
  }
</style>
