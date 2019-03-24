const fs = require('fs').promises;
const path = require('path');

const walk = async (dir, filelist = []) => {
	const files = await fs.readdir(dir);

	for (file of files) {
		const filepath = path.join(dir, file);
		const stat = await fs.stat(filepath);

		if (stat.isDirectory()) {
			filelist = await walk(filepath, filelist);
		} else {
			filelist.push(file);
		}
	}

	return filelist;
}
