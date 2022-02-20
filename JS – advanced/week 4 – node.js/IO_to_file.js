const fs = require("fs");
 
// асинхронное чтение из файла
fs.readFile("input.txt", "utf8", 
            function(error, data) { 
                if (error) {
					throw error; // если возникла ошибка
				}
				let arrNums = data.split(/\n| /);
				// синхронная запись в файл
				fs.writeFileSync("output.txt", String(Number(arrNums[0]) + Number(arrNums[1])))
			}
);
 
// // синхронное чтение из файла
// let fileContent = fs.readFileSync("input.txt", "utf8");
// let arrNums = fileContent.split(/\n| /);
// // синхронная запись в файл
// fs.writeFileSync("output.txt", String(Number(arrNums[0]) + Number(arrNums[1])))