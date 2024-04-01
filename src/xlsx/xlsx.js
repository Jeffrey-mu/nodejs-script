import XLSX from 'xlsx';
import path from 'path';

// 读取 Excel 文件
const workbook = XLSX.readFile(path.join('./MCM-技术.xlsx'));

// 用于存储每个申请人的申请数量的对象
const applicantCounts = {};
// Iterate through each sheet
workbook.SheetNames.forEach(sheetName => {
  const worksheet = workbook.Sheets[sheetName];
  // Convert the sheet to JSON data
  const jsonData = XLSX.utils.sheet_to_json(worksheet);
  console.log(jsonData.length)

  // 统计每个申请人的申请数量
  jsonData.forEach(row => {
    const applicant = row['申请人'];
    if (applicant) {
      applicantCounts[applicant] = (applicantCounts[applicant] || 0) + 1;
    }
  });
});

// 打印每个申请人的申请数量
console.log('申请人数量统计:');
Object.entries(applicantCounts).forEach(([applicant, count]) => {
  console.log(`${applicant}: ${count}`);
});
