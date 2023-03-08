import { useCallback, useState } from "react";

type UseInputReturn<T> = {
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

const useInput = <T,>(initialValue: T): UseInputReturn<T> => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value: inputValue } = e.target;
    setValue((prev) => ({ ...prev, [name]: inputValue }));
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return { value, onChange, reset };
};

export default useInput;
