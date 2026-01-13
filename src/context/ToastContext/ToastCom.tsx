import type { Toast } from './types';

const ToastCom: React.FC<Toast> = (toast) => {
    return (
        <div
            key={toast.id}
            className={`z-100 rounded px-4 py-2 text-white shadow-lg ${
                toast.type === 'success'
                    ? 'bg-green-500'
                    : toast.type === 'error'
                      ? 'bg-red-500'
                      : 'bg-blue-500'
            }`}
        >
            {toast.message}
        </div>
    );
};

export default ToastCom;
