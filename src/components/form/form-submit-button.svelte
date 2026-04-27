<script lang='ts'>
  import type { ArrowRightIcon } from '@lucide/svelte';

  import { Button } from '~/components/ui/button';
  import { Spinner } from '~/components/ui/spinner';
  import { cn } from '~/utils/cn';

  interface Props {
    label: string;
    isSubmitting: boolean;
    icon?: typeof ArrowRightIcon;
    disabled?: boolean;
  }

  const { label, icon, isSubmitting, disabled }: Props = $props();

  const Icon = $derived(isSubmitting ? Spinner : icon);
</script>

<Button
  type='submit'
  class={cn('w-full mt-1', (isSubmitting || disabled) && 'cursor-not-allowed')}
>
  {label}

  {#if Icon}
    <Icon size={16} />
  {/if}
</Button>
