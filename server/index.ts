import app from './src/api/app';

const PORT = parseInt(process.env.PORT ?? '80');

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


