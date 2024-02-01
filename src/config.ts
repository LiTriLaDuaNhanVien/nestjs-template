import 'dotenv/config';

export default {
	PORT: parseInt(process.env.PORT as string, 10) || 3000,
	SWAGGER_ENDPOINT: process.env.SWAGGER_ENDPOINT || 'docs',
};
