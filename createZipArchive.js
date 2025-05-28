import fs from 'fs';
import archiver from 'archiver';

const output = fs.createWriteStream('build/build.zip');
const archive = archiver('zip', { zlib: { level: 9 } });

archive.pipe(output);

archive.directory('build/dist', false);

archive.finalize();