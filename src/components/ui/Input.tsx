import React, { ReactNode, useState } from "react";



export default function Input({
    className = '',
    type = 'text',
    placeholder,
    onChange,
    rightElement,
    leftElement,
    value,
    required,
    readOnly,
    label,
    marginTop,
    hidden,
    onClick,
    error,
    onFocus,
    onBlur,
    ref,
    maxLength,
    desc,
    format,
    inputClass,
    onFileChange,
    fileDesc,
    fileAccept = '.svg, .png'
}: {
    className?: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    onChange?: (value: any) => void;
    rightElement?: ReactNode;
    leftElement?: ReactNode;
    value?: string | number;
    required?: boolean;
    readOnly?: boolean;
    label?: string;
    marginTop?: number,
    hidden?: boolean;
    onClick?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    error?: string;
    ref?: any
    maxLength?: number
    desc?: string
    format?: (value: any) => void;
    inputClass?: string
    onFileChange?: (files: {url: string}[]) => void;
    fileDesc?: string;
    fileAccept?: string;
}) {
    const [focused, setFocused] = useState(false)
    const [blurred, setBlurred] = useState(false)
    const [files, setFiles] = useState<{url: string}[]>([])

    const focus = () => {
        onFocus && onFocus()
        setFocused(true)
        setBlurred(false)
    }

    const blur = () => {
        onBlur && onBlur()
        setFocused(false)
        setBlurred(true)
    }

    return (
        <div className="w-full">
            <div className="w-full" onClick={() => onClick && onClick()} style={{marginTop: marginTop}}>
                {label && <p className="font-medium text-left text-label mb-1 text-xs md:text-sm">{label}</p>}
                <div className={`flex items-center h-10 w-full rounded-md border border-slate-200 ${readOnly ? 'bg-[#F5F5F7] border border-[#D0D5DD]' : 'bg-white'} text-sm focus-within:none ${className}`} >
                    {leftElement && (
                        <div className="pl-2 h-full flex justify-center items-center">
                            {leftElement}
                        </div>
                    )}
                    <input
                        type={type === 'number' ? 'text' : type}
                        inputMode={type === 'number' ? 'numeric' : 'text'}
                        className={`flex-1 bg-transparent rounded-md placeholder:text-xs placeholder:text-label text-black text-base px-3 py-2 focus:outline-none placeholder:text-[#344054] w-full ${inputClass}`}
                        placeholder={placeholder}
                        onChange={(e) => {
                            if (type === 'number') {
                                onChange && onChange(e.target.value.replace(/\D/g, ''));
                            } else {
                                onChange && onChange(e.target.value);
                            }
                        }}
                        value={focused ? value : format ? `${format(value)}` : value}
                        required={required}
                        readOnly={readOnly}
                        onFocus={focus}
                        onBlur={blur}
                        ref={ref}
                        maxLength={maxLength}
                    />
                    {rightElement && (
                        <div className="pr-2 h-full flex justify-center items-center">
                            {rightElement}
                        </div>
                    )}
                </div>
                {error && <p className="text-warning text-left text-xs mt-2">{error}</p>}
                {desc && <p className="text-label text-left text-xs mt-2">{desc}</p>}
            </div>
        </div>
    );
}
