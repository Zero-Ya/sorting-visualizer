import { create } from "zustand";

type SettingStore = {
    algorithm: string;
    array: number[];
    arrayRange: number;

    setArray: (data: number[]) => void;
    setArrayRange: (range: number) => void;

    setBubbleSort: () => void;
    setInsertionSort: () => void;
}

export const useSettingStore = create<SettingStore>((set) => ({
    algorithm: "bubble sort",
    array: [],
    arrayRange: 200,

    setArray(data) {
        set(() => ({ array: data }));
    },

    setArrayRange(range) {
        set(() => ({ arrayRange: range }));
    },

    setBubbleSort() {
        set(() => ({ algorithm: "bubble sort" }));
    },

    setInsertionSort() {
        set(() => ({ algorithm: "insertion sort" }));
    }
}))