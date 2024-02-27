
import { signOut , auth} from "@/auth"
const SettingPage = async () => {

  const session = await auth();
  
  return (
    <div>
      <div>{JSON.stringify(session)}</div>
    <form action={async ()=> {
        "use server"
        await signOut();
    }}>
      <button type="submit">
        Sign Out
      </button>
    </form>
    </div>
  )
}

export default SettingPage