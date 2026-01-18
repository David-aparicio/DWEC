// ==========================================
// PASO 1: Cambiar URL en login.service.ts
// ==========================================
private baseUrl: string = 'LA_URL_QUE_TE_DEN/api/auth/';

// ==========================================
// PASO 2: Actualizar interface (iuser.ts)
// ==========================================
export interface IuserResponse {
    accessToken: string;
    refreshToken: string;
    role: string;  // ← Importante
    id: number;
    username: string;
    // ... lo que te digan en el examen
}

// ==========================================
// PASO 3: En login.component.ts ELIMINAR:
// ==========================================
// private determinarRol(username: string): string { ... }  ← BORRAR ESTO

// ==========================================
// PASO 4: En login.component.ts CAMBIAR:
// ==========================================
// DE ESTO:
const userRole = this.determinarRol(loginUser.username);
localStorage.setItem("userRole", userRole);

// A ESTO:
localStorage.setItem("userRole", response.role);