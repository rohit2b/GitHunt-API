import dotenv from 'dotenv';

dotenv.config({ silent: true });

export const {
  OPTICS_API_KEY,
  OPTICS_ENDPOINT_URL,
} = process.env;
