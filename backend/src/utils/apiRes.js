class apiRes {
    constructor(
        statusCode,
        data,
        message = "Success"
    ){
        this.statusCode = statusCode,
        this.data = data,
        this.message = message
    }
}
export { apiRes }