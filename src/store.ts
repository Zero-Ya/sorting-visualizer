import { create } from "zustand";

type SettingStore = {
    algorithm: string;
    array: number[];
    arrayRange: number;
    delay: number;

    setArray: (data: number[]) => void;
    setArrayRange: (range: number) => void;

    setSortAlgo: (data: string) => void;
}

export const useSettingStore = create<SettingStore>((set) => ({
    algorithm: "bubble sort",
    array: [],
    arrayRange: 400,
    delay: 1,

    setArray(data) {
        set(() => ({ array: data }));
    },

    setArrayRange(range) {
        set(() => ({ arrayRange: range }));
    },

    setSortAlgo(data) {
        set(() => ({ algorithm: data }));
    }
}))