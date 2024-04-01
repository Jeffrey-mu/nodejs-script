import sharp from 'sharp';

// 读取原始图像文件
const inputImagePath = '1a0ec9ce9.529cb.png';
const outputImagePath = '1a0ec9ce9.529cb.png';

// 使用 sharp 库将图像转换为 PNG 格式
sharp(inputImagePath)
  .toFile(outputImagePath, (err, info) => {
    if (err) {
      console.error('Error converting image:', err);
    } else {
      console.log('Image converted successfully:', info);
    }
  });
