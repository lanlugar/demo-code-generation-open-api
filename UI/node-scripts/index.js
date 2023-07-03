const OpenAPI = require('openapi-typescript-codegen');

const config = {
    input: 'http://localhost:8080/v2/api-docs',
    output: './generated',
    client: 'angular'
}
OpenAPI.generate(config);

