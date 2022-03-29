import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { ISomeData } from '../common/interfaces/some-data-interface';
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const responseMessage: ISomeData = {
        data:'New Feature Created',
        number: 10
    };

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;