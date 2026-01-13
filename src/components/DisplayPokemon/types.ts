import type { getTypeColor } from '@/helper';
import type { Pokemon } from 'pokenode-ts';
import type { ReactNode } from 'react';

export type Props = Pokemon & {
    bottomSection: (primaryColor: ReturnType<typeof getTypeColor>) => ReactNode;
};
