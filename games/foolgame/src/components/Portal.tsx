import { createPortal } from 'react-dom';
import { useMemo } from 'react';

export function Portal(props: { children: React.ReactNode }): JSX.Element {
	const el = useMemo(() => document.createElement('div'), []);
	return createPortal(props.children, el);
}
