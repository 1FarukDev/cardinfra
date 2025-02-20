import { useState } from "react";
import { Select } from "antd";
import styled from "styled-components";

export default function DropDown({
    data,
    onChange,
    label,
    marginTop,
    content: isContent,
    className,
    error,
    placeHolder,
    onContentChange
}: {
    data: any;
    content?: boolean;
    label?: string;
    onChange: (value: any) => void;
    onContentChange?: (value: any[]) => void;
    marginTop?: number;
    className?: string;
    placeHolder?: string;
    error?: string;
}) {
    const [onFocus, setOnFocus] = useState(false);
    const [onBlur, setOnBlur] = useState(false);

    return (
        <Container className="w-full">
            {label && (
                <p className="font-medium text-left text-label mb-1 text-xs md:text-sm">
                    {label}
                </p>
            )}
            <CustomSelect
                size="large"
                allowClear
                onFocus={() => {
                    setOnFocus(true);
                    setOnBlur(false);
                }}
                onBlur={() => {
                    setOnFocus(false);
                    setOnBlur(true);
                }}
                {...(isContent ? { mode: "multiple" } : {})}
                className="!w-full !shadow-none rounded-md text-label font-light"
                onChange={(value: any) => {
                    if (isContent && onContentChange) {
                        onContentChange(value);
                    } else {
                        onChange(value);
                    }
                }}
                placeholder={placeHolder}
                listItemHeight={50}
            >
                {data.map((option: string) => (
                    <CustomSelect.Option key={option} value={option}>
                        <div>{option}</div>
                    </CustomSelect.Option>
                ))}
            </CustomSelect>
            {error && <p className="text-warning text-left text-xs mt-2">{error}</p>}
        </Container>
    );
}

const Container = styled.div`
   
`

const CustomSelect = styled(Select)`
  .ant-select-selection-placeholder {
    color: black !important;
  }
`;