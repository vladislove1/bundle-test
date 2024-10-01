import { useWallets, usePrivy } from "@privy-io/react-auth";

function Dashboard() {
  const { wallets } = useWallets();
  const { logout } = usePrivy();

  console.log("wallets", wallets);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
