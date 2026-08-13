const fs = require('fs');
const path = require('path');
const https = require('https');

const baseDir = path.join(__dirname, '..', 'public', 'images');

const imageMap = {
  mobiles: {
    'screen-protector.jpg': 'https://images.unsplash.com/photo-1607976973585-a6c285b90ef5?auto=format&fit=crop&w=800&q=80',
    'phone-case.jpg': 'https://images.unsplash.com/photo-1620786963525-4a74f1697a46?auto=format&fit=crop&w=800&q=80'
  },
  chargers: {
    'usb-c-cable.jpg': 'https://images.unsplash.com/photo-1595756630452-736bc8ef3693?auto=format&fit=crop&w=800&q=80',
    'usb-charger.jpg': 'https://images.unsplash.com/photo-1727885796960-70a0adfe40ef?auto=format&fit=crop&w=800&q=80'
  },
  accessories: {
    'gaming-earbuds.jpg': 'https://images.unsplash.com/photo-1742570922875-e5a60e950307?auto=format&fit=crop&w=800&q=80',
    'mouse-pad.jpg': 'https://images.unsplash.com/photo-1702561667800-2c49b0182229?auto=format&fit=crop&w=800&q=80',
    'keyboard.jpg': 'https://images.unsplash.com/photo-1549824027-e9c79760c80a?auto=format&fit=crop&w=800&q=80',
    'gaming-mouse.jpg': 'https://images.unsplash.com/photo-1554876194-024e06bbc3cf?auto=format&fit=crop&w=800&q=80',
    'tws-earbuds.jpg': 'https://images.unsplash.com/photo-1754142654807-1dfcdc3f7f22?auto=format&fit=crop&w=800&q=80'
  },
  parts: {
    'flash-drive.jpg': 'https://images.unsplash.com/photo-1587145820098-23e484e69816?auto=format&fit=crop&w=800&q=80',
    'case-fan.jpg': 'https://images.unsplash.com/photo-1760114333171-1fe68b1bfae1?auto=format&fit=crop&w=800&q=80',
    'sata-ssd.jpg': 'https://images.unsplash.com/photo-1575729853562-e3ad7084c28d?auto=format&fit=crop&w=800&q=80',
    'nvme-ssd.jpg': 'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?auto=format&fit=crop&w=800&q=80'
  }
};

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close(() => {});
        fs.unlink(destPath, () => {});
        return downloadImage(response.headers.location, destPath).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        file.close(() => {});
        fs.unlink(destPath, () => {});
        return reject(new Error('HTTP ' + response.statusCode + ' for ' + url));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(destPath));
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const [category, files] of Object.entries(imageMap)) {
    const dir = path.join(baseDir, category);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    console.log(`Downloading budget images for category: ${category}...`);
    for (const [filename, url] of Object.entries(files)) {
      const dest = path.join(dir, filename);
      try {
        await downloadImage(url, dest);
        const size = fs.statSync(dest).size;
        console.log(`✓ Downloaded ${category}/${filename} (${size} bytes)`);
      } catch (err) {
        console.error(`✗ Failed ${category}/${filename}:`, err.message);
      }
    }
  }
  console.log('All budget downloads finished!');
}

main();