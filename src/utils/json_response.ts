export default function jsonResponse(data: any, message: string = "OK", statusCode: number = 200) {
    return {
        data: data,
        message: message,
        statusCode: statusCode,
    };
}