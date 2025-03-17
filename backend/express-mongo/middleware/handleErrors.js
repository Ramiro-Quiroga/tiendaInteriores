export const notFoundHandler = (req, res, next) => {
    const error = new Error(`404 ruta no encontrada`);
    res.status(404);
    next(error);
};

export const errorHandler = (err, req, res, next) => {
    // Si la respuesta ya fue enviada, no intentar enviar otra
    if (res.headersSent) {
        return next(err);
    }

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(statusCode).json({
        status: "error",
        msg: err.message,
        stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined
    });
};