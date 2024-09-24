import create from "zustand";

import createSelectors from "./selectors";

interface BearState {
  bears: number;
  fish: number
  increase: (by: number) => void;
  incrementFish: () => void;
  increment: () => void;
}

 const useStoreBase = create<BearState>()((set) => ({
  bears: 0,
  fish: 0,
  incrementFish: () => set((state) => ({ fish: state.fish += 1 })),
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  increment: () => set((state) => ({ bears: state.bears += 1 }))
}));

export default useStoreBase;

//export default createSelectors(useStoreBase);
