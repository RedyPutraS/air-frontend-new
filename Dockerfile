# Menggunakan image Node.js sebagai dasar
FROM node:18

# Set direktori kerja di dalam container
WORKDIR /usr/src/app

# Salin file package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin sisa kode aplikasi ke dalam container
COPY . .

# Bangun aplikasi (jika perlu)
RUN npm run build

# Ekspose port yang digunakan aplikasi
EXPOSE 3100

# Perintah untuk menjalankan aplikasi
CMD ["npm", "start", "-p", "3100"]
