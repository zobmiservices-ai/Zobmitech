import fs from 'fs';
import path from 'path';

const IMAGES_DIR = path.join(process.cwd(), 'src/assets/images');

// Resolutions to generate (width in pixels)
const TARGET_WIDTHS = [480, 768, 1024, 1200, 1600];

async function generateResponsiveImages() {
  console.log('🚀 Starting responsive image asset pipeline...');
  
  let sharp;
  try {
    const sharpModule = await import('sharp');
    sharp = sharpModule.default;
  } catch (err) {
    console.warn('⚠️ [Vercel/CI/CD Compatibility] Dynamic sharp library load skipped or unavailable in this build container. Continuing build cleanly with original assets remaining intact.');
    return;
  }
  
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`❌ Directory does not exist: ${IMAGES_DIR}`);
    return;
  }

  const files = fs.readdirSync(IMAGES_DIR);
  
  // Only process original base images (filtering out previously generated resized outputs)
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    const isImage = ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.webp';
    if (!isImage) return false;

    // Check if the file is a generated asset (has suffix like -480, -768, etc.)
    const isGenerated = TARGET_WIDTHS.some(width => {
      return file.endsWith(`-${width}${ext}`) || file.endsWith(`-${width}.webp`);
    });

    return !isGenerated;
  });

  console.log(`📸 Identified original image assets: ${imageFiles.length}`);

  for (const file of imageFiles) {
    const filePath = path.join(IMAGES_DIR, file);
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);

    console.log(`⚙️ Processing base asset: ${file}`);
    
    // Get image metadata to avoid upscaling
    const image = sharp(filePath);
    const metadata = await image.metadata();
    const originalWidth = metadata.width || 2000;

    for (const width of TARGET_WIDTHS) {
      if (width > originalWidth) {
        console.log(`⏩ Skipping ${width}px resize for ${file} (original width is ${originalWidth}px)`);
        continue;
      }

      // 1. Generate optimized WebP
      const webpName = `${baseName}-${width}.webp`;
      const webpPath = path.join(IMAGES_DIR, webpName);
      
      // Only generate if does not exist to optimize speed
      if (!fs.existsSync(webpPath)) {
        await sharp(filePath)
          .resize({ width })
          .webp({ quality: 85 })
          .toFile(webpPath);
        console.log(`   + Created WebP: ${webpName}`);
      } else {
        console.log(`   ~ Cached WebP: ${webpName}`);
      }

      // 2. Generate optimized original format (PNG/JPG) for backward fallbacks
      const outName = `${baseName}-${width}${ext}`;
      const outPath = path.join(IMAGES_DIR, outName);
      
      if (!fs.existsSync(outPath)) {
        const resizer = sharp(filePath).resize({ width });
        if (ext.toLowerCase() === '.png') {
          await resizer.png({ compressionLevel: 9, quality: 85 }).toFile(outPath);
        } else {
          await resizer.jpeg({ quality: 85 }).toFile(outPath);
        }
        console.log(`   + Created Fallback (${ext}): ${outName}`);
      } else {
        console.log(`   ~ Cached Fallback (${ext}): ${outName}`);
      }
    }
  }
  
  console.log('🎉 Responsive image transformation complete!');
}

generateResponsiveImages().catch(err => {
  console.error('❌ Error running image asset pipeline:', err);
  process.exit(1);
});
