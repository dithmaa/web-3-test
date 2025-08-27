import { useState } from "react";
import { useAppKitProvider, useAppKitAccount } from "@reown/appkit/react";
import { BrowserProvider, Contract, Eip1193Provider } from "ethers";
import { Button } from "@/shared/ui";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/";
import { USDTAbi, USDTAddress } from "../../model";

export const GetBalanceButton = () => {
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");

  const [open, setOpen] = useState(false);
  const [intervalDays, setIntervalDays] = useState<string>("-");
  const [startDate, setStartDate] = useState<string>("-");
  const [token, setToken] = useState<string>("-");
  const [loading, setLoading] = useState(false);

  const getBalance = async () => {
    if (!isConnected || !address || !walletProvider) {
      throw Error("User disconnected");
    }

    setLoading(true);
    setOpen(true);

    try {
      const ethersProvider = new BrowserProvider(
        walletProvider as Eip1193Provider
      );
      const signer = await ethersProvider.getSigner();
      const contract = new Contract(String(USDTAddress), USDTAbi, signer);

      const [intervalRaw, startDateRaw, tokenRaw] = await Promise.all([
        contract.interval(),
        contract.startDate(),
        contract.token(),
      ]);

      setIntervalDays((Number(intervalRaw) / (60 * 60 * 24)).toFixed(0));
      setStartDate(new Date(Number(startDateRaw) * 1000).toLocaleString());
      setToken(tokenRaw);
    } catch (err) {
      console.error("Ошибка при вызове функций контракта:", err);
      setIntervalDays("-");
      setStartDate("-");
      setToken("-");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={getBalance}>Get Contract Info</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Информация о контракте</DialogTitle>
          </DialogHeader>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className="space-y-2">
              <li>
                <b>Interval:</b> {intervalDays} дней
              </li>
              <li>
                <b>Start Date:</b> {startDate}
              </li>
              <li>
                <b>Token:</b> {token}
              </li>
            </ul>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
