import { SiteClient } from 'datocms-client'

export default async function recebedorDeRequests(request, response) {

    if (request.method === 'POST') {
        const TOKEN = '31b38ab2d37c5afcd188c39a24ea68';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "1073527",
            ...request.body,
        })

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado
        })
        return;
    }
}