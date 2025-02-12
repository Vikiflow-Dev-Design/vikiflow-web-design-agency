"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(
      selectedImage === 0 ? images.length - 1 : selectedImage - 1
    );
  };

  const goToNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(
      selectedImage === images.length - 1 ? 0 : selectedImage + 1
    );
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group aspect-video cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openLightbox(index)}
          >
            <div
              className={`absolute inset-0 z-10 transition-opacity duration-300 ${
                isDark ? "bg-black/40" : "bg-black/20"
              } group-hover:bg-black/0`}
            />
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-4 text-white hover:text-white/80 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 text-white hover:text-white/80 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[selectedImage]}
              alt={`Gallery image ${selectedImage + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
