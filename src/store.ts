import { create } from "zustand";

type SettingStore = {
    algorithm: string;
    array: number[];
    animSteps: number[][];

    setArray: (data: number[]) => void;
    setAnimSteps: (data: number[][]) => void;

    setBubbleSort: () => void;
    setInsertionSort: () => void;
}

export const useSettingStore = create<SettingStore>((set) => ({
    algorithm: "bubble sort",
    array: [],
    animSteps: [],

    setArray(data) {
        set(() => ({ array: data }));
    },

    setAnimSteps(data) {
        set(() => ({ animSteps: data }));
    },

    setBubbleSort() {
        set(() => ({ algorithm: "bubble sort" }));
    },

    setInsertionSort() {
        set(() => ({ algorithm: "insertion sort" }));
    }
}))