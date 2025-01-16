import ApiError from '@api/ApiError';
import fieldMappings from '@constants/errorFieldMappings';
import { useState } from 'react';

interface UseFormProps<T> {
  initialValues: T;
}

interface RegisterOptions {
  validate?: (value: string) => void;
}

export default function useForm<T>({ initialValues }: UseFormProps<T>) {
  const [formData, setFormData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const validations = useState<Partial<Record<keyof T, (value: string) => void>>>({})[0];
  let hasError = false;

  const validateAndSetErrors = ({
    value,
    validate,
    inputName,
  }: {
    value: string;
    validate?: (data: string) => void;
    inputName: string;
  }) => {
    if (!validate) {
      return;
    }

    try {
      validate(value);
      setErrors(prev => ({ ...prev, [inputName]: '' }));
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        hasError = true;
        setErrors(prev => ({ ...prev, [inputName]: err.message }));
      } else {
        setErrors(prev => ({
          ...prev,
          [inputName]: '유효성 검사 중 오류가 발생했습니다.',
        }));
      }
    }
  };

  const handleChange = (name: keyof T, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (onSubmit: () => Promise<void>) => {
    for (const fieldName in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, fieldName)) {
        const name = fieldName as keyof T;
        validateAndSetErrors({
          value: formData[name] as string,
          validate: validations[name],
          inputName: name as string,
        });
      }
    }

    if (!hasError) {
      try {
        await onSubmit();
      } catch (error) {
        hasError = true;
        if (error instanceof ApiError) {
          const inputName = fieldMappings[error.message] || 'form';
          setErrors(prev => ({ ...prev, [inputName]: error.message }));
        } else {
          console.error('예상치 못한 에러 발생:', error);
        }
      }
    }

    return hasError;
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
