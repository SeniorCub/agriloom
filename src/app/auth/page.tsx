'use client';
import Footer from 'src/components/Footer';
import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { ONCHAINKIT_LINK } from 'src/utils/links';
import OnchainkitSvg from 'src/images/svg/OnchainkitSvg';
import { useAccount } from 'wagmi';
import LoginButton from '../../components/LoginButton';
import SignupButton from '../../components/SignupButton';
import Dashboard from '../dashboard/page';

export default function authHome() {
  const { address } = useAccount();
  //  This file contains both the login and signup button
 // TODO:
// 1. When a user signs up, it should navigate to the dashboard
// 2. When a user clicks on signup, it should navigate to a page to collect their details
// 3. After collecting details, it should navigate to Dashboard
// 4. Keep the login logic here since it's straightforward (user clicks and is sent to dashboard)
// 5. Move the SignUp logic to src/app/auth/sign_up
  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
          <a
            href={ONCHAINKIT_LINK}
            title="onchainkit"
            target="_blank"
            rel="noreferrer"
          >
            <OnchainkitSvg />
          </a>
          <div className="flex items-center gap-3">
            <SignupButton />
            {!address && <LoginButton />}
          </div>
        </div>
      </section>
      <section className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-gray-100 px-2 py-4 md:grow">
        <div className="flex h-[450px] w-[450px] max-w-full items-center justify-center rounded-xl bg-[#030712]">
          <div className="rounded-xl bg-[#F3F4F6] px-4 py-[11px]">
            <p className="font-normal text-indigo-600 text-xl not-italic tracking-[-1.2px]">
              npm install @coinbase/onchainkit
            </p>
          </div>
        </div>
        {address ? (
          <TransactionWrapper address={address} />
        ) : (
          <WalletWrapper
            className="w-[450px] max-w-full"
            text="Sign in to transact"
          />
        )}
      </section>
      <Footer />
    </div>
  );
}
