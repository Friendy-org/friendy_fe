import { useState } from 'react';

interface UseFormProps<T> {
  initialValues: T;
}

interface RegisterOptions {
  validate?: (value: string) => string | undefined;
}

export default function useForm<T>({ initialValues }: UseFormProps<T>) {
  const [formData, setFormData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const validations = useState<
    Partial<Record<keyof T, (value: string) => string | undefined>>
  >({})[0];

  const validateAndSetErrors = ({
    value,
    validate,
    inputName,
  }: {
    value: string;
    validate?: (data: string) => string | undefined;
    inputName: string;
  }) => {
    if (!validate) {
      return;
    }

    try {
      validate(value);
      setErrors(prev => ({ ...prev, [inputName]: '' }));
    } catch (err) {
      if (err) {
        setErrors(prev => ({ ...prev, [inputName]: err }));
      }
    }
  };

  const handleChange = (name: keyof T, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (onSubmit: (data: T) => void) => {
    let hasError = false;

    for (const fieldName in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, fieldName)) {
        const name = fieldName as keyof T;
        validateAndSetErrors({
          value: formData[name] as string,
          validate: validations[name],
          inputName: name as string,
        });

        if (errors[name]) {
          hasError = true;
        }
      }
    }

    if (!hasError) {
      onSubmit(formData);
    }
  };

  const register = (name: keyof T, options?: RegisterOptions) => {
    if (options?.validate) {
      validations[name] = options.validate;
    }

    return {
      value: formData[name],
      onChange: (value: string) => handleChange(name, value),
      error: errors[name],
    };
  };

  return {
    formData,
    register,
    errors,
    handleSubmit,
  };
}
