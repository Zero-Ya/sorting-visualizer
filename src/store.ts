import { create } from "zustand";

type SettingStore = {
    algorithm: string;
    array: number[];

    setArray: (data: number[]) => void;

    setBubbleSort: () => void;
    setInsertionSort: () => void;
}

export const useSettingStore = create<SettingStore>((set) => ({
    algorithm: "bubble sort",
    array: [],

    setArray(data) {
        set(() => ({ array: data }));
    },

    setBubbleSort() {
        set(() => ({ algorithm: "bubble sort" }));
    },

    setInsertionSort() {
        set(() => ({ algorithm: "insertion sort" }));
    }
}))