import type { InputHTMLAttributes } from 'react'

export type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean
  errorMessage?: string
}

const CustomInput = ({
  hasError,
  errorMessage,
  ...props
}: CustomInputProps) => {
  return (
    <div className="flex flex-col items-start">
      <input
        type="text"
        {...props}
        className="block w-[340px] rounded-md px-2 py-1.5 ring-1 ring-zinc-300 ring-inset"
      />
      {hasError && (
        <p className="mt-1 text-xs text-red-500/50">{errorMessage}</p>
      )}
    </div>
  )
}

export default CustomInput
