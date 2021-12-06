import { EventAPIGatewayProxyEvent, formatJSONResponse } from "@libs/apiGateway"
import { middyfy } from "@libs/lambda"

const greet: EventAPIGatewayProxyEvent = async () =>
    formatJSONResponse({
        message: `Greetings!`,
    })

export const main = middyfy(greet)