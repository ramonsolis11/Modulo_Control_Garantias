const express = require('express');
const connectDB = require('./server/connectDB'); // Importa la función de conexión
const lotRoutes = require('./routes/lots'); // Importa las rutas de lotes
const documentRoutes = require('./routes/documents'); // Importa las rutas de documentos
const jwt = require('jsonwebtoken'); // Importa la biblioteca jwt

const app = express();

// Conecta a la base de datos al inicio de tu aplicación
connectDB();

// Configura tus middleware y rutas aquí
app.use(express.json()); // Para manejar datos en formato JSON

// Middleware para verificar el token
function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Acceso no autorizado' });
    }

    try {
        const decoded = jwt.verify(token, 'Abretumente@2'); // Cambia 'tu_secreto' por una clave segura
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token inválido' });
    }
}

// Configura tus rutas
app.use('/api/lots', lotRoutes);
app.use('/api/documents', documentRoutes);

// Ruta protegida que requiere autenticación
app.get('/api/protected', verifyToken, (req, res) => {
    // Si llega aquí, el token es válido y puedes acceder a la ruta protegida
    res.json({ message: 'Acceso autorizado' });
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});





