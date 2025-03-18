import multer from 'multer';

// Configure Multer to use memory storage
const storage = multer.memoryStorage();

// Initialize Multer
export const upload = multer({ storage });