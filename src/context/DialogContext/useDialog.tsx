import { useContext } from 'react';
import { DialogContext } from './DialogContext';

export function useDialog() {
    const dialogContext = useContext(DialogContext);

    if (!dialogContext)
        throw new Error('useDialog must be used within a DialogProvider');

    return dialogContext;
}
