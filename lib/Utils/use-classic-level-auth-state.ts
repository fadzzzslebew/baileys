import { AuthenticationState } from '../Types'

/**
 * Menyimpan status autentikasi lengkap di database classic level (LevelDB).
 * ini kemungkinan lebih efisien dan dalam satu database, tidak banyak file yang menumpuk
 *
* Sekali lagi, saya tidak akan merekomendasikan ini untuk penggunaan tingkat produksi apa pun selain mungkin bot.
* Akan merekomendasikan penulisan status autentikasi untuk digunakan dengan basis data SQL atau No-SQL yang tepat
* */
export declare const useClassicLevelAuthState: (db: string) => Promise<{
    state: AuthenticationState
    saveCreds: () => Promise<void>
}>
