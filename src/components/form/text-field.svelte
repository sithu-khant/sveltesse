<script lang='ts'>
  import { InfoIcon } from '@lucide/svelte';

  import { Input } from '~/components/ui/input';
  import { Label } from '~/components/ui/label';
  import { Textarea } from '~/components/ui/textarea';
  import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';

  interface Props {
    type: 'input' | 'textarea';
    name?: string;
    label?: string;
    placeholder?: string;
    value: string | null | undefined;
    error?: string;
    info?: string;
  }

  let {
    type,
    name,
    label,
    placeholder,
    value = $bindable(),
    error = $bindable(),
    info
  }: Props = $props();
</script>

<div>
  <Label class='mb-2'>
    {#if label}
      {label}
    {/if}

    {#if info}
      <Tooltip>
        <TooltipTrigger>
          <InfoIcon size='12' />
        </TooltipTrigger>
        <TooltipContent>{info}</TooltipContent>
      </Tooltip>
    {/if}
  </Label>

  {#if type === 'textarea'}
    <Textarea {name} bind:value {placeholder} class='min-h-35'></Textarea>
  {:else}
    <Input {name} bind:value {placeholder} />
  {/if}

  {#if error}
    <Label class='mt-1 text-xs font-thin'>
      <InfoIcon size={13} class='text-destructive shrink-0' />
      {error}
    </Label>
  {/if}
</div>
