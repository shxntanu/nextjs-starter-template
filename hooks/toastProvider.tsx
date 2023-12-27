import { createContext, useContext, useMemo, ReactNode } from "react";
import { notification } from "antd";

type ToastType = "success" | "info" | "warning" | "error";
type PlacementType = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

interface ToastContextProps {
    showToast: (
        placement: PlacementType,
        type: ToastType,
        title: string,
        text: string
    ) => void;
}

interface ToastProviderProps {
    children: ReactNode;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    /**
     * Function to open a notification
     * @param {string} placement - Placement of the notification. Can be one of: topLeft, topRight, bottomLeft, bottomRight.
     * @param {string} type - Type of the notification. Can be one of: success, info, warning, error.
     * @param {string} title - Title of the notification.
     * @param {string} text - Text of the notification.
     */

    const showToast = (
        placement: PlacementType,
        type: ToastType,
        title: string,
        text: string
    ) => {
        notification[type]({
            message: title,
            description: text,
            placement,
        });
    };

    const value = useMemo(() => {
        return {
            showToast,
        };
    }, [showToast]);

    return (
        <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
    );
};

export const useToast = (): ToastContextProps => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};
