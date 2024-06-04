"use client";

import React, { useState } from "react";
import Label from "./Label";
import Image from "next/image";

const ImagePreview = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
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
        <div className="flex justify-center mb-4">
          <Image
            src={imagePreview}
            alt="Pré-visualização da Imagem"
            className="w-[494px] h-[294px] object-cover"
            width={494}
            height={294}
          />
        </div>
      )}
      <Label text="Selecione uma imagem" htmlFor="image" />
      <input
        id="image"
        name="image"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="p-2 border border-zinc-300 rounded w-full file:text-sm file:font-medium text-sm font-medium"
      />
      {selectedImage && (
        <input type="hidden" name="imageFile" value={selectedImage.name} />
      )}
    </div>
  );
};

export default ImagePreview;
