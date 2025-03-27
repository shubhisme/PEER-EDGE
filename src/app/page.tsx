import { SignInButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <SignInButton mode="redirect" forceRedirectUrl="/Home">
      <button className="btn btn-primary">Sign In</button>
    </SignInButton>
  );
}
