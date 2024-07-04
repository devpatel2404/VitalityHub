class TokenManager {
    private static instance: TokenManager;
    private token: string | null;

    private constructor() {
        if (!TokenManager.instance) {
            this.token = null;
            TokenManager.instance = this;
        }
        return TokenManager.instance;
    }

    static getInstance(): TokenManager {
        if (!TokenManager.instance) {
            TokenManager.instance = new TokenManager();
        }
        return TokenManager.instance;
    }

    setToken(token: string): void {
        this.token = token;
    }

    getToken(): string | null {
        return this.token;
    }

    hasToken(): boolean {
        return !!this.token;
    }

    clearToken(): void {
        this.token = null;
    }

    isTokenExpired(): boolean {
        // Add your token expiration check logic here
        // For simplicity, assuming token never expires
        return false;
    }
}