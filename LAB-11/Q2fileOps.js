// Import fs module
const fs = require('fs');

// Create a new file (writeFile)
fs.writeFile('sample.txt', 'Hello! This is the first line.\n', (err) => {
    if (err) {
        console.error('Error creating file:', err);
        return;
    }
    console.log('File created successfully.');

    //  Append data (appendFile)
    fs.appendFile('sample.txt', 'This is appended content.\n', (err) => {
        if (err) {
            console.error('Error appending file:', err);
            return;
        }
        console.log('Data appended successfully.');

        //  Read file (readFile)
        fs.readFile('sample.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            console.log('\nFile Content:\n', data);

            //  Delete file (unlink)
            fs.unlink('sample.txt', (err) => {
                if (err) {
                    console.error('Error deleting file:', err);
                    return;
                }
                console.log('File deleted successfully.');
            });
        });
    });
});