import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlAdvisors implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure SQL Advisors',
                name: 'N8nDevAzureSqlAdvisors',
                icon: { light: 'file:./azure-sql-advisors.png', dark: 'file:./azure-sql-advisors.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure SQL Database RESTful API manages databases via CRUD operations.',
                defaults: { name: 'Azure SQL Advisors' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureSqlAdvisorsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
