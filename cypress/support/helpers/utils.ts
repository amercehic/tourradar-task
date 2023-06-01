export function generateEmail(length: number): string {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let email = "";

  // Generate random characters for the email prefix
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    email += characters[randomIndex];
  }

  email += "@tourradar.com";

  return email;
}
