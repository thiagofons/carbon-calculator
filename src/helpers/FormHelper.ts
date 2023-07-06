export const isEmailValid = (email: string) => {
  return /\S+@\S+\.\S+/.test(email);
};

export const isPasswordValid = (password: string) => {
  return /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test(password)
}

