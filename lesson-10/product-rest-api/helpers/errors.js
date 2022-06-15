// Class version
class ValidationError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status
    }
}

// Function version
const createError = (status, message) => {
    const e = new Error();
    e.status = status;
    e.message = message;
    return e;
}


module.exports = {
    ValidationError, createError
}
