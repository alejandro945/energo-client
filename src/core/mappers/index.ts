import { ChipProps } from "@nextui-org/chip";

export const statusAlertColorMap: Record<string, ChipProps["color"]> = {
    high: "danger",
    med: "warning",
    low: "primary",
};

export const statusColorBaseOnThreshold = (threshold: number, data: number) => {
    return data > threshold ? "success" : "danger";
};