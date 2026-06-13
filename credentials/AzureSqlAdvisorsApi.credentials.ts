import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlAdvisorsApi implements ICredentialType {
        name = 'N8nDevAzureSqlAdvisorsApi';

        displayName = 'Azure SQL Advisors API';

        icon: Icon = { light: 'file:../nodes/AzureSqlAdvisors/azure-sql-advisors.png', dark: 'file:../nodes/AzureSqlAdvisors/azure-sql-advisors.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Advisors API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
