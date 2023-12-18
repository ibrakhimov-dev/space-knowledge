export const baseUrl = "http://127.0.0.1:8000";

// login api url
export const login_api_url = () => `${baseUrl}/api/auth/login`;

// register api url
export const register_api_url = () => `${baseUrl}/api/auth/register`;

// verification api url
export const verification_api_url = () => `${baseUrl}/api/auth/verify-email`;

// forgot password api url
export const forgot_password_api_url = () => `${baseUrl}/api/auth/forgot-password`;

// reset verification api url
export const reset_verify_api_url = () => `${baseUrl}/api/auth/reset-verify-email`

// change password api url
export const change_password_api_url = () => `${baseUrl}/api/auth/reset-password `

// forgot reset code api url
export const forgot_reset_api_url = () => `${baseUrl}/api/auth/verify-reset-code`