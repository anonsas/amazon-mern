import { Icon } from 'UI/Icon/Icon';
import { IconType } from 'app/types';

type Props = {
  $variant: 'possitive' | 'negative' | 'info' | 'warning';
  $icon: IconType;
  $isOpen: boolean;
  $canClose?: boolean;
  $title?: string;
  $text?: string;
};

export function Alert({ $variant, $icon, $isOpen, $canClose, $title, $text }: Props) {
  return (
    <div>
      <Icon $icon={$icon} />
    </div>
  );
}
