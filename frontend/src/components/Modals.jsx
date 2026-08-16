import { X } from "lucide-react";

export default function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-cream-card dark:bg-espresso-card border border-cream-border dark:border-espresso-border rounded-card p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-serif text-lg font-semibold text-cream-textPrimary dark:text-espresso-textPrimary">
            {title}
          </h3>
          <button onClick={onClose} className="text-cream-textSecondary dark:text-espresso-textSecondary hover:text-caramel">
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}