import { create } from "zustand";
interface collapsible {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useCollapsibleStore = create<collapsible>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
