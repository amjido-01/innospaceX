"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppModal({
  isOpen,
  onClose,
  phoneNumber = "+2349110158392", // Placeholder
  message,
}: WhatsAppModalProps) {
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : "";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}${encodedMessage}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            {/* Header / Accent */}
            <div className="h-2 bg-[#E68E40]" />

            <div className="p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-6 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                  <MessageCircle className="h-10 w-10 text-green-500" />
                </div>

                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Get Started with InnospaceX
                </h2>

                <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                  Join our community of innovators. Chat with us directly on
                  WhatsApp to get started or ask any questions!
                </p>

                <div className="flex w-full flex-col gap-3">
                  <Button
                    onClick={() => {
                      window.open(whatsappUrl, "_blank");
                      onClose();
                    }}
                    size="lg"
                    className="w-full h-14 text-lg font-bold bg-[#E68E40] hover:bg-[#ed994e] text-white rounded-xl shadow-lg shadow-orange-200 transition-all active:scale-95"
                  >
                    Chat on WhatsApp
                  </Button>

                  <button
                    onClick={onClose}
                    className="text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors py-2"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>

            {/* Sub-footer aesthetic */}
            <div className="bg-gray-50 px-8 py-4 text-center">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold text-nowrap">
                Empowering the next generation
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
