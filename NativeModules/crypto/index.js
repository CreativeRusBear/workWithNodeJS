const crypto = require('crypto');

const key = crypto.scryptSync('Password used to generate key', 'salt', 24);
const iv = Buffer.alloc(16, 0);
const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
const decipher = crypto.createDecipheriv('aes-192-cbc', key, iv);

/**
 *
 * @summary encrypted data
 */
let encrypted = '';
cipher.on('readable', () => {
  while (null !== (chunk = cipher.read())){
    encrypted += chunk.toString('hex');
  }
});

cipher.on('end', () => {
  console.log(encrypted);
});

cipher.write('some text data');
cipher.end();

/**
 *
 * @summary decrypted  data
 */
let decrypted = '';
decipher.on('readable', () => {
  while (null !== (chunk = decipher.read())) {
    decrypted += chunk.toString('utf8');
  }
});
decipher.on('end', () => {
  console.log(decrypted);
});

decipher.write('e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa', 'hex');
decipher.end();
