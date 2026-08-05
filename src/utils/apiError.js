class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        errors=[],
        stack = "",
        success = false
    ){
        this.statusCode = statusCode,
        this.message = message,
        this.errors = errors,
        this.success = false

        if(stack) this.stack = stack;
        else Error.captureStackTrace(this, this.constructor);
    }
}

export { ApiError }