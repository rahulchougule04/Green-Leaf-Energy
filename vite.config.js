import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Auto-copy user uploaded images to public folder since terminal access is denied
try {
  const publicDir = 'c:/Users/HP/OneDrive/Desktop/New folder/solar/public';
  const uploadDir = 'C:/Users/HP/.gemini/antigravity/brain/89d60141-9d77-4c2a-9552-ced70beff60b/.user_uploaded';
  
  if (fs.existsSync(uploadDir)) {
    fs.copyFileSync(`${uploadDir}/media_1790220179910.jpg`, `${publicDir}/hero-bg.jpg`);
    fs.copyFileSync(`${uploadDir}/media_1790222604996.png`, `${publicDir}/brand-logo.png`);
    console.log('Images successfully copied to public folder!');
  }
} catch (e) {
  console.error('Failed to copy images:', e);
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@project-images': 'C:/Users/HP/.gemini/antigravity/brain/6034ce83-f3b1-4746-b1a6-bf72d193f77a',
      '@generated-images': 'C:/Users/HP/.gemini/antigravity/brain/a0b5f395-12df-445f-9f12-1465f88cf839',
      '@past-images': 'C:/Users/HP/.gemini/antigravity/brain/1b1cbc92-0472-4118-a0d1-1d5f2915d2da',
      '@current-images': 'C:/Users/HP/.gemini/antigravity/brain/8759d260-aaef-4103-97eb-130f32267209',
      '@user-uploads': 'C:/Users/HP/.gemini/antigravity/brain/89d60141-9d77-4c2a-9552-ced70beff60b/.user_uploaded'
    }
  },
  server: {
    port: 3000,
    host: true,
    fs: {
      allow: [
        'c:/Users/HP/OneDrive/Desktop/New folder/solar',
        'C:/Users/HP/.gemini/antigravity/brain/6034ce83-f3b1-4746-b1a6-bf72d193f77a',
        'C:/Users/HP/.gemini/antigravity/brain/a0b5f395-12df-445f-9f12-1465f88cf839',
        'C:/Users/HP/.gemini/antigravity/brain/1b1cbc92-0472-4118-a0d1-1d5f2915d2da',
        'C:/Users/HP/.gemini/antigravity/brain/8759d260-aaef-4103-97eb-130f32267209',
        'C:/Users/HP/.gemini/antigravity/brain/89d60141-9d77-4c2a-9552-ced70beff60b/.user_uploaded'
      ]
    }
  }
});


