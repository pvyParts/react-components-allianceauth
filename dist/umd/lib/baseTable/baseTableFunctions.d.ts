import React from "react";
export declare function DebouncedInput({ value: initialValue, onChange, debounce, ...props }: {
    value: string | number;
    onChange: (value: string | number) => void;
    debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">): React.JSX.Element;
//# sourceMappingURL=baseTableFunctions.d.ts.map