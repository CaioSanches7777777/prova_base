
 
export default function Page() {
  return (
    <form action={authenticate}>
      <input type="username" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}