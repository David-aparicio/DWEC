export interface ApiInterface {
    id: number;
    name: string;
    description: string;
    price?: number; //Les pongo el ? pq me interesa para luego hacer la card de producto no encontrado
    category?: string;
    image?: string;
    active?: boolean;
}
