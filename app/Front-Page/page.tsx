
const TokenManager = require('../TokenManager');

export default function frontPage() {

    const tokenManager = new TokenManager();
    const Token = tokenManager.getToken();

    return (
        <main>
            <h1>Logged In Home Page</h1>
        </main>
    );
}