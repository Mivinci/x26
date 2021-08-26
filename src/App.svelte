<script>
  import Detail from "./Detail.svelte";
  import Provider from "./provider";

  const promise = Provider.local();

  // a bitmap magic
  let bm = 0;

  function select(i) {
    bm ^= 1 << i;
  }

  function active(b, i) {
    return b & (1 << (i + 1))
  }
</script>

<div class="w-max">
  {#await promise}
    Comming...
  {:then r}
    <header class="flex justify-between px-5 py-4">
      <div class="text-2xl font-bold text-gray-800 dark:text-white">{r.settings.title}</div>
      <div class="inline-grid grid-cols-3 gap-2 text-center text-xs text-white">
        {#each Object.keys(r.settings.legend) as k}
          <div class="rounded-lg w-8 h-8 flex flex-col justify-center shadow-md bg-{k}-400">
            {r.settings.legend[k]}
          </div>
        {/each}
      </div>
    </header>
    <main
      class="relative rounded-xl p-5 
        inline-grid grid-cols-{r.settings.column} gap-5 
        text-center font-medium text-white 
        bg-white sm:bg-gray-100 dark:bg-dark-100"
    >
      {#each r.settings.mask as key, i}
        <div
          class:open={active(bm, i)}
          class="pad 
            pad-{r.projects[key] ? r.projects[key].shape : 'normal'} 
            bg-{r.projects[key] ? r.projects[key].status : 'gray'}-{r.projects[key] ? '400' : '200'}"
          on:click={() => select(i + 1)}>
          <Detail {key} detail={r.projects[key]} hidden={!active(bm, i)} />  
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
    @apply flex flex-col justify-center select-none
      rounded-xl cursor-pointer shadow-md 
      transition duration-300 
      transform-gpu
      'hover:scale-110 hover:shadow-xl';
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
    @apply absolute 'w-90/100' 'left-5/100' 
      h-full z-10 text-lg 
      'sm:left-0' 'sm:w-full'
      'hover:scale-100';
  }
  
  :global(*) {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  :global(body) {
    height: 100vh;
    @apply flex flex-col justify-center items-center 'dark:bg-dark-700';
  }
</style>
