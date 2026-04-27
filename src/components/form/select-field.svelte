<script lang='ts'>
  import { InfoIcon } from '@lucide/svelte';

  import { Label } from '~/components/ui/label';
  import { Select, SelectContent, SelectItem, SelectTrigger } from '~/components/ui/select';
  import { capitalizeFirstLetter } from '~/utils';

  interface Props {
    name?: string;
    label?: string;
    value: string | undefined;
    setValue: (val: string) => void;
    options: string[];
    error?: string;

    placeholder?: string;
  }

  let {
    name,
    label,
    value = $bindable(),
    setValue,
    options,
    error = $bindable(),
    placeholder = 'Select an option'
  }: Props = $props();
</script>

<div class='flex w-full flex-col gap-2'>
  {#if label}
    <Label for={name}>{label}</Label>
  {/if}

  <Select
    type='single'
    {value}
    onValueChange={(val) => {
      setValue(val);
    }}
  >
    <SelectTrigger id={name} class='w-full'>
      {#if value}
        {capitalizeFirstLetter(value)}
      {:else}
        <span class='text-muted-foreground'>{placeholder}</span>
      {/if}
    </SelectTrigger>
    <SelectContent>
      {#each options as option (option)}
        <SelectItem value={option} label={capitalizeFirstLetter(option)}>
          {capitalizeFirstLetter(option)}
        </SelectItem>
      {/each}
    </SelectContent>
  </Select>

  {#if error}
    <Label class='mt-1 text-xs font-thin'>
      <InfoIcon size={13} class='text-destructive shrink-0' />
      {error}
    </Label>
  {/if}
</div>
