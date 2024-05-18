"use client";

import React, { useState } from "react";

type ImagePreviewProps = {
  currentImage: string | null;
};

const ImagePreview: React.FC<ImagePreviewProps> = ({ currentImage }) => {
  const [imagePreview, setImagePreview] = useState(currentImage);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setSelectedImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Pré-visualização da Imagem"
          className="w-32 h-32 rounded-full mb-4"
        />
      )}
      <input
        type="file"
        accept="image/*"
        name="image"
        onChange={handleImageChange}
        className="mt-1 p-2 border border-gray-300 rounded w-full"
      />
      {selectedImage && (
        <input type="hidden" name="imageFile" value={selectedImage.name} />
      )}
    </div>
  );
};

export default ImagePreview;
